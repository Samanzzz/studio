import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink } from 'lucide-react';

const projects = [
  {
    title: "Panora",
    description: "Leveraging large language models (LLMs) to read, analyze, and categorize user feedback, providing actionable insights for product improvement.",
    tags: ["LLM", "AI", "Feedback Analysis", "Python", "Genkit"],
    link: "#"
  },
  {
    title: "Idlelib Beta version",
    description: "An enhanced and more feature-rich version of the standard IDLElib Integrated Development Environment for Python.",
    tags: ["Python", "IDE", "Developer Tools"],
    link: "#"
  },
  {
    title: "Agricultural Data Optimization Platform",
    description: "A comprehensive platform developed at Cloud Impala that leverages Python for backend analytics and React for a user-friendly frontend to optimize agricultural data.",
    tags: ["Python", "React", "Data Analytics", "Platform"],
    link: "#"
  },
  {
    title: "Data Management System",
    description: "A multifunctional system for SullDog Company using Java, Docker, and Kubernetes to manage vast laboratory data sets, improving research efficiency.",
    tags: ["Java", "Docker", "Kubernetes", "Data Management"],
    link: "#"
  }
];

export function Projects() {
  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto max-w-7xl px-4">
        <h2 className="text-4xl font-bold text-center mb-12 font-headline text-foreground">Side Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="flex flex-col border bg-card hover:bg-secondary/50 transition-colors duration-300">
              <CardHeader>
                <CardTitle className="font-headline text-primary">{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow flex flex-col justify-between">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, i) => <Badge key={i} variant="secondary">{tag}</Badge>)}
                </div>
                <Button variant="outline" asChild className="mt-auto w-fit">
                  <a href={project.link} target="_blank" rel="noopener noreferrer">
                    View Project <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
