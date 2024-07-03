import { Card } from "@/components/card"
import { Form } from "@/components/form"
import Image from "next/image"

interface PageProps {
  searchParams: {
    utm_term: string
    utm_medium: string
    utm_content: string
    utm_campaign: string
    utm_source: string
  }
}

export default function Page({ searchParams }: PageProps) {
  return (
    <>
      <header className="relative w-full min-h-screen flex items-center justify-center bg-gradient-to-br from-[#01b01322] to-[#01b01343] pb-12 sm:pb-0 pt-12 sm:pt-0 px-4">
        <div className="flex flex-col items-center gap-8 sm:gap-12 max-w-6xl text-center">
          <div className="flex flex-col items-center">
            <div className="mb-4 w-[124px] sm:w-[164px]">
              <Image
                src="/images/logo.png"
                alt="Logo Solutio Gás"
                width={392}
                height={166}
              />
            </div>
            <h6 className="uppercase tracking-widest text-xs sm:text-sm font-semibold flex items-center gap-1">
              <span>O que você terá acesso no E-Book</span>
              <svg className="w-8 h-8 fill-zinc-950 -translate-y-[2px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960">
                <path d="M459-381 314-526q-3-3-4.5-6.5T308-540q0-8 5.5-14t14.5-6h304q9 0 14.5 6t5.5 14q0 2-6 14L501-381q-5 5-10 7t-11 2q-6 0-11-2t-10-7Z" />
              </svg>
            </h6>
            <h1 className="text-[#303030] font-extrabold text-3xl sm:text-5xl leading-8"><span className="text-[#01b013]">21 estratégias</span> para nunca mais perder um cliente da sua revenda de gás</h1>
          </div>

          <div className="flex flex-col sm:grid sm:grid-cols-3 gap-4">
            <Card
              icon={<svg className="h-8 w-8 fill-[#01b013]" xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960">
                <path d="M80-160q-17 0-28.5-11.5T40-200q0-17 11.5-28.5T80-240h160v-80H120q-17 0-28.5-11.5T80-360q0-17 11.5-28.5T120-400h120v-80h-78q-17 0-28.5-11.5T122-520q0-17 11.5-28.5T162-560h78v-118l-61-132q-7-15-1.5-30.5T198-863q15-7 30.5-1.5T251-844l77 164h464l-61-130q-7-15-1.5-30.5T750-863q15-7 30.5-1.5T803-844l69 148q4 8 6 16.5t2 17.5v422q0 33-23.5 56.5T800-160H80Zm400-280h160q17 0 28.5-11.5T680-480q0-17-11.5-28.5T640-520H480q-17 0-28.5 11.5T440-480q0 17 11.5 28.5T480-440ZM320-240h480v-360H320v360Zm0 0v-360 360Z" />
              </svg>}
              text="A pontualidade na entrega é crucial pra manter a satisfação do cliente e garantir sua fidelidade."
              title="Nunca mais atrase um pedido"
            />
            <Card
              icon={<svg className="h-8 w-8 fill-[#01b013]" xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="m520-473 90 90q11 11 11 27.5T610-327q-12 12-28.5 12T553-327L452-428q-6-6-9-13.5t-3-15.5v-143q0-17 11.5-28.5T480-640q17 0 28.5 11.5T520-600v127Zm-40-247q-17 0-28.5-11.5T440-760v-40h80v40q0 17-11.5 28.5T480-720Zm240 240q0-17 11.5-28.5T760-520h40v80h-40q-17 0-28.5-11.5T720-480ZM480-240q17 0 28.5 11.5T520-200v40h-80v-40q0-17 11.5-28.5T480-240ZM240-480q0 17-11.5 28.5T200-440h-40v-80h40q17 0 28.5 11.5T240-480ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm320-400q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93q134 0 227-93t93-227Zm-320 0Z" /></svg>}
              title="Antecipe pedidos dos clientes"
              text="Garantir que seus clientes nunca fiquem sem gás e tenham preferência pela sua revenda!"
            />
            <Card
              icon={<svg className="h-8 w-8 fill-[#01b013]" xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M486-314q33 0 56.5-15.5T566-378q0-29-24.5-47T454-466q-59-21-86.5-50T340-592q0-41 28.5-74.5T446-710v-15q0-14 10.5-24.5T481-760q14 0 24.5 10.5T516-725v15q29 2 53.5 19.5T609-648q7 11 1 23.5T590-607q-13 5-26 1t-21-15q-10-12-25-19.5t-36-7.5q-35 0-53.5 15T410-592q0 26 23 41t83 35q72 26 96 61t24 77q0 29-10 51t-26.5 37.5Q583-274 561-264.5T514-250v15q0 14-10.5 24.5T479-200q-14 0-24.5-10.5T444-235v-17q-38-8-65-30t-43-56q-6-14 .5-27t20.5-18q13-5 26 .5t20 17.5q14 26 35.5 38.5T486-314Zm-6 274q-112 0-206-51T120-227v67q0 17-11.5 28.5T80-120q-17 0-28.5-11.5T40-160v-160q0-17 11.5-28.5T80-360h160q17 0 28.5 11.5T280-320q0 17-11.5 28.5T240-280h-59q48 72 126.5 116T480-120q141 0 242.5-94T838-445q2-16 14-25.5t28-9.5q17 0 29 10.5t10 25.5q-7 85-44 158.5t-96 128q-59 54.5-135.5 86T480-40Zm0-800q-141 0-242.5 94T122-515q-2 16-14 25.5T80-480q-17 0-29-10.5T41-516q7-85 44-158.5t96-128q59-54.5 135.5-86T480-920q112 0 206 51t154 136v-67q0-17 11.5-28.5T880-840q17 0 28.5 11.5T920-800v160q0 17-11.5 28.5T880-600H720q-17 0-28.5-11.5T680-640q0-17 11.5-28.5T720-680h59q-48-72-126.5-116T480-840Z" /></svg>}
              title="Controle financeiro"
              text="Essencial para aumentar o lucro em qualquer negócio, e na revenda de gás não é diferente!"
            />
          </div>

          <Form {...searchParams} />

        </div>
        <div className="">

        </div>
      </header>
    </>
  )
}