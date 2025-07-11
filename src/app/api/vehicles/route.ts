import { NextResponse } from "next/server"

// Mock data para demonstração
const vehicles = [
  {
    id: "1",
    title: "Toyota Corolla XEi",
    year: "2021/2022",
    mileage: 45000,
    price: 98900,
    hasReport: true,
    planType: "PREMIUM",
    location: "São Paulo - SP",
    seller: "loja",
    features: ["airbag", "alarme", "ar-condicionado", "trava-eletrica", "vidro-eletrico"],
    transmission: "automatico",
    fuel: "flex",
    licensePlate: "1",
    armored: false,
    color: "preto",
    bodyType: "sedan",
    auction: false,
    category: "seminovo",
    specialOffer: true,
    characteristics: ["unico-dono", "ipva-pago", "aceita-troca"],
  },
  {
    id: "2",
    title: "Honda Civic EXL",
    year: "2020/2021",
    mileage: 62000,
    price: 89900,
    hasReport: true,
    planType: "INTERMEDIATE",
    location: "São Paulo - SP",
    seller: "particular",
    features: ["airbag", "ar-condicionado", "trava-eletrica", "vidro-eletrico"],
    transmission: "automatico",
    fuel: "gasolina",
    licensePlate: "2",
    armored: false,
    color: "prata",
    bodyType: "sedan",
    auction: false,
    category: "usado",
    specialOffer: false,
    characteristics: ["aceita-troca"],
  },
  {
    id: "3",
    title: "Jeep Compass Limited",
    year: "2022/2022",
    mileage: 38000,
    price: 142900,
    hasReport: false,
    planType: "PREMIUM",
    location: "São Paulo - SP",
    seller: "loja",
    features: ["airbag", "alarme", "ar-condicionado", "trava-eletrica", "vidro-eletrico"],
    transmission: "automatico",
    fuel: "diesel",
    licensePlate: "3",
    armored: false,
    color: "branco",
    bodyType: "suv",
    auction: false,
    category: "seminovo",
    specialOffer: true,
    characteristics: ["garantia-fabrica", "ipva-pago"],
  },
]

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  
  // Filtros de texto
  const query = searchParams.get("q")?.toLowerCase() || ""
  const location = searchParams.get("location")?.toLowerCase()
  
  // Filtros de seleção única
  const seller = searchParams.get("seller")
  const transmission = searchParams.get("transmission")
  const fuel = searchParams.get("fuel")
  const licensePlate = searchParams.get("licensePlate")
  const color = searchParams.get("color")
  const bodyType = searchParams.get("bodyType")
  const category = searchParams.get("category")
  
  // Filtros booleanos
  const armored = searchParams.get("armored") === "true"
  const auction = searchParams.get("auction") === "true"
  const specialOffer = searchParams.get("specialOffer") === "true"
  
  // Arrays de filtros
  const features = searchParams.getAll("features")
  const characteristics = searchParams.getAll("characteristics")
  
  // Ranges
  const priceMin = Number(searchParams.get("priceMin")) || 0
  const priceMax = Number(searchParams.get("priceMax")) || Infinity
  const yearMin = Number(searchParams.get("yearMin")) || 0
  const yearMax = Number(searchParams.get("yearMax")) || Infinity
  const kmMin = Number(searchParams.get("kmMin")) || 0
  const kmMax = Number(searchParams.get("kmMax")) || Infinity

  // Filtra os veículos baseado em todos os critérios
  const filteredVehicles = vehicles.filter((vehicle) => {
    // Texto
    if (query && !vehicle.title.toLowerCase().includes(query)) return false
    if (location && !vehicle.location.toLowerCase().includes(location)) return false
    
    // Seleção única
    if (seller && vehicle.seller !== seller) return false
    if (transmission && vehicle.transmission !== transmission) return false
    if (fuel && vehicle.fuel !== fuel) return false
    if (licensePlate && vehicle.licensePlate !== licensePlate) return false
    if (color && vehicle.color !== color) return false
    if (bodyType && vehicle.bodyType !== bodyType) return false
    if (category && vehicle.category !== category) return false
    
    // Booleanos
    if (armored !== undefined && vehicle.armored !== armored) return false
    if (auction !== undefined && vehicle.auction !== auction) return false
    if (specialOffer !== undefined && vehicle.specialOffer !== specialOffer) return false
    
    // Arrays
    if (features.length > 0 && !features.every(f => vehicle.features.includes(f))) return false
    if (characteristics.length > 0 && !characteristics.every(c => vehicle.characteristics.includes(c))) return false
    
    // Ranges
    const vehicleYear = Number(vehicle.year.split("/")[0])
    if (vehicleYear < yearMin || vehicleYear > yearMax) return false
    if (vehicle.price < priceMin || vehicle.price > priceMax) return false
    if (vehicle.mileage < kmMin || vehicle.mileage > kmMax) return false

    return true
  })

  // Simula um delay de rede
  await new Promise((resolve) => setTimeout(resolve, 500))

  return NextResponse.json({
    vehicles: filteredVehicles,
    total: filteredVehicles.length,
  })
} 