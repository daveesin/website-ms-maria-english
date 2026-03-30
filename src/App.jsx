import { useState } from 'react'
import { motion } from "framer-motion";
import './App.css'

import { handleWhatsAppClick } from './utils/whatsapp';

import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import SobreSection from "./components/SobreSection";
import PilarsSection from "./components/PilarsSection";
import KidsSection from "./components/KidsSection";

function App() {

  return (
    <div className="min-h-screen bg-[#0a0a1a] text-white font-sans overflow-x-hidden">
      
      {/* 1. NAVBAR COM LINKS DE ANCORAGEM */}
      <Navbar handleWhatsAppClick={handleWhatsAppClick} />

      {/* Margem superior para compensar a navbar fixa */}
      <div className="pt-24"></div>

      {/* 2. SEÇÃO HERO */}
      <HeroSection handleWhatsAppClick={handleWhatsAppClick} ></HeroSection>
      
      {/* 3. SEÇÃO SOBRE O INSTITUTO */}
      <SobreSection></SobreSection>

      {/* 4. PILARES DA CULTURAL BRIDGE */}
      <PilarsSection></PilarsSection>
      
      {/* 5. CULTURAL BRIDGE PARA CRIANÇAS */}
      <KidsSection></KidsSection>

      {/* 6. DEPOIMENTOS */}
      <section id="reviews" className="py-24 bg-[#0a0a1a] relative overflow-hidden">
        <motion.div
          className="..."
          initial={{ opacity: 0, x: -50 }} // Começa à esquerda
          whileInView={{ opacity: 1, x: 0 }} // Desliza para o centro
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className="max-w-6xl mx-auto px-6">
            <div className="flex justify-between items-end mb-12">
              <div className="text-left">
                <h2 className="text-4xl md:text-5xl font-extrabold">
                  Para onde a <span className="text-[#bc1a4b]">Cultural Bridge</span> pode te levar?
                </h2>
                <p className="text-gray-400 mt-4">Arraste para o lado para ver mais →</p>
              </div>
            </div>

            {/* Container do Slider */}
            <div className="flex gap-6 overflow-x-auto snap-x snap-mandatory custom-scrollbar pb-8">
              
              {/* Card 1 */}
              <div className="min-w-75 md:min-w-100 snap-center bg-[#111122] p-8 rounded-3xl border border-white/10 relative">
                <span className="text-6xl text-[#bc1a4b] absolute -top-4 left-6 opacity-20 font-serif">“</span>
                <p className="text-gray-300 italic mb-8 relative z-10 leading-relaxed text-lg">
                  "As aulas da Ms. Maria mudaram meu patamar profissional. Eu tinha pavor de reuniões em inglês, e hoje lidero apresentações com confiança."
                </p>
                <div className="flex items-center gap-4 border-t border-white/5 pt-6">
                  <div className="w-12 h-12 bg-linear-to-br from-[#bc1a4b] to-[#5c7cfa] rounded-full"></div>
                  <div>
                    <h4 className="font-bold text-white text-lg">Ricardo Mendes</h4>
                    <p className="text-xs text-[#bc1a4b] uppercase tracking-tighter">Gerente de Projetos</p>
                  </div>
                </div>
              </div>

              {/* Card 2 */}
              <div className="min-w-75 md:min-w-100 snap-center bg-[#111122] p-8 rounded-3xl border-2 border-[#bc1a4b]/30 relative shadow-xl shadow-[#bc1a4b]/5">
                <span className="text-6xl text-[#bc1a4b] absolute -top-4 left-6 opacity-20 font-serif">“</span>
                <p className="text-gray-300 italic mb-8 relative z-10 leading-relaxed text-lg">
                  "O método 'Go!' realmente funciona. É focado na vida real, sem aquela gramática maçante. Recomendo para qualquer adulto."
                </p>
                <div className="flex items-center gap-4 border-t border-white/5 pt-6">
                  <div className="w-12 h-12 bg-[#bc1a4b] rounded-full flex items-center justify-center font-bold">L</div>
                  <div>
                    <h4 className="font-bold text-white text-lg">Larissa Soares</h4>
                    <p className="text-xs text-[#bc1a4b] uppercase tracking-tighter">Arquiteta</p>
                  </div>
                </div>
              </div>

              {/* Card 3 */}
              <div className="min-w-75 md:min-w-100 snap-center bg-[#111122] p-8 rounded-3xl border border-white/10 relative">
                <span className="text-6xl text-[#bc1a4b] absolute -top-4 left-6 opacity-20 font-serif">“</span>
                <p className="text-gray-300 italic mb-8 relative z-10 leading-relaxed text-lg">
                  "Finalmente encontrei uma professora que entende o ritmo de quem trabalha. Flexível, prática e muito competente."
                </p>
                <div className="flex items-center gap-4 border-t border-white/5 pt-6">
                  <div className="w-12 h-12 bg-gray-700 rounded-full"></div>
                  <div>
                    <h4 className="font-bold text-white text-lg">Fabiano Silva</h4>
                    <p className="text-xs text-[#bc1a4b] uppercase tracking-tighter">Engenheiro</p>
                  </div>
                </div>
              </div>

              {/* Card 4 */}
              <div className="min-w-75 md:min-w-100 snap-center bg-[#111122] p-8 rounded-3xl border border-white/10 relative">
                <span className="text-6xl text-[#bc1a4b] absolute -top-4 left-6 opacity-20 font-serif">“</span>
                <p className="text-gray-300 italic mb-8 relative z-10 leading-relaxed text-lg">
                  "Minha filha adora as aulas. O material é muito visual e ela se diverte enquanto aprende. O progresso foi nítido em 3 meses."
                </p>
                <div className="flex items-center gap-4 border-t border-white/5 pt-6">
                  <div className="w-12 h-12 bg-pink-500 rounded-full flex items-center justify-center font-bold italic text-white">M</div>
                  <div>
                    <h4 className="font-bold text-white text-lg">Mariana Costa</h4>
                    <p className="text-xs text-[#bc1a4b] uppercase tracking-tighter">Mãe do Theo (6 anos)</p>
                  </div>
                </div>
              </div>

              {/* Card 5 */}
              <div className="min-w-75 md:min-w-100 snap-center bg-[#111122] p-8 rounded-3xl border border-white/10 relative">
                <span className="text-6xl text-[#bc1a4b] absolute -top-4 left-6 opacity-20 font-serif">“</span>
                <p className="text-gray-300 italic mb-8 relative z-10 leading-relaxed text-lg">
                  "O diferencial é a personalização. Ela trouxe textos da minha área de TI para a aula. Sensacional!"
                </p>
                <div className="flex items-center gap-4 border-t border-white/5 pt-6">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white">💻</div>
                  <div>
                    <h4 className="font-bold text-white text-lg">Lucas Lima</h4>
                    <p className="text-xs text-[#bc1a4b] uppercase tracking-tighter">Desenvolvedor Sênior</p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </motion.div>
      </section>

      {/* 7. FOOTER */}
      <motion.span
        className="text-white font-black leading-tight"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
      >
        <footer className="bg-[#050510] pt-24 pb-12 border-t border-white/5">
          <div className="max-w-6xl mx-auto px-6">
            <div className="flex flex-col md:flex-row justify-between items-center gap-12 mb-16">
              
              {/* CTA Final */}
              <div className="text-center md:text-left space-y-4">
                <h3 className="text-3xl font-extrabold">Venha para a Cultural Bridge <br /><span className="text-[#bc1a4b]">e se conecte com o mundo.</span></h3>
                <p className="text-gray-400">Entre em contato e agende sua aula experimental.</p>
              </div>

              {/* Botão de Contato Final */}
              <button 
                onClick={handleWhatsAppClick}
                className="bg-[#25D366] hover:bg-[#128C7E] text-white px-10 py-5 rounded-2xl font-black text-xl flex items-center gap-3 transition-all shadow-[0_0_30px_rgba(37,211,102,0.3)] hover:scale-105"
              >
                Quero iniciar minha jornada!
                <span>→</span>
              </button>
            </div>

            <div className="flex flex-col md:flex-row justify-between items-center border-t border-white/5 pt-8 gap-6">
              <div className="text-xl font-bold">
                CULTURAL BRIDGE <span className="text-[#bc1a4b]">INSTITUTE</span>
              </div>
              <p className="text-gray-500 text-sm">© 2024 Cultural Bridge Institute - Todos os direitos reservados.</p>
              <div className="flex gap-6 text-gray-400">
                <span className="hover:text-white cursor-pointer">Instagram</span>
                <span className="hover:text-white cursor-pointer">LinkedIn</span>
              </div>
            </div>
          </div>
        </footer>
      </motion.span>

    </div>
  );
}

export default App;