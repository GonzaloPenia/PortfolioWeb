import { Card, CardContent } from './ui/card'
import { Input } from './ui/input'
import { Textarea } from './ui/textarea'
import { Button } from './ui/button'
import { Mail } from 'lucide-react'
import Swal from 'sweetalert2';



const emailSent = () => { 
Swal.fire({
  icon: "success",
  title: "Mensaje enviado!",
  showConfirmButton: false,
  showClass: {
    popup: `
      animate__animated
      animate__fadeInUp
      animate__faster
    `
  },
  hideClass: {
    popup: `
      animate__animated
      animate__fadeOutDown
      animate__faster
    `
  }
});
 }

export const Contact = () => {
  return (
    <>
            {/* Contact Section */}
      <section id="contact" className="py-20 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">¡Estemos en contacto!</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              ¿Quieres realizar algun proyecto en conjunto?
            </p>
          </div>
          <div className="max-w-2xl mx-auto">
            <Card>
              <CardContent className="pt-6">
                <form action="https://formsubmit.co/fc674faf2d45820a7672835ef05e2c9f" method="POST" className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-2">
                        Tu nombre
                      </label>
                      <Input id="name" type="text" name="name" placeholder="Tu nombre." />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2">
                        Email
                      </label>
                      <Input id="email" type="email" name="email" placeholder="tumail@email.com" />
                    
                    </div>
                  </div>
                  <div>
                    
                    <label htmlFor="subject" className="block text-sm font-medium mb-2">
                      Asunto
                    </label>
                    <Input id="subject" type="text" name="subject" placeholder="Asunto por el cual me contactás." />
                  </div>
                  <div>
                    
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Mensaje
                    </label>
                    <Textarea id="message" name="comments" placeholder="Escribeme un mensaje." rows={6} />
                  </div>

                  <Button  type="submit" className="w-full" onClick={emailSent}>
                    <Mail className="mr-2 h-4 w-4" />
                    Send Message
                  </Button>

                  <input type="hidden" name="_captcha" value="false"/>
                  <input type="hidden" name="_next" value="https://portfolio-web-eight-wine.vercel.app/"/>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </>
  )
}
