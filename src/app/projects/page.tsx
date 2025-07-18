import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { siteData } from '@/lib/data';

const { projects } = siteData;

export default function ProjectsPage() {
  return (
    <div className="w-full max-w-6xl px-4 sm:px-6 lg:px-8">
      <section id="projects" className="py-20 md:py-28">
        <h2 className="text-4xl md:text-5xl font-serif font-bold mb-12 text-foreground tracking-tight">Side Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="flex flex-col bg-secondary/50 hover:bg-secondary/80 transition-all duration-300 transform hover:-translate-y-1">
              <CardHeader>
                <CardTitle className="text-xl font-serif font-bold text-primary">{project.title}</CardTitle>
                <CardDescription className="text-muted-foreground">{project.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, i) => <Badge key={i} variant="outline" className="text-primary border-primary/50">{tag}</Badge>)}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
