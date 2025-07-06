import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Briefcase } from 'lucide-react';

const experiences = [
    {
        role: "Software Dev Engineer",
        company: "Amazon Web Services",
        period: "October 2024 – Present",
        description: [
            "Designed and built a full service for auditing storage units’ health using ECS (Fargate) and Lambda.",
            "Led a large-scale new type region build for 6 teams across the S3 Control Plane Organization.",
            "Implemented automation of Dynamic Configurations for 2 services using AppConfig, saving 200+ developer hours annually.",
            "Improved an existing service using multithreading and async processing.",
        ]
    },
    {
        role: "Product Software Engineer Intern",
        company: "Scripps",
        period: "Spring 2023 – Spring 2024",
        description: [
            "Developed and shipped multiple web app solutions from conception to launch.",
            "Engineered ETL data pipelines using Python, and SQL.",
            "Presented data visualizations to stakeholders using Tableau, Power BI, and Python libraries.",
            "Utilized PyTorch for heat stream prediction in ocean regions to assist data collection.",
        ]
    },
    {
        role: "Software Engineer Intern",
        company: "UCSD Health",
        period: "September 2022 – June 2023",
        description: [
            "Designed and programmed data-analyzing solutions with Pandas, PyTorch, NumPy for biomedical datasets.",
            "Curated and preprocessed high-resolution genetic imaging datasets using PyTorch.",
            "Educated stakeholders on compliance and set up automated script testing.",
        ]
    },
     {
        role: "Software Engineer Intern",
        company: "San Diego Supercomputer Centre",
        period: "June 2022 – September 2022",
        description: [
            "Developed a web app for media recommendations with Django, React, and Node.js.",
            "Created the same app natively using Swift & SwiftUI.",
            "Built back-end services and APIs for user data and recommendations.",
        ]
    },
     {
        role: "Co-Founder",
        company: "SullDog Company",
        period: "Acquired",
        description: [
            "Developed a multifunctional Data Management System using Java, Docker, and Kubernetes.",
            "Managed vast laboratory data sets, improving research and operational efficiency.",
            "Led a team of 15 developers and 5 project managers.",
        ]
    },
    {
        role: "Co-Founder",
        company: "Cloud Impala",
        period: "Startup",
        description: [
            "Developed a comprehensive Agricultural Data Optimization Platform.",
            "Leveraged Python for backend analytics and React for the front-end.",
        ]
    }
];

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
                    <CardContent>
                    <ul className="list-disc list-inside space-y-2 text-sm text-muted-foreground">
                        {exp.description.map((item, i) => <li key={i}>{item}</li>)}
                    </ul>
                    </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
