import './Navbar.css'

export default function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar__inner">
        <a href="#top" className="navbar__logo" aria-label="Tyler Tran, back to top">TT</a>
        <nav className="navbar__links">
          <a href="#projects">Projects</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
        </nav>
        <a href="#contact" className="navbar__cta">Contact</a>
      </div>
    </header>
  )
}