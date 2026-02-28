import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import "./Projects.css";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";

const projects = [
  {
    title: "Italian Recipe Platform",
    description:
      "Gastronomy web application inspired by traditional Italian cuisine. Developed as a full-stack project using modern web technologies and a simple client-server architecture.",
    tech: "HTML · CSS · JavaScript · PHP · MySQL",
    images: ["img/comida/1.png", "img/comida/2.png", "img/comida/3.png"],
    github: "https://github.com/marcosfabricio3/Cucina-di-mamma",
    demo: "https://cucina-demo.lovestoblog.com/index.html",
    published: true,
  },
  {
    title: "Transport Company Tribute Website",
    description:
      "Frontend project developed as a historical tribute to ONDA, a former Uruguayan interdepartmental transport company. The website presents a structured visual timeline highlighting key milestones in the company's legacy.",
    tech: "HTML · CSS · JavaScript",
    images: ["img/ONDA/1.png", "img/ONDA/2.png", "img/ONDA/3.png"],
    github: "https://github.com/marcosfabricio3/Project_ONDA_UTU",
    demo: "https://marcosfabricio3.github.io/Project_ONDA_UTU/index.html",
    published: true,
  },
  {
    title: "Web Portfolio",
    description:
      "Historical tribute website for a former transportation company with structured content and nostalgic visual identity.",
    tech: "HTML · CSS · JavaScript",
    images: [
      "img/portfolio/1.png",
      "img/portfolio/2.png",
      "img/portfolio/3.png",
    ],
    github: "https://github.com/marcosfabricio3/PersonalPortfolio",
    demo: "#",
    published: true,
  },
  {
    title: "Work in Progress",
    description:
      "Document management utility focused on automated batch renaming of PDF files based on customizable naming patterns and metadata extraction. The project aims to improve efficiency in administrative and archival workflows. Currently in active development.",
    tech: "React · CSS · JavaScript · Node.js · Electron",
    images: ["#", "#", "#"],
    github: "https://github.com/marcosfabricio3/PDF_renamer",
    demo: "#",
    published: false,
  },
  {
    title: "Work in Progress",
    description:
      "Management application designed to centralize and organize operational data in a structured and intuitive interface. Built to simplify daily workflows and improve information tracking efficiency.",
    tech: "React · CSS · JavaScript · SQLite · Node.js · Electron",
    images: ["#", "#", "#"],
    github: "https://github.com/marcosfabricio3/simple-manager-mobile",
    demo: "#",
    published: false,
  },
];

function ProjectCard({ project, index }) {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev === project.images.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? project.images.length - 1 : prev - 1));
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      className="project-card"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.2 }}
      viewport={{ once: true }}
    >
      {project.images.length > 0 && project.published && (
        <div className="carousel">
          <motion.img
            key={current}
            src={project.images[current]}
            alt={project.title}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          />
          <div className="carousel-indicators">
            {project.images.map((_, i) => (
              <span
                key={i}
                className={i === current ? "indicator active" : "indicator"}
                onClick={() => setCurrent(i)}
              />
            ))}
          </div>

          <div className="carousel-controls">
            <button onClick={prevSlide} className="carousel-btn">
              <HiChevronLeft size={28} />
            </button>

            <button onClick={nextSlide} className="carousel-btn">
              <HiChevronRight size={28} />
            </button>
          </div>
        </div>
      )}

      <h3>{project.title}</h3>
      <p>{project.description}</p>
      <span className="tech">{project.tech}</span>

      <div className="project-buttons">
        <a
          href={project.published ? project.demo : undefined}
          className={`btn primary ${!project.published ? "disabled" : ""}`}
          onClick={(e) => {
            if (!project.published) e.preventDefault();
          }}
        >
          Live Demo
        </a>
        <a href={project.github} className="btn secondary">
          GitHub
        </a>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="projects-section section-divider">
      <h2 className="section-title">Projects</h2>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} index={index} />
        ))}
      </div>
    </section>
  );
}
