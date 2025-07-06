import { Button } from '@/components/ui/button';
import { Github, Linkedin, Mail, Code, Phone } from 'lucide-react';
import { siteData } from '@/lib/data';

const { name, contact } = siteData;

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto max-w-7xl px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <Code className="h-5 w-5" />
            <p className="text-sm">
              &copy; {currentYear} {name}. All Rights Reserved.
            </p>
          </div>
          <div className="flex gap-2">
            <Button variant="ghost" size="icon" asChild>
              <a href={contact.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <a href={contact.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <Github className="h-5 w-5" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <a href={`mailto:${contact.email}`} aria-label="Email">
                <Mail className="h-5 w-5" />
              </a>
            </Button>
             <Button variant="ghost" size="icon" asChild>
              <a href={`tel:${contact.phone.replace(/\D/g, '')}`} aria-label="Phone">
                <Phone className="h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
}
