import { useState } from 'react'
import './App.css'
import { ChevronDoubleRightIcon, UserIcon, UserGroupIcon } from '@heroicons/react/24/outline'

//Import de imagens:
import logoImg from './assets/logo.png' 
import professoraImg from './assets/fotoDuda.jpeg' 

function App() {

    const handleWhatsAppClick = () => {
    const ddd = "55";
    const prefixo = "31";
    const numero = "988503867";
    const msg = encodeURIComponent("Olá! Gostaria de saber mais sobre suas aulas!");
    window.open(`https://wa.me/${ddd}${prefixo}${numero}?text=${msg}`, "_blank");
  };

  return (
    <div className="min-h-screen bg-[#0a0a1a] text-white font-sans overflow-x-hidden">
      
      {/* 1. NAVBAR COM LINKS DE ANCORAGEM */}
      <nav className="fixed top-0 left-0 w-full bg-[#0a0a1a]/80 backdrop-blur-sm z-50 border-b border-white/5">
        <div className="flex justify-between items-center p-6 max-w-6xl mx-auto">
          {/* Logo em texto ou imagem */}
          <div className="text-xl font-bold flex items-center gap-2">
            <span className="border-l-4 border-[#bc1a4b] pl-2">MS. MARIA</span>
            <span className="text-[#bc1a4b]">GO!</span>
          </div>
          
          {/* Links de navegação */}
          <div className="flex items-center gap-6 text-sm text-gray-300">
            <a href="#hero" className="hover:text-[#bc1a4b] transition">Início</a>
            <a href="#sobre" className="hover:text-[#bc1a4b] transition">Sobre Mim</a>
            <a href="#metodo" className="hover:text-[#bc1a4b] transition">Neu Método</a>
            <a href="#reviews" className="hover:text-[#bc1a4b] transition">Reviews</a>
            <button 
              onClick={handleWhatsAppClick}
              className="bg-transparent border border-white/20 px-4 py-2 rounded-full hover:bg-white/10 transition text-white"
            >
              Contato
            </button>
          </div>
        </div>
      </nav>

      {/* Margem superior para compensar a navbar fixa */}
      <div className="pt-24"></div>

      {/* 2. HERO SECTION REFINADA COM LOGO */}
      <header id="hero" className="max-w-6xl mx-auto px-6 py-20 flex flex-col md:flex-row items-center gap-16 scroll-mt-24">
        
        {/* Lado Esquerdo: Texto (Frase Mais Objetiva e 'Go!') */}
        <div className="flex-1 space-y-6 text-center md:text-left">
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight tracking-tight">
            Inglês Prático.<br />
            Para Quem Quer<br />
            <span className="text-[#bc1a4b]">Avançar.</span>
          </h1>
          <p className="text-gray-400 text-lg md:text-xl max-w-lg mx-auto md:mx-0">
            Aulas online personalizadas com Ms. Maria. Foque no que importa e destrave sua conversação sem rodeios.
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

          {/* Card Escuro para a Logo (Design "limpo" recuperado) */}
          <div className="relative w-72 h-72 flex items-center justify-center p-12 bg-[#111122] rounded-3xl border border-white/10 shadow-inner">
            <img src={logoImg} alt="Logo Ms. Maria Go!" className="max-w-full h-auto" />
            
            {/* Pontinhos decorativos Adaptados */}
            <div className="absolute -bottom-5 -right-5 grid grid-cols-4 gap-1.5 opacity-40">
              {[...Array(12)].map((_, i) => (
                <div key={i} className="w-1 h-1 bg-white rounded-full"></div>
              ))}
            </div>
          </div>
        </div>
      </header>


      {/* 3. SEÇÃO SOBRE A PROFESSORA */}
      <section id="sobre" className="bg-[#0c0c1f] py-24 scroll-mt-24 border-y border-white/5">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center gap-12">
          
          {/* Lado Esquerdo: Área da Foto*/}
          <div className="flex-1 relative flex justify-center md:justify-start">
            {/* Círculo decorativo*/}
            <div className="absolute -top-10 -left-10 w-32 h-32 border-8 border-[#bc1a4b] rounded-full opacity-50 z-0"></div>
            <div className="relative w-full max-w-sm flex flex-col bg-[#111122] p-4 rounded-2xl border border-white/10 overflow-hidden z-10 shadow-2xl">
              
              {/*O CONTAINER DA FOTO PRINCIPAL*/}
              <div className="aspect-square bg-[#1a1a3a] flex items-center justify-center rounded-lg border border-white/10 overflow-hidden">
                <img src={professoraImg} alt="Ms. Maria" className="w-full h-full object-cover" />
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
              <h2 className="text-4xl font-bold tracking-tight">Conheça a <span className="text-[#bc1a4b]">Ms. Maria</span></h2>
            </div>
            
            <p className="text-gray-300 text-lg leading-relaxed">
              Sou professora de inglês com experiência em escolas de Nova York, especializada no ensino inclusivo, na utilização de estratégias baseadas na arte e no treinamento de profissionais que precisam usar o idioma em ambientes corporativos.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              Minha abordagem é prática, eficiente e voltada para as necessidades reais de comunicação rotineira e no mundo dos negócios.
            </p>
            
            <div className="pt-4 flex flex-col sm:flex-row gap-4 text-gray-400 text-sm">
              <span className="flex items-center gap-2">✅ Certificação Internacional</span>
              <span className="flex items-center gap-2">✅ Vivência no Exterior</span>
            </div>
          </div>
        </div>
      </section>

      {/* 4. QUALIFICAÇÕES & EXPERIÊNCIA */}
      <section id="experiencia" className="py-24 max-w-6xl mx-auto px-6 scroll-mt-24">
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#bc1a4b]/5 rounded-full blur-3xl -z-10"></div>
        <div className="flex flex-col md:flex-row gap-12 items-start">
          
          {/* Lado Esquerdo: Título e Elementos Decorativos */}
          <div className="md:w-1/3">
            <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">
              Qualificações <br />
              <span className="text-[#bc1a4b]">& Experiência</span>
            </h2>
            {/* Pontinhos decorativos do print */}
            <div className="grid grid-cols-6 gap-2 mt-8 opacity-20 w-32">
              {[...Array(18)].map((_, i) => (
                <div key={i} className="w-1.5 h-1.5 bg-white rounded-full"></div>
              ))}
            </div>
          </div>

          {/* Lado Direito: Lista de Itens com as Setas */}
          <div className="md:w-2/3 space-y-10">
            
            {/* Item 1 */}
            <div className="flex gap-4 group">
              <span className="text-[#bc1a4b] font-bold text-2xl mt-1 shrink-0 transition-transform group-hover:translate-x-2 italic">
                {">>>"}
              </span>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Certificação em Ensino de Inglês como Segunda Língua (ESL)</h3>
                <p className="text-gray-400 leading-relaxed">
                  Montgomery Community College (EUA)
                </p>
              </div>
            </div>

            {/* Item 2 */}
            <div className="flex gap-4 group">
              <span className="text-[#bc1a4b] font-bold text-2xl mt-1 shrink-0 transition-transform group-hover:translate-x-2 italic">
                {">>>"}
              </span>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Experiência Internacional</h3>
                <p className="text-gray-400 leading-relaxed">
                  2 anos de imersão nos Estados Unidos, voltados ao estudo e desenvolvimento profissional.<br /><br />
                  2 anos de formação voltada para o uso de metodologias inovadoras e aplicadas, ideias para o ambiente corporativo e para o ensino prático.
                </p>
              </div>
            </div>

            {/* Item 3 */}
            <div className="flex gap-4 group">
              <span className="text-[#bc1a4b] font-bold text-2xl mt-1 shrink-0 transition-transform group-hover:translate-x-2 italic">
                {">>>"}
              </span>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Certificações em Cursos de Universidades Internacionais</h3>
                <p className="text-gray-400 leading-relaxed">
                  University of Glasgow<br />
                  TheMuseum of Modern Art<br />
                  University of California Irvine<br />
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>
      
      {/* 5. MÉTODO DE ENSINO */}
      <section id="metodo" className="bg-[#0c0c1f] py-24 border-t border-white/3 scroll-mt-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold">
              Método de <span className="text-[#bc1a4b]">Ensino</span>
            </h2>
            <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
              Uma abordagem focada em resultados reais, desenhada para quem precisa de agilidade e confiança.
            </p>
          </div>

          {/* Grid de Cards de Cima */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Card 1: Foco no Aluno */}
            <div className="group bg-[#111122] p-8 rounded-3xl border border-white/5 hover:border-[#bc1a4b]/50 transition-all duration-300 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-[#bc1a4b]/5 rounded-full -mr-10 -mt-10 group-hover:bg-[#bc1a4b]/10 transition-colors"></div>
              <div className="w-12 h-12 bg-[#bc1a4b] rounded-full flex items-center justify-center mb-6 shadow-lg shadow-[#bc1a4b]/20">
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Foco no Aluno</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                <b>Personalizo</b> as aulas para atender às <b>necessidades e objetivos</b> específicos <b>de cada estudante,</b> respeitando seu ritmo de aprendizado.
              </p>
            </div>

            {/* Card 2: Praticidade */}
            <div className="group bg-[#111122] p-8 rounded-3xl border border-white/5 hover:border-[#bc1a4b]/50 transition-all duration-300 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-[#bc1a4b]/5 rounded-full -mr-10 -mt-10 group-hover:bg-[#bc1a4b]/10 transition-colors"></div>
              <div className="w-12 h-12 bg-[#bc1a4b] rounded-full flex items-center justify-center mb-6 shadow-lg shadow-[#bc1a4b]/20">
                <span className="text-2xl">💼</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Praticidade para adultos</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Conversação e simulações do dia a dia.<br /><br /> Materiais focados em situações reais, como viagens, trabalho e relacionamentos.
              </p>
            </div>

            {/* Card 3: Ambiente Confiável */}
            <div className="group bg-[#111122] p-8 rounded-3xl border border-white/5 hover:border-[#bc1a4b]/50 transition-all duration-300 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-[#bc1a4b]/5 rounded-full -mr-10 -mt-10 group-hover:bg-[#bc1a4b]/10 transition-colors"></div>
              <div className="w-12 h-12 bg-[#bc1a4b] rounded-full flex items-center justify-center mb-6 shadow-lg shadow-[#bc1a4b]/20">
                <span className="text-2xl">🛋️</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Ambiente Confiável</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Crio um espaço seguro e motivador, incentivando os alunos a se expressarem em inglês com confiança.
              </p>
            </div>

          </div>

          {/* Grid de Cards de Baixo */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
            
            {/* Card 4: Dinâmica para crianças */}
            <div className="group bg-[#111122] p-8 rounded-3xl border border-white/5 hover:border-[#bc1a4b]/50 transition-all duration-300 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-[#bc1a4b]/5 rounded-full -mr-10 -mt-10 group-hover:bg-[#bc1a4b]/10 transition-colors"></div>
              <div className="w-12 h-12 bg-[#bc1a4b] rounded-full flex items-center justify-center mb-6 shadow-lg shadow-[#bc1a4b]/20">
                🧸
              </div>
              <h3 className="text-xl font-bold mb-3">Dinâmica para crianças</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Uso de atividades lúdicas, músicas, histórias e jogos.<br /><br /> Ensino de forma divertida para estimular curiosidade e memorização.
              </p>
            </div>

            {/* Card 5: Integração cultural */}
            <div className="group bg-[#111122] p-8 rounded-3xl border border-white/5 hover:border-[#bc1a4b]/50 transition-all duration-300 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-[#bc1a4b]/5 rounded-full -mr-10 -mt-10 group-hover:bg-[#bc1a4b]/10 transition-colors"></div>
              <div className="w-12 h-12 bg-[#bc1a4b] rounded-full flex items-center justify-center mb-6 shadow-lg shadow-[#bc1a4b]/20">
                <span className="text-2xl">🌎</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Integração cultural</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Exploro aspectos culturais nas aulas para enriquecer o aprendizado.<br /><br /> Ensino inglês como ferramenta de comunicação e vivência global.
              </p>
            </div>

            {/* Card 6: Ensino criativo e claro */}
            <div className="group bg-[#111122] p-8 rounded-3xl border border-white/5 hover:border-[#bc1a4b]/50 transition-all duration-300 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-[#bc1a4b]/5 rounded-full -mr-10 -mt-10 group-hover:bg-[#bc1a4b]/10 transition-colors"></div>
              <div className="w-12 h-12 bg-[#bc1a4b] rounded-full flex items-center justify-center mb-6 shadow-lg shadow-[#bc1a4b]/20">
                <span className="text-2xl">💡</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Ensino criativo e claro</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Busco ensinar de forma prática e inspiradora, ajudando os alunos a desenvolverem comunicação eficaz e explorarem o mundo com confiança.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* 6. DEPOIMENTOS */}
      <section id="reviews" className="py-24 bg-[#0a0a1a] relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex justify-between items-end mb-12">
            <div className="text-left">
              <h2 className="text-4xl md:text-5xl font-extrabold">
                Histórias de <span className="text-[#bc1a4b]">Sucesso</span>
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
      </section>

      {/* 7. FOOTER */}
      <footer className="bg-[#050510] pt-24 pb-12 border-t border-white/5">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-12 mb-16">
            
            {/* CTA Final */}
            <div className="text-center md:text-left space-y-4">
              <h3 className="text-3xl font-extrabold">Pronta para destravar <br /><span className="text-[#bc1a4b]">sua nova fase?</span></h3>
              <p className="text-gray-400">Entre em contato e agende sua aula experimental.</p>
            </div>

            {/* Botão de Contato Final */}
            <button 
              onClick={handleWhatsAppClick}
              className="bg-[#25D366] hover:bg-[#128C7E] text-white px-10 py-5 rounded-2xl font-black text-xl flex items-center gap-3 transition-all shadow-[0_0_30px_rgba(37,211,102,0.3)] hover:scale-105"
            >
              Falar com a Ms. Maria
              <span>→</span>
            </button>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center border-t border-white/5 pt-8 gap-6">
             <div className="text-xl font-bold">
               MS. MARIA <span className="text-[#bc1a4b]">GO!</span>
             </div>
             <p className="text-gray-500 text-sm">© 2024 Ms. Maria Go! - Todos os direitos reservados.</p>
             <div className="flex gap-6 text-gray-400">
               <span className="hover:text-white cursor-pointer">Instagram</span>
               <span className="hover:text-white cursor-pointer">LinkedIn</span>
             </div>
          </div>
        </div>
      </footer>

    </div>
  );
}

export default App;