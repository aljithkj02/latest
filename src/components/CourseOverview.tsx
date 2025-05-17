// src/components/CourseOverview.tsx
import { motion } from 'framer-motion';
import Manthra from '../assets/manthra.jpg'

export default function CourseOverview() {
    return (
        <section className="bg-[#f0fdfa] text-[#0f172a] py-10 px-6">
            <motion.div
                className="max-w-5xl mx-auto text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
            >
                <h2 className="text-2xl md:text-3xl font-semibold mb-8">
                    ഈ കോഴ്‌സിൽ ഞങ്ങൾ ചെയ്യുന്നത് ഇതാണ്
                </h2>

                <div className="w-full aspect-video rounded-xl overflow-hidden shadow-xl border border-[#14b8a6]">
                    <img
                        src={Manthra}
                        alt="Course Overview"
                        className="w-full h-full object-cover"
                    />
                </div>
            </motion.div>
        </section>
    );
}
