import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Github, Linkedin, Mail, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="w-full max-w-6xl px-4 sm:px-6 lg:px-8">
      <section id="home" className="py-20 md:py-32">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-5xl md:text-7xl font-serif font-bold text-foreground tracking-tighter">
              Saman Khadivar
            </h1>
            <p className="text-2xl text-primary font-serif font-bold">
              Builder, Engineer, Researcher.
            </p>
            <p className="text-lg text-muted-foreground max-w-xl">
              I build robust, scalable software and explore new frontiers in technology. From enterprise solutions at AWS to founding startups, I turn complex problems into elegant, impactful products.
            </p>
            <div className="flex flex-wrap items-center gap-4">
                <Button size="lg" asChild>
                  <Link href="/projects">
                    View My Work <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <div className="flex items-center gap-2">
                  <Button size="icon" variant="outline" asChild>
                    <a href="https://www.linkedin.com/in/samankhadivar/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                      <Linkedin className="h-5 w-5" />
                    </a>
                  </Button>
                  <Button size="icon" variant="outline" asChild>
                    <a href="https://github.com/samankhadivar" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                      <Github className="h-5 w-5" />
                    </a>
                  </Button>
                   <Button size="icon" variant="outline" asChild>
                      <a href="mailto:s.khadivar.25@gmail.com" aria-label="Email">
                        <Mail className="h-5 w-5" />
                      </a>
                    </Button>
                </div>
            </div>
          </div>
          <div className="relative group hidden md:block">
             <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-purple-600 rounded-full blur-xl opacity-50 group-hover:opacity-75 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
            <Image
              src="https://placehold.co/500x500.png"
              alt="Saman Khadivar"
              data-ai-hint="abstract geometric"
              width={500}
              height={500}
              className="relative rounded-full object-cover shadow-2xl border-4 border-secondary"
              priority
            />
          </div>
        </div>
      </section>
    </div>
  );
}
