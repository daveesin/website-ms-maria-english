//Import de bibliotecas
import { m } from "framer-motion";

//Import de funções utilitárias:
import { handleWhatsAppClick } from "../utils/whatsapp";

//Import de imagens
import logoEscrita from "../assets/logoEscrita.webp";

const HeroSection = () => {
    return (
        <m.div
        className="text-white text-6xl font-black leading-tight"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <header id="hero" className="max-w-6xl mx-auto px-6 py-20 flex flex-col md:flex-row items-center gap-16 scroll-mt-24">
          
          {/* Lado Esquerdo: Texto */}
          <div className="flex-1 space-y-6 text-center md:text-left">
            <h1 className="text-5xl md:text-5xl font-extrabold leading-tight tracking-tight">
              Inglês Prático.<br />
              Para Quem Quer<br />
              <span className="text-[#bc1a4b]">Avançar.</span>
            </h1>
            <p className="text-gray-400 text-lg md:text-xl max-w-lg mx-auto md:mx-0">
              Aulas 100% personalizadas online e presencial. Foque no que importa e destrave sua conversação sem rodeios.
            </p>

            <div className="flex justify-center md:justify-start gap-4 pt-4">
              <button 
                aria-label="Contato via WhatsApp"
                onClick={handleWhatsAppClick}
                className="bg-[#bc1a4b] hover:bg-[#96153d] text-white px-10 py-4 rounded-xl font-bold text-lg shadow-xl shadow-[#bc1a4b]/20 transition-all transform hover:scale-105"
              >
                Começar Agora
              </button>
            </div>
          </div>

          {/* Lado Direito: ÁREA DA LOGO*/}
          <div className="flex-1 flex justify-center items-center relative">
            
            {/* Fundo sutil para destacar a logo */}
            <div className="absolute w-[120%] h-[120%] bg-[#bc1a4b]/5 rounded-full blur-3xl opacity-50"></div>

            {/* Card para a Logo */}
            <div className="relative w-95 h-95 flex items-center justify-center p-12">
              <img src={logoEscrita} alt="Logo Cultural Bridge" width={1024} height={1024} className="max-w-full h-auto" />
              
              {/* Pontinhos decorativos Adaptados */}
              <div className="absolute -bottom-5 -right-5 grid grid-cols-4 gap-1.5 opacity-40">
                {[...Array(12)].map((_, i) => (
                  <div key={i} className="w-1 h-1 bg-white rounded-full"></div>
                ))}
              </div>
            </div>
          </div>
        </header>
      </m.div>
    )
}

export default HeroSection