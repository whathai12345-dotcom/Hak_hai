import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

export default function ProjectCard({ project }) {
  return (
    <article className="card project">
      <div className="project-img">
        <span className="type-tag">{project.type}</span>
        {project.title.charAt(0)}
        {project.image && <img src={project.image} alt={project.title} />}
      </div>
      <div className="project-body">
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <div className="chips">
          {project.tech.map((t) => <span className="chip" key={t}>{t}</span>)}
        </div>
        <div className="project-links">
          {project.live && <a href={project.live} target="_blank" rel="noreferrer"><FaExternalLinkAlt /> Live</a>}
          {project.github && <a href={project.github} target="_blank" rel="noreferrer"><FaGithub /> GitHub</a>}
        </div>
      </div>
    </article>
  );
}
