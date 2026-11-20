import { FaArrowUp, FaGithub, FaLinkedin, FaTelegram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <span>© {new Date().getFullYear()} Hak Hai. All rights reserved.</span>
        <div className="socials">
          <a className="icon-btn" href="https://github.com/whathai12345-dotcom" target="_blank" rel="noreferrer"><FaGithub /></a>
          <a className="icon-btn" href="https://linkedin.com/" target="_blank" rel="noreferrer"><FaLinkedin /></a>
          <a className="icon-btn" href="https://t.me/Hai_TK" target="_blank" rel="noreferrer"><FaTelegram /></a>
          <a className="icon-btn" href="#home" aria-label="Back to top"><FaArrowUp /></a>
        </div>
      </div>
    </footer>
  );
}
