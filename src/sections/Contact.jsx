import './Contact.css'

const base = import.meta.env.BASE_URL

const EMAIL = 'tyler.t.tr03@gmail.com'

const links = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/tyler-tran-ttr/', text: 'https://www.linkedin.com/in/tyler-tran-ttr/' },
  { label: 'GitHub', href: 'https://github.com/ttr007', text: 'github.com/ttr007' },
  { label: 'Resume', href: `${base}resume.pdf`, text: 'Download PDF' },
]

export default function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="contact__header">
        <p className="contact__eyebrow">Contact</p>
        <h2 className="contact__title">Let&rsquo;s talk</h2>
        <p className="contact__intro">
          I&rsquo;m looking for a data engineer or data analyst role. If you
          have an opening, a question about a project, or just want to say
          hi, my inbox is open.
        </p>
      </div>

      <div className="contact__body">
        <a className="contact__email" href={`mailto:${EMAIL}`}>{EMAIL}</a>

        <ul className="contact__list">
          {links.map(({ label, href, text }) => (
            <li key={label}>
              <a href={href} target="_blank" rel="noreferrer">
                <span className="contact__label">{label}</span>
                <span className="contact__value">{text} &rarr;</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}