import type { Metadata } from "next";
import { JetBrains_Mono, Space_Grotesk } from "next/font/google";
import "./globals.css";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});

export const metadata: Metadata = {
  title: "Jawad Ahmad ",
  description: "Frontend Web Developer and UI Designer",
};



export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className={`
          ${jetbrainsMono.variable} ${spaceGrotesk.variable}
          antialiased bg-background text-on-surface font-body-md
          overflow-x-hidden circuit-bg
        `}
      >
        <div className="scanlines" aria-hidden="true" />

       

        {children}
      </body>
    </html>
  );
}