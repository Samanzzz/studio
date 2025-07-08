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
        <link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><rect width='100' height='100' rx='15' fill='hsl(240 5.9% 10%)' /><text x='50%' y='55%' dominant-baseline='middle' text-anchor='middle' font-family='serif' font-size='60' font-weight='bold' fill='hsl(0 0% 98%)'>SK</text></svg>" />
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
