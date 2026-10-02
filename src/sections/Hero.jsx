import './Hero.css'

const base = import.meta.env.BASE_URL

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero__text">
        <p className="hero__eyebrow">Data Science &amp; Machine Learning</p>
        <h1 className="hero__name">Tyler Tran</h1>
        <p className="hero__tagline">Predictive Systems &amp; Insights</p>
        <p className="hero__bio">
          A data science portfolio focused on predictive modeling, natural
          language processing, and data storytelling. I build scalable
          analytics systems, deploy machine learning pipelines, and turn
          complex data into clear business decisions.
        </p>
        <div className="hero__actions">
          <a href="#projects" className="btn">View Case Studies</a>
          <a href={`${base}resume.pdf`} className="hero__link">View Resume (PDF)</a>
        </div>
      </div>

      <img
        className="hero__image"
        src={`${base}hero.jpg`}
        alt="Concrete architectural structure at dusk"
      />
    </section>
  )
}
