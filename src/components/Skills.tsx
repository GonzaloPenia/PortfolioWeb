import {
  Code,
  Palette,
  Smartphone,
  Server,
  Database,
  Globe,
  Atom,
  Hexagon,
} from "lucide-react"
import { Card, CardContent } from './ui/card'
import { Badge } from "./ui/badge"
import { Github } from 'lucide-react';

  const skills = [
    { name: "React", icon: Atom, category: "Frontend" },
    { name: "TypeScript", icon: Code, category: "Language" },
    { name: "JavaScript", icon: Code, category: "Language" },
    { name: "Next.js", icon: Globe, category: "Backend" },
    { name: "C#", icon: Code, category: "Language" },
    { name: "SQL", icon: Database, category: "Database" },
    { name: "mySQL", icon: Database, category: "Database" },
    { name: "Node.js", icon: Hexagon, category: "Backend" },
    { name: "Postman", icon: Server, category: "Backend" },
    { name: "Github", icon: Github, category: "Control de versiones" },
  ]

export const Skills = () => {
  return (
    <>
          {/* Skills Section */}
      <section id="skills" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Skills y tecnologías</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Algunas de las tecnologias y herramientas que uso para mis proyectos.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {skills.map((skill, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <skill.icon className="h-12 w-12 mx-auto mb-4 text-primary" />
                  <h3 className="font-semibold mb-2">{skill.name}</h3>
                  <Badge variant="secondary">{skill.category}</Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
