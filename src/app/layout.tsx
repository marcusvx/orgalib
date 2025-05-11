import type { Metadata } from "next";
import { ReactNode } from "react";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Orgalib",
  description: "The book organization app",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={inter.className}>
      <body>{children}</body>
    </html>
  );
}
