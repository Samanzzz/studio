"use client"

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { useToast } from '@/hooks/use-toast';
import { Loader2 } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

// These values are extracted from the Google Form's "pre-filled link" feature
const GOOGLE_FORM_ACTION_URL = "https://docs.google.com/forms/d/e/1FAIpQLSf0UFaTcl3yvXRLYZt-docMZHwGeLsky32vzfBO1pjfSxJUKA/formResponse";
const NAME_ENTRY_ID = "entry.2005620554";
const EMAIL_ENTRY_ID = "entry.1045781291";
const MESSAGE_ENTRY_ID = "entry.839337160";

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    const formData = new FormData();
    formData.append(NAME_ENTRY_ID, values.name);
    formData.append(EMAIL_ENTRY_ID, values.email);
    formData.append(MESSAGE_ENTRY_ID, values.message);

    setIsSubmitting(true);

    try {
      await fetch(GOOGLE_FORM_ACTION_URL, {
        method: 'POST',
        body: formData,
        mode: 'no-cors',
      });
      
      setSubmitted(true);
      form.reset();

    } catch (error) {
      console.error("Form submission error:", error);
      toast({
        variant: "destructive",
        title: "Uh oh! Something went wrong.",
        description: "There was a problem sending your message. Please try again later.",
      });
    } finally {
        setIsSubmitting(false);
    }
  };

  if (submitted) {
    return (
        <div className="text-center p-12 bg-secondary/50 rounded-lg shadow-inner border h-full flex flex-col justify-center items-center">
            <h3 className="text-2xl font-bold text-primary mb-2">Thank You!</h3>
            <p className="text-muted-foreground">Your message has been sent. I'll get back to you soon.</p>
        </div>
    );
  }

  return (
    <Card className="w-full shadow-lg border-0">
      <CardHeader>
        <CardTitle className="text-2xl font-serif">Send a Message</CardTitle>
        <CardDescription>Fill out the form below and I'll get back to you.</CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Full Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Saman Khadivar" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email Address</FormLabel>
                  <FormControl>
                    <Input type="email" placeholder="saman@cyrutech.com" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Message</FormLabel>
                  <FormControl>
                    <Textarea placeholder="Let's build something amazing together..." {...field} rows={5} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" className="w-full" size="lg" disabled={isSubmitting}>
              {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Sending...
                  </>
              ) : (
                'Send Message'
              )}
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
