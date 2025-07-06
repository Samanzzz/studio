import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';

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

export function Experience() {
  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto max-w-5xl px-4">
        <h2 className="text-4xl font-bold text-center mb-12 font-headline text-foreground">Experience</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {experiences.map((exp, index) => (
            <Card key={index} className="shadow-lg hover:shadow-primary/20 transition-shadow duration-300 border-transparent hover:border-primary/50 bg-card/50">
                <CardHeader>
                    <CardTitle className="font-headline">{exp.role}</CardTitle>
                    <CardDescription className="font-semibold text-primary">{exp.company} <span className="text-muted-foreground font-normal">| {exp.period}</span></CardDescription>
                </CardHeader>
                <CardContent>
                <ul className="list-disc list-inside space-y-2 text-sm text-foreground/80">
                    {exp.description.map((item, i) => <li key={i}>{item}</li>)}
                </ul>
                </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
