// src/components/Benefits.tsx
import { motion } from 'framer-motion';

const points = [
    'എന്തുകൊണ്ടാണ്  ഇത്ര വർഷമായിട്ടും P*rn ൽ നിന്ന്  പുറത്തു കടക്കാൻ സാധിക്കാത്തത് എന്ന് നിങ്ങൾ തിരിച്ചറിയും',
    'കഴിഞ്ഞ 348 ദിവസമായി No Fap നിലനിർത്താൻ ഞാൻ Follow ചെയ്ത  ആ MASTER SECRET.',
    'Immediate access to the CORE SYSTEM',
];

export default function Benefits() {
    return (
        <section className="bg-white text-[#0f172a] py-20 px-6">
            <motion.div
                className="max-w-4xl mx-auto"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
            >
                <h2 className="text-3xl md:text-4xl font-semibold text-center mb-10">
                    What happens when you join
                </h2>

                <ul className="space-y-6 text-lg leading-relaxed">
                    {points.map((point, i) => (
                        <motion.li
                            key={i}
                            className="flex items-start gap-3"
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: i * 0.2, duration: 0.5 }}
                            viewport={{ once: true }}
                        >
                            <span className="mt-1 text-[#0ea5e9]">✓</span>
                            <span>{point}</span>
                        </motion.li>
                    ))}
                </ul>
            </motion.div>
        </section>
    );
}
