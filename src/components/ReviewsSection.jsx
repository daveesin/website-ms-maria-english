import { motion } from "framer-motion";
import { reviewsInfo } from "../data/constants";

function ReviewsSection() {
    return (
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
                    
                    {/* Mapeamento de cards de avaliações */}
                    {reviewsInfo.map((review) => (
                        <div className="min-w-75 md:min-w-100 snap-center bg-[#111122] p-8 rounded-3xl border border-white/10 relative" key={review.id}>
                        <span className="text-6xl text-[#bc1a4b] absolute -top-4 left-6 opacity-20 font-serif">“</span>
                        <p className="text-gray-300 italic mb-8 relative z-10 leading-relaxed text-lg">
                            "{review.review}"
                        </p>
                        <div className="flex items-center gap-4 border-t border-white/5 pt-6">
                        <div className="w-12 h-12 bg-linear-to-br from-[#bc1a4b] to-[#5c7cfa] rounded-full"></div>
                            <div>
                                <h4 className="font-bold text-white text-lg">{review.name}</h4>
                                <p className="text-xs text-[#bc1a4b] uppercase tracking-tighter">{review.role}</p>
                            </div>
                            </div>
                        </div>
                    ))}
                    </div>
                </div>
            </motion.div>
        </section>
    )
}

export default ReviewsSection;