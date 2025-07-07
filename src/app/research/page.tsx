"use client";

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { ExternalLink, PlayCircle, BookOpen } from 'lucide-react';
import { siteData } from '@/lib/data';

const { research: researchItems } = siteData;

type ResearchItem = typeof researchItems[0];

export default function ResearchPage() {
  const [selectedPaper, setSelectedPaper] = useState<ResearchItem | null>(null);

  const handleOpenPaper = (paper: ResearchItem) => {
    if (paper.link.startsWith('/')) {
      setSelectedPaper(paper);
    }
  };

  const handleClose = () => {
    setSelectedPaper(null);
  };

  return (
    <div className="w-full max-w-6xl px-4 sm:px-6 lg:px-8">
      <section id="research" className="py-20 md:py-28">
        <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4 text-foreground tracking-tight">Research & Publications</h2>
        <p className="text-xl text-muted-foreground mb-12 max-w-3xl">
          Exploring the intersection of software engineering, data science, and new technologies to solve complex, real-world problems.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {researchItems.map((item, index) => (
            <Card key={index} className="flex flex-col bg-secondary/50 hover:bg-secondary/80 transition-all duration-300 transform hover:-translate-y-1">
              <CardHeader>
                <CardTitle className="text-xl font-serif font-bold text-primary">{item.title}</CardTitle>
                <CardDescription className="text-muted-foreground">{item.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow flex flex-col justify-between">
                <div>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {item.tags.map((tag, i) => <Badge key={i} variant="outline" className="text-primary border-primary/50">{tag}</Badge>)}
                  </div>
                </div>
                <div className="mt-auto flex items-center gap-4">
                  {item.link && item.link !== '#' && (
                    item.link.startsWith('/') ? (
                      <Button
                        variant="ghost"
                        className="w-fit text-primary hover:bg-primary/10 hover:text-primary"
                        onClick={() => handleOpenPaper(item)}
                      >
                        Read Paper <BookOpen className="ml-2 h-4 w-4" />
                      </Button>
                    ) : (
                      <Button variant="ghost" asChild className="w-fit text-primary hover:bg-primary/10 hover:text-primary">
                        <a href={item.link} target="_blank" rel="noopener noreferrer">
                            Read Paper <ExternalLink className="ml-2 h-4 w-4" />
                        </a>
                      </Button>
                    )
                  )}
                  {item.audioLink && item.audioLink !== '#' && (
                    <Button variant="ghost" asChild className="w-fit text-primary hover:bg-primary/10 hover:text-primary">
                        <a href={item.audioLink} target="_blank" rel="noopener noreferrer">
                            Listen <PlayCircle className="ml-2 h-4 w-4" />
                        </a>
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <Dialog open={!!selectedPaper} onOpenChange={(isOpen) => !isOpen && handleClose()}>
        <DialogContent className="max-w-5xl w-full h-[90vh] p-0 flex flex-col">
          {selectedPaper && (
            <>
              <DialogHeader className="p-6 pb-2 shrink-0">
                <DialogTitle>{selectedPaper.title}</DialogTitle>
              </DialogHeader>
              <div className="px-6 pb-6 flex-grow">
                <iframe 
                  src={selectedPaper.link}
                  className="w-full h-full rounded-md border"
                  title={selectedPaper.title}
                />
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
