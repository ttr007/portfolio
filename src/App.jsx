import Navbar from './components/Navbar'
import Hero from './sections/Hero'
import Projects from './sections/Projects'

export default function App() {
  return (
    <>
      <Navbar/>
      <main>
        <Hero/>
        <Projects />
      </main>
    </>
  )
}