"use client"

import { useEffect, useState } from "react"
import { useSearchParams } from "next/navigation"
import { VehicleFilters } from "@/components/vehicle/vehicle-filters"
import { VehicleCard } from "@/components/vehicle/vehicle-card"
import { Button } from "@/components/ui/button"
import { Select } from "@/components/ui/select"
import { ChevronDown } from "lucide-react"

interface Vehicle {
  id: string
  title: string
  year: string
  mileage: number
  price: number
  hasReport: boolean
  planType: "BASIC" | "INTERMEDIATE" | "PREMIUM"
  location: string
}

export default function VehiclesPage() {
  const searchParams = useSearchParams()
  const [vehicles, setVehicles] = useState<Vehicle[]>([])
  const [total, setTotal] = useState(0)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchVehicles = async () => {
      setIsLoading(true)
      try {
        const query = searchParams.get("q") || ""
        const response = await fetch(`/api/vehicles?q=${query}`)
        const data = await response.json()
        setVehicles(data.vehicles)
        setTotal(data.total)
      } catch (error) {
        console.error("Erro ao buscar veículos:", error)
      } finally {
        setIsLoading(false)
      }
    }

    fetchVehicles()
  }, [searchParams])

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-sm text-gray-600 mb-6">
        <a href="/" className="hover:text-navy-600">Home</a>
        <span>/</span>
        <a href="/veiculos" className="hover:text-navy-600">Carros</a>
        <span>/</span>
        <span className="text-gray-900">São Paulo</span>
      </div>

      <div className="flex flex-col md:flex-row gap-8">
        {/* Filtros */}
        <aside className="md:w-[280px] shrink-0">
          <VehicleFilters />
        </aside>

        {/* Listagem */}
        <main className="flex-1">
          <div className="flex flex-col gap-6">
            {/* Header */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
              <div>
                <h1 className="text-2xl font-bold text-gray-900">
                  Carros usados, seminovos e novos em São Paulo
                </h1>
                <p className="text-gray-600">{total} anúncios encontrados</p>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sm text-gray-600">Ordenar por:</span>
                <Select defaultValue="relevantes">
                  <option value="relevantes">Mais relevantes</option>
                  <option value="recentes">Mais recentes</option>
                  <option value="menor-preco">Menor preço</option>
                  <option value="maior-preco">Maior preço</option>
                </Select>
              </div>
            </div>

            {/* Grid de Veículos */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {isLoading ? (
                // Esqueletos de loading
                Array.from({ length: 6 }).map((_, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-lg border border-gray-200 overflow-hidden animate-pulse"
                  >
                    <div className="aspect-[4/3] bg-gray-200" />
                    <div className="p-4 space-y-3">
                      <div className="h-4 bg-gray-200 rounded w-3/4" />
                      <div className="h-4 bg-gray-200 rounded w-1/2" />
                      <div className="h-6 bg-gray-200 rounded w-1/3" />
                    </div>
                  </div>
                ))
              ) : (
                vehicles.map((vehicle) => (
                  <VehicleCard key={vehicle.id} {...vehicle} />
                ))
              )}
            </div>

            {/* Paginação */}
            {!isLoading && vehicles.length > 0 && (
              <div className="flex justify-center mt-8">
                <div className="flex items-center gap-2">
                  <Button variant="outline" className="w-10 h-10 p-0">
                    1
                  </Button>
                  <Button variant="outline" className="w-10 h-10 p-0">
                    2
                  </Button>
                  <Button variant="outline" className="w-10 h-10 p-0">
                    3
                  </Button>
                  <span className="mx-2">...</span>
                  <Button variant="outline" className="w-10 h-10 p-0">
                    42
                  </Button>
                  <Button variant="outline" className="w-10 h-10 p-0">
                    <ChevronDown className="h-4 w-4 rotate-[-90deg]" />
                  </Button>
                </div>
              </div>
            )}

            {/* Mensagem de nenhum resultado */}
            {!isLoading && vehicles.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-600">
                  Nenhum veículo encontrado com os filtros selecionados.
                </p>
              </div>
            )}
          </div>
        </main>
      </div>
    </div>
  )
} 