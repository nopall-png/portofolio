import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Naufal Rizki - Portfolio",
  description: "Front-End Developer and AI Engineer Portfolio",
};

import Navbar from "@/components/layout/Navbar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} h-full antialiased scroll-smooth`}
    >
      <body className={`${inter.className} min-h-full flex flex-col bg-black text-white`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
