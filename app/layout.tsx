import type { Metadata } from "next";

import "./globals.css";

import { Inter } from "next/font/google";
import { Toaster } from "sonner";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <Toaster />
        <div>{children}</div>
      </body>
    </html>
  );
}
