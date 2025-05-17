// src/components/HookQuote.tsx
import { motion } from 'framer-motion';
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';

export default function HookQuote() {
    return (
        <section className="bg-[#0f172a] text-white py-16 px-6">
            <motion.div
                className="max-w-3xl mx-auto bg-[#1e293b] rounded-xl px-6 py-10 relative shadow-lg"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
            >
                <FaQuoteLeft className="absolute top-3 left-2 text-3xl text-white/30" />
                <blockquote className="text-xl md:text-2xl font-light italic text-white/90 text-center">
                    P*rn & Mast*rbation നിർത്താൻ നിങ്ങൾ പരിശ്രമിക്കാത്തതല്ല പ്രശ്നം. നിങ്ങളുടെ പരിശ്രമം തെറ്റായ രീതിയിലാണ്.
                </blockquote>
                <FaQuoteRight className="absolute bottom-3 right-6 text-3xl text-white/30" />
            </motion.div>
        </section>
    );
}
