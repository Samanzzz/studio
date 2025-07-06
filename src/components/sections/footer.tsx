import { Button } from '@/components/ui/button';
import { Github, Linkedin, Mail, Code, Phone } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto max-w-7xl px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <Code className="h-5 w-5" />
            <p className="text-sm">
              &copy; {currentYear} Saman Khadivar. All Rights Reserved.
            </p>
          </div>
          <div className="flex gap-2">
            <Button variant="ghost" size="icon" asChild>
              <a href="https://www.linkedin.com/in/samankhadivar/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <a href="https://github.com/samankhadivar" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <Github className="h-5 w-5" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <a href="mailto:saman@cyrutech.com" aria-label="Email">
                <Mail className="h-5 w-5" />
              </a>
            </Button>
             <Button variant="ghost" size="icon" asChild>
              <a href="tel:8582471788" aria-label="Phone">
                <Phone className="h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
}
