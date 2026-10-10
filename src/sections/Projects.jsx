import projects from '../data/Projects.js'
import ProjectCard from '../components/ProjectCard'
import './Projects.css'

export default function Projects() {
  return (
    <section className="projects" id="projects">
      <div className="projects__header">
        <p className="projects__eyebrow">Selected Work</p>
        <h2 className="projects__title">Projects</h2>
      </div>

      <div className="projects__grid">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  )
}