import { Github, Linkedin, Mail, Phone } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { siteData } from "@/lib/data";
import { ContactForm } from '@/components/sections/contact-form';

const { contact } = siteData;

export default function ContactPage() {
  return (
    <div className="w-full max-w-6xl px-4 sm:px-6 lg:px-8">
      <section id="contact" className="py-20 md:py-28">
        <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground tracking-tight">Get In Touch</h2>
            <p className="text-xl text-muted-foreground mt-4 max-w-2xl mx-auto">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of an amazing team.
            </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="space-y-8">
                <div>
                    <h3 className="text-2xl font-serif font-bold mb-4 text-primary">Contact Information</h3>
                    <p className="text-muted-foreground mb-6">
                        Fill up the form and I will get back to you within 24 hours.
                    </p>
                    <div className="space-y-4 text-foreground">
                       <a href={`tel:${contact.phone.replace(/\D/g, '')}`} className="flex items-center gap-4 group">
                           <Phone className="h-5 w-5 text-primary group-hover:scale-110 transition-transform" />
                           <span className="group-hover:text-primary transition-colors">{contact.phone}</span>
                       </a>
                        <a href={`mailto:${contact.email}`} className="flex items-center gap-4 group">
                           <Mail className="h-5 w-5 text-primary group-hover:scale-110 transition-transform" />
                           <span className="group-hover:text-primary transition-colors">{contact.email}</span>
                       </a>
                    </div>
                </div>

                <div>
                    <h3 className="text-2xl font-serif font-bold mb-4 text-primary">Follow Me</h3>
                    <div className="flex gap-4">
                        <Button variant="outline" size="icon" asChild>
                            <a href={contact.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                                <Linkedin className="h-5 w-5" />
                            </a>
                        </Button>
                        <Button variant="outline" size="icon" asChild>
                            <a href={contact.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                                <Github className="h-5 w-5" />
                            </a>
                        </Button>
                    </div>
                </div>
            </div>
            
            <ContactForm />

        </div>
      </section>
    </div>
  );
}
