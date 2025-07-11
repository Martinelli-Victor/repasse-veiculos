"use client"

import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, FileText, Handshake, Check } from "lucide-react"

export default function Home() {
  const router = useRouter()

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    const formData = new FormData(e.target as HTMLFormElement)
    const query = formData.get("search")
    router.push(`/veiculos?q=${query}`)
  }

  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative h-[500px] flex items-center justify-center bg-gradient-to-r from-navy-900 to-navy-700 text-white">
        <div className="absolute inset-0 bg-[url('/hero-bg.jpg')] bg-cover bg-center mix-blend-overlay opacity-20" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Encontre o veículo perfeito para você
            </h1>
            <p className="text-lg md:text-xl mb-8 text-gray-200">
              Mais de 180.000 veículos com as melhores ofertas do mercado
            </p>
            
            {/* Barra de Pesquisa */}
            <form onSubmit={handleSearch} className="flex gap-2">
              <Input
                type="text"
                name="search"
                placeholder="Digite marca, modelo ou palavra-chave..."
                className="h-12 bg-white/10 border-white/20 text-white placeholder:text-gray-300"
              />
              <Button type="submit" className="h-12 px-6">
                <Search className="h-5 w-5" />
              </Button>
            </form>
          </div>
        </div>
      </section>

      {/* Como Funciona */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Como funciona</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-navy-100 rounded-full flex items-center justify-center">
                <Search className="h-8 w-8 text-navy-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Busque</h3>
              <p className="text-gray-600">
                Encontre o veículo ideal com nossa busca inteligente
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-navy-100 rounded-full flex items-center justify-center">
                <FileText className="h-8 w-8 text-navy-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Compare</h3>
              <p className="text-gray-600">
                Analise preços, condições e laudos técnicos
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-navy-100 rounded-full flex items-center justify-center">
                <Handshake className="h-8 w-8 text-navy-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Negocie</h3>
              <p className="text-gray-600">
                Faça sua proposta e feche negócio com segurança
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Planos */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Escolha o melhor plano para você
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg border border-gray-200">
              <h3 className="text-xl font-semibold mb-4">Básico</h3>
              <p className="text-gray-600 mb-6">
                Ideal para quem está começando
              </p>
              <div className="text-3xl font-bold mb-6">R$ 99/mês</div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-2">
                  <Check className="h-5 w-5 text-green-500" />
                  <span>Até 3 anúncios ativos</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-5 w-5 text-green-500" />
                  <span>Fotos ilimitadas</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-5 w-5 text-green-500" />
                  <span>Suporte básico</span>
                </li>
              </ul>
              <Button className="w-full" variant="outline">
                Começar agora
              </Button>
            </div>
            <div className="bg-white p-8 rounded-lg border-2 border-navy-600 relative">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-navy-600 text-white px-4 py-1 rounded-full text-sm">
                Mais popular
              </div>
              <h3 className="text-xl font-semibold mb-4">Intermediário</h3>
              <p className="text-gray-600 mb-6">
                Para vendedores profissionais
              </p>
              <div className="text-3xl font-bold mb-6">R$ 199/mês</div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-2">
                  <Check className="h-5 w-5 text-green-500" />
                  <span>Até 10 anúncios ativos</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-5 w-5 text-green-500" />
                  <span>Destaque nos resultados</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-5 w-5 text-green-500" />
                  <span>Relatórios de performance</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-5 w-5 text-green-500" />
                  <span>Suporte prioritário</span>
                </li>
              </ul>
              <Button className="w-full">Começar agora</Button>
            </div>
            <div className="bg-white p-8 rounded-lg border border-gray-200">
              <h3 className="text-xl font-semibold mb-4">Premium</h3>
              <p className="text-gray-600 mb-6">
                Para grandes revendas
              </p>
              <div className="text-3xl font-bold mb-6">R$ 399/mês</div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-2">
                  <Check className="h-5 w-5 text-green-500" />
                  <span>Anúncios ilimitados</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-5 w-5 text-green-500" />
                  <span>Máximo destaque</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-5 w-5 text-green-500" />
                  <span>API de integração</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-5 w-5 text-green-500" />
                  <span>Gestor de conta dedicado</span>
                </li>
              </ul>
              <Button className="w-full" variant="outline">
                Começar agora
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
