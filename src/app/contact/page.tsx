
"use client";

import * as React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Github, Linkedin, Mail, Phone, Calendar as CalendarIcon, Clock } from 'lucide-react';
import { siteData } from "@/lib/data";
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Slider } from '@/components/ui/slider';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Calendar } from '@/components/ui/calendar';
import { format } from 'date-fns';
import { cn } from '@/lib/utils';

export default function ContactPage() {
  const { contact } = siteData;
  const [result, setResult] = React.useState("");
  const [isSuccess, setIsSuccess] = React.useState(false);
  const [date, setDate] = React.useState<Date>();

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setResult("Sending....");
    setIsSuccess(false);

    const formData = new FormData(event.target as HTMLFormElement);
    formData.append("access_key", "318db7ff-a710-47ee-9852-d56ada295461");
    
    if (date) {
        formData.append("availability_date", format(date, "PPP"));
    }

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
        setDate(undefined);
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

        <div className="w-full max-w-3xl mx-auto p-8 border rounded-lg shadow-lg bg-card">
          <form onSubmit={onSubmit} className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="name">Your Full Name</Label>
                <Input id="name" type="text" name="name" placeholder="Your Name" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Your Email Address</Label>
                <Input id="email" type="email" name="email" placeholder="you@example.com" required />
              </div>
            </div>
             <div className="space-y-2">
                <Label htmlFor="organization">Your Organization/Affiliation (if applicable)</Label>
                <Input id="organization" type="text" name="organization" placeholder="Your Company/University" />
              </div>
            
            <div className="space-y-3">
                <Label>Purpose of Inquiry</Label>
                <Select name="purpose_of_inquiry" required>
                    <SelectTrigger>
                        <SelectValue placeholder="Select a purpose..." />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="Research Collaboration">Research Collaboration</SelectItem>
                        <SelectItem value="Professional Consultation">Professional Consultation</SelectItem>
                        <SelectItem value="Speaking Engagement">Speaking Engagement</SelectItem>
                        <SelectItem value="Mentorship">Mentorship</SelectItem>
                        <SelectItem value="General Inquiry">General Inquiry</SelectItem>
                        <SelectItem value="Other">Other</SelectItem>
                    </SelectContent>
                </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="message">Please provide a brief summary of your inquiry (max 200 words).</Label>
              <Textarea id="message" name="message" placeholder="Your message here..." required maxLength={1200} />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-3">
                    <Label>What is your preferred method of initial contact?</Label>
                    <RadioGroup name="preferred_contact_method" defaultValue="Email" className="flex items-center gap-4">
                        <div className="flex items-center space-x-2">
                            <RadioGroupItem value="Email" id="r-email" />
                            <Label htmlFor="r-email">Email</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                            <RadioGroupItem value="Phone Call" id="r-phone" />
                            <Label htmlFor="r-phone">Phone Call</Label>
                        </div>
                    </RadioGroup>
                </div>
                <div className="space-y-3">
                    <Label>What is the urgency of this inquiry?</Label>
                    <div className="flex items-center gap-4">
                        <span className="text-sm text-muted-foreground">Low</span>
                        <Slider name="urgency" defaultValue={[3]} min={1} max={5} step={1} className="flex-1" />
                        <span className="text-sm text-muted-foreground">High</span>
                    </div>
                </div>
            </div>

            <div className="space-y-3">
                <Label>How did you hear about me?</Label>
                <Select name="source" required>
                    <SelectTrigger>
                        <SelectValue placeholder="Select an option..." />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="Personal Website">Personal Website</SelectItem>
                        <SelectItem value="Social Media">Social Media</SelectItem>
                        <SelectItem value="Conference/Event">Conference/Event</SelectItem>
                        <SelectItem value="Referral">Referral</SelectItem>
                        <SelectItem value="Publication/Work">Publication/Work</SelectItem>
                        <SelectItem value="Other">Other</SelectItem>
                    </SelectContent>
                </Select>
            </div>

            <div className="space-y-2">
                <Label>If your inquiry requires a specific date or time, please indicate your availability.</Label>
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                     <Popover>
                        <PopoverTrigger asChild>
                            <Button
                            variant={"outline"}
                            className={cn(
                                "justify-start text-left font-normal",
                                !date && "text-muted-foreground"
                            )}
                            >
                            <CalendarIcon className="mr-2 h-4 w-4" />
                            {date ? format(date, "PPP") : <span>Pick a date</span>}
                            </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0">
                            <Calendar
                            mode="single"
                            selected={date}
                            onSelect={setDate}
                            initialFocus
                            />
                        </PopoverContent>
                    </Popover>
                    <div className="relative">
                        <Clock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                        <Input type="text" name="availability_time" placeholder="e.g., 2:00 PM PST" className="pl-10" />
                    </div>
                 </div>
            </div>


            <div className="flex items-center justify-between pt-4">
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
