import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Github, Linkedin, Mail } from 'lucide-react';

export function Hero() {
  return (
    <section id="home" className="py-20 md:py-32">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          <div className="md:col-span-2 space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold font-headline text-primary tracking-tight">
              Saman Khadivar
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground font-light">
              Software Development Engineer & Academic Researcher
            </p>
            <p className="max-w-2xl text-foreground/80">
              Passionate about the product journey in large enterprises, with a strong foundation in computer science and hands-on experience in cloud technologies, data analytics, and full-stack development.
            </p>
            <div className="flex gap-4">
              <Button asChild>
                <a href="https://www.linkedin.com/in/samankhadivar/" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="mr-2 h-4 w-4" /> LinkedIn
                </a>
              </Button>
              <Button variant="secondary" asChild>
                <a href="https://github.com/samankhadivar" target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 h-4 w-4" /> GitHub
                </a>
              </Button>
              <Button variant="ghost" asChild>
                <a href="mailto:s.khadivar.25@gmail.com">
                  <Mail className="mr-2 h-4 w-4" /> Email
                </a>
              </Button>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="relative h-64 w-64 md:h-80 md:w-80">
               <Image
                src="https://placehold.co/400x400.png"
                alt="Saman Khadivar's headshot"
                data-ai-hint="professional headshot"
                width={400}
                height={400}
                className="rounded-full object-cover shadow-lg border-4 border-card"
                priority
              />
              <div className="absolute inset-0 rounded-full border-4 border-accent/20 animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
