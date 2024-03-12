import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar.component";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Art Music App",
  description: "Art Music App developed for music lover by Rahul Dey",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
