import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaGitAlt,
  FaReact,
  FaPhp,
  FaNodeJs,
  FaBootstrap,
} from "react-icons/fa";
import { SiMysql } from "react-icons/si";
import "./About.css";

export default function About() {
  const icons = [
    FaHtml5,
    FaCss3Alt,
    FaJs,
    FaGitAlt,
    FaReact,
    FaPhp,
    FaNodeJs,
    SiMysql,
    FaBootstrap,
  ];

  return (
    <section id="about" className="about-section section-divider">
      <motion.div
        className="about-container"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="about-left">
          <h2 className="section-title">About Me</h2>

          <p>
            I’m a software developer with experience in web and desktop
            application development, supported by a technical background in
            networking and systems. My formation includes frontend and backend
            technologies, database management, and foundational infrastructure
            knowledge.
          </p>

          <p>
            I work with tools such as React, Node.js, JavaScript, SQL, and PHP,
            while also understanding Microsoft Server environments and
            POSIX-based systems. This allows me to build solutions with a
            structured, system-aware approach.
          </p>

          <p>
            I focus on writing clean, scalable logic and developing software
            that performs reliably within real-world environments.
          </p>

          <div className="about-metrics">
            <div>
              <span>5+</span>
              <p>Projects Built</p>
            </div>
            <div>
              <span>Software Architecture</span>
              <p>Development Focus</p>
            </div>
          </div>
        </div>

        <div className="about-right">
          <div className="about-card">
            <h3>Core Stack</h3>
            <div className="badges">
              <span>React</span>
              <span>Node.js</span>
              <span>SQL</span>
              <span>JavaScript</span>
              <span>PHP</span>
              <span>HTML</span>
              <span>CSS</span>
              <span>Bootstrap</span>
            </div>
          </div>

          <div className="about-card">
            <h3>Systems & Infrastructure</h3>
            <div className="badges">
              <span>Microsoft Server</span>
              <span>Shell Scripting</span>
              <span>Git & GitHub</span>
            </div>
          </div>
        </div>
      </motion.div>

      <div className="tech-carousel">
        <div className="tech-track">
          {[...icons, ...icons].map((Icon, i) => (
            <span key={i} className="tech-icon">
              <Icon />
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
