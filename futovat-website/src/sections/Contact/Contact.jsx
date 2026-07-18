import { useState } from "react";
import "./Contact.css";

function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    service: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(form);

    alert("Backend integration coming soon!");
  };

  return (
    <section id="contact" className="contact">
      <div className="section-header">
        <h2>Get In Touch</h2>

        <p>Have a project in mind? We'd love to hear from you.</p>
      </div>

      <div className="contact-container">
        <div className="contact-info">
          <h3>Contact Information</h3>

          <p>
            Let's discuss how Futovat can help turn your ideas into reality.
          </p>

          <div className="info-item">
            <strong>Email</strong>
            <span>contact@futovat.com</span>
          </div>

          <div className="info-item">
            <strong>Location</strong>
            <span>India</span>
          </div>

          <div className="info-item">
            <strong>Working Hours</strong>
            <span>Monday - Friday | 9:00 AM - 6:00 PM</span>
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
          />

          <input
            type="text"
            name="company"
            placeholder="Company (Optional)"
            value={form.company}
            onChange={handleChange}
          />

          <select name="service" value={form.service} onChange={handleChange}>
            <option value="">Select a Service</option>
            <option>Web Development</option>
            <option>Mobile Development</option>
            <option>Desktop Applications</option>
            <option>Game Development</option>
            <option>AI Solutions</option>
            <option>Cloud Solutions</option>
          </select>

          <textarea
            rows="6"
            name="message"
            placeholder="Tell us about your project..."
            value={form.message}
            onChange={handleChange}
          />

          <button type="submit">Send Message</button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
