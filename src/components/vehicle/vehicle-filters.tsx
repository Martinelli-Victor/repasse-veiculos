"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import { Car, DollarSign, MapPin, Image, Truck, RefreshCw } from "lucide-react"
import { useState } from "react"

export function VehicleFilters() {
  const [priceRange, setPriceRange] = useState({ min: "", max: "" })
  const [yearRange, setYearRange] = useState({ min: "", max: "" })
  const [kmRange, setKmRange] = useState({ min: "", max: "" })

  return (
    <div className="w-full max-w-[280px] bg-white rounded-lg border border-gray-200">
      <div className="p-4 border-b border-gray-200">
        <h3 className="font-semibold text-lg text-gray-900">Filtros aplicados</h3>
        <Button 
          variant="link" 
          className="text-navy-600 p-0 h-auto font-semibold"
          onClick={() => {
            setPriceRange({ min: "", max: "" })
            setYearRange({ min: "", max: "" })
            setKmRange({ min: "", max: "" })
          }}
        >
          Limpar todos
        </Button>
      </div>

      <div className="p-4 border-b border-gray-200">
        <h4 className="font-medium text-gray-900 mb-3">Localização</h4>
        <Input
          type="text"
          placeholder="Digite sua cidade ou estado"
          className="mb-2"
        />
      </div>

      <div className="p-4 border-b border-gray-200">
        <h4 className="font-medium text-gray-900 mb-3">O que é interessante para você?</h4>
        <div className="space-y-3">
          <div className="flex items-center">
            <Checkbox id="mega-feirao" />
            <label htmlFor="mega-feirao" className="ml-2 text-sm text-gray-700">
              Mega Feirão
            </label>
          </div>
          <div className="flex items-center">
            <Checkbox id="vistoriado" />
            <label htmlFor="vistoriado" className="ml-2 text-sm text-gray-700">
              Vistoriado
            </label>
          </div>
          <div className="flex items-center">
            <Checkbox id="visao-360" />
            <label htmlFor="visao-360" className="ml-2 text-sm text-gray-700">
              Visão 360°
            </label>
          </div>
          <div className="flex items-center">
            <Checkbox id="super-preco" />
            <label htmlFor="super-preco" className="ml-2 text-sm text-gray-700">
              Super preço
            </label>
          </div>
          <div className="flex items-center">
            <Checkbox id="troca-com-troco" />
            <label htmlFor="troca-com-troco" className="ml-2 text-sm text-gray-700">
              Troca com troco
            </label>
          </div>
          <div className="flex items-center">
            <Checkbox id="car-delivery" />
            <label htmlFor="car-delivery" className="ml-2 text-sm text-gray-700">
              Car Delivery
            </label>
          </div>
          <div className="flex items-center">
            <Checkbox id="apenas-fotos" />
            <label htmlFor="apenas-fotos" className="ml-2 text-sm text-gray-700">
              Apenas anúncios com foto
            </label>
          </div>
        </div>
      </div>

      <div className="p-4 border-b border-gray-200">
        <h4 className="font-medium text-gray-900 mb-3">Novo/Usado</h4>
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Checkbox id="novos" />
              <label htmlFor="novos" className="ml-2 text-sm text-gray-700">
                Novos
              </label>
            </div>
            <span className="text-sm text-gray-500">(21.712)</span>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Checkbox id="usados" />
              <label htmlFor="usados" className="ml-2 text-sm text-gray-700">
                Usados
              </label>
            </div>
            <span className="text-sm text-gray-500">(163.140)</span>
          </div>
        </div>
      </div>

      <div className="p-4 border-b border-gray-200">
        <h4 className="font-medium text-gray-900 mb-3">Faixa de Preço</h4>
        <div className="grid grid-cols-2 gap-2">
          <Input
            type="text"
            placeholder="Mínimo"
            value={priceRange.min}
            onChange={(e) => setPriceRange({ ...priceRange, min: e.target.value })}
          />
          <Input
            type="text"
            placeholder="Máximo"
            value={priceRange.max}
            onChange={(e) => setPriceRange({ ...priceRange, max: e.target.value })}
          />
        </div>
      </div>

      <div className="p-4 border-b border-gray-200">
        <h4 className="font-medium text-gray-900 mb-3">Ano</h4>
        <div className="grid grid-cols-2 gap-2">
          <Input
            type="text"
            placeholder="Mínimo"
            value={yearRange.min}
            onChange={(e) => setYearRange({ ...yearRange, min: e.target.value })}
          />
          <Input
            type="text"
            placeholder="Máximo"
            value={yearRange.max}
            onChange={(e) => setYearRange({ ...yearRange, max: e.target.value })}
          />
        </div>
      </div>

      <div className="p-4 border-b border-gray-200">
        <h4 className="font-medium text-gray-900 mb-3">Quilometragem</h4>
        <div className="grid grid-cols-2 gap-2">
          <Input
            type="text"
            placeholder="Mínimo"
            value={kmRange.min}
            onChange={(e) => setKmRange({ ...kmRange, min: e.target.value })}
          />
          <Input
            type="text"
            placeholder="Máximo"
            value={kmRange.max}
            onChange={(e) => setKmRange({ ...kmRange, max: e.target.value })}
          />
        </div>
      </div>

      {/* Novos filtros */}
      <div className="p-4 border-b border-gray-200">
        <h4 className="font-medium text-gray-900 mb-3">Vendedor</h4>
        <div className="space-y-2">
          <div className="flex items-center">
            <Checkbox id="loja" />
            <label htmlFor="loja" className="ml-2 text-sm text-gray-700">
              Loja
            </label>
          </div>
          <div className="flex items-center">
            <Checkbox id="particular" />
            <label htmlFor="particular" className="ml-2 text-sm text-gray-700">
              Particular
            </label>
          </div>
          <div className="flex items-center">
            <Checkbox id="leilao" />
            <label htmlFor="leilao" className="ml-2 text-sm text-gray-700">
              Leilão
            </label>
          </div>
        </div>
      </div>

      <div className="p-4 border-b border-gray-200">
        <h4 className="font-medium text-gray-900 mb-3">Itens do veículo</h4>
        <div className="space-y-2">
          <div className="flex items-center">
            <Checkbox id="airbag" />
            <label htmlFor="airbag" className="ml-2 text-sm text-gray-700">
              Airbag
            </label>
          </div>
          <div className="flex items-center">
            <Checkbox id="alarme" />
            <label htmlFor="alarme" className="ml-2 text-sm text-gray-700">
              Alarme
            </label>
          </div>
          <div className="flex items-center">
            <Checkbox id="ar-condicionado" />
            <label htmlFor="ar-condicionado" className="ml-2 text-sm text-gray-700">
              Ar condicionado
            </label>
          </div>
          <div className="flex items-center">
            <Checkbox id="trava-eletrica" />
            <label htmlFor="trava-eletrica" className="ml-2 text-sm text-gray-700">
              Trava elétrica
            </label>
          </div>
          <div className="flex items-center">
            <Checkbox id="vidro-eletrico" />
            <label htmlFor="vidro-eletrico" className="ml-2 text-sm text-gray-700">
              Vidro elétrico
            </label>
          </div>
        </div>
      </div>

      <div className="p-4 border-b border-gray-200">
        <h4 className="font-medium text-gray-900 mb-3">Câmbio</h4>
        <div className="space-y-2">
          <div className="flex items-center">
            <Checkbox id="manual" />
            <label htmlFor="manual" className="ml-2 text-sm text-gray-700">
              Manual
            </label>
          </div>
          <div className="flex items-center">
            <Checkbox id="automatico" />
            <label htmlFor="automatico" className="ml-2 text-sm text-gray-700">
              Automático
            </label>
          </div>
          <div className="flex items-center">
            <Checkbox id="semi-automatico" />
            <label htmlFor="semi-automatico" className="ml-2 text-sm text-gray-700">
              Semi-automático
            </label>
          </div>
        </div>
      </div>

      <div className="p-4 border-b border-gray-200">
        <h4 className="font-medium text-gray-900 mb-3">Combustível</h4>
        <div className="space-y-2">
          <div className="flex items-center">
            <Checkbox id="gasolina" />
            <label htmlFor="gasolina" className="ml-2 text-sm text-gray-700">
              Gasolina
            </label>
          </div>
          <div className="flex items-center">
            <Checkbox id="etanol" />
            <label htmlFor="etanol" className="ml-2 text-sm text-gray-700">
              Etanol
            </label>
          </div>
          <div className="flex items-center">
            <Checkbox id="diesel" />
            <label htmlFor="diesel" className="ml-2 text-sm text-gray-700">
              Diesel
            </label>
          </div>
          <div className="flex items-center">
            <Checkbox id="hibrido" />
            <label htmlFor="hibrido" className="ml-2 text-sm text-gray-700">
              Híbrido
            </label>
          </div>
          <div className="flex items-center">
            <Checkbox id="eletrico" />
            <label htmlFor="eletrico" className="ml-2 text-sm text-gray-700">
              Elétrico
            </label>
          </div>
        </div>
      </div>

      <div className="p-4 border-b border-gray-200">
        <h4 className="font-medium text-gray-900 mb-3">Final da placa</h4>
        <div className="grid grid-cols-5 gap-2">
          {[0,1,2,3,4,5,6,7,8,9].map((numero) => (
            <Button
              key={numero}
              variant="outline"
              className="h-8 w-8 p-0"
            >
              {numero}
            </Button>
          ))}
        </div>
      </div>

      <div className="p-4 border-b border-gray-200">
        <h4 className="font-medium text-gray-900 mb-3">Blindagem</h4>
        <div className="space-y-2">
          <div className="flex items-center">
            <Checkbox id="blindado" />
            <label htmlFor="blindado" className="ml-2 text-sm text-gray-700">
              Blindado
            </label>
          </div>
          <div className="flex items-center">
            <Checkbox id="nao-blindado" />
            <label htmlFor="nao-blindado" className="ml-2 text-sm text-gray-700">
              Não blindado
            </label>
          </div>
        </div>
      </div>

      <div className="p-4 border-b border-gray-200">
        <h4 className="font-medium text-gray-900 mb-3">Cor</h4>
        <div className="grid grid-cols-2 gap-2">
          <div className="flex items-center">
            <Checkbox id="preto" />
            <label htmlFor="preto" className="ml-2 text-sm text-gray-700">
              Preto
            </label>
          </div>
          <div className="flex items-center">
            <Checkbox id="branco" />
            <label htmlFor="branco" className="ml-2 text-sm text-gray-700">
              Branco
            </label>
          </div>
          <div className="flex items-center">
            <Checkbox id="prata" />
            <label htmlFor="prata" className="ml-2 text-sm text-gray-700">
              Prata
            </label>
          </div>
          <div className="flex items-center">
            <Checkbox id="vermelho" />
            <label htmlFor="vermelho" className="ml-2 text-sm text-gray-700">
              Vermelho
            </label>
          </div>
          <div className="flex items-center">
            <Checkbox id="azul" />
            <label htmlFor="azul" className="ml-2 text-sm text-gray-700">
              Azul
            </label>
          </div>
          <div className="flex items-center">
            <Checkbox id="outras" />
            <label htmlFor="outras" className="ml-2 text-sm text-gray-700">
              Outras
            </label>
          </div>
        </div>
      </div>

      <div className="p-4 border-b border-gray-200">
        <h4 className="font-medium text-gray-900 mb-3">Carroceria</h4>
        <div className="space-y-2">
          <div className="flex items-center">
            <Checkbox id="hatch" />
            <label htmlFor="hatch" className="ml-2 text-sm text-gray-700">
              Hatch
            </label>
          </div>
          <div className="flex items-center">
            <Checkbox id="sedan" />
            <label htmlFor="sedan" className="ml-2 text-sm text-gray-700">
              Sedan
            </label>
          </div>
          <div className="flex items-center">
            <Checkbox id="suv" />
            <label htmlFor="suv" className="ml-2 text-sm text-gray-700">
              SUV
            </label>
          </div>
          <div className="flex items-center">
            <Checkbox id="pickup" />
            <label htmlFor="pickup" className="ml-2 text-sm text-gray-700">
              Pickup
            </label>
          </div>
        </div>
      </div>

      <div className="p-4 border-b border-gray-200">
        <h4 className="font-medium text-gray-900 mb-3">Leilão</h4>
        <div className="space-y-2">
          <div className="flex items-center">
            <Checkbox id="em-leilao" />
            <label htmlFor="em-leilao" className="ml-2 text-sm text-gray-700">
              Em leilão
            </label>
          </div>
          <div className="flex items-center">
            <Checkbox id="fora-leilao" />
            <label htmlFor="fora-leilao" className="ml-2 text-sm text-gray-700">
              Fora de leilão
            </label>
          </div>
        </div>
      </div>

      <div className="p-4 border-b border-gray-200">
        <h4 className="font-medium text-gray-900 mb-3">Categoria</h4>
        <div className="space-y-2">
          <div className="flex items-center">
            <Checkbox id="novo" />
            <label htmlFor="novo" className="ml-2 text-sm text-gray-700">
              Novo
            </label>
          </div>
          <div className="flex items-center">
            <Checkbox id="seminovo" />
            <label htmlFor="seminovo" className="ml-2 text-sm text-gray-700">
              Seminovo
            </label>
          </div>
          <div className="flex items-center">
            <Checkbox id="usado" />
            <label htmlFor="usado" className="ml-2 text-sm text-gray-700">
              Usado
            </label>
          </div>
        </div>
      </div>

      <div className="p-4 border-b border-gray-200">
        <h4 className="font-medium text-gray-900 mb-3">Ofertas</h4>
        <div className="space-y-2">
          <div className="flex items-center">
            <Checkbox id="pronta-entrega" />
            <label htmlFor="pronta-entrega" className="ml-2 text-sm text-gray-700">
              Pronta entrega
            </label>
          </div>
          <div className="flex items-center">
            <Checkbox id="oferta-especial" />
            <label htmlFor="oferta-especial" className="ml-2 text-sm text-gray-700">
              Oferta especial
            </label>
          </div>
        </div>
      </div>

      <div className="p-4 border-b border-gray-200">
        <h4 className="font-medium text-gray-900 mb-3">Características</h4>
        <div className="space-y-2">
          <div className="flex items-center">
            <Checkbox id="unico-dono" />
            <label htmlFor="unico-dono" className="ml-2 text-sm text-gray-700">
              Único dono
            </label>
          </div>
          <div className="flex items-center">
            <Checkbox id="garantia-fabrica" />
            <label htmlFor="garantia-fabrica" className="ml-2 text-sm text-gray-700">
              Garantia de fábrica
            </label>
          </div>
          <div className="flex items-center">
            <Checkbox id="ipva-pago" />
            <label htmlFor="ipva-pago" className="ml-2 text-sm text-gray-700">
              IPVA pago
            </label>
          </div>
          <div className="flex items-center">
            <Checkbox id="aceita-troca" />
            <label htmlFor="aceita-troca" className="ml-2 text-sm text-gray-700">
              Aceita troca
            </label>
          </div>
        </div>
      </div>
    </div>
  )
} 