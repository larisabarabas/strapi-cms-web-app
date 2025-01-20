import type { Metadata } from "next";
import {getGlobalInfo} from "@/app/api/strapi"

import { Geist, Geist_Mono } from "next/font/google";

import "../globals.css";

import Footer from "@/components/footer";
import Header from "@/components/header"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export async function generateMetadata():Promise<Metadata>{
  const siteMetadata = await getGlobalInfo()
  console.log("siteMetadata:", siteMetadata)
  return {
    title: siteMetadata.data.metaTitle || "Default Title",
    description: siteMetadata.data.metaDescription || "Default Description",
    authors:[
      {
        name: siteMetadata.data.metaAuthor || '',
        url: siteMetadata.data.metaAuthorURL || ''
      }
    ]
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <div className="bg-gray-100 min-h-screen grid grid-rows-[auto_1fr_auto]">
          <Header/>
          <main className="overflow-hidden">
            {children}
          </main>
          <Footer/>
        </div>
      </body>
    </html>
  );
}
