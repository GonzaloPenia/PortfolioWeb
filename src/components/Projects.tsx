import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card'
import { Badge } from './ui/badge'
import { Button } from './ui/button'
import { Github } from 'lucide-react'


  const projects = [
    {
      title: "Journal-App",
      description:
        "Aplicación de diario personal para tomar notas relevantes desarrollada con React, JavaScript y Firebase. Permite a los usuarios crear, editar y organizar entradas con autenticación segura empleando inicio de sesión y registro con cuentas de Google, carga de imágenes y CRUD de las notas. Implementa Redux para gestión de estado y SASS para estilos modularizados.",
      tech: ["Next.js", "TypeScript", "Stripe", "PostgreSQL"],
      image: "/MapsApp3-4.jpg",
      github: "https://github.com/GonzaloPenia/U17-JournalApp",
      live: "#",
    },
    {
      title: "Calendar-App",
      description: "Aplicación de calendario tipo PWA con capacidad offline. Permite a los usuarios registrarse e iniciar sesión para gestionar su calendario y organizar sus actividades. Incluye autenticación, CRUD de eventos y sincronización en segundo plano. Optimizada con Service Workers para cargar recursos estáticos desde caché. Implementación de persistencia de datos en modo offline usando IndexedDB y re-sincronización al recuperar conexión.",
      tech: ["React", "Node.js", "Socket.io", "MongoDB"],
      image: "/MapsApp3-4.jpg",
      github: "https://github.com/GonzaloPenia/ReactCalendarFrontend",
      live: "#",
    },
    {
      title: "Maps-App",
      description: "Aplicación interactiva de mapas con búsqueda de direcciones, marcadores personalizados y rutas. Permite al usuario visualizar el camino para llegar al lugar deseado teniendo en cuenta su ubicacion actual. Integra API de Mapbox para visualización en tiempo real y almacena historial de búsquedas. Manejo de geolocalización y manejo de estados complejos con Context API.",
      tech: ["Next.js", "OpenAI API", "Tailwind CSS", "Supabase"],
      image: "/MapsApp3-4.jpg",
      github: "https://github.com/GonzaloPenia/ReactADV",
      live: "#",
    },
  ]



export const Projects = () => {
  return (
    <>
      <section id="projects" className="py-20 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Mis projectos</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Echa un vistazo a los projectos que estuve desarrollando.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-video overflow-hidden">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="scale-50"
                  />
                </div>
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="outline">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex gap-2">
                    <Button size="sm" variant="outline" asChild>
                      <a href={project.github} target='_blank'>
                        <Github className="mr-2 h-4 w-4" />
                        Código
                      </a>
                    </Button>
                    {/* <Button size="sm" asChild>
                      <a href={project.live}>
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Live Demo
                      </a>
                    </Button> */}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
