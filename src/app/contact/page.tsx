
"use client";

import * as React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Github, Linkedin, Mail, Phone } from 'lucide-react';
import { siteData } from "@/lib/data";

export default function ContactPage() {
  const { contact } = siteData;
  const [result, setResult] = React.useState("");
  const [isSuccess, setIsSuccess] = React.useState(false);

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setResult("Sending....");
    setIsSuccess(false);

    const formData = new FormData(event.target as HTMLFormElement);
    formData.append("access_key", "318db7ff-a710-47ee-9852-d56ada295461");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setResult("Form Submitted Successfully");
        setIsSuccess(true);
        (event.target as HTMLFormElement).reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
        setIsSuccess(false);
      }
    } catch (error) {
        console.error("Submission Error", error);
        setResult("An error occurred while submitting the form.");
        setIsSuccess(false);
    }
  };

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

        <div className="w-full max-w-2xl mx-auto p-8 border rounded-lg shadow-lg bg-card">
          <form onSubmit={onSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name</Label>
                <Input id="name" type="text" name="name" placeholder="Your Name" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <Input id="email" type="email" name="email" placeholder="you@example.com" required />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="message">Message</Label>
              <Textarea id="message" name="message" placeholder="Your message here..." required rows={6} />
            </div>
            <div className="flex items-center justify-between">
              <Button type="submit" size="lg">Submit Form</Button>
              {result && (
                <span className={`text-sm font-medium ${isSuccess ? 'text-green-600' : 'text-destructive'}`}>
                  {result}
                </span>
              )}
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}
