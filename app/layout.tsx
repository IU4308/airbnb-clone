import type { Metadata } from "next";
import "./globals.css";
import { inter } from '@/app/ui/fonts';
import Header from "./ui/Header";
import Footer from "./ui/Footer";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`relative  min-h-screen ${inter.className} antialiased`}>
        {/* <div className="flex justify-center">
        </div> */}
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
