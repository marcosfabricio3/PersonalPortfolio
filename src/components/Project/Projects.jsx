import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import "./Projects.css";

const projects = [
  {
    title: "Italian Recipe Platform",
    description:
      "Web application focused on traditional Italian cuisine recipes with categorized navigation and responsive design.",
    tech: "HTML · CSS · JavaScript",
    images: [
      "./public/img/comida/italian1.png.avif",
      "./public/img/comida/albondigas-caseras-de-cerdo-con-salsa-barbacoa.webp",
      "./public/img/comida/54e2d4dc41595417e01f7a144a20afe3.jpg",
    ],
    github: "#",
    demo: "#",
  },
  {
    title: "Transport Company Tribute Website",
    description:
      "Historical tribute website for a former transportation company with structured content and nostalgic visual identity.",
    tech: "HTML · CSS · JavaScript",
    images: [
      "./public/img/comida/italian1.png.avif",
      "./public/img/comida/albondigas-caseras-de-cerdo-con-salsa-barbacoa.webp",
      "./public/img/comida/54e2d4dc41595417e01f7a144a20afe3.jpg",
    ],
    github: "#",
    demo: "#",
  },
  {
    title: "Transport Company Tribute Website",
    description:
      "Historical tribute website for a former transportation company with structured content and nostalgic visual identity.",
    tech: "HTML · CSS · JavaScript",
    images: [
      "./public/img/comida/italian1.png.avif",
      "./public/img/comida/albondigas-caseras-de-cerdo-con-salsa-barbacoa.webp",
      "./public/img/comida/54e2d4dc41595417e01f7a144a20afe3.jpg",
    ],
    github: "#",
    demo: "#",
  },
  {
    title: "Transport Company Tribute Website",
    description:
      "Historical tribute website for a former transportation company with structured content and nostalgic visual identity.",
    tech: "HTML · CSS · JavaScript",
    images: [
      "./public/img/comida/italian1.png.avif",
      "./public/img/comida/albondigas-caseras-de-cerdo-con-salsa-barbacoa.webp",
      "./public/img/comida/54e2d4dc41595417e01f7a144a20afe3.jpg",
    ],
    github: "#",
    demo: "#",
  },
  {
    title: "Transport Company Tribute Website",
    description:
      "Historical tribute website for a former transportation company with structured content and nostalgic visual identity.",
    tech: "HTML · CSS · JavaScript",
    images: [
      "./public/img/comida/italian1.png.avif",
      "./public/img/comida/albondigas-caseras-de-cerdo-con-salsa-barbacoa.webp",
      "./public/img/comida/54e2d4dc41595417e01f7a144a20afe3.jpg",
    ],
    github: "#",
    demo: "#",
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
          <button onClick={prevSlide}>‹</button>
          <button onClick={nextSlide}>›</button>
        </div>
      </div>

      <h3>{project.title}</h3>
      <p>{project.description}</p>
      <span className="tech">{project.tech}</span>

      <div className="project-buttons">
        <a href={project.demo} className="btn primary">
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
