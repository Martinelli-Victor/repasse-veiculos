import Link from "next/link"
import { Car, Mail, Phone, MapPin, Facebook, Instagram, Linkedin, Youtube } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-white border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo e Descrição */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Car className="h-6 w-6 text-navy-600" />
              <span className="text-xl font-bold text-gray-900">AutoRepasse</span>
            </div>
            <p className="text-gray-600">
              A plataforma mais segura para repasse de veículos seminovos e usados.
            </p>
          </div>

          {/* Links Rápidos */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-900">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/veiculos" className="text-gray-600 hover:text-navy-600">
                  Veículos
                </Link>
              </li>
              <li>
                <Link href="/como-funciona" className="text-gray-600 hover:text-navy-600">
                  Como Funciona
                </Link>
              </li>
              <li>
                <Link href="/planos" className="text-gray-600 hover:text-navy-600">
                  Planos
                </Link>
              </li>
              <li>
                <Link href="/contato" className="text-gray-600 hover:text-navy-600">
                  Contato
                </Link>
              </li>
            </ul>
          </div>

          {/* Suporte */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-900">Suporte</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/ajuda" className="text-gray-600 hover:text-navy-600">
                  Central de Ajuda
                </Link>
              </li>
              <li>
                <Link href="/politica-privacidade" className="text-gray-600 hover:text-navy-600">
                  Política de Privacidade
                </Link>
              </li>
              <li>
                <Link href="/termos" className="text-gray-600 hover:text-navy-600">
                  Termos de Uso
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-gray-600 hover:text-navy-600">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-900">Contato</h3>
            <ul className="space-y-2">
              <li className="flex items-center text-gray-600">
                <Mail className="h-5 w-5 mr-2 text-navy-600" />
                contato@autorepasse.com.br
              </li>
              <li className="flex items-center text-gray-600">
                <Phone className="h-5 w-5 mr-2 text-navy-600" />
                (11) 3333-4444
              </li>
              <li className="flex items-center text-gray-600">
                <MapPin className="h-5 w-5 mr-2 text-navy-600" />
                São Paulo, SP
              </li>
            </ul>
          </div>
        </div>

        {/* Redes Sociais e Copyright */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-600">
              © 2024 AutoRepasse. Todos os direitos reservados.
            </div>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <Link href="#" className="text-gray-600 hover:text-navy-600">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-600 hover:text-navy-600">
                <Instagram className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-600 hover:text-navy-600">
                <Linkedin className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-600 hover:text-navy-600">
                <Youtube className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
} 