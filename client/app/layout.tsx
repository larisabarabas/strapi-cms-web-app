import type { Metadata } from "next";
import {getGlobalInfo} from "@/app/api/strapi"

import { Geist, Geist_Mono } from "next/font/google";

import "./globals.css";

import Footer from "@/components/footer";
import Header from "@/components/header"
import PromoBanner from "@/components/promo-banner";

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
  
  return {
    title: siteMetadata?.metaTitle ?? "Default Title",
    description: siteMetadata?.metaDescription ?? "Default Description",
    authors:[
      {
        name: siteMetadata?.metaAuthor ?? '',
        url: siteMetadata?.metaAuthorURL ?? ''
      }
    ]
  }
}

export default function RootLayout({
  children,
}: {
  children: Readonly<React.ReactNode>;
}) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <div className="bg-gray-100 min-h-screen relative">
          <PromoBanner/>
          <Header/>
            {children}
          <Footer/>
        </div>
      </body>
    </html>
  );
}
