import { motion } from "framer-motion";
import "./Hero.css";

export default function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="hero-left">
        <motion.h1
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="hero-title"
        >
          Marcos García
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="hero-subtitle"
        >
          Full Stack & Software Developer
          <div className="hero-accent" />
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="hero-description"
        >
          React • Node.js • SQL • PHP
        </motion.p>

        <motion.div
          className="hero-buttons"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <motion.a
            href="#projects"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="btn primary"
          >
            View Projects
          </motion.a>

          <motion.a
            href="https://github.com/marcosfabricio3"
            target="_blank"
            className="btn secondary"
          >
            GitHub
          </motion.a>
        </motion.div>
      </div>

      <motion.div
        className="hero-right"
        initial={{ opacity: 0, x: 80 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.5 }}
      >
        <div className="code-card">
          <pre>
            {`function Developer() {
              return (
                <Scalable Solutions />
                <Software Engineering />
                <ProblemSolving />
              );
            }`}
          </pre>
        </div>
      </motion.div>
      <div className="hero-divider" />
    </section>
  );
}
