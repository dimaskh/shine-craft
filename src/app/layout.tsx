import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Shine Craft | Premium Auto Detailing",
  description:
    "Experience the art of automotive perfection with Shine Craft. Where precision meets passion in car detailing.",
  keywords:
    "car detailing, auto detailing, ceramic coating, paint protection, Shine Craft, luxury car care",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
