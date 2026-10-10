import './Hero.css'

const base = import.meta.env.BASE_URL

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero__text">
        <p className="hero__eyebrow">Data Engineering &amp; Analytics</p>
        <h1 className="hero__name">Tyler Tran</h1>
        <p className="hero__tagline">Data Science &amp; Pipelines</p>
        <p className="hero__bio">
          I build the pipelines and analyses behind data decisions, and I
          explain them in plain language. Looking for my first data
          engineering or analyst role.
        </p>
        <div className="hero__actions">
          <a href="#projects" className="btn">View Projects</a>
          <a href={`${base}resume.pdf`} className="hero__link">View Resume (PDF)</a>
        </div>
        <p className="hero__meta">
          University of Washington, Seattle &middot; Informatics, Class of 2025
        </p>
      </div>

      <img
        className="hero__image"
        src={`${base}hero.jpg`}
        alt="Concrete architectural structure at dusk"
      />
    </section>
  )
}