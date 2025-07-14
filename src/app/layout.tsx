import type {Metadata} from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster"
import { Header } from '@/components/sections/header';
import { Footer } from '@/components/sections/footer';

export const metadata: Metadata = {
  title: 'Saman Khadivar | Builder & Researcher',
  description: 'Personal website for Saman Khadivar, a software engineer and researcher passionate about building great products.',
  icons: {
    icon: '/assets/favicon.ico',
    shortcut: '/assets/favicon-16x16.png',
    apple: '/assets/apple-touch-icon.png',
    other: [
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        url: '/assets/favicon-32x32.png',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '16x16',
        url: '/assets/favicon-16x16.png',
      },
      {
        rel: 'android-chrome',
        sizes: '192x192',
        url: '/assets/android-chrome-192x192.png'
      }
    ]
  },
  manifest: '/assets/site.webmanifest',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="!scroll-smooth">
      <head>
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
