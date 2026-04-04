'use client';

import React, { useEffect, useRef } from 'react';

const P = 6; // px per grid cell
const COLS = 20;
const ROWS = 32;

const C = {
  RED:    '#CC0000',
  SKIN:   '#F0C090',
  BROWN:  '#5C3317',
  WHITE:  '#FFFFFF',
  DARK:   '#1A1A1A',
  YELLOW: '#FFD700',
  BLACK:  '#000000',
} as const;

type Ctx = CanvasRenderingContext2D;

function px(ctx: Ctx, col: number, row: number, w = 1, h = 1, color: string) {
  ctx.fillStyle = color;
  ctx.fillRect(col * P, row * P, w * P, h * P);
}

function drawBase(ctx: Ctx) {
  // Hair
  px(ctx, 6, 0, 7, 2, C.BROWN);
  // Head (skin)
  px(ctx, 6, 1, 7, 5, C.SKIN);
  // Eyes
  px(ctx, 7,  3, 1, 1, C.BLACK);
  px(ctx, 11, 3, 1, 1, C.BLACK);
  // Smile
  px(ctx, 8,  5, 1, 1, C.BLACK);
  px(ctx, 10, 5, 1, 1, C.BLACK);

  // Neck
  px(ctx, 9, 6, 2, 1, C.SKIN);
  // White collar
  px(ctx, 8, 6, 4, 1, C.WHITE);
  px(ctx, 9, 7, 2, 1, C.WHITE);

  // Shirt body
  px(ctx, 7, 7, 6, 7, C.RED);
  // Left sleeve
  px(ctx, 5, 7, 2, 3, C.RED);
  // Right sleeve
  px(ctx, 13, 7, 2, 3, C.RED);
  // Adidas stripes on left sleeve (white lines)
  px(ctx, 5, 7,  1, 1, C.WHITE);
  px(ctx, 5, 9,  1, 1, C.WHITE);
  // SHARP block (white)
  px(ctx, 8, 9, 4, 3, C.WHITE);
  // Badge top-right
  px(ctx, 12, 7, 1, 1, C.YELLOW);

  // Left forearm
  px(ctx, 5, 10, 2, 4, C.SKIN);
  // Right forearm
  px(ctx, 13, 10, 2, 4, C.SKIN);

  // Shorts
  px(ctx, 7, 14, 6, 4, C.DARK);

  // Left sock
  px(ctx, 7, 18, 2, 4, C.WHITE);
  px(ctx, 7, 18, 2, 1, C.RED); // band
  // Left boot
  px(ctx, 6, 22, 3, 2, C.RED);
}

function drawFrame1(ctx: Ctx) {
  ctx.clearRect(0, 0, COLS * P, ROWS * P);
  drawBase(ctx);

  // Right sock (standing)
  px(ctx, 11, 18, 2, 4, C.WHITE);
  px(ctx, 11, 18, 2, 1, C.RED);
  // Right boot (standing)
  px(ctx, 11, 22, 3, 2, C.RED);

  // Ball on ground at right boot
  px(ctx, 14, 22, 2, 2, C.WHITE);
  px(ctx, 14, 23, 1, 1, C.BLACK);
  px(ctx, 15, 22, 1, 1, C.BLACK);
}

function drawFrame2(ctx: Ctx) {
  ctx.clearRect(0, 0, COLS * P, ROWS * P);
  drawBase(ctx);

  // Right leg raised: thigh going right from hip
  px(ctx, 11, 14, 1, 2, C.DARK);   // upper thigh still in shorts area
  px(ctx, 12, 15, 2, 2, C.DARK);   // thigh extending right
  px(ctx, 13, 16, 2, 2, C.WHITE);  // shin (sock, white)
  px(ctx, 13, 16, 2, 1, C.RED);    // sock band
  // Boot pointing slightly up-right at end of raised leg
  px(ctx, 14, 14, 2, 2, C.RED);

  // Ball floating above the boot (~4 rows higher)
  px(ctx, 14, 11, 2, 2, C.WHITE);
  px(ctx, 14, 12, 1, 1, C.BLACK);
  px(ctx, 15, 11, 1, 1, C.BLACK);
}

export default function PixelPlayer() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const frame = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    drawFrame1(ctx);

    const interval = setInterval(() => {
      frame.current = frame.current === 0 ? 1 : 0;
      if (frame.current === 0) drawFrame1(ctx);
      else drawFrame2(ctx);
    }, 400);

    return () => clearInterval(interval);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      width={COLS * P}
      height={ROWS * P}
      style={{
        width: COLS * P * 2,
        height: ROWS * P * 2,
        imageRendering: 'pixelated',
      }}
    />
  );
}
