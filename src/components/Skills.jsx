import Reveal from "./Reveal";
import { skills } from "../data/skills";

export default function Skills() {
  return (
    <section id="skills" className="section">
      <div className="container">
        <div className="section-head"><span>What I use</span><h2>Skills & Tools</h2></div>
        <div className="skills-grid">
          {skills.map((g, i) => (
            <Reveal key={g.category} delay={i * 100}>
              <div className="card skill-card">
                <div className="skill-icon">{g.icon}</div>
                <h3>{g.category}</h3>
                <div className="chips">
                  {g.items.map((item) => <span className="chip" key={item}>{item}</span>)}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
