import { useState } from "react";
import Reveal from "./Reveal";
import ProjectCard from "./ProjectCard";
import { projects } from "../data/projects";

const tabs = [
  { key: "all", label: "All" },
  { key: "web", label: "Web" },
  { key: "flutter", label: "Flutter" },
];

export default function Projects() {
  const [filter, setFilter] = useState("all");
  const shown = filter === "all" ? projects : projects.filter((p) => p.type === filter);

  return (
    <section id="projects" className="section">
      <div className="container">
        <div className="section-head"><span>My work</span><h2>Featured Projects</h2></div>
        <div className="filters">
          {tabs.map((t) => (
            <button key={t.key} className={`filter ${filter === t.key ? "active" : ""}`} onClick={() => setFilter(t.key)}>
              {t.label}
            </button>
          ))}
        </div>
        <div className="projects-grid">
          {shown.length === 0 && <p className="empty">No projects yet.</p>}
          {shown.map((p, i) => (
            <Reveal key={p.id} delay={i * 80}>
              <ProjectCard project={p} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
