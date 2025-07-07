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
        <link rel="icon" href="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMDAgMTAwIj48cmVjdCB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgcng9IjE1IiBmaWxsPSJoc2woMjQwIDUuOSUgMTAlKSIgLz48dGV4dCB4PSI1MCUiIHk9IjU1JSIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1mYW1pbHk9InNlcmlmIiBmb250LXNpemU9IjYwIiBmb250LXdlaWdodD0iYm9sZCIgZmlsbD0iaHNsKDAgMCUgOTglKSI+U0s8L3RleHQ+PC9zdmc+" type="image/svg+xml" />
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
