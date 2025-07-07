
export const siteData = {
    name: "Saman Khadivar",
    home: {
        title: "Saman Khadivar",
        subtitle: "Builder, Engineer, Researcher.",
        description: "I build robust, scalable software and explore new frontiers in technology. From enterprise solutions at AWS to founding startups, I turn complex problems into elegant, impactful products.",
    },
    about: {
        paragraphs: [
            "I'm a Software Development Engineer with a deep passion for the entire product lifecycle, from initial concept to scalable enterprise deployment. My journey in tech is driven by a desire to solve complex problems and build things that last.",
            "My academic foundation is a Bachelor of Science in Computer Science from the University of California San Diego (UCSD), where I was an honors scholarship recipient and took on leadership roles like Project Development Manager at CSES Dev. This experience instilled in me the core principles of advanced data structures, algorithms, and software engineering.",
            "Beyond academia, I've had the privilege of contributing to industry leaders like Amazon Web Services and Scripps. These roles gave me hands-on experience in cloud computing, ETL data pipelines, and data analytics, allowing me to build and automate systems that save hundreds of developer hours and power critical business functions.",
            "As a co-founder of two startups, SullDog Company (acquired) and Cloud Impala, I've learned to navigate the challenges of building a business from the ground up, leading teams, and delivering innovative platforms. I thrive in collaborative environments and I'm always looking for the next big challenge to tackle in a Software Development role."
        ],
        strongTerms: ["University of California San Diego (UCSD)", "Amazon Web Services", "Scripps"] 
    },
    latestPost: {
        author: "Saman Khadivar",
        platform: "LinkedIn",
        postText: "Proud of the work we did at Cloud Impala on our Agricultural Data Optimization Platform. We built a system that uses Python for complex backend analytics and a clean React frontend to help farmers make better, data-driven decisions. It's rewarding to build tech that has a real-world impact.",
        hashtags: "#AgriTech #DataAnalytics #React #Python #SaaS",
    },
    experience: [
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
    ],
    projects: [
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
    ],
    research: [
        {
          title: "Heat Stream Prediction for Ocean Data Collection",
          description: "Utilized PyTorch for developing a predictive model for heat stream patterns in various ocean regions, aiming to assist in more accurate data collection for climate science.",
          tags: ["PyTorch", "Data Science", "Oceanography", "Machine Learning"],
          link: "https://github.com/Samanzzz/studio/blob/master/Assets/Advancing%20Climate%20Science%20through%20Machine%20Learning-Driven%20Prediction%20of%20Ocean%20Heat%20Streams.pdf",
          audioLink: "https://notebooklm.google.com/notebook/de8907f0-41fd-4b6b-9fde-b6021ef47e9f/audio"
        },
        {
          title: "Analysis of High-Resolution Genetic Imaging Datasets",
          description: "Designed and programmed data-analyzing solutions using Pandas, PyTorch, and NumPy to process and interpret large-scale biomedical datasets from high-resolution genetic imaging.",
          tags: ["Biomedical Imaging", "Data Analysis", "Python", "PyTorch"],
          link: "#",
          audioLink: "#"
        },
        {
          title: "Efficient Data Management in Scalable Laboratory Systems",
          description: "Led the development of a multifunctional Data Management System using Java, Docker, and Kubernetes. The research focused on architectural patterns for managing vast laboratory data sets to improve research and operational efficiency.",
          tags: ["Data Systems", "Kubernetes", "Scalability", "Java"],
          link: "#",
          audioLink: "#"
        }
    ],
    contact: {
        email: "saman@cyrutech.com",
        phone: "(858) 247-1788",
        linkedin: "https://www.linkedin.com/in/samankhadivar/",
        github: "https://github.com/samankhadivar",
        formUrl: "https://docs.google.com/forms/d/e/1FAIpQLSf0UFaTcl3yvXRLYZt-docMZHwGeLsky32vzfBO1pjfSxJUKA/viewform?embedded=true"
    }
};
