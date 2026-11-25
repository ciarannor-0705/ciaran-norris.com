import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import Markdown from "react-markdown";
import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import { POSTS, type Block } from "@/data/posts";

const BLUR_FADE_DELAY = 0.04;

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return POSTS.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = POSTS.find((p) => p.slug === slug);
  if (!post) return {};
  return { title: post.title, description: post.tldr };
}

function Inline({ children }: { children: string }) {
  return (
    <Markdown
      components={{
        p: ({ children }) => <>{children}</>,
        strong: ({ children }) => (
          <strong className="font-semibold text-foreground">{children}</strong>
        ),
        a: ({ href, children }) => (
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="font-normal text-foreground underline underline-offset-4"
          >
            {children}
          </a>
        ),
      }}
    >
      {children}
    </Markdown>
  );
}

function Blocks({ blocks }: { blocks: Block[] }) {
  return (
    <>
      {blocks.map((block, i) => {
        if (block.type === "ol") {
          return (
            <ol
              key={i}
              className="flex list-decimal flex-col gap-5 pl-5 marker:text-muted-foreground"
            >
              {block.items.map((item, j) => (
                <li key={j} className="pl-1 leading-relaxed">
                  <Inline>{item.text}</Inline>
                  {item.notes?.map((note, k) => (
                    <p key={k} className="mt-3">
                      <Inline>{note}</Inline>
                    </p>
                  ))}
                </li>
              ))}
            </ol>
          );
        }
        return (
          <p key={i} className="leading-relaxed">
            <Inline>{block.text}</Inline>
          </p>
        );
      })}
    </>
  );
}

export default async function BlogPost({ params }: Props) {
  const { slug } = await params;
  const post = POSTS.find((p) => p.slug === slug);
  if (!post) notFound();

  return (
    <main className="relative flex min-h-dvh flex-col gap-14">
      <section id="hero">
        <div className="mx-auto w-full max-w-2xl space-y-8">
          <BlurFade delay={BLUR_FADE_DELAY}>
            <Link
              href="/#blog"
              className="group inline-flex w-fit items-center gap-1.5 rounded-sm text-sm text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-4"
            >
              <ArrowLeft className="size-4 transition-transform duration-200 group-hover:-translate-x-0.5" />
              Back
            </Link>
          </BlurFade>
          <div className="flex flex-col gap-2">
            <BlurFadeText
              delay={BLUR_FADE_DELAY}
              className="text-3xl font-semibold tracking-tighter sm:text-4xl lg:text-5xl"
              yOffset={8}
              text={post.title}
            />
            <BlurFadeText
              className="max-w-[600px] text-muted-foreground md:text-lg lg:text-xl"
              delay={BLUR_FADE_DELAY * 2}
              text={post.tldr}
            />
          </div>
        </div>
      </section>

      <div className="-my-6 h-px w-full bg-border" aria-hidden />

      {post.sections.map((section, index) => (
        <section key={index}>
          <div className="flex min-h-0 flex-col gap-y-4">
            {section.heading ? (
              <BlurFade delay={BLUR_FADE_DELAY * 3}>
                <h2 className="text-xl font-bold">{section.heading}</h2>
              </BlurFade>
            ) : null}
            <BlurFade delay={BLUR_FADE_DELAY * 4}>
              <div className="flex flex-col gap-4 text-pretty font-sans text-muted-foreground">
                <Blocks blocks={section.blocks} />
              </div>
            </BlurFade>
          </div>
        </section>
      ))}
    </main>
  );
}
