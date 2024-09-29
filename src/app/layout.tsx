import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/ui/navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "FraudFree: Real-Time E-commerce Store Verification",
  description: "FraudFree is an innovative platform that provides real-time verification of e-commerce stores, helping consumers avoid fraudulent websites by using advanced machine learning and data analysis.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-200 dark:bg-gray-900`}>
        <Navbar />
        <main className="mx-auto max-w-7xl px-6 lg:px-8 py-12">
          {children}
        </main>
      </body>
    </html>
  );
}