import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, Check } from "lucide-react"
import Header from "@/components/ui/header"
import Footer from "@/components/ui/footer"
import { VehicleCard } from "@/components/vehicle/vehicle-card"

// Mock data para demonstração
const featuredVehicles = [
  {
    id: "1",
    title: "Toyota Corolla XEi",
    year: "2021/2022",
    mileage: 45000,
    price: 98900,
    hasReport: true,
    planType: "PREMIUM" as const,
  },
  {
    id: "2",
    title: "Honda Civic EXL",
    year: "2020/2021",
    mileage: 62000,
    price: 89900,
    hasReport: true,
    planType: "INTERMEDIATE" as const,
  },
  {
    id: "3",
    title: "Jeep Compass Limited",
    year: "2022/2022",
    mileage: 38000,
    price: 142900,
    hasReport: false,
    planType: "PREMIUM" as const,
  },
]

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-b from-navy-900 to-navy-800 py-20 md:py-32">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-8 drop-shadow-lg">
                Repasse seu veículo de forma rápida e segura
              </h1>
              <p className="text-xl md:text-2xl font-bold text-white/95 mb-12 max-w-2xl mx-auto drop-shadow">
                Plataforma especializada em repasse de veículos seminovos e usados com sistema de lances e garantia
              </p>
              <div className="bg-white rounded-lg p-8 shadow-xl max-w-3xl mx-auto">
                <div className="flex flex-col md:flex-row gap-4">
                  <Input
                    type="text"
                    placeholder="Digite marca, modelo ou palavra-chave"
                    className="flex-1 text-gray-900 placeholder:text-gray-500 bg-white border-2 border-gray-200 focus:border-navy-600"
                  />
                  <Button className="bg-navy-800 hover:bg-navy-900 text-white w-full md:w-auto text-lg font-medium">
                    <Search className="mr-2 h-5 w-5" />
                    Buscar
                  </Button>
                </div>
                <div className="mt-6 flex flex-wrap justify-center gap-3">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="bg-white border-2 border-gray-300 text-gray-800 hover:text-navy-800 hover:border-navy-800 font-medium px-4 py-2"
                  >
                    Toyota Corolla
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="bg-white border-2 border-gray-300 text-gray-800 hover:text-navy-800 hover:border-navy-800 font-medium px-4 py-2"
                  >
                    Honda Civic
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="bg-white border-2 border-gray-300 text-gray-800 hover:text-navy-800 hover:border-navy-800 font-medium px-4 py-2"
                  >
                    Jeep Compass
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="bg-white border-2 border-gray-300 text-gray-800 hover:text-navy-800 hover:border-navy-800 font-medium px-4 py-2"
                  >
                    Hyundai HB20
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Como Funciona Section */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
              Como funciona
            </h2>
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="text-center">
                <div className="w-16 h-16 bg-navy-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-navy-800">1</span>
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">Anuncie seu veículo</h3>
                <p className="text-lg text-gray-800">
                  Cadastre seu veículo com fotos e informações detalhadas
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-navy-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-navy-800">2</span>
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">Receba lances</h3>
                <p className="text-lg text-gray-800">
                  Compradores interessados fazem lances no seu veículo
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-navy-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-navy-800">3</span>
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">Feche negócio</h3>
                <p className="text-lg text-gray-800">
                  Aceite o melhor lance e finalize com segurança
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Veículos em Destaque Section */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-12 text-gray-900">
              Veículos em Destaque
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {featuredVehicles.map((vehicle) => (
                <VehicleCard key={vehicle.id} {...vehicle} />
              ))}
            </div>
            <div className="text-center mt-12">
              <Button className="bg-navy-600 hover:bg-navy-700 text-white">
                Ver Todos os Veículos
              </Button>
            </div>
          </div>
        </section>

        {/* Planos Section */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold text-center mb-4 text-gray-900">
                Escolha seu Plano
              </h2>
              <p className="text-center text-gray-700 mb-12 max-w-2xl mx-auto">
                Destaque seu anúncio e aumente suas chances de um repasse rápido
              </p>
              <div className="grid md:grid-cols-3 gap-8">
                {/* Plano Básico */}
                <div className="border rounded-lg p-6 bg-white shadow-sm">
                  <h3 className="text-xl font-semibold mb-2 text-gray-900">Básico</h3>
                  <div className="text-3xl font-bold mb-4 text-navy-600">R$ 99,90</div>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-center">
                      <Check className="h-5 w-5 text-green-500 mr-2" />
                      <span className="text-gray-700">Anúncio por 30 dias</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="h-5 w-5 text-green-500 mr-2" />
                      <span className="text-gray-700">Até 8 fotos</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="h-5 w-5 text-green-500 mr-2" />
                      <span className="text-gray-700">Visibilidade padrão</span>
                    </li>
                  </ul>
                  <Button className="w-full text-gray-700 hover:text-navy-600" variant="outline">
                    Selecionar
                  </Button>
                </div>

                {/* Plano Intermediário */}
                <div className="border-2 border-navy-600 rounded-lg p-6 bg-white shadow-md relative">
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-navy-600 text-white px-4 py-1 rounded-full text-sm">
                    Mais Popular
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-900">Intermediário</h3>
                  <div className="text-3xl font-bold mb-4 text-navy-600">R$ 199,90</div>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-center">
                      <Check className="h-5 w-5 text-green-500 mr-2" />
                      <span className="text-gray-700">Anúncio por 45 dias</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="h-5 w-5 text-green-500 mr-2" />
                      <span className="text-gray-700">Até 15 fotos</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="h-5 w-5 text-green-500 mr-2" />
                      <span className="text-gray-700">Destaque nos resultados</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="h-5 w-5 text-green-500 mr-2" />
                      <span className="text-gray-700">Selo de destaque</span>
                    </li>
                  </ul>
                  <Button className="w-full bg-navy-600 hover:bg-navy-700 text-white">
                    Selecionar
                  </Button>
                </div>

                {/* Plano Premium */}
                <div className="border rounded-lg p-6 bg-white shadow-sm">
                  <h3 className="text-xl font-semibold mb-2 text-gray-900">Premium</h3>
                  <div className="text-3xl font-bold mb-4 text-navy-600">R$ 299,90</div>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-center">
                      <Check className="h-5 w-5 text-green-500 mr-2" />
                      <span className="text-gray-700">Anúncio por 60 dias</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="h-5 w-5 text-green-500 mr-2" />
                      <span className="text-gray-700">Fotos ilimitadas</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="h-5 w-5 text-green-500 mr-2" />
                      <span className="text-gray-700">Topo da lista</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="h-5 w-5 text-green-500 mr-2" />
                      <span className="text-gray-700">Selo "Top Repasse"</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="h-5 w-5 text-green-500 mr-2" />
                      <span className="text-gray-700">Destaque na home</span>
                    </li>
                  </ul>
                  <Button className="w-full text-gray-700 hover:text-navy-600" variant="outline">
                    Selecionar
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
