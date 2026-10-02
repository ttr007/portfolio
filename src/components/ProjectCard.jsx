import './ProjectCard.css'

const base = import.meta.env.BASE_URL

export default function ProjectCard({ project }) {
  const { title, category, description, tech, image, demo, repo } = project

  return (
    <article className="card">
      <div className="card__media">
        {image && <img src={`${base}${image}`} alt={`${title} preview`} />}
      </div>

      <div className="card__body">
        <p className="card__category">{category}</p>
        <h3 className="card__title">{title}</h3>
        <p className="card__description">{description}</p>

        <ul className="card__tech">
          {tech.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>

        <div className="card__links">
          {demo && <a href={demo} target="_blank" rel="noreferrer">Live demo</a>}
          {repo && <a href={repo} target="_blank" rel="noreferrer">Code</a>}
        </div>
      </div>
    </article>
  )
}