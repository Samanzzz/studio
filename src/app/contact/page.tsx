import { Github, Linkedin, Mail, Phone } from 'lucide-react';
import { siteData } from "@/lib/data";
import { ContactForm } from '@/components/sections/contact-form';
import { Separator } from '@/components/ui/separator';

const { contact } = siteData;

export default function ContactPage() {
  return (
    <div className="w-full max-w-6xl px-4 sm:px-6 lg:px-8">
      <section id="contact" className="py-20 md:py-28">
        <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground tracking-tight">Get In Touch</h2>
            <p className="text-xl text-muted-foreground mt-4 max-w-2xl mx-auto">
              I'm always open to discussing new projects, creative ideas, or opportunities. Feel free to reach out directly or use the form below.
            </p>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-start">
            <div className="space-y-8">
                <div>
                    <h3 className="text-2xl font-serif font-bold text-primary mb-4">Contact Information</h3>
                    <p className="text-muted-foreground">
                        Here's how you can reach me directly. I'm looking forward to hearing from you.
                    </p>
                </div>

                <div className="space-y-4">
                    <a href={`mailto:${contact.email}`} className="flex items-center gap-4 group">
                        <Mail className="h-6 w-6 text-primary" />
                        <div>
                            <p className="font-semibold text-foreground group-hover:text-primary transition-colors">Email</p>
                            <p className="text-muted-foreground">{contact.email}</p>
                        </div>
                    </a>
                    <Separator />
                    <a href={contact.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group">
                        <Linkedin className="h-6 w-6 text-primary" />
                        <div>
                            <p className="font-semibold text-foreground group-hover:text-primary transition-colors">LinkedIn</p>
                            <p className="text-muted-foreground">linkedin.com/in/samankhadivar</p>
                        </div>
                    </a>
                    <Separator />
                     <a href={contact.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group">
                        <Github className="h-6 w-6 text-primary" />
                        <div>
                            <p className="font-semibold text-foreground group-hover:text-primary transition-colors">GitHub</p>
                            <p className="text-muted-foreground">github.com/Samanzzz</p>
                        </div>
                    </a>
                    <Separator />
                     <a href={`tel:${contact.phone.replace(/\D/g, '')}`} className="flex items-center gap-4 group">
                        <Phone className="h-6 w-6 text-primary" />
                        <div>
                            <p className="font-semibold text-foreground group-hover:text-primary transition-colors">Phone</p>
                            <p className="text-muted-foreground">{contact.phone}</p>
                        </div>
                    </a>
                </div>
            </div>
            
            <ContactForm />

        </div>
      </section>
    </div>
  );
}
