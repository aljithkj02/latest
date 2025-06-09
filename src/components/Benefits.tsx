import { motion } from 'framer-motion';

export default function Benefits() {
    return (
        <section id="benifits" className="bg-white text-[#0f172a] py-20 px-6">
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
                    <motion.li
                        className="flex items-start gap-3"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                    >
                        <span className="mt-1 text-[#0ea5e9]">✓</span>
                        <span>
                            എന്തുകൊണ്ടാണ്  ഇത്ര വർഷമായിട്ടും P*rn ൽ നിന്ന്  പുറത്തു കടക്കാൻ സാധിക്കാത്തത് എന്ന് നിങ്ങൾ തിരിച്ചറിയും
                        </span>
                    </motion.li>

                    <motion.li
                        className="flex items-start gap-3"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                        viewport={{ once: true }}
                    >
                        <span className="mt-1 text-[#0ea5e9]">✓</span>
                        <span>
                            കഴിഞ്ഞ 348 ദിവസമായി No Fap നിലനിർത്താൻ ഞാൻ Follow ചെയ്ത ആ
                            <span className="font-bold text-[#16a34a]"> MASTER SECRET</span>
                        </span>
                    </motion.li>

                    <motion.li
                        className="flex items-start gap-3"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4, duration: 0.5 }}
                        viewport={{ once: true }}
                    >
                        <span className="mt-1 text-[#0ea5e9]">✓</span>
                        <span>
                            Immediate access to the
                            <span className="font-bold ml-1">CORE SYSTEM</span>
                        </span>
                    </motion.li>

                    <motion.li
                        className="flex items-start gap-3"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.6, duration: 0.5 }}
                        viewport={{ once: true }}
                    >
                        <span className="mt-1 text-[#0ea5e9]">✓</span>
                        <span>
                            <span className="font-bold text-yellow-500">NO FAP KINGS</span> whatsapp community
                        </span>
                    </motion.li>

                    <motion.li
                        className="flex items-start gap-3"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.6, duration: 0.5 }}
                        viewport={{ once: true }}
                    >
                        <span className="mt-1 text-[#0ea5e9]">✓</span>
                        <span>
                            പൂർണമായും <span className="font-bold text-red-500">P*rn Block</span>  ചെയ്യുന്നതിനുള്ള Application
                        </span>
                    </motion.li>

                    <motion.li
                        className="flex items-start gap-3"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.6, duration: 0.5 }}
                        viewport={{ once: true }}
                    >
                        <span className="mt-1 text-[#0ea5e9]">✓</span>
                        <span>
                            Nofap Power <b>Motivation</b> Videos
                        </span>
                    </motion.li>

                    <motion.li
                        className="flex items-start gap-3"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.6, duration: 0.5 }}
                        viewport={{ once: true }}
                    >
                        <span className="mt-1 text-[#0ea5e9]">✓</span>
                        <span>
                            NOFAP <span className="font-bold text-red-500">ചതിക്കുഴികൾ </span>  മനസ്സിലാക്കാം
                        </span>
                    </motion.li>
                </ul>
            </motion.div>
        </section>
    );
}
