import './About.css'

export default function About() {
  return (
    <section className="about" id="about">
      <div className="about__header">
        <p className="about__eyebrow">About</p>
        <h2 className="about__title">Data that helps people decide</h2>
      </div>

      <div className="about__body">
        <p>
            Growing up, I watched a lot of people around me struggle with
            technology, and I was usually the one they asked for help. I got
            good at explaining things in plain terms, and that's what drew me
            to data! It can tell a story, but only if someone makes it
            understandable. I want to be a bridge between the technical work
            and the people who rely on it. My capstone for Pierce County, a
            learning resource for older, non-technical workers, is the clearest
            example so far.
        </p>

        <p>
            Since 2022 I've worked at a 54-table restaurant, starting as a host,
            food runner, and server and now as a shift lead. When we're
            short-staffed, we sometimes run service with as few as seven servers and
            one person in each support role, so the job becomes putting people where
            they can succeed and adjusting as service changes. I've managed
            waitlists of up to four hours and kept the kitchen window moving through
            peak service, and I've learned to prioritize quickly and stay calm when
            there are a lot of moving parts.
        </p>

        <p>
            Outside of work, I play strategy roguelikes, go bouldering, do escape rooms,
            and once played on the League of Legends team at UW. I'm drawn to anything
            that works like a puzzle. Low-stakes problem solving is always a lot of fun
            for me.
        </p>

        <p>
            I'm looking for a data engineer or data analyst role where I can
            keep learning from a team and work on pipelines, SQL, and the
            people who depend on them.
        </p>
      </div>
    </section>
  )
}