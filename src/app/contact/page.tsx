import { Github, Linkedin, Mail, Phone } from 'lucide-react';
import { siteData } from "@/lib/data";
import { ContactForm } from "@/components/sections/contact-form";

const { contact } = siteData;

export default function ContactPage() {
  return (
    <div className="w-full max-w-6xl px-4 sm:px-6 lg:px-8">
      <section id="contact" className="py-20 md:py-28">
        <div className="text-center">
            <h2 className="text-4xl md:text-6xl font-serif font-bold mb-4 text-foreground tracking-tighter">Let's Connect</h2>
            <p className="text-xl text-muted-foreground mb-16 max-w-2xl mx-auto">
              I'm always open to discussing new projects, creative ideas, or opportunities. Feel free to reach out.
            </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12 md:gap-16 items-start">
          <div className="md:col-span-1 space-y-8">
            <h3 className="text-2xl font-serif font-bold text-center md:text-left">Contact Info</h3>
            <div className="space-y-6">
              <a href={`mailto:${contact.email}`} className="flex items-center gap-4 group">
                <div className="bg-secondary p-3 rounded-full group-hover:bg-primary transition-colors duration-300">
                  <Mail className="h-5 w-5 text-primary group-hover:text-primary-foreground"/>
                </div>
                <div>
                  <p className="font-semibold text-foreground">Email</p>
                  <p className="text-muted-foreground group-hover:text-primary transition-colors duration-300">{contact.email}</p>
                </div>
              </a>
               <a href={`tel:${contact.phone.replace(/\D/g, '')}`} className="flex items-center gap-4 group">
                <div className="bg-secondary p-3 rounded-full group-hover:bg-primary transition-colors duration-300">
                  <Phone className="h-5 w-5 text-primary group-hover:text-primary-foreground"/>
                </div>
                <div>
                  <p className="font-semibold text-foreground">Phone</p>
                  <p className="text-muted-foreground group-hover:text-primary transition-colors duration-300">{contact.phone}</p>
                </div>
              </a>
              <a href={contact.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group">
                <div className="bg-secondary p-3 rounded-full group-hover:bg-primary transition-colors duration-300">
                  <Linkedin className="h-5 w-5 text-primary group-hover:text-primary-foreground"/>
                </div>
                <div>
                  <p className="font-semibold text-foreground">LinkedIn</p>
                  <p className="text-muted-foreground group-hover:text-primary transition-colors duration-300">in/samankhadivar</p>
                </div>
              </a>
               <a href={contact.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group">
                <div className="bg-secondary p-3 rounded-full group-hover:bg-primary transition-colors duration-300">
                  <Github className="h-5 w-5 text-primary group-hover:text-primary-foreground"/>
                </div>
                <div>
                  <p className="font-semibold text-foreground">GitHub</p>
                  <p className="text-muted-foreground group-hover:text-primary transition-colors duration-300">Samanzzz</p>
                </div>
              </a>
            </div>
          </div>

          <div className="md:col-span-2">
            <ContactForm />
          </div>
        </div>

      </section>
    </div>
  );
}
