import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Github, Linkedin, Mail } from 'lucide-react';

export function Hero() {
  return (
    <section id="home" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto max-w-5xl px-4">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="flex-shrink-0">
            <Image
              src="https://placehold.co/200x200.png"
              alt="Saman Khadivar's headshot"
              data-ai-hint="professional headshot"
              width={200}
              height={200}
              className="rounded-full object-cover shadow-md border-4 border-card"
              priority
            />
          </div>
          <div className="text-center md:text-left">
            <h1 className="text-5xl md:text-6xl font-bold font-headline text-foreground tracking-tight">
              Saman Khadivar
            </h1>
            <p className="mt-2 text-xl md:text-2xl text-primary font-light">
              Builder, Engineer, and Researcher
            </p>
            <p className="mt-4 text-lg text-foreground/80 max-w-xl">
              I build robust software solutions and explore new frontiers in technology. With experience at AWS and a passion for entrepreneurship, I turn complex problems into elegant products.
            </p>
            <div className="mt-6 flex justify-center md:justify-start gap-4">
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
      </div>
    </section>
  );
}
