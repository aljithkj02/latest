// src/components/Testimonials.tsx
import { motion } from 'framer-motion';
import { FaQuoteLeft } from 'react-icons/fa';

const testimonials = [
    {
        name: 'Muhammad Harshad',
        content:
            '12 വർഷമായി ഇവിടെ ഗത്തറിലാണ് താമസിക്കുന്നത്.സിഗരറ്റ്,മദ്യം അങ്ങനെയുള്ള ദുശ്ശീലമൊന്നും ഇതുവരെ എനിക്കുണ്ടായിട്ടില്ല . പക്ഷേ ഈ ശീലത്തിൽ നിന്ന് മാത്രം എത്ര ശ്രമിച്ചിട്ടും പുറത്ത് വരാൻ സാധിക്കാതിരിക്കുമ്പോഴാണ് ഈ കോഴ്സിന്കത്തേക്ക് വരുന്നത്. Inshallah ഇന്ന് ഞാൻ 46-ആമത്തെ ദിവസത്തിലാണുള്ളത്. ഒരുപാട് നന്ദിയും കടപ്പാടുമുണ്ട് .',
    },
    {
        name: 'Abdul Gafoor',
        content:
            'എറണാകുളത്ത് ഞാൻ കാണാത്ത Psychologist മാരില്ല കേറാത്ത Addiction കേന്ദ്രങ്ങളില്ല... കണ്ട ഏത് Psychologist നും മാറ്റിത്തരാൻ പറ്റാത്തതാണ് Akshay bro ഈ കോഴ്സ് ലൂടെ മാത്രം ചെയ്ത് തന്നത് എങ്ങനെയാ നന്ദി പറയേണ്ടതെന്നറിയില്ല Bro',
    },
    {
        name: 'Arun Murali',
        content:
            'ഒറ്റരാത്രി പോലും ഇത് ചെയ്യാതെ ഉറങ്ങാൻ പറ്റില്ലാത്ത അവസ്ഥയായിരുന്നു എന്റേത്,അത് പുലർച്ചെ 3 മണി ആയാലും ശരി. ഇന്ന് ഇതൊന്നും ഇല്ലാതെയും ഉറങ്ങാൻ പറ്റുമെന്ന് എന്നോട് തന്നെ തെളിയിക്കാൻ സാധിച്ചു.. നിങ്ങൾക്കെങ്ങനെയാണെന്നറിയില്ല പക്ഷെ എനിക്കിത് സ്വപ്നതുല്യ ജീവിതമാണ് Thank you for the Support',
    },
];

export default function Testimonials() {
    return (
        <section className="bg-white text-[#0f172a] py-24 px-6">
            <motion.div
                className="max-w-5xl mx-auto text-center"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true }}
            >
                <h2 className="text-3xl md:text-4xl font-semibold mb-2">ഇനിയും തീരുമാനം എടുത്തില്ലേ ...?</h2>
                <p className="text-gray-600 text-lg mb-12">Real Life Success Stories</p>

                <div className="grid md:grid-cols-3 gap-8">
                    {testimonials.map((item, index) => (
                        <motion.div
                            key={index}
                            className="bg-gradient-to-br from-[#f8fafc] to-[#e2e8f0] rounded-xl p-6 shadow-md hover:shadow-xl transition-all flex flex-col justify-between h-full"
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, delay: index * 0.2 }}
                            viewport={{ once: true }}
                        >
                            <div>
                                <FaQuoteLeft className="text-gray-400 text-2xl mb-4" />
                                <p className="text-gray-800 text-sm leading-relaxed">
                                    {item.content}
                                </p>
                            </div>
                            <div className="mt-6 text-right">
                                <span className="text-sm font-semibold text-[#0f172a]">— {item.name}</span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
}
