import { X } from 'lucide-react'


export const Navigator = () => {
  return (
    <>
    {/* Navigation */}
      <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-md border-b z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="font-bold text-xl">Portfolio - Gonzalo Peña</div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {["Home", "Sobre mí", "Skills", "Projectos", "Experiencia", "Contacto"].map((item) => (
                <button
                  key={item}
                  className={`text-sm font-medium transition-colors hover:text-primary `}
                >
                  {item}
                </button>
              ))}
            </div>

            {/* Mobile Navigation Button */}
            <button className="md:hidden">
              <X className="h-6 w-6" /> 
            </button>
          </div>

        </div>
      </nav>
    </>
  )
}
