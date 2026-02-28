import { useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./NavBar.css";

const sections = ["hero", "about", "projects", "contact"];

export default function Navbar() {
  const [active, setActive] = useState("hero");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 200;

      sections.forEach((section) => {
        const el = document.getElementById(section);
        if (!el) return;

        if (
          scrollPos >= el.offsetTop &&
          scrollPos < el.offsetTop + el.offsetHeight
        ) {
          setActive(section);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = () => {
    setOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="nav-logo">MG</div>

        <div className={`nav-links ${open ? "open" : ""}`}>
          {sections.map((section) => (
            <a
              key={section}
              href={`#${section}`}
              onClick={handleClick}
              className={active === section ? "active" : ""}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </a>
          ))}
        </div>

        <div className="nav-toggle" onClick={() => setOpen(!open)}>
          {open ? <FaTimes /> : <FaBars />}
        </div>
      </div>
    </nav>
  );
}
