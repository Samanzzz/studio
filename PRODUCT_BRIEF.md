# Product Brief: "Eminent Domain" Personal Portfolio

## 1. App Name
Eminent Domain

## 2. Objective
To create a professional, elegant, and modern personal portfolio website for Saman Khadivar, a Software Engineer and Researcher. The website should effectively showcase his skills, experience, and projects to potential employers and collaborators. It must be designed for easy deployment on GitHub Pages as a static site.

## 3. Core Features & UI Components

*   **Homepage:** A clean, elegant landing page that serves as a powerful introduction.
    *   **UI Components**:
        *   **Hero Section**: Contains a main heading with Saman's name, a subheading for his roles ("Builder, Engineer, Researcher"), a brief introductory paragraph, and a professional headshot.
        *   **Call-to-Action Buttons**: Prominent `Button` components to "View My Work" (linking to the Projects page) and social media links (`Button` with `size="icon"`) for LinkedIn, GitHub, and Email. Uses `lucide-react` icons.
    *   **About Me Section (Integrated into Homepage)**: A detailed section that presents Saman's background, skills, and academic achievements in a narrative format. It uses standard paragraph tags with `<strong>` elements for emphasis.
*   **Experience Page:** An interactive, timeline-style page showcasing professional roles.
    *   **UI Components**:
        *   **Timeline Layout**: A vertical line visually connects the different roles. Each role is a list item.
        *   **Experience Card**: Each role is displayed in a `Card` component containing the `CardHeader` (with `CardTitle` for the role and `CardDescription` for the company/dates) and `CardContent` (a `ul` for a bulleted list of achievements).
        *   **Icons**: `Briefcase` icon from `lucide-react` is used as a marker on the timeline for each entry.
*   **Projects Page:** A gallery to display key software projects.
    *   **UI Components**:
        *   **Grid Layout**: A responsive two-column grid that displays project cards.
        *   **Project Card**: Each project uses a `Card` component containing the `CardHeader` (`CardTitle`, `CardDescription`) and `CardContent`.
        *   **Tags**: `Badge` components are used within each card to display technology tags (e.g., "Python", "React").
        *   **Links**: A `Button` with an `ExternalLink` icon links to the project's repository or live version.
*   **Skills Page:** A visually organized showcase of technical abilities.
    *   **UI Components**:
        *   **Categorized Sections**: Skills are grouped by categories like "Languages", "Frameworks & Libraries", etc., each with its own heading.
        *   **Skill Badges**: Each skill is displayed in a `Badge` component, making the section easy to scan.
*   **Contact Page:** A straightforward page for getting in touch.
    *   **UI Components**:
        *   **Contact Buttons**: `Button` components for direct email, LinkedIn, and GitHub.
        *   **Embedded Form**: An `iframe` is used to embed a Google Form directly into the page for a seamless contact experience. The frame is styled to be responsive and fit the page aesthetic.
*   **Content Optimizer (AI Feature):** An AI-powered tool for internal use.
    *   **Functionality**: Analyzes visitor engagement on different sections of the website and provides suggestions for content optimization to better highlight the candidate's strengths.
    *   **Technology**: Implemented using **Genkit** and Google's Gemini models.
    *   **UI (Static Site)**: On the publicly deployed GitHub Pages site, this page displays an informational message (`Card` with an `Info` icon) explaining that the feature is not available on the static version and requires a server environment to run.

## 4. Style and Design Guidelines

*   **Primary Color**: Black (`hsl(240 10% 3.9%)`)
*   **Background Color**: White (`hsl(0 0% 100%)`)
*   **Secondary/Muted Color**: Gray tones (`hsl(240 4.8% 95.9%)` for muted, `hsl(240 3.8% 46.1%)` for muted-foreground).
*   **Font**: 'Lora' (serif) for headings. 'Inter' (sans-serif) for body text. Fonts are imported from Google Fonts.
*   **Layout**:
    *   A clean, minimalist layout with generous white space.
    *   **Left-aligned content** for a professional, document-like feel.
    *   **Multi-page architecture**, with each core feature on its own dedicated page.
    *   **Responsive design** that adapts seamlessly to desktop, tablet, and mobile devices.
*   **Component Styling**:
    *   Use of **ShadCN UI** components.
    *   Elements like `Card` and `Button` have rounded corners and subtle borders/shadows for a polished feel.

## 5. Technology Stack

*   **Frontend Framework**: Next.js 14+ (with App Router)
*   **UI Library**: React 18+
*   **Component Framework**: ShadCN UI
*   **Styling**: Tailwind CSS
*   **AI/Generative AI**: Genkit
*   **Icons**: `lucide-react`
*   **Deployment**: Static export for GitHub Pages, with a GitHub Actions workflow for automated builds and deployment.

---

## 6. Content and Data Specification

This section contains the specific data used to populate the website's pages.

### **Homepage & About Me Content**

*   **Hero Title**: "Saman Khadivar"
*   **Hero Subtitle**: "Builder, Engineer, Researcher."
*   **Hero Paragraph**: "I build robust, scalable software and explore new frontiers in technology. From enterprise solutions at AWS to founding startups, I turn complex problems into elegant, impactful products."
*   **About Me Narrative**:
    *   "I'm a Software Development Engineer with a deep passion for the entire product lifecycle, from initial concept to scalable enterprise deployment. My journey in tech is driven by a desire to solve complex problems and build things that last."
    *   "My academic foundation is a Bachelor of Science in Computer Science from the **University of California San Diego (UCSD)**, where I was an honors scholarship recipient and took on leadership roles like Project Development Manager at CSES Dev. This experience instilled in me the core principles of advanced data structures, algorithms, and software engineering."
    *   "Beyond academia, I've had the privilege of contributing to industry leaders like **Amazon Web Services** and **Scripps**. These roles gave me hands-on experience in cloud computing, ETL data pipelines, and data analytics, allowing me to build and automate systems that save hundreds of developer hours and power critical business functions."
    *   "As a co-founder of two startups, SullDog Company (acquired) and Cloud Impala, I've learned to navigate the challenges of building a business from the ground up, leading teams, and delivering innovative platforms. I thrive in collaborative environments and I'm always looking for the next big challenge to tackle in a Software Development role."

### **Experience Data**

```json
[
    {
        "role": "Software Dev Engineer",
        "company": "Amazon Web Services",
        "period": "October 2024 – Present",
        "description": [
            "Designed and built a full service for auditing storage units’ health using ECS (Fargate) and Lambda.",
            "Led a large-scale new type region build for 6 teams across the S3 Control Plane Organization.",
            "Implemented automation of Dynamic Configurations for 2 services using AppConfig, saving 200+ developer hours annually.",
            "Improved an existing service using multithreading and async processing."
        ]
    },
    {
        "role": "Product Software Engineer Intern",
        "company": "Scripps",
        "period": "Spring 2023 – Spring 2024",
        "description": [
            "Developed and shipped multiple web app solutions from conception to launch.",
            "Engineered ETL data pipelines using Python, and SQL.",
            "Presented data visualizations to stakeholders using Tableau, Power BI, and Python libraries.",
            "Utilized PyTorch for heat stream prediction in ocean regions to assist data collection."
        ]
    },
    {
        "role": "Software Engineer Intern",
        "company": "UCSD Health",
        "period": "September 2022 – June 2023",
        "description": [
            "Designed and programmed data-analyzing solutions with Pandas, PyTorch, NumPy for biomedical datasets.",
            "Curated and preprocessed high-resolution genetic imaging datasets using PyTorch.",
            "Educated stakeholders on compliance and set up automated script testing."
        ]
    },
     {
        "role": "Software Engineer Intern",
        "company": "San Diego Supercomputer Centre",
        "period": "June 2022 – September 2022",
        "description": [
            "Developed a web app for media recommendations with Django, React, and Node.js.",
            "Created the same app natively using Swift & SwiftUI.",
            "Built back-end services and APIs for user data and recommendations."
        ]
    },
     {
        "role": "Co-Founder",
        "company": "SullDog Company",
        "period": "Acquired",
        "description": [
            "Developed a multifunctional Data Management System using Java, Docker, and Kubernetes.",
            "Managed vast laboratory data sets, improving research and operational efficiency.",
            "Led a team of 15 developers and 5 project managers."
        ]
    },
    {
        "role": "Co-Founder",
        "company": "Cloud Impala",
        "period": "Startup",
        "description": [
            "Developed a comprehensive Agricultural Data Optimization Platform.",
            "Leveraged Python for backend analytics and React for the front-end."
        ]
    }
]
```

### **Projects Data**

```json
[
  {
    "title": "Panora",
    "description": "Leveraging large language models (LLMs) to read, analyze, and categorize user feedback, providing actionable insights for product improvement.",
    "tags": ["LLM", "AI", "Feedback Analysis", "Python", "Genkit"],
    "link": "#"
  },
  {
    "title": "Idlelib Beta version",
    "description": "An enhanced and more feature-rich version of the standard IDLElib Integrated Development Environment for Python.",
    "tags": ["Python", "IDE", "Developer Tools"],
    "link": "#"
  },
  {
    "title": "Agricultural Data Optimization Platform",
    "description": "A comprehensive platform developed at Cloud Impala that leverages Python for backend analytics and React for a user-friendly frontend to optimize agricultural data.",
    "tags": ["Python", "React", "Data Analytics", "Platform"],
    "link": "#"
  },
  {
    "title": "Data Management System",
    "description": "A multifunctional system for SullDog Company using Java, Docker, and Kubernetes to manage vast laboratory data sets, improving research efficiency.",
    "tags": ["Java", "Docker", "Kubernetes", "Data Management"],
    "link": "#"
  }
]
```

### **Skills Data**

```json
{
  "Languages": ["Python", "Java", "SQL", "JavaScript", "Swift", "HTML", "CSS"],
  "Frameworks & Libraries": ["React", "Node.js", "Django", "SwiftUI", "PyTorch", "Pandas", "NumPy", "Next.js"],
  "Cloud & DevOps": ["AWS", "Azure", "Docker", "Kubernetes", "Git", "GitHub/GitLab", "CI/CD"],
  "Tools & Platforms": ["Jira", "Confluence", "Tableau", "PowerBI", "PyCharm", "Xcode"],
  "Methodologies": ["Agile", "Scrum", "Problem-solving", "Debugging", "Product Management"]
}
```

### **Contact Information**

*   **Email**: `saman@cyrutech.com`
*   **LinkedIn**: `https://www.linkedin.com/in/samankhadivar/`
*   **GitHub**: `https://github.com/samankhadivar`
*   **Contact Form**: Embedded Google Form with the source URL `https://docs.google.com/forms/d/e/1FAIpQLSf0UFaTcl3yvXRLYZt-docMZHwGeLsky32vzfBO1pjfSxJUKA/viewform?embedded=true`
*   **Phone**: `(858) 247-1788`
