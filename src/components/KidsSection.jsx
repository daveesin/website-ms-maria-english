import { m } from "framer-motion";
import { kidsInfo } from "../data/constants";

const KidsSection = () => {
    return (
        <section id="kids" className="bg-[#0c0c1f] py-24 border-t border-white/3 scroll-mt-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <m.div
              className="..."
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.4 }}
            >
              <h1 className="text-4xl md:text-5xl font-extrabold">
                Cultural Bridge para <span className="text-[#bc1a4b]">Crianças</span>
              </h1>

              <h2 className="text-gray-400 mt-4 max-w-2xl mx-auto text-2xl">
                Aqui seu filho <span className="text-[#bc1a4b]">vive o idioma</span> desde o primeiro dia!
              </h2>
            </m.div>
          </div>
            

          {/* Grid de Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Cards mapeandos por .map no array de objetos */}
            {kidsInfo.map((item, index) => (
                <m.div
                    className="bg-[#14142a] p-8 rounded-2xl border border-white/5"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.4, ease: "easeOut", delay: index * 0.1 }}
                    key={item.id}
                >
                    <div className="group bg-[#111122] p-8 rounded-3xl border border-white/5 hover:border-[#bc1a4b]/50 transition-all duration-300 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-24 h-24 bg-[#bc1a4b]/5 rounded-full -mr-10 -mt-10 group-hover:bg-[#bc1a4b]/10 transition-colors"></div>
                        <div className="w-12 h-12 bg-[#bc1a4b] rounded-full flex items-center justify-center mb-6 shadow-lg shadow-[#bc1a4b]/20">
                        <span className="text-2xl">{item.icon}</span>
                        </div>
                        <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            {
                                item.description.map((part, idx) => (
                                    <span key={idx} className={part.bold ? "font-bold text-[#bc1a4b]" : "text-gray-400"}>
                                        {part.text}
                                    </span>
                                ))
                            }
                        </p>
                    </div>
                </m.div>
            ))}
          </div>
        </div>
      </section>
    )
}

export default KidsSection;