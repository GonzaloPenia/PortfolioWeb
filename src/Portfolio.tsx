"use client"

import { AboutMe, Navigator, Projects, Skills, Presentation, Experience, Footer, Contact } from "./components"

export default function Portfolio() {

  return (
    <div className="min-h-screen bg-background">
      
      <Navigator />
      <section id="home" className="pt-16">
        <Presentation />
      </section>
      <section id="sobre-mi" className="pt-16">
        <AboutMe />
      </section>
      <section id="skills" className="pt-16">
        <Skills />
      </section>
      <section id="proyectos" className="pt-16">
        <Projects />
      </section>
      <section id="experiencia" className="pt-16">
        <Experience />
      </section>
      <section id="contacto" className="pt-16">
        <Contact />
      </section>
      <Footer />

    </div>
  )
}
