import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Briefcase } from 'lucide-react';
import { siteData } from '@/lib/data';

const { experience: experiences } = siteData;

export default function ExperiencePage() {
  return (
    <div className="w-full max-w-4xl px-4 sm:px-6 lg:px-8">
      <section id="experience" className="py-20 md:py-28">
        <h2 className="text-4xl md:text-5xl font-serif font-bold mb-16 text-foreground tracking-tight">Career Journey</h2>
        <div className="relative">
          <div className="absolute left-3 top-0 h-full w-0.5 bg-border -z-10"></div>
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className="relative pl-10">
                <div className="absolute left-0 top-1">
                  <div className="h-6 w-6 rounded-full bg-secondary flex items-center justify-center ring-8 ring-background">
                    <Briefcase className="h-3 w-3 text-primary" />
                  </div>
                </div>
                <Card className="border-2 border-transparent hover:border-primary/50 transition-colors duration-300">
                    <CardHeader>
                        <CardTitle className="text-2xl font-serif font-bold">{exp.role}</CardTitle>
                        <CardDescription className="font-semibold text-primary">{exp.company} <span className="text-muted-foreground font-normal text-sm">| {exp.period}</span></CardDescription>
                    </CardHeader>
                    {exp.description && exp.description.length > 0 && (
                      <CardContent>
                        <ul className="list-disc list-inside space-y-2 text-sm text-muted-foreground">
                            {exp.description.map((item, i) => <li key={i}>{item}</li>)}
                        </ul>
                      </CardContent>
                    )}
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
