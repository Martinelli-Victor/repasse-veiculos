"use client"

import Link from "next/link"
import { Button } from "./button"
import { Search, User, Bell, Menu, Car, X } from "lucide-react"
import { useState } from "react"
import { useAuth } from "@/hooks/use-auth"
import { cn } from "@/lib/utils"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { isAuthenticated, isLoading, signIn, signOut } = useAuth()

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
            {isLoading ? (
              <div className="h-10 w-20 bg-gray-200 animate-pulse rounded-md" />
            ) : isAuthenticated ? (
              <>
                <Link href="/dashboard">
                  <Button variant="ghost" className="text-gray-800">
                    <User className="h-5 w-5 mr-2" />
                    Minha Conta
                  </Button>
                </Link>
                <Button 
                  onClick={() => signOut()}
                  variant="outline" 
                  className="bg-white border-2 border-gray-300 text-gray-800 hover:text-navy-800 hover:border-navy-800 font-medium"
                >
                  Sair
                </Button>
              </>
            ) : (
              <>
                <Button 
                  onClick={() => signIn()}
                  variant="outline" 
                  className="bg-white border-2 border-gray-300 text-gray-800 hover:text-navy-800 hover:border-navy-800 font-medium"
                >
                  Entrar
                </Button>
                <Link href="/veiculos/novo">
                  <Button className="bg-navy-800 hover:bg-navy-900 text-white font-medium">
                    Anunciar
                  </Button>
                </Link>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <Button 
            variant="ghost" 
            className="md:hidden text-gray-800"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </Button>
        </div>

        {/* Mobile Menu */}
        <div className={cn(
          "md:hidden",
          isMenuOpen ? "block" : "hidden"
        )}>
          <nav className="py-4 space-y-2">
            <Link 
              href="/veiculos" 
              className="block px-4 py-2 text-gray-800 hover:bg-gray-100 rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              Veículos
            </Link>
            <Link 
              href="/como-funciona" 
              className="block px-4 py-2 text-gray-800 hover:bg-gray-100 rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              Como Funciona
            </Link>
            <Link 
              href="/planos" 
              className="block px-4 py-2 text-gray-800 hover:bg-gray-100 rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              Planos
            </Link>
            <Link 
              href="/contato" 
              className="block px-4 py-2 text-gray-800 hover:bg-gray-100 rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              Contato
            </Link>

            <div className="pt-4 border-t border-gray-200">
              {isLoading ? (
                <div className="h-10 w-full bg-gray-200 animate-pulse rounded-md" />
              ) : isAuthenticated ? (
                <>
                  <Link 
                    href="/dashboard"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <Button variant="ghost" className="w-full justify-start text-gray-800">
                      <User className="h-5 w-5 mr-2" />
                      Minha Conta
                    </Button>
                  </Link>
                  <Button 
                    onClick={() => {
                      signOut()
                      setIsMenuOpen(false)
                    }}
                    variant="outline" 
                    className="w-full mt-2 bg-white border-2 border-gray-300 text-gray-800 hover:text-navy-800 hover:border-navy-800 font-medium"
                  >
                    Sair
                  </Button>
                </>
              ) : (
                <>
                  <Button 
                    onClick={() => {
                      signIn()
                      setIsMenuOpen(false)
                    }}
                    variant="outline" 
                    className="w-full bg-white border-2 border-gray-300 text-gray-800 hover:text-navy-800 hover:border-navy-800 font-medium"
                  >
                    Entrar
                  </Button>
                  <Link 
                    href="/veiculos/novo"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <Button className="w-full mt-2 bg-navy-800 hover:bg-navy-900 text-white font-medium">
                      Anunciar
                    </Button>
                  </Link>
                </>
              )}
            </div>
          </nav>
        </div>
      </div>
    </header>
  )
} 