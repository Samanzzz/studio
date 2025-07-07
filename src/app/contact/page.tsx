import { Github, Linkedin, Mail, Phone } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { siteData } from "@/lib/data";

const { contact } = siteData;

export default function ContactPage() {
  return (
    <div className="w-full max-w-4xl px-4 sm:px-6 lg:px-8">
      <section id="contact" className="py-20 md:py-28 text-center">
        <h2 className="text-4xl md:text-6xl font-serif font-bold mb-4 text-foreground tracking-tighter">Get In Touch</h2>
        <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
          Have a question or want to work together? Feel free to reach out through the form below or via my social channels.
        </p>

        <div className="flex justify-center flex-wrap gap-4 mb-16">
            <Button asChild>
                <a href={`mailto:${contact.email}`}>
                    <Mail className="mr-2 h-5 w-5" /> Email Me
                </a>
            </Button>
            <Button variant="outline" asChild>
                <a href={contact.linkedin} target="_blank" rel="noopener noreferrer">
                    <Linkedin className="mr-2 h-5 w-5" /> LinkedIn
                </a>
            </Button>
            <Button variant="outline" asChild>
                <a href={contact.github} target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-5 w-5" /> GitHub
                </a>
            </Button>
            <Button variant="outline" asChild>
                <a href={`tel:${contact.phone.replace(/\D/g, '')}`}>
                    <Phone className="mr-2 h-5 w-5" /> Phone
                </a>
            </Button>
        </div>
        
        <div className="w-full mx-auto bg-card rounded-lg shadow-lg border overflow-hidden">
             <iframe 
                src={contact.formUrl} 
                width="100%" 
                height="800" 
                frameBorder="0" 
                marginHeight={0} 
                marginWidth={0}
                className="w-full"
                title="Contact Form"
            >
                Loading…
            </iframe>
        </div>
      </section>
    </div>
  );
}
