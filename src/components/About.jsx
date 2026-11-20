import Reveal from "./Reveal";

const stats = [
  { n: "0+", l: "Years experience" },
  { n: "0+", l: "Projects built" },
  { n: "2", l: "Platforms: Web & Mobile" },
  { n: "100%", l: "Dedication" },
];

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <div className="section-head"><span>About me</span><h2>Who I am</h2></div>
        <div className="about-grid">
          <Reveal>
            <div className="stats">
              {stats.map((s) => (
                <div key={s.l} className="card stat">
                  <b className="gradient-text">{s.n}</b>
                  <small>{s.l}</small>
                </div>
              ))}
            </div>
          </Reveal>
          <Reveal delay={150}>
            <div className="about-text">
              <h3>Turning ideas into polished digital products</h3>
              <p>I'm a web and Flutter developer who enjoys building clean, usable products from idea to deployment. I work with Front-end and Back-end on the web.Flutter uses Dart language on mobile.</p>
              
              <ul className="info-list">
                <li><b>Name:</b> Hak Hai</li>
                <li><b>Location:</b> Phnom Penh, Cambodia</li>
                <li><b>Email:</b>whathai12345@gmail.com </li>
                <li><b>Languages:</b> Khmer, English</li>
              </ul>
              <a href="/resume.pdf" download className="btn btn-primary">Download Resume</a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
