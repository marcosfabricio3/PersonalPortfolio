import { motion } from "framer-motion";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import "./Contact.css";

export default function Contact() {
  const form = useRef();
  const [status, setStatus] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      )
      .then(
        () => {
          setStatus("Message sent successfully.");
          form.current.reset();
        },
        () => {
          setStatus("Something went wrong. Please try again.");
        },
      );
  };

  return (
    <section id="contact" className="contact-section section-divider">
      <motion.div
        className="contact-container"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="section-title">Contact</h2>

        <p className="contact-subtext">
          If you’re interested in working together, feel free to reach out.
        </p>
        <div className="contact-card">
          <form ref={form} onSubmit={sendEmail} className="contact-form">
            <input
              type="text"
              name="user_name"
              placeholder="Your Name"
              required
            />
            <input
              type="email"
              name="user_email"
              placeholder="Your Email"
              required
            />
            <textarea
              name="message"
              placeholder="Your Message"
              rows="5"
              required
            />

            <button type="submit" className="btn primary">
              Send Message
            </button>
          </form>
        </div>

        {status && <p className="form-status">{status}</p>}

        <div className="social-icons">
          <a href="https://github.com/marcosfabricio3" target="_blank">
            <FaGithub />
          </a>

          <a href="https://linkedin.com/in/marcosgarcía-97uru" target="_blank">
            <FaLinkedin />
          </a>

          <a href="mailto:marcosfabricio633@gmail.com">
            <FaEnvelope />
          </a>
        </div>
        <p className="contact-footer">
          © 2026 Marcos García — Built with React & Framer Motion
        </p>
      </motion.div>
    </section>
  );
}
