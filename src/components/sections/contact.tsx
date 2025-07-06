export function Contact() {
  return (
    <section id="contact" className="py-20 bg-secondary">
      <div className="container mx-auto max-w-4xl px-4">
        <h2 className="text-4xl font-bold text-center mb-4 font-headline text-primary">Contact Me</h2>
        <p className="text-center text-muted-foreground mb-8">
          Have a question or want to work together? Feel free to reach out.
        </p>
        <div className="bg-card p-2 rounded-lg shadow-lg overflow-hidden">
          <div className="aspect-w-16 aspect-h-9">
            {/* 
              To make this form work, you need to:
              1. Create a Google Form.
              2. Click the "Send" button in the top right.
              3. Go to the "<>" (Embed HTML) tab.
              4. Copy the `src` URL from the iframe code.
              5. Replace the `src` attribute in the iframe below with your copied URL.
            */}
            <iframe
              src="https://docs.google.com/forms/d/e/1FAIpQLScwXpLeL3sD4TStaS0_r2UqYxwVbHq0YjXb9k-9v7Lg8H1jFw/viewform?embedded=true"
              width="100%"
              height="600"
              frameBorder="0"
              marginHeight={0}
              marginWidth={0}
              className="w-full"
              >
              Loading…
            </iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
