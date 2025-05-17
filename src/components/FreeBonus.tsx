import { motion } from 'framer-motion';
import { FaGift } from 'react-icons/fa';

export default function FreeBonus() {
    return (
        <section className="bg-[#0f172a] text-white py-14 px-6">
            <motion.div
                className="max-w-4xl mx-auto text-center flex flex-col items-center gap-5"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true }}
            >
                <div className="flex items-center gap-3 text-2xl md:text-3xl font-semibold text-[#facc15]">
                    <FaGift className="text-[#facc15] animate-bounce" />
                    <span>BONUS GIFT!</span>
                </div>
                <p className="text-lg md:text-xl text-white/90 leading-relaxed">
                    <span className="line-through text-red-400 font-semibold mr-2">₹299</span>
                    വില വരുന്ന <span className="font-semibold text-white">Your Brain On P*rn </span>
                    മലയാളം Audio Book,
                    <span className="bg-[#22c55e] text-black px-2 py-1 rounded-md font-bold mx-1">FREE</span>
                    ആയി ഇന്ന് തന്നെ ലഭിക്കുന്നു!
                </p>
            </motion.div>
        </section>
    );
}
