import skills from '../data/skills'
import './Skills.css'

export default function Skills() {
  return (
    <section className="skills" id="skills">
      <div className="skills__header">
        <p className="skills__eyebrow">Skills</p>
        <h2 className="skills__title">Tools I work with</h2>
      </div>

      <div className="skills__grid">
        {skills.map(({ group, items }) => (
          <div className="skills__group" key={group}>
            <h3 className="skills__group-title">{group}</h3>
            <ul className="skills__list">
              {items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}