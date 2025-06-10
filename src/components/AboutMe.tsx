
export const AboutMe = () => {
  return (
    <>
    {/* About Section */}
      <section id="about" className="py-20 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Sobre mí.</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Permíteme presentarme:
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="/FotoPerfil.jpg" 
                alt="Profile"
                className="rounded-lg shadow-lg w-full max-w-md mx-auto"
              />
            </div>
            <div className="space-y-6">

              <p className="text-lg leading-relaxed">
                Soy una persona con alta capacidad de aprendizaje y
                competencias cómo el trabajo en equipo y buena
                comunicación. Me apasiona la tecnología y me enfoco
                en el aprendizaje constante a través del descubrimiento,
                lo que me motiva a enfrentar nuevos desafíos y crecer
                continuamente.
              </p>
              <p className="text-lg leading-relaxed">
                Además, me destaco por establecer
                buenas relaciones y mantener una actitud proactiva,
                siempre aportando lo mejor de mí tanto para alcanzar
                metas individuales como para contribuir al equipo.
              </p>
              <p className="text-lg leading-relaxed">
                Hoy a mis 27 años encuentro realizando trabajos de manera freelance y estudiando en la Universidad Tencológica Nacional.
              </p>

            </div>
          </div>
        </div>
      </section>
    </>
  )
}
