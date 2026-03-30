//Import de bibliotecas
import { motion } from "framer-motion";

//Import de funções utilitárias:
import { handleWhatsAppClick } from "../utils/whatsapp";

//Componente FooterSection:
const FooterSection = () => {
    return (
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
    )
}

export default FooterSection;