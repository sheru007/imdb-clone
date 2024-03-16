import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import Header from '@/components/Header'
import Providers from "./Providers";
import Navbar from "@/components/Navbar";
import Searchbox from "@/components/Searchbox";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "IMDB Clone by SK",
  description: "This is movie database",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
        <Header />
        <Navbar />
        <Searchbox />
        {children}
        </Providers>
      </body>
    </html>
  );
}
