
"use client";

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Github, Linkedin, Mail, ArrowRight, MessageSquare } from 'lucide-react';
import Link from 'next/link';
import { siteData } from '@/lib/data';
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

// Helper function to escape regex special characters
const escapeRegExp = (string: string) => {
  return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
};

function AboutContent() {
  const { paragraphs, strongTerms, linkedTerms } = siteData.about as any;

  const renderParagraph = (paragraph: string) => {
    const termsToMatch = [
      ...strongTerms,
      ...(linkedTerms ? Object.keys(linkedTerms) : [])
    ];
    
    if (termsToMatch.length === 0) {
        return paragraph;
    }
    
    const regex = new RegExp(`(${termsToMatch.map(escapeRegExp).join('|')})`, 'g');
    const parts = paragraph.split(regex);
    
    return parts.map((part, index) => {
      if (linkedTerms && part in linkedTerms) {
        return (
          <a
            href={linkedTerms[part as keyof typeof linkedTerms]}
            key={index}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-primary underline hover:no-underline"
          >
            {part}
          </a>
        );
      }
      if (strongTerms.includes(part)) {
        return <strong key={index} className="font-semibold text-primary">{part}</strong>;
      }
      return part;
    });
  };

  return (
    <>
      {paragraphs.map((p: string, i: number) => (
        <p key={i}>{renderParagraph(p)}</p>
      ))}
    </>
  );
}

function Typewriter({ text, speed = 30, className }: { text: string; speed?: number; className?: string }) {
  const [displayedText, setDisplayedText] = useState('');

  useEffect(() => {
    setDisplayedText(''); // Reset on text change
    let i = 0;
    const intervalId = setInterval(() => {
      setDisplayedText((prev) => prev + text.charAt(i));
      i++;
      if (i >= text.length) {
        clearInterval(intervalId);
      }
    }, speed);

    return () => clearInterval(intervalId);
  }, [text, speed]);

  return (
    <p className={cn(className)}>
      {displayedText}
      <span className="animate-pulse">|</span>
    </p>
  );
}

export default function Home() {
  const { home, about, latestPost, contact } = siteData;

  return (
    <div className="w-full max-w-6xl px-4 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <section id="home" className="relative overflow-hidden py-20 md:py-32">
        <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-5xl md:text-7xl font-serif font-bold text-foreground tracking-tighter">
              {home.title}
            </h1>
            <p className="text-2xl text-primary font-serif font-bold">
              {home.subtitle}
            </p>
            <p className="text-lg text-muted-foreground max-w-xl">
              {home.description}
            </p>
            <div className="flex flex-wrap items-center gap-4">
                <Button size="lg" asChild>
                  <Link href="/projects">
                    View My Work <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <div className="flex items-center gap-2">
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
                   <Button size="icon" variant="outline" asChild>
                      <a href={`mailto:${contact.email}`} aria-label="Email">
                        <Mail className="h-5 w-5" />
                      </a>
                    </Button>
                </div>
            </div>
          </div>
          <div className="hidden md:block relative">
            <Image
              src="https://github.com/Samanzzz/studio/blob/master/headshot.jpeg?raw=true"
              alt="Saman Khadivar Headshot"
              width={500}
              height={500}
              className="rounded-full object-cover mx-auto max-w-md"
              priority
            />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 md:py-28 border-t border-border">
        <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-12 text-foreground tracking-tight">About Me</h2>
            <div className="prose prose-lg max-w-none space-y-6 text-foreground/90 leading-relaxed">
              <AboutContent />
            </div>
        </div>
      </section>

      {/* Latest Post Section */}
      <section id="latest-post" className="py-20 md:py-28 border-t border-border">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-12 text-foreground tracking-tight">Latest Post</h2>
            <Card className="bg-secondary/30">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <Linkedin className="h-6 w-6 text-primary"/>
                    <div>
                      <h3 className="font-bold text-foreground">{latestPost.author}</h3>
                      <p className="text-sm text-muted-foreground">Shared a post</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="prose prose-lg max-w-none text-foreground/90 leading-relaxed">
                    <Typewriter text={latestPost.postText} speed={30} />
                    <p className="text-primary font-semibold">
                      {latestPost.hashtags}
                    </p>
                </CardContent>
                <CardFooter>
                    <Button asChild variant="ghost">
                        <a href="https://www.linkedin.com/posts/samankhadivar_im-happy-to-share-that-im-starting-a-new-activity-7240370232945483778-tFKJ?utm_source=share&utm_medium=member_desktop&rcm=ACoAADEEw6oBRqzPpyEccKr70djzQYP-fF74Ajw" target="_blank" rel="noopener noreferrer">
                           <MessageSquare className="mr-2 h-5 w-5"/> View on LinkedIn
                        </a>
                    </Button>
                </CardFooter>
            </Card>
        </div>
      </section>
    </div>
  );
}
