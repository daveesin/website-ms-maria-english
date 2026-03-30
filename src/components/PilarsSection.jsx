import { motion } from "framer-motion";

const PilarsSection = () => {
    return (
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
    )
}

export default PilarsSection;