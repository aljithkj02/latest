// src/components/CTA.tsx
import { motion } from 'framer-motion';

export default function CTA() {
    return (
        <section className="bg-[#14b8a6] text-white py-20 px-6 text-center">
            <motion.div
                className="max-w-3xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
            >
                <h2 className="text-3xl md:text-4xl font-semibold">
                    Take the First Step Today
                </h2>
                <p className="mt-4 text-lg text-white/90">
                    Your future doesn’t have to be tied to your past. Begin the journey back to yourself.
                </p>
                <div className="mt-8">
                    <button className="bg-white text-[#14b8a6] px-6 py-3 rounded-full text-lg font-medium hover:bg-gray-100 transition">
                        Get Started Now
                    </button>
                </div>
            </motion.div>
        </section>
    );
}
