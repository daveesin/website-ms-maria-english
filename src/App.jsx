import { LazyMotion, domMax } from 'framer-motion';

import './App.css'
import { useScrollToTop } from './hooks/useScrollToTop';

import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import SobreSection from "./components/SobreSection";
import PilarsSection from "./components/PilarsSection";
import KidsSection from "./components/KidsSection";
import ReviewsSection from "./components/ReviewsSection";
import FooterSection from "./components/FooterSection";

function App() {

  useScrollToTop();

  return (
    <div className="min-h-screen bg-[#0a0a1a] text-white font-sans overflow-x-hidden">

      <LazyMotion features={domMax}>     
        {/* 1. NAVBAR COM LINKS DE ANCORAGEM */}
        <Navbar/>

        {/* Margem superior para compensar a navbar fixa */}
        <div className="pt-24"></div>

        {/* 2. SEÇÃO HERO */}
        <HeroSection/>
        
        {/*Tag main para ganho de desempenho*/}
        <main>
          
          {/* 3. SEÇÃO SOBRE O INSTITUTO */}
          <SobreSection/>

          {/* 4. PILARES DA CULTURAL BRIDGE */}
          <PilarsSection/>
          
          {/* 5. CULTURAL BRIDGE PARA CRIANÇAS */}
          <KidsSection/>

          {/* 6. DEPOIMENTOS */}
          <ReviewsSection/>

        </main>

        {/* 7. FOOTER */}
        <FooterSection/>
      </LazyMotion> 

    </div>
  );
}

export default App;