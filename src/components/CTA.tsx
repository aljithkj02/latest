
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const INITIAL_TIME = 34 * 3600 + 23 * 60 + 45; // seconds

function getFormattedTime(seconds: number) {
    const h = Math.floor(seconds / 3600);
    const m = Math.floor((seconds % 3600) / 60);
    const s = seconds % 60;
    return {
        hours: String(h).padStart(2, '0'),
        minutes: String(m).padStart(2, '0'),
        seconds: String(s).padStart(2, '0'),
    };
}

export default function CTA() {
    const [timeLeft, setTimeLeft] = useState(INITIAL_TIME);

    useEffect(() => {
        const stored = localStorage.getItem('ctaCountdownStart');
        let startTime = stored ? parseInt(stored, 10) : Date.now();
        localStorage.setItem('ctaCountdownStart', String(startTime));

        const interval = setInterval(() => {
            const elapsed = Math.floor((Date.now() - startTime) / 1000);
            let remaining = INITIAL_TIME - elapsed;

            if (remaining <= 0) {
                startTime = Date.now();
                localStorage.setItem('ctaCountdownStart', String(startTime));
                remaining = INITIAL_TIME;
            }

            setTimeLeft(remaining);
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    const { hours, minutes, seconds } = getFormattedTime(timeLeft);

    return (
        <section className="bg-[#14b8a6] text-white py-20 px-6 text-center">
            <motion.div
                className="max-w-3xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
            >
                <h2 className="text-2xl md:text-3xl font-semibold leading-snug">
                    നിങ്ങളുടെ ജീവിതത്തെ വീണ്ടെടുക്കാനുള്ള അവസാന അവസരം <br />
                    ഇപ്പോൾ അല്ലെങ്കിൽ ഒരിക്കലും ഇല്ല!
                </h2>

                <p className="mt-5 text-lg text-white/90 font-medium">Offer ends in:</p>

                <div className="mt-4 flex justify-center gap-4">
                    {[{ label: 'Hours', value: hours },
                    { label: 'Minutes', value: minutes },
                    { label: 'Seconds', value: seconds }].map(({ label, value }) => (
                        <div key={label} className="flex flex-col items-center">
                            <div className="bg-white text-[#14b8a6] px-5 py-3 rounded-xl text-2xl font-bold w-24 shadow-md">
                                {value}
                            </div>
                            <span className="mt-1 text-sm font-medium tracking-wide">{label}</span>
                        </div>
                    ))}
                </div>

                <div className="mt-10">
                    <button className="bg-white text-[#14b8a6] px-8 py-3 rounded-full text-lg font-semibold hover:bg-gray-100 transition">
                        Join Now
                    </button>
                </div>
            </motion.div>
        </section>
    );
}
