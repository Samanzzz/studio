import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Briefcase } from 'lucide-react';
import { siteData } from '@/lib/data';
import Image from 'next/image';

const { experience: experiences } = siteData;

type ExperienceItem = (typeof experiences)[0] & { logo?: string };

export default function ExperiencePage() {
  return (
    <div className="w-full max-w-4xl px-4 sm:px-6 lg:px-8">
      <section id="experience" className="py-20 md:py-28">
        <h2 className="text-4xl md:text-5xl font-serif font-bold mb-16 text-foreground tracking-tight">Career Journey</h2>
        <div className="relative">
          <div className="absolute left-8 top-0 h-full w-0.5 bg-border -z-10 translate-x-[-50%]"></div>
          <div className="space-y-12">
            {(experiences as ExperienceItem[]).map((exp, index) => (
              <div key={index} className="flex items-center gap-8">
                <div className="relative shrink-0">
                  <div className="h-16 w-16 rounded-full bg-white flex items-center justify-center ring-8 ring-background overflow-hidden">
                    {exp.logo ? (
                      <Image
                        src={exp.logo}
                        alt={`${exp.company} logo`}
                        width={64}
                        height={64}
                        className="object-contain h-full w-full"
                      />
                    ) : (
                      <Briefcase className="h-8 w-8 text-primary" />
                    )}
                  </div>
                </div>
                <Card className="flex-grow border-2 border-transparent hover:border-primary/50 transition-colors duration-300">
                    <CardHeader>
                        <CardTitle className="text-2xl font-serif font-bold">{exp.role}</CardTitle>
                        <CardDescription className="font-semibold text-primary">{exp.company} <span className="text-muted-foreground font-normal text-sm">| {exp.period}</span></CardDescription>
                    </CardHeader>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
