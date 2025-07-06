import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Github, Linkedin, Mail } from 'lucide-react';

export default function Home() {
  return (
    <div className="w-full max-w-7xl px-4 sm:px-6 lg:px-8">
      <section id="home" className="py-20 md:py-32">
        <div className="flex flex-col md:flex-row items-start gap-12 text-left">
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
          <div>
            <h1 className="text-5xl md:text-6xl font-bold font-headline text-foreground tracking-tight">
              Saman Khadivar
            </h1>
            <p className="mt-2 text-xl md:text-2xl text-primary font-light">
              Builder, Engineer, and Researcher
            </p>
            <p className="mt-4 text-lg text-foreground/80 max-w-xl">
              I build robust software solutions and explore new frontiers in technology. With experience at AWS and a passion for entrepreneurship, I turn complex problems into elegant products.
            </p>
            <div className="mt-6 flex justify-start gap-4">
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
    </div>
  );
}
