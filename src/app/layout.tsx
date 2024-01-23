import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import React from "react";
import { Navbar } from "@/components";

const muli = localFont({
  src: "../fonts/Muli-Regular.ttf",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Kev's The Dev Portfolio",
  description: "KevTheDev's web portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={muli.className}>
        <div className="m-6 bg-main px-14">
          <Navbar />
          <div>{children}</div>
        </div>
      </body>
    </html>
  );
}
