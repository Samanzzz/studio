import { GraduationCap, Briefcase } from 'lucide-react';

export function About() {
  return (
    <section id="about" className="py-20 bg-secondary">
      <div className="container mx-auto max-w-3xl px-4">
        <h2 className="text-4xl font-bold text-center mb-12 font-headline text-foreground">About Me</h2>
        <div className="space-y-8 text-lg text-foreground/90 text-justify leading-relaxed">
          <p>
            I'm a Software Development Engineer with a deep passion for the entire product lifecycle, from initial concept to scalable enterprise deployment. My journey in tech is driven by a desire to solve complex problems and build things that last.
          </p>
          <p>
            My academic foundation is a Bachelor of Science in Computer Science from the <strong className="font-semibold text-primary">University of California San Diego (UCSD)</strong>, where I was an honors scholarship recipient and took on leadership roles like Project Development Manager at CSES Dev. This experience instilled in me the core principles of advanced data structures, algorithms, and software engineering.
          </p>
          <p>
            Beyond academia, I've had the privilege of contributing to industry leaders like <strong className="font-semibold text-primary">Amazon Web Services</strong> and <strong className="font-semibold text-primary">Scripps</strong>. These roles gave me hands-on experience in cloud computing, ETL data pipelines, and data analytics, allowing me to build and automate systems that save hundreds of developer hours and power critical business functions.
          </p>
          <p>
            As a co-founder of two startups, SullDog Company (acquired) and Cloud Impala, I've learned to navigate the challenges of building a business from the ground up, leading teams, and delivering innovative platforms. I thrive in collaborative environments and I'm always looking for the next big challenge to tackle in a Software Development role.
          </p>
        </div>
      </div>
    </section>
  );
}
