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
        period: "",
        description: [
            "Developed a comprehensive Agricultural Data Optimization Platform.",
            "Leveraged Python for backend analytics and React for the front-end.",
        ]
    }
];

export function Experience() {
  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto max-w-4xl px-4">
        <h2 className="text-4xl font-bold text-center mb-12 font-headline text-primary">Experience</h2>
        <div className="relative">
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-border -translate-x-1/2 hidden md:block" aria-hidden="true"></div>
          {experiences.map((exp, index) => (
            <div key={index} className="mb-8 flex justify-between items-center w-full flex-row-reverse md:flex-row">
              <div className="order-1 md:w-5/12"></div>
              <div className="z-20 flex items-center order-1 bg-accent shadow-xl w-12 h-12 rounded-full">
                <Briefcase className="mx-auto text-primary h-6 w-6" />
              </div>
              <div className="order-1 md:w-5/12">
                <Card className="shadow-md hover:shadow-xl transition-shadow duration-300">
                  <CardHeader>
                    <CardTitle className="font-headline">{exp.role}</CardTitle>
                    <CardDescription className="font-semibold text-accent">{exp.company} <span className="text-muted-foreground font-normal">| {exp.period}</span></CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="list-disc list-inside space-y-2 text-sm text-foreground/80">
                      {exp.description.map((item, i) => <li key={i}>{item}</li>)}
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
