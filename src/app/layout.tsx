import type {Metadata} from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster"
import { Header } from '@/components/sections/header';
import { Footer } from '@/components/sections/footer';

export const metadata: Metadata = {
  title: 'Saman Khadivar | Builder & Researcher',
  description: 'Personal website for Saman Khadivar, a software engineer and researcher passionate about building great products.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="!scroll-smooth">
      <head>
        <link rel="icon" href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Cstyle%3Etext %7B fill: black; font-size: 14px; font-weight: bold; font-family: Lora, serif; %7D @media (prefers-color-scheme: dark) %7B text %7B fill: white; %7D %7D%3C/style%3E%3Ctext x='50%25' y='50%25' dominant-baseline='central' text-anchor='middle'%3ES%3C/text%3E%3C/svg%3E" type="image/svg+xml" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Lora:wght@400;700&family=Inter:wght@400;700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-sans antialiased">
        <div className="flex flex-col min-h-screen bg-background">
          <Header />
          <main className="flex-1 w-full flex justify-center">
            {children}
          </main>
          <Footer />
        </div>
        <Toaster />
      </body>
    </html>
  );
}
