"use client"

import { AboutMe, Navigator, Projects, Skills, Presentation, Experience, Footer, Contact } from "./components"

export default function Portfolio() {

  return (
    <div className="min-h-screen bg-background">
      
      <Navigator />
      <Presentation />
      <AboutMe />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
      <Footer />

    </div>
  )
}
