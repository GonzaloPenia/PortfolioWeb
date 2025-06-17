import { X } from 'lucide-react'
import { useScrollTo } from '../helpers/useScrollTo'

export const Navigator = () => {
  const { scrollToSection, activeSection } = useScrollTo();

  const navigationItems = [
    { label: "Home", id: "home" },
    { label: "Sobre mí", id: "sobre-mi" },
    { label: "Skills", id: "skills" },
    { label: "Projectos", id: "proyectos" },
    { label: "Experiencia", id: "experiencia" },
    { label: "Contacto", id: "contacto" }
  ];

  const handleNavigationClick = (sectionId: string) => {
    scrollToSection(sectionId);
  };

  return (
    <>
    {/* Navigation */}
      <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-md border-b z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="font-bold text-xl">Portfolio - Gonzalo Peña</div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {navigationItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavigationClick(item.id)}
                  className={`text-sm font-medium transition-colors hover:text-primary cursor-pointer ${
                    activeSection === item.id ? 'text-primary' : 'text-muted-foreground'
                  }`}
                >
                  {item.label}
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
