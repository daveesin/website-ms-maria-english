import { useState } from 'react'
import { motion, AnimatePresence } from "framer-motion";
import './App.css'
import { ChevronDoubleRightIcon } from '@heroicons/react/24/outline'
import Navbar from "./components/Navbar";

//Import de imagens:
import logoImg from './assets/logo.png'
import logoEscrita from './assets/logoEscrita.png'
import professoraImg from './assets/fotoDuda.jpeg' 

function App() {

  {/* FUNÇÃO PARA ABRIR O LINK DO WHATSAPP COM A MENSAGEM PRÉ-ESCRITA E VARIÁVEIS NECESSÁRIAS */}
    const handleWhatsAppClick = () => {
    const ddd = "55";
    const prefixo = "31";
    const numero = "982876410";
    const msg = encodeURIComponent("Hey! Quero aprender inglês de verdade!");
    window.open(`https://wa.me/${ddd}${prefixo}${numero}?text=${msg}`, "_blank");
  };

  return (
    <div className="min-h-screen bg-[#0a0a1a] text-white font-sans overflow-x-hidden">
      
      {/* 1. NAVBAR COM LINKS DE ANCORAGEM */}
      <Navbar handleWhatsAppClick={handleWhatsAppClick} />

      {/* Margem superior para compensar a navbar fixa */}
      <div className="pt-24"></div>

      {/* 2. SEÇÃO HERO */}
      <motion.h1
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
              <img src={logoEscrita} alt="Logo Cultural Bridge" className="max-w-full h-auto" />
              
              {/* Pontinhos decorativos Adaptados */}
              <div className="absolute -bottom-5 -right-5 grid grid-cols-4 gap-1.5 opacity-40">
                {[...Array(12)].map((_, i) => (
                  <div key={i} className="w-1 h-1 bg-white rounded-full"></div>
                ))}
              </div>
            </div>
          </div>
        </header>
      </motion.h1>
      
      {/* 3. SEÇÃO SOBRE O INSTITUTO */}
      <motion.h1
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
                  <img src={professoraImg} alt="" className="w-full h-full object-cover" />
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
              
              <p className="text-gray-300 text-lg leading-relaxed">
                Somos um instituto educacional que se iniciou em Bufallo, Nova York e teve continuidade no Brasil. Nosso instituto conta com professores com experiências internacionais reais.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed">
                Somos especializados no ensino inclusivo e nossas aulas são focadas no aprendizado não somente de gramática, mas de conversação real, e projetos que possibilitam a aplicação do inglês em atividades do dia a dia.
              </p>

            </div>
          </div>
        </section>
      </motion.h1>

      {/* 4. PILARES DA CULTURAL BRIDGE */}
      <section id="pilares" className="py-24 max-w-6xl mx-auto px-6 scroll-mt-24">
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#bc1a4b]/5 rounded-full blur-3xl -z-10"></div>
        <div className="flex flex-col md:flex-row gap-12 items-start">
          {/* Lado Esquerdo: Título e Elementos Decorativos */}
          <motion.h2
              className="..."
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.4 }}
          >
            <div className="md:w-1/3">
              <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">
                Pilares <br />
                <span className="text-[#bc1a4b]">& Princípios</span>
              </h2>
              {/* Pontinhos decorativos do print */}
              <div className="grid grid-cols-6 gap-2 mt-8 opacity-20 w-32">
                {[...Array(18)].map((_, i) => (
                  <div key={i} className="w-1.5 h-1.5 bg-white rounded-full"></div>
                ))}
              </div>
            </div>
          </motion.h2>

          {/* Lado Direito: Lista de Itens com as Setas */}
          <div className="md:w-2/3 space-y-10">
            {/* Item 1 */}
            <motion.h2
              className="..."
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.4 }}
            >
              <div className="flex gap-4 group">
                <span className="text-[#bc1a4b] font-bold text-2xl mt-1 shrink-0 transition-transform group-hover:translate-x-2 italic">
                  {">>>"}
                </span>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Conectividade</h3>
                  <p className="text-gray-400 leading-relaxed">
                    Criamos conexões reais entre alunos e o mundo. Levamos cultura, contexto e vida para dentro da sala, transformando o aprendizado em uma experiência que vai muito além do inglês.
                  </p>
                </div>
              </div>
            </motion.h2>

            {/* Item 2 */}
            <motion.h2
              className="..."
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.4, delay: 0.2 }}
            >
              <div className="flex gap-4 group">
                <span className="text-[#bc1a4b] font-bold text-2xl mt-1 shrink-0 transition-transform group-hover:translate-x-2 italic">
                  {">>>"}
                </span>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Inovação e Adaptabilidade</h3>
                  <p className="text-gray-400 leading-relaxed">
                    O ensino evolui — e nós também. Buscamos constantemente novas formas de estruturar o aprendizado, adaptando cada estratégia às necessidades reais dos nossos alunos.
                  </p>
                </div>
              </div>
            </motion.h2>

            {/* Item 3 */}
            <motion.h2
              className="..."
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.4, delay: 0.4 }}
            >
              <div className="flex gap-4 group">
                <span className="text-[#bc1a4b] font-bold text-2xl mt-1 shrink-0 transition-transform group-hover:translate-x-2 italic">
                  {">>>"}
                </span>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Protagonismo do Aluno</h3>
                  <p className="text-gray-400 leading-relaxed">
                    Aqui, o centro é você. Respeitamos seu ritmo, seus objetivos e sua história, colocando o aluno como protagonista do próprio desenvolvimento.
                  </p>
                </div>
              </div>
            </motion.h2>

            {/* Item 4 */}
            <motion.h2
              className="..."
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.4, delay: 0.6 }}
            >
              <div className="flex gap-4 group">
                <span className="text-[#bc1a4b] font-bold text-2xl mt-1 shrink-0 transition-transform group-hover:translate-x-2 italic">
                  {">>>"}
                </span>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Flexibilidade</h3>
                  <p className="text-gray-400 leading-relaxed">
                    Sua rotina importa. Você tem liberdade para definir os horários das suas aulas semanalmente, aprendendo de forma leve e possível dentro da sua realidade.
                  </p>
                </div>
              </div>
            </motion.h2>

          </div>
        </div>
      </section>
      
      {/* 5. CULTURAL BRIDGE PARA CRIANÇAS */}
      <section id="kids" className="bg-[#0c0c1f] py-24 border-t border-white/3 scroll-mt-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <motion.h2
              className="..."
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.4 }}
            >
              <h2 className="text-4xl md:text-5xl font-extrabold">
                Cultural Bridge para <span className="text-[#bc1a4b]">Crianças</span>
              </h2>

              <p className="text-gray-400 mt-4 max-w-2xl mx-auto text-2xl">
                Aqui seu filho <span className="text-[#bc1a4b]">vive o idioma</span> desde o primeiro dia!
              </p>
            </motion.h2>
          </div>
            

          {/* Grid de Cards de Cima */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Card 1: Speaking Prático */}
            <motion.div
              className="bg-[#14142a] p-8 rounded-2xl border border-white/5"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              <div className="group bg-[#111122] p-8 rounded-3xl border border-white/5 hover:border-[#bc1a4b]/50 transition-all duration-300 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-[#bc1a4b]/5 rounded-full -mr-10 -mt-10 group-hover:bg-[#bc1a4b]/10 transition-colors"></div>
                <div className="w-12 h-12 bg-[#bc1a4b] rounded-full flex items-center justify-center mb-6 shadow-lg shadow-[#bc1a4b]/20">
                  <span className="text-2xl">🗣️</span>
                </div>
                <h3 className="text-xl font-bold mb-3">Speaking Prático</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Aulas focadas em <b>conversação</b> desde o primeiro dia, com materiais visuais e atividades lúdicas para estimular a comunicação natural e o interesse pelo idioma.
                </p>
              </div>
            </motion.div>

            {/* Card 2: Material de Qualidade */}
            <motion.div
              className="bg-[#14142a] p-8 rounded-2xl border border-white/5"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.4, delay: 0.2, ease: "easeOut" }} // +0.2s de delay
            >
              <div className="group bg-[#111122] p-8 rounded-3xl border border-white/5 hover:border-[#bc1a4b]/50 transition-all duration-300 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-[#bc1a4b]/5 rounded-full -mr-10 -mt-10 group-hover:bg-[#bc1a4b]/10 transition-colors"></div>
                <div className="w-12 h-12 bg-[#bc1a4b] rounded-full flex items-center justify-center mb-6 shadow-lg shadow-[#bc1a4b]/20">
                  <span className="text-2xl">📘</span>
                </div>
                <h3 className="text-xl font-bold mb-3">Material de Qualidade</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Material 100% em inglês apropriado para crianças, focado em <b>interações e jogos</b> que estimulem a curiosidade e o aprendizado.
                </p>
              </div>
            </motion.div>

            {/* Card 3: Aplicação para a Vida */}
            <motion.div
              className="bg-[#14142a] p-8 rounded-2xl border border-white/5"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.4, delay: 0.4, ease: "easeOut" }} // +0.2s de delay
            >
              <div className="group bg-[#111122] p-8 rounded-3xl border border-white/5 hover:border-[#bc1a4b]/50 transition-all duration-300 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-[#bc1a4b]/5 rounded-full -mr-10 -mt-10 group-hover:bg-[#bc1a4b]/10 transition-colors"></div>
                <div className="w-12 h-12 bg-[#bc1a4b] rounded-full flex items-center justify-center mb-6 shadow-lg shadow-[#bc1a4b]/20">
                  <span className="text-2xl">🌍</span>
                </div>
                <h3 className="text-xl font-bold mb-3">Aplicação do Inglês para a Vida</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Seu filho aprende o idioma em experiências <b>envolventes e dinâmicas</b>. Aqui é onde o inglês deixa de ser conteúdo e passa a ser <b>ferramenta de expressão, descoberta e conexão com o mundo.</b>
                </p>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

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