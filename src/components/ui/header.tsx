import Link from "next/link"
import { Button } from "./button"
import { Search, User, Bell, Menu, Car } from "lucide-react"

export default function Header() {
  return (
    <header className="bg-white border-b border-gray-200 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <Car className="h-6 w-6 text-navy-800" />
            <span className="text-xl font-bold text-gray-900">AutoRepasse</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/veiculos" className="text-gray-800 hover:text-navy-800 font-semibold">
              Veículos
            </Link>
            <Link href="/como-funciona" className="text-gray-800 hover:text-navy-800 font-semibold">
              Como Funciona
            </Link>
            <Link href="/planos" className="text-gray-800 hover:text-navy-800 font-semibold">
              Planos
            </Link>
            <Link href="/contato" className="text-gray-800 hover:text-navy-800 font-semibold">
              Contato
            </Link>
          </nav>

          {/* Auth Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button 
              variant="outline" 
              className="bg-white border-2 border-gray-300 text-gray-800 hover:text-navy-800 hover:border-navy-800 font-medium"
            >
              Entrar
            </Button>
            <Button className="bg-navy-800 hover:bg-navy-900 text-white font-medium">
              Anunciar
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button variant="ghost" className="md:hidden text-gray-800">
            <Menu className="h-6 w-6" />
          </Button>
        </div>
      </div>
    </header>
  )
} 