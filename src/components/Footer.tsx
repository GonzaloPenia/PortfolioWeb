import { Github, Linkedin } from 'lucide-react';

export const Footer = () => {
  return (
    <>
            {/* Footer */}
      <footer className="py-8 border-t">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-muted-foreground">© 2025 Gonzalo José Peña Franco. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href='https://github.com/GonzaloPenia' target='_blank' className="text-muted-foreground hover:text-primary transition-colors">
                <Github className="h-5 w-5" />
              </a>
              <a href='https://www.linkedin.com/in/gonzalo-penia/' target='_blank' className="text-muted-foreground hover:text-primary transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}
