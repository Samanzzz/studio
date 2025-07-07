'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, PlayCircle, Loader2 } from 'lucide-react';
import { siteData } from '@/lib/data';
import { useToast } from "@/hooks/use-toast";
import { generateAudiobook } from './actions';

const { research: researchItems } = siteData;

type AudioState = {
  loading: boolean;
  url: string | null;
};

export default function ResearchPage() {
  const [audioData, setAudioData] = useState<Record<number, AudioState>>({});
  const { toast } = useToast();

  const handleListen = async (index: number, text: string) => {
    setAudioData(prev => ({ ...prev, [index]: { loading: true, url: null } }));

    const result = await generateAudiobook(text);

    if (result.error || !result.audioUrl) {
      toast({
        variant: "destructive",
        title: "Audio Generation Failed",
        description: result.error || "An unknown error occurred.",
      });
      setAudioData(prev => ({ ...prev, [index]: { loading: false, url: null } }));
    } else {
      setAudioData(prev => ({ ...prev, [index]: { loading: false, url: result.audioUrl } }));
    }
  };

  return (
    <div className="w-full max-w-6xl px-4 sm:px-6 lg:px-8">
      <section id="research" className="py-20 md:py-28">
        <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4 text-foreground tracking-tight">Research & Publications</h2>
        <p className="text-xl text-muted-foreground mb-12 max-w-3xl">
          Exploring the intersection of software engineering, data science, and new technologies to solve complex, real-world problems.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {researchItems.map((item, index) => {
            const currentAudio = audioData[index];
            return (
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
                  <div className="mt-auto">
                    <div className="flex items-center gap-4">
                      <Button variant="ghost" asChild className="w-fit text-primary hover:bg-primary/10 hover:text-primary">
                        <a href={item.link} target="_blank" rel="noopener noreferrer">
                          Read Paper <ExternalLink className="ml-2 h-4 w-4" />
                        </a>
                      </Button>
                      
                      {!currentAudio?.url && (
                        <Button 
                          variant="ghost" 
                          className="w-fit text-primary hover:bg-primary/10 hover:text-primary"
                          onClick={() => handleListen(index, item.description)}
                          disabled={currentAudio?.loading}
                        >
                          {currentAudio?.loading ? (
                            <>
                              Generating... <Loader2 className="ml-2 h-4 w-4 animate-spin" />
                            </>
                          ) : (
                            <>
                              Listen <PlayCircle className="ml-2 h-4 w-4" />
                            </>
                          )}
                        </Button>
                      )}
                    </div>
                    
                    {currentAudio?.url && (
                      <div className="mt-4">
                        <audio controls className="w-full">
                          <source src={currentAudio.url} type="audio/wav" />
                          Your browser does not support the audio element.
                        </audio>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </section>
    </div>
  );
}
