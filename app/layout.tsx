import type { Metadata } from "next";
import { Inter, Libre_Baskerville, Montserrat, Playfair_Display, Poppins, PT_Serif, DM_Sans, Source_Serif_4 } from "next/font/google";
import { GeistMono } from "geist/font/mono";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "700", "800"],
});


const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["700"],
});

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair-display",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "700", "800"],
});

const sourceSerif4 = Source_Serif_4({
  variable: "--font-source-serif-4",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const ptSerif = PT_Serif({
  variable: "--font-pt-serif",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const libreBaskerville = Libre_Baskerville({
  variable: "--font-libre-baskerville",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Ciaran Norris",
  description: "Personal website of Ciaran Norris",
  icons: {
    icon: "/ciaran flavicon.jpeg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preload" href="/minion arme.JPG" as="image" />
        <link rel="preload" href="/conference.webp" as="image" />
        <link rel="preload" href="/pitchbattle.webp" as="image" />
        <link rel="preload" href="/fußball goat.mov" as="video" type="video/mp4" />
      </head>
      <body className={`${inter.variable} ${libreBaskerville.variable} ${montserrat.variable} ${playfairDisplay.variable} ${poppins.variable} ${GeistMono.variable} ${ptSerif.variable} ${dmSans.variable} ${sourceSerif4.variable} antialiased bg-white`}>
        {children}
      </body>
    </html>
  );
}
