import { Button } from '@/components/ui/button';
import { Github, Linkedin, Mail, Phone } from 'lucide-react';
import { siteData } from "@/lib/data";

export default function ContactPage() {
  const { contact } = siteData;
  return (
    <div className="w-full flex-1 flex flex-col items-center">
      <section id="contact" className="w-full max-w-5xl px-4 sm:px-6 lg:px-8 py-20 md:py-28">
        <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-serif font-bold text-foreground tracking-tighter">Let's Connect</h2>
            <p className="text-xl text-muted-foreground mt-4 max-w-3xl mx-auto">
              I'm always open to discussing new projects, creative ideas, or opportunities. Feel free to reach out using my social links or the form below.
            </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4 mb-16">
            <Button size="lg" asChild>
              <a href={`mailto:${contact.email}`}>
                <Mail className="mr-2 h-5 w-5" /> Say Hello
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href={`tel:${contact.phone.replace(/\D/g, '')}`}>
                <Phone className="mr-2 h-5 w-5" /> Call Me
              </a>
            </Button>
            <Button size="icon" variant="outline" asChild>
              <a href={contact.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5" />
              </a>
            </Button>
            <Button size="icon" variant="outline" asChild>
              <a href={contact.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <Github className="h-5 w-5" />
              </a>
            </Button>
        </div>

        <div className="w-full max-w-4xl mx-auto">
            <iframe
                src={contact.formUrl}
                width="100%"
                height="800"
                frameBorder="0"
                marginHeight={0}
                marginWidth={0}
                className="rounded-lg shadow-lg border"
                title="Research/Professional Inquiry Form"
            >
                Loading…
            </iframe>
        </div>
      </section>
    </div>
  );
}