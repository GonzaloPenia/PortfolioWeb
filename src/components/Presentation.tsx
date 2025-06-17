import { Button } from './ui/button'
import { Download, Github, Linkedin } from 'lucide-react'


export const Presentation = () => {
  return (
    <>
          {/* Presentation Section */}
      <section id="home" className="pt-16 min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <div className="mb-8">
              <div className="w-32 h-32 mx-auto mb-6 flex items-center justify-center">
                  <img src="/FotoPerfil.jpg" className="rounded-full"/>
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Hola! Soy <span className="text-primary">Gonzalo Peña.</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Full Stack Developer apasionado por la tecnologia.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              
              <Button size="lg" onClick={() => {
                const link = document.createElement('a');
                link.href = '/CV-GonzaloPeña.pdf';
                link.download = 'CV-GonzaloPeña.pdf';
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
              }}>
                <Download className="mr-2 h-4 w-4" />
                Descarga mi CV.
              </Button>
              

            </div>
            <div className="flex justify-center space-x-6 mt-8">
              <a href='https://github.com/GonzaloPenia' target='_blank' className="text-muted-foreground hover:text-primary transition-colors">
                <Github className="h-6 w-6" />
              </a>
              <a href='https://www.linkedin.com/in/gonzalo-penia/' target='_blank' className="text-muted-foreground hover:text-primary transition-colors">
                <Linkedin className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
