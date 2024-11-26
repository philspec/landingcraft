import type { Metadata } from "next";
import type { ReactElement } from 'react';
import { Inter } from 'next/font/google';
import "./globals.css";

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: "LandingCraft | Create Beautiful Landing Pages",
  description: "Create stunning, high-converting landing pages in minutes with LandingCraft's intuitive builder.",
  icons: {
    icon: [
      {
        url: "/logo.svg",
        href: "/logo.svg",
      },
    ],
  },
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps): ReactElement {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
