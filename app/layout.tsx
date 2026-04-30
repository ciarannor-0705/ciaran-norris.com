import type { Metadata } from "next";
import { Inter, Libre_Baskerville, Montserrat, Playfair_Display, Poppins } from "next/font/google";
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
      <body className={`${inter.variable} ${libreBaskerville.variable} ${montserrat.variable} ${playfairDisplay.variable} ${poppins.variable} antialiased bg-white`}>
        {children}
      </body>
    </html>
  );
}
