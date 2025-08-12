import { Badge } from "./ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card"


const experience = [
    {
      title: "Junior FullStack Developer",
      company: "Byte",
      period: "03/25 – Actualidad.",
      description:
        "Desarrollo y mantenimiento de sitios web y aplicaciones web a medida. Implementación de bases de datos relacionales y no relacionales dependiendo los requerimientos. Gestión de proyectos, comunicación directa con clientes, entendimiento de los requerimientos y entrega de soluciones optimizadas.",
    },
    {
      title: "Servicio Téc. de Computación - Tecnico en Electrónica",
      company: "STP.",
      period: "10/22 – 02/25.",
      description:
        "Armado, mantenimiento y reparación de PC. Instalación de software, recuperación de datos y mantenimiento preventivo. Atención personalizada al cliente y gestión de soluciones técnicas.",
    },
    {
      title: " Operario eléctrico - Técnico en Electromecánica.",
      company: "MECA Electromecánica.",
      period: "10/21 – 11/22.",
      description:
        "Soporte técnico en tareas electromecánicas y mantenimiento general. Colaboración en la instalación y reparación de sistemas eléctricos y electrónicos. Encargado del control del stock y equipos.",
    },
  ]

export const Experience = () => {
  return (
    <>
      {/* Experience Section */}
      <section id="experience" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Experiencia laboral</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Un resumen de mi experiencia laboral.
            </p>
          </div>
          <div className="max-w-3xl mx-auto">
            {experience.map((exp, index) => (
              <div key={index} className="relative pl-8 pb-12 last:pb-0">
                <div className="absolute left-0 top-0 w-4 h-4 bg-primary rounded-full"></div>
                {index !== experience.length - 1 && (
                  <div className="absolute left-2 top-4 w-0.5 h-full bg-border -translate-x-0.5"></div>
                )}
                <Card className="ml-4">
                  <CardHeader>
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                      <CardTitle>{exp.title}</CardTitle>
                      <Badge variant="outline">{exp.period}</Badge>
                    </div>
                    <CardDescription className="text-lg font-medium">{exp.company}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{exp.description}</p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
