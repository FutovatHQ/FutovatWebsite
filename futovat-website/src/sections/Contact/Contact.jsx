import { useState } from "react";
import "./Contact.css";
import { sendContact } from "../../services/contactService";

function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    service: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (isSubmitting) return;

    setIsSubmitting(true);

    try {
      await sendContact(form);

      alert("Message sent successfully!");

      setForm({
        name: "",
        email: "",
        company: "",
        service: "",
        message: "",
      });
    } catch (error) {
      console.error(error);
      alert("Failed to send message.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="contact">
      <div className="contact-background">
        <div className="contact-glow"></div>
        <div className="contact-ring"></div>
      </div>

      <div className="section-header contact-header">
        <span className="section-eyebrow">LET'S CONNECT</span>

        <h2>Let's Build Something Together.</h2>

        <p>
          Have a project in mind? We'd love to hear from you and explore how
          Futovat can help turn your ideas into reality.
        </p>
      </div>

      <div className="contact-container">
        <div className="contact-info">
          <div className="contact-info-header">
            <span>CONTACT INFORMATION</span>

            <h3>Start a Conversation</h3>

            <p>
              Tell us what you're building, what you're trying to solve, or
              simply what you have in mind. We'll take it from there.
            </p>
          </div>

          <div className="contact-details">
            <div className="info-item">
              <span className="info-label">EMAIL</span>

              <a href="mailto:info@futovat.com">info@futovat.com</a>
            </div>

            <div className="info-item">
              <span className="info-label">LOCATION</span>

              <span>India</span>
            </div>

            <div className="info-item">
              <span className="info-label">WORKING HOURS</span>

              <span>Monday - Friday</span>

              <small>9:00 AM - 6:00 PM</small>
            </div>
          </div>

          <div className="contact-company">
            <span>FUTOVAT</span>

            <p>
              A product brand of <strong>Arcadia Zygnex Tech LLP</strong>
            </p>
          </div>
        </div>

        <div className="contact-form-wrapper">
          <div className="contact-form-heading">
            <span>PROJECT INQUIRY</span>

            <h3>Tell Us About Your Project</h3>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-field">
                <label htmlFor="name">Your Name</label>

                <input
                  id="name"
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  value={form.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-field">
                <label htmlFor="email">Your Email</label>

                <input
                  id="email"
                  type="email"
                  name="email"
                  placeholder="you@example.com"
                  value={form.email}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-field">
                <label htmlFor="company">Company</label>

                <input
                  id="company"
                  type="text"
                  name="company"
                  placeholder="Company (Optional)"
                  value={form.company}
                  onChange={handleChange}
                />
              </div>

              <div className="form-field">
                <label htmlFor="service">Service</label>

                <select
                  id="service"
                  name="service"
                  value={form.service}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select a Service</option>
                  <option>Web Development</option>
                  <option>Mobile Development</option>
                  <option>Desktop Applications</option>
                  <option>Game Development</option>
                  <option>AI Solutions</option>
                  <option>Cloud Solutions</option>
                </select>
              </div>
            </div>

            <div className="form-field">
              <label htmlFor="message">Project Details</label>

              <textarea
                id="message"
                rows="6"
                name="message"
                placeholder="Tell us about your project..."
                value={form.message}
                onChange={handleChange}
                required
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className={isSubmitting ? "loading" : ""}
            >
              {isSubmitting ? (
                <>
                  <span className="spinner"></span>
                  Sending...
                </>
              ) : (
                <>
                  Send Message
                  <span>→</span>
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
