import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const skillsData = {
  "Languages": ["Python", "Java", "SQL", "JavaScript", "Swift", "HTML", "CSS"],
  "Frameworks & Libraries": ["React", "Node.js", "Django", "SwiftUI", "PyTorch", "Pandas", "NumPy"],
  "Cloud & DevOps": ["AWS", "Azure", "Docker", "Kubernetes", "Git", "GitHub/GitLab", "CI/CD"],
  "Tools & Platforms": ["Jira", "Confluence", "Tableau", "PowerBI", "PyCharm", "Xcode"],
  "Methodologies": ["Agile", "Scrum", "Problem-solving", "Debugging"]
};

export function Skills() {
  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto max-w-7xl px-4">
        <h2 className="text-4xl font-bold text-center mb-12 font-headline text-primary">Skills</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.entries(skillsData).map(([category, skills]) => (
            <Card key={category}>
              <CardHeader>
                <CardTitle className="font-headline text-lg text-accent">{category}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill) => (
                    <Badge key={skill} variant="default">{skill}</Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
