import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail } from 'lucide-react';

export function Contact() {
  return (
    <section id="contact" className="py-20 md:py-32">
      <div className="container mx-auto max-w-4xl px-4 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 font-headline text-foreground">Let's Build Something Together</h2>
        <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          I'm always open to discussing new projects, creative ideas, or opportunities to be part of an amazing team. Feel free to get in touch.
        </p>
        <div className="flex justify-center gap-4">
            <Button size="lg" asChild>
              <a href="mailto:s.khadivar.25@gmail.com">
                <Mail className="mr-2 h-5 w-5" /> Say Hello
              </a>
            </Button>
            <Button size="lg" variant="secondary" asChild>
              <a href="https://www.linkedin.com/in/samankhadivar/" target="_blank" rel="noopener noreferrer">
                <Linkedin className="mr-2 h-5 w-5" /> LinkedIn
              </a>
            </Button>
            <Button size="lg" variant="secondary" asChild>
              <a href="https://github.com/samankhadivar" target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-5 w-5" /> GitHub
              </a>
            </Button>
        </div>
      </div>
    </section>
  );
}
