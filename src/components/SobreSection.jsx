//Import de bibliotecas
import { m } from "framer-motion";
import { ChevronDoubleRightIcon } from '@heroicons/react/24/outline'

//Import de imagens
import fotoDuda from "../assets/fotoDuda.webp";

//Main component function
const SobreSection = () => {
    return (
      <m.div
        className="text-white text-6xl font-black leading-tight"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
      >
        <section id="sobre" className="bg-[#0c0c1f] py-24 scroll-mt-24 border-y border-white/5">
          <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center gap-12">
            
            {/* Lado Esquerdo: Área da Foto*/}
            <div className="flex-1 relative flex justify-center md:justify-start">
              {/* Círculo decorativo*/}
              <div className="absolute -top-10 -left-10 w-32 h-32 border-8 border-[#bc1a4b] rounded-full opacity-50 z-0"></div>
              <div className="relative w-full max-w-sm flex flex-col bg-[#111122] p-4 rounded-2xl border border-white/10 overflow-hidden z-10 shadow-2xl">
                
                {/*O CONTAINER DA FOTO PRINCIPAL*/}
                <div className="aspect-square bg-[#1a1a3a] flex items-center justify-center rounded-lg border border-white/10 overflow-hidden">
                  <img src={fotoDuda}
                    alt="Foto de Professora da Cultural Bridge" width={500} height={500} className="w-full h-full object-cover"
                  />
                </div>

                {/* A BORDA INFERIOR (O MOLDE) COM AS FLECHAS */}
                <div className="h-16 flex items-center justify-center">
                  <ChevronDoubleRightIcon className="w-8 h-8 text-[#bc1a4b]" />
                </div>
              </div>

            </div>

            {/* Lado Direito: Texto da Bio */}
            <div className="flex-1 space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-0.5 bg-[#bc1a4b]"></div>
                <h2 className="text-4xl font-bold tracking-tight">Conheça o <span className="text-[#bc1a4b]">Cultural Bridge</span></h2>
              </div>
              
              <p className="text-gray-100 text-lg leading-relaxed">
                Somos um instituto educacional que se iniciou em Bufallo, Nova York e teve continuidade no Brasil. Nosso instituto conta com professores com experiências internacionais reais.
              </p>
              <p className="text-gray-100 text-lg leading-relaxed">
                Somos especializados no ensino inclusivo e nossas aulas são focadas no aprendizado não somente de gramática, mas de conversação real, e projetos que possibilitam a aplicação do inglês em atividades do dia a dia.
              </p>

            </div>
          </div>
        </section>
      </m.div>
    )
}

export default SobreSection;