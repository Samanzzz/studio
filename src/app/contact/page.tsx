import { siteData } from "@/lib/data";

export default function ContactPage() {
  return (
    <div className="w-full max-w-4xl px-4 sm:px-6 lg:px-8">
      <section id="contact" className="py-20 md:py-28">
        <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground tracking-tight">Get In Touch</h2>
            <p className="text-xl text-muted-foreground mt-4 max-w-2xl mx-auto">
              I'm always open to discussing new projects, creative ideas, or opportunities. Feel free to use the form below to reach out.
            </p>
        </div>

        <div className="w-full max-w-3xl mx-auto">
            <iframe
                src={siteData.contact.formUrl}
                width="100%"
                height="800"
                frameBorder="0"
                marginHeight={0}
                marginWidth={0}
                className="rounded-lg shadow-2xl border"
            >
                Loading…
            </iframe>
        </div>
      </section>
    </div>
  );
}
