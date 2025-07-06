import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail } from 'lucide-react';

export default function ContactPage() {
  return (
    <div className="w-full max-w-4xl px-4 sm:px-6 lg:px-8">
      <section id="contact" className="py-20 md:py-32 text-center">
        <h2 className="text-4xl md:text-6xl font-serif font-bold mb-4 text-foreground tracking-tighter">Let's Connect</h2>
        <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          I'm always open to discussing new projects, creative ideas, or opportunities. Feel free to reach out.
        </p>
        <div className="flex justify-center gap-4">
            <Button size="lg" asChild>
              <a href="mailto:s.khadivar.25@gmail.com">
                <Mail className="mr-2 h-5 w-5" /> Say Hello
              </a>
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
            </div>
        </div>
      </section>
    </div>
  );
}
