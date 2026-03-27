import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = ({ handleWhatsAppClick }) => {
  const [menuAberto, setMenuAberto] = useState(false);

  const links = [
    { name: "Início", hash: "#hero" },
    { name: "Sobre Nós", hash: "#sobre" },
    { name: "Pilares", hash: "#pilares" },
    { name: "Kids", hash: "#kids" },
    { name: "Reviews", hash: "#reviews" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full bg-[#0a0a1a]/80 backdrop-blur-md z-50 border-b border-white/5">
      <div className="flex justify-between items-center p-6 max-w-6xl mx-auto">
        
        {/* LOGO */}
        <div className="text-xl font-bold flex items-center gap-2">
          <span className="border-l-4 border-[#bc1a4b] pl-2 text-white">CULTURAL BRIDGE</span>
          <span className="text-[#bc1a4b]">INSTITUTE</span>
        </div>

        {/* LINKS DESKTOP */}
        <div className="hidden md:flex items-center gap-6 text-sm text-gray-300">
          {links.map((link) => (
            <a key={link.name} href={link.hash} className="hover:text-[#bc1a4b] transition">
              {link.name}
            </a>
          ))}
          <button 
            onClick={handleWhatsAppClick}
            className="bg-transparent border border-white/20 px-4 py-2 rounded-full hover:bg-white/10 transition text-white"
          >
            Contato
          </button>
        </div>

        {/* BOTÃO MENU HAMBÚRGUER */}
        <button 
          className="md:hidden text-white p-2"
          onClick={() => setMenuAberto(!menuAberto)}
        >
          <div className="space-y-1.5">
            <span className={`block w-6 h-0.5 bg-white transition-all ${menuAberto ? "rotate-45 translate-y-2" : ""}`}></span>
            <span className={`block w-6 h-0.5 bg-white transition-all ${menuAberto ? "opacity-0" : ""}`}></span>
            <span className={`block w-6 h-0.5 bg-white transition-all ${menuAberto ? "-rotate-45 -translate-y-2" : ""}`}></span>
          </div>
        </button>
      </div>

      {/* MENU MOBILE */}
      <AnimatePresence>
        {menuAberto && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#0a0a1a] border-b border-white/5 overflow-hidden"
          >
            <div className="flex flex-col p-6 gap-4 text-gray-300">
              {links.map((link) => (
                <a 
                  key={link.name} 
                  href={link.hash} 
                  onClick={() => setMenuAberto(false)}
                  className="text-lg hover:text-[#bc1a4b]"
                >
                  {link.name}
                </a>
              ))}
              <button 
                onClick={() => { handleWhatsAppClick(); setMenuAberto(false); }}
                className="bg-[#bc1a4b] text-white py-3 rounded-xl font-bold"
              >
                Contato
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;