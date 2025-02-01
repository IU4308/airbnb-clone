import type { Metadata } from "next";
import "./globals.css";
import { inter } from '@/app/ui/fonts';
import Header from "./ui/Header";
import Footer from "./ui/Footer";

export const metadata: Metadata = {
  title: "Rental Listings",
  description: "Full stack project built using Next.js 15, Typescript, Postgresql, Zod, Tailwind CSS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`relative  min-h-screen ${inter.className} antialiased`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
