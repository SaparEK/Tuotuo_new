import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import SupportChat from "@/components/SupportChat";
import ChatLoader from "@/components/ChatLoader";
 

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: "TTKZ | tuotuokz",
  description:
    "Надёжные логистические решения: авто перевозки, растаможка и фулфилмент.",
  icons: {
    icon: "/logo/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={`${inter.variable} antialiased`}>
        <ChatLoader />
        {children}
        <Footer />
        <SupportChat />
      </body>
    </html>
  );
}
