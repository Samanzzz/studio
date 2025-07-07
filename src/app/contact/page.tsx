import { Github, Linkedin, Mail } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { siteData } from "@/lib/data";

const { contact } = siteData;

export default function ContactPage() {
  return (
    <div className="w-full max-w-4xl px-4 sm:px-6 lg:px-8">
      <section id="contact" className="py-20 md:py-28">
        <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground tracking-tight">Get In Touch</h2>
            <p className="text-xl text-muted-foreground mt-4 max-w-2xl mx-auto">
              I'm always open to discussing new projects, creative ideas, or opportunities. Feel free to reach out directly or use the form below.
            </p>
        </div>

        <div className="max-w-lg mx-auto mb-12">
            <div className="flex flex-wrap justify-center gap-4">
                 <Button asChild>
                    <a href={`mailto:${contact.email}`}>
                        <Mail className="mr-2 h-4 w-4" /> Email Me
                    </a>
                </Button>
                 <Button asChild variant="secondary">
                    <a href={contact.linkedin} target="_blank" rel="noopener noreferrer">
                        <Linkedin className="mr-2 h-4 w-4" /> LinkedIn
                    </a>
                </Button>
                <Button asChild variant="secondary">
                    <a href={contact.github} target="_blank" rel="noopener noreferrer">
                       <Github className="mr-2 h-4 w-4" /> GitHub
                    </a>
                </Button>
            </div>
        </div>

        <div className="w-full mx-auto bg-card border rounded-lg shadow-lg overflow-hidden">
           <iframe 
                src={contact.formUrl} 
                width="100%" 
                height="850" 
                frameBorder="0" 
                marginHeight={0} 
                marginWidth={0}
                className="w-full"
            >
                Loading…
            </iframe>
        </div>
      </section>
    </div>
  );
}
