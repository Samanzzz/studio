import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Github, Linkedin, Mail } from 'lucide-react';

export function Hero() {
  return (
    <section id="home" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto max-w-7xl px-4 text-center">
        <div className="flex flex-col items-center space-y-8">
          <div className="relative h-48 w-48 md:h-64 md:w-64">
            <Image
              src="https://placehold.co/400x400.png"
              alt="Saman Khadivar's headshot"
              data-ai-hint="professional headshot"
              width={400}
              height={400}
              className="rounded-full object-cover shadow-lg border-4 border-card"
              priority
            />
            <div className="absolute inset-0 rounded-full border-4 border-primary/50 animate-pulse"></div>
          </div>
          <div className="max-w-3xl space-y-4">
            <h1 className="text-5xl md:text-7xl font-black font-headline text-foreground tracking-tighter">
              Saman Khadivar
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground font-light">
              Builder, Engineer, and Researcher
            </p>
            <p className="text-foreground/80">
              I build robust software solutions and explore new frontiers in technology. With experience at AWS and a passion for entrepreneurship, I turn complex problems into elegant products.
            </p>
          </div>
          <div className="flex gap-4">
            <Button size="lg" asChild>
              <a href="https://www.linkedin.com/in/samankhadivar/" target="_blank" rel="noopener noreferrer">
                <Linkedin className="mr-2 h-5 w-5" /> LinkedIn
              </a>
            </Button>
            <Button size="lg" variant="secondary" asChild>
              <a href="https://github.com/samankhadivar" target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-5 w-5" /> GitHub
              </a>
            </Button>
             <Button size="lg" variant="ghost" asChild>
                <a href="mailto:s.khadivar.25@gmail.com">
                  <Mail className="mr-2 h-5 w-5" /> Email
                </a>
              </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
