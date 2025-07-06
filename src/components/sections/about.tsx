import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { GraduationCap } from 'lucide-react';

export function About() {
  return (
    <section id="about" className="py-20 bg-secondary">
      <div className="container mx-auto max-w-4xl px-4">
        <h2 className="text-4xl font-bold text-center mb-12 font-headline text-primary">About Me</h2>
        <div className="grid grid-cols-1 md:grid-cols-1 gap-8">
            <Card className="shadow-lg">
                <CardHeader>
                    <div className="flex items-center gap-4">
                        <div className="bg-primary text-primary-foreground p-3 rounded-full">
                            <GraduationCap className="h-8 w-8" />
                        </div>
                        <div>
                            <CardTitle className="font-headline">Education</CardTitle>
                        </div>
                    </div>
                </CardHeader>
                <CardContent className="space-y-4 text-foreground/90">
                    <div>
                        <h3 className="font-bold text-lg">University of California San Diego (UCSD)</h3>
                        <p className="text-muted-foreground">Bachelor of Science in Computer Science</p>
                    </div>
                    <ul className="list-disc list-inside space-y-1">
                        <li>Honors Scholarship Recipient</li>
                        <li>Project Development Manager at CSES Dev</li>
                        <li>Student Startup Founder</li>
                    </ul>
                    <div>
                        <h4 className="font-semibold mt-4">Relevant Coursework:</h4>
                        <p className="text-sm text-muted-foreground">
                            Advanced Data Structures and Algorithms, Object-Oriented Programming & Software Engineering Principles.
                        </p>
                    </div>
                </CardContent>
            </Card>
            <Card>
                <CardHeader>
                    <CardTitle className="font-headline">Bio</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-foreground/90 text-justify">
                    <p>
                        I am a Software Development Engineer with a deep-seated passion for the entire product journey within large enterprise environments. My academic background in Computer Science from UCSD, combined with extensive internship experience at industry leaders like Amazon Web Services and Scripps, has provided me with a robust skill set in software engineering, cloud computing, and data analytics.
                    </p>
                    <p>
                        As a co-founder of two startups, SullDog Company (acquired) and Cloud Impala, I have honed my leadership and entrepreneurial abilities, managing teams and developing innovative platforms from the ground up. I am driven by complex challenges and thrive in collaborative environments that leverage technology to solve real-world problems. I am currently seeking new opportunities to apply my skills in a challenging Software Development role.
                    </p>
                </CardContent>
            </Card>
        </div>
      </div>
    </section>
  );
}
