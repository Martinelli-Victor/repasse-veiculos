"use client"

import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { FileText, MapPin, Star } from "lucide-react"

interface VehicleCardProps {
  id: string
  title: string
  year: string
  mileage: number
  price: number
  hasReport: boolean
  planType: "BASIC" | "INTERMEDIATE" | "PREMIUM"
}

export function VehicleCard({
  id,
  title,
  year,
  mileage,
  price,
  hasReport,
  planType,
}: VehicleCardProps) {
  return (
    <div className="group bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow">
      {/* Imagem */}
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src="https://via.placeholder.com/400x300"
          alt={title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <Button
          variant="ghost"
          size="icon"
          className="absolute top-2 right-2 bg-white/80 hover:bg-white"
        >
          <Star className="h-5 w-5" />
        </Button>
      </div>

      {/* Conteúdo */}
      <div className="p-4">
        {/* Título e Badges */}
        <div className="flex items-start justify-between gap-2 mb-2">
          <h3 className="font-semibold text-gray-900 line-clamp-2">{title}</h3>
          <div className="flex flex-col items-end gap-1">
            {planType === "PREMIUM" && (
              <Badge variant="premium">Premium</Badge>
            )}
            {hasReport && (
              <Badge variant="outline" className="gap-1">
                <FileText className="h-3 w-3" />
                Laudo
              </Badge>
            )}
          </div>
        </div>

        {/* Informações */}
        <div className="space-y-2">
          <div className="flex items-center justify-between text-sm">
            <span className="text-gray-600">{year}</span>
            <span className="text-gray-600">{mileage.toLocaleString()} km</span>
          </div>
          <div className="flex items-center gap-1 text-sm text-gray-600">
            <MapPin className="h-4 w-4" />
            <span>São Paulo - SP</span>
          </div>
        </div>

        {/* Preço */}
        <div className="mt-4">
          <span className="text-xs text-gray-600">Preço</span>
          <div className="text-2xl font-bold text-gray-900">
            {price.toLocaleString("pt-BR", {
              style: "currency",
              currency: "BRL",
            })}
          </div>
        </div>
      </div>
    </div>
  )
} 