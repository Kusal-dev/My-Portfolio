import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Wijayawardena D.K.I. | Cyber Security & Systems Developer Portfolio",
  description: "Portfolio of Wijayawardena D.K.I., a Cyber Security Specialist & Systems Developer at SLIIT (Group 01.001). Specialized in low-level Systems (C, pthreads, fork), Software Development, and Network Security.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col"> <Navbar /> {children}</body>
    </html>
  );
}
