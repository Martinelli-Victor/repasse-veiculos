import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

interface VehicleCardProps {
  id: string
  title: string
  year: string
  mileage: number
  price: number
  imageUrl?: string
  hasReport?: boolean
  planType?: "BASIC" | "INTERMEDIATE" | "PREMIUM"
}

export function VehicleCard({
  id,
  title,
  year,
  mileage,
  price,
  imageUrl,
  hasReport,
  planType,
}: VehicleCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden group">
      <div className="relative h-48 bg-gray-200">
        {imageUrl ? (
          <Image
            src={imageUrl}
            alt={title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-gray-400">
            Sem imagem
          </div>
        )}
        {planType === "PREMIUM" && (
          <div className="absolute top-2 right-2 bg-navy-600 text-white px-2 py-1 rounded text-xs">
            Top Repasse
          </div>
        )}
        {hasReport && (
          <div className="absolute top-2 left-2 bg-green-600 text-white px-2 py-1 rounded text-xs">
            Com Laudo
          </div>
        )}
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-lg mb-2 group-hover:text-navy-600 transition-colors">
          {title}
        </h3>
        <p className="text-gray-600 text-sm mb-2">
          {year} • {mileage.toLocaleString("pt-BR")} km
        </p>
        <div className="flex justify-between items-center">
          <span className="text-2xl font-bold text-navy-600">
            {price.toLocaleString("pt-BR", {
              style: "currency",
              currency: "BRL",
            })}
          </span>
          <Link href={`/veiculos/${id}`}>
            <Button variant="outline" size="sm">
              Ver Detalhes
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
} 