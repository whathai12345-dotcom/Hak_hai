import { FaGithub, FaLinkedin, FaTelegram, FaFacebook } from "react-icons/fa";
import profileImage from "../assets/images/hai.jpg";

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="blob one" />
      <div className="blob two" />
      <div className="container hero-grid">
        <div className="hero-text">
          <span className="badge"><i /> Open to freelance & full-time</span>
          <h1>
            Hi, I'm <span className="gradient-text">Hak Hai</span><br />
            Web & Flutter Developer
          </h1>
          <p>I build fast, responsive websites and cross-platform mobile apps with clean code and modern design.</p>
          <div className="hero-btns">
            <a href="#projects" className="btn btn-primary">View Projects</a>
          </div>
          <div className="socials">
            <a className="icon-btn" href="https://github.com/whathai12345-dotcom" target="_blank" rel="noreferrer"><FaGithub /></a>
            <a className="icon-btn" href="https://linkedin.com/" target="_blank" rel="noreferrer"><FaLinkedin /></a>
            <a className="icon-btn" href="https://t.me/Hai_TK" target="_blank" rel="noreferrer"><FaTelegram /></a>
            <a className="icon-btn" href="https://www.facebook.com/share/1CAsQqnD1B/" target="_blank" rel="noreferrer"><FaFacebook /></a>
          </div>
        </div>
        <div className="hero-visual">
          <div className="avatar-wrap">
            <div className="avatar-ring" />
            <div className="avatar">
              YN
              <img src={profileImage} alt="Hak Hai" />
            </div>
            <div className="float f1 card"> Web</div>
            <div className="float f2 card">💙 Flutter</div>
          </div>
        </div>
      </div>
    </section>
  );
}
