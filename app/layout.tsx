import type { Metadata } from "next";
import { Gabarito } from "next/font/google";
import "./globals.css";
import Navbar from "../components/navbar/Navbar";

const gabarito = Gabarito({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "JUST4WIBU",
  description: "WIBU ONLY",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={gabarito.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
