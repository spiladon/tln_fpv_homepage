import ContactForm from "@/components/ContactForm";

export default function ContactPage() {
  return (
    <section className="section contact-page">
      <div className="container contact-grid">
        <div>
          <p className="eyebrow">CONTACT</p>
          <h1>Let’s talk.</h1>
          <p className="hero-text">
            Have a question, collaboration idea, project or just want to say
            hello? Send me a message using the form.
          </p>
          <div className="contact-note">
            <strong>Response</strong>
            <span>I’ll get back to you as soon as possible.</span>
          </div>
        </div>

        <ContactForm />
      </div>
    </section>
  );
}