// src/components/Hero.tsx
import { motion } from 'framer-motion';

export default function Hero() {
    return (
        <section className="bg-[#0f172a] text-white flex items-center justify-center px-6 pb-14">
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="max-w-3xl text-center"
            >
                <h1 className="text-4xl md:text-6xl font-semibold leading-tight">
                    നോക്കൂ, എനിക്ക് നിങ്ങളുടെ ₹ 99 രൂപ ആവശ്യമില്ല
                </h1>
                <p className="mt-6 text-lg text-gray-300">
                    കാരണം ഞാൻ ഈ Course സൗജന്യമായി നൽകുകയാണെങ്കിൽ നിങ്ങൾ അത് നിസ്സാരമായി കാണുകയും അതിൽ Action എടുക്കുകയും ചെയ്യില്ല.

                    ഉള്ളിലെ വിവരങ്ങൾക്ക് എനിക്ക്  &nbsp;₹ 2999 പോലും ഈടാക്കാം,

                    കാരണം ഇതൊക്കെ പഠിപ്പിക്കുന്നത്  കഴിഞ്ഞ 6 വർഷത്തെ 3000 ൽ അധികം വ്യക്തികളെ ഈ ഒരു P*rn Addiction ൽ നിന്ന് മാറ്റിയെടുത്ത അനുഭവത്തിൽ നിന്നാണ്.
                </p>
                <div className="mt-8">
                    <button className="bg-[#38bdf8] text-[#0f172a] px-6 py-3 rounded-full text-lg font-medium hover:bg-[#0ea5e9] transition">
                        Start Your Journey
                    </button>
                </div>
            </motion.div>
        </section>
    );
}
