import { Badge } from '@/components/ui/badge';

const skillsData = {
  "Languages": ["Python", "Java", "SQL", "JavaScript", "Swift", "HTML", "CSS"],
  "Frameworks & Libraries": ["React", "Node.js", "Django", "SwiftUI", "PyTorch", "Pandas", "NumPy", "Next.js"],
  "Cloud & DevOps": ["AWS", "Azure", "Docker", "Kubernetes", "Git", "GitHub/GitLab", "CI/CD"],
  "Tools & Platforms": ["Jira", "Confluence", "Tableau", "PowerBI", "PyCharm", "Xcode"],
  "Methodologies": ["Agile", "Scrum", "Problem-solving", "Debugging", "Product Management"]
};

export default function SkillsPage() {
  return (
    <div className="w-full max-w-5xl px-4 sm:px-6 lg:px-8">
      <section id="skills" className="py-20 md:py-28">
        <h2 className="text-4xl md:text-5xl font-serif font-bold mb-12 text-foreground tracking-tight">Technical Skills</h2>
        <div className="space-y-10">
          {Object.entries(skillsData).map(([category, skills]) => (
            <div key={category}>
              <h3 className="text-2xl font-serif font-bold mb-6 text-primary">{category}</h3>
              <div className="flex flex-wrap gap-3 justify-start">
                {skills.map((skill) => (
                  <Badge key={skill} variant="secondary" className="text-lg px-5 py-2 font-medium">{skill}</Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
