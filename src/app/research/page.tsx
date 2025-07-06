import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink } from 'lucide-react';
import { siteData } from '@/lib/data';

const { research: researchItems } = siteData;

export default function ResearchPage() {
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
                <div className="flex flex-wrap gap-2 mb-6">
                  {item.tags.map((tag, i) => <Badge key={i} variant="outline" className="text-primary border-primary/50">{tag}</Badge>)}
                </div>
                <Button variant="ghost" asChild className="mt-auto w-fit text-primary hover:bg-primary/10 hover:text-primary">
                  <a href={item.link} target="_blank" rel="noopener noreferrer">
                    Read Paper <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
