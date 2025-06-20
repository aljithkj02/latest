import { motion } from 'framer-motion';
import { CheckCircle2, ChevronDown } from 'lucide-react';
import { useRef, useState } from 'react';

// ====[ അസറ്റുകൾ - ഇവ നിങ്ങളുടെ ഫയൽ പാത്തുമായി അപ്ഡേറ്റ് ചെയ്യുക ]====
import Manthra from '../assets/manthra.jpg';
import Thumb1 from '../assets/1thumb.png';
import Thumb2 from '../assets/4thumb.png';
// പുതിയ പ്ലേസ്‌ഹോൾഡർ അസറ്റുകൾ
import AwardImage from '../assets/award.jpg'; // അവാർഡിന്റെ ചിത്രം ഇവിടെ ചേർക്കുക

const Landing = () => {
    const videoRefs = useRef<HTMLVideoElement[]>([]);

    const handlePlay = (index: number) => {
        videoRefs.current.forEach((video, i) => {
            if (video && i !== index && !video.paused) {
                video.pause();
            }
        });
    };

    const heroVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
    };

    const buttonVariants = {
        hover: { scale: 1.05, y: -2, transition: { type: 'spring', stiffness: 400, damping: 15 } },
        tap: { scale: 0.95 },
    };

    const reasonsVariants = {
        hidden: { opacity: 0, x: -30 },
        visible: (i: number) => ({
            opacity: 1,
            x: 0,
            transition: { delay: i * 0.15, duration: 0.6, ease: 'easeOut' },
        }),
    };

    const testimonials = [
        { id: 1, video: 'https://res.cloudinary.com/dquq0mrkt/video/upload/v1747574207/01_1_yirtud.mp4', name: 'നിന്നെപ്പോലെ തുടങ്ങിയ ഒരാളുടെ ഇന്നത്തെ ജീവിതം', thumb: Thumb1 },
        { id: 2, video: 'https://res.cloudinary.com/dquq0mrkt/video/upload/v1747574240/04_an7ibh.mp4', name: 'മാറ്റം എത്രത്തോളം സാധ്യമാണെന്ന് ഇവർ പറയും', thumb: Thumb2 },
    ];

    const reasonsToJoin = [
        '"ഇത് അവസാനത്തേത്" എന്ന നിന്റെ ഉറപ്പിന് മണിക്കൂറുകളുടെ ആയുസ്സുപോലുമില്ല. ഓരോ തവണയും പരാജയപ്പെട്ട് കുറ്റബോധത്തിൽ നീറുന്ന ഈ അവസ്ഥക്ക് ഒരവസാനം വേണ്ടേ?',
        'നിന്റെ Career, ബന്ധങ്ങൾ, ആരോഗ്യം... ജീവിതത്തിൽ ശ്രദ്ധിക്കേണ്ട പലതിനും കൊടുക്കേണ്ട ഊർജ്ജമാണ് ഒരു മുറിക്കുള്ളിൽ നീയില്ലാതാക്കുന്നത്.',
        'നിന്റെ പങ്കാളിയോടുള്ള താല്പര്യവും അടുപ്പവും കുറയുന്നുണ്ടോ? P*rn നിന്റെ പുരുഷത്വത്തെയും സ്നേഹിക്കാനുള്ള കഴിവിനെയുമാണ് ഇല്ലാതാക്കുന്നത്.',
        'പുറമെ ചിരിക്കുമ്പോഴും, ആരും കാണാതെ നീ അനുഭവിക്കുന്ന ഈ മാനസിക സംഘർഷം... ഇത് പങ്കുവെക്കാൻ പോലും ഭയക്കുന്ന നിന്റെ അവസ്ഥ ഞങ്ങൾക്ക് മനസ്സിലാകും.',
        'ഒന്നിനും ഒരു ഉഷാറില്ലായ്മ, എന്തിനും ഒരു മടുപ്പ്... യഥാർത്ഥ ജീവിതം തന്നെ ഒരു ഭാരമായി മാറിയെങ്കിൽ, അതിന്റെ കാരണം ഈ ശീലമല്ലാതെ മറ്റൊന്നല്ല.',
        'ഇതൊരു മോശം ശീലം മാത്രമല്ല, നിന്റെ ആത്മവിശ്വാസത്തെയും ഭാവിയെയും കാർന്നുതിന്നുന്ന ഒരു വിഷമാണ്. ആ വിഷത്തിൽ നിന്ന് മോചനം നേടാൻ സമയമായി.'
    ];

    const faqs = [
        { q: "എന്റെ വിവരങ്ങൾ പൂർണ്ണമായും രഹസ്യമായിരിക്കുമോ?", a: "തീർച്ചയായും. നിന്റെ പേരോ മറ്റ് വിവരങ്ങളോ ഒരിടത്തും വെളിപ്പെടുത്തില്ല. ഇത് ഞങ്ങളുടെ ഉറപ്പാണ്." },
        { q: "ഈ കോഴ്സ് എത്ര ദിവസത്തേക്കാണ്?", a: "ഈ കോഴ്സ് നിന്റെ ഇഷ്ടത്തിനനുസരിച്ച് പഠിക്കാനായിട്ടാണ് ഞങ്ങൾ ഡിസൈൻ ചെയ്തിരിക്കുന്നത്. എല്ലാ വീഡിയോകളും റെക്കോർഡ് ചെയ്തതുകൊണ്ട് നിന്റെ ഒഴിവുസമയം പോലെ പഠനം മുന്നോട്ട് കൊണ്ടുപോകാം." },
        { q: "എനിക്ക് എപ്പോൾ വേണമെങ്കിലും ചോദ്യങ്ങൾ ചോദിക്കാൻ സാധിക്കുമോ?", a: "അതെ, ഞങ്ങളുടെ പ്രൈവറ്റ് വാട്ട്സ്ആപ്പ് ഗ്രൂപ്പിലൂടെ നിനക്ക് എപ്പോൾ വേണമെങ്കിലും സംശയങ്ങൾ ചോദിക്കാം." },
        { q: "പണമടച്ചാൽ ഉടൻ കോഴ്സ് ലഭ്യമാകുമോ?", a: "അതെ, പണമടച്ച ഉടൻ തന്നെ നിനക്ക് കോഴ്സിന്റെ ആദ്യത്തെ മൊഡ്യൂളിലേക്ക് പ്രവേശനം ലഭിക്കുന്നതാണ്." }
    ];

    return (
        <div className="bg-slate-50 text-slate-800 font-sans leading-relaxed">
            {/* Sticky Navbar */}
            <motion.nav initial={{ y: -100 }} animate={{ y: 0 }} transition={{ duration: 0.5 }} className="sticky top-0 z-50 bg-white/80 backdrop-blur-md shadow-sm">
                <div className="container mx-auto px-6 py-3 flex justify-between items-center">
                    <h1 className="text-xl font-bold text-slate-900 tracking-wide">No PMO Warriors</h1>
                    <motion.a href="https://superprofile.bio/course/nopmowarriors" variants={buttonVariants} whileHover="hover" whileTap="tap" className="bg-orange-500 text-white font-bold py-2 px-4 sm:px-6 rounded-lg shadow-lg hover:bg-orange-600 transition-colors duration-300 text-sm sm:text-base">
                        ഇപ്പോൾ ചേരൂ
                    </motion.a>
                </div>
            </motion.nav>

            {/* Hero Section */}
            <section className="container mx-auto px-6 pt-10 pb-20 md:pb-24">
                <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
                    <motion.div variants={heroVariants} initial="hidden" animate="visible">
                        <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 !leading-tight mb-6">
                            {/* ആരും കാണാതെ, ഒരു മുറിയുടെ കോണിലിരുന്ന് നീ അനുഭവിക്കുന്ന ആ മാനസിക സംഘർഷമുണ്ടല്ലോ... */}
                            <span className="text-orange-500">P*rn & Mast*rbation</span> അടിമത്തത്തിൽ നിന്ന് പൂർണ മോചനം!
                        </h2>
                        <p className="text-lg text-slate-700 mb-8">
                            {/* അതൊരുപക്ഷേ നിന്റെ ഉറക്കം കെടുത്തുന്നുണ്ടാവാം, സ്നേഹിക്കുന്നവരിൽ നിന്ന് നിന്നെ അകറ്റുന്നുണ്ടാവാം. ഒരു പത്ത് മിനിറ്റ് എന്ന് കരുതി തുടങ്ങി മണിക്കൂറുകൾ നഷ്ടപ്പെടുമ്പോൾ നിരാശ തോന്നാറുണ്ടോ? നീ ഒറ്റയ്ക്കല്ല സുഹൃത്തേ. */}
                            {/* ഒറ്റയ്ക്ക് ഒരു മുറിയുടെ കോണിലിരുന്ന് നീ അനുഭവിക്കുന്ന ആ മാനസിക സംഘർഷം ഞങ്ങൾക്കറിയാം. ഉറക്കം കെടുത്തുന്ന, പ്രിയപ്പെട്ടവരിൽ നിന്ന് അകറ്റുന്ന, സമയം വെറുതെ കളയുന്ന ഈ ശീലം നിന്നെ വല്ലാതെ തളർത്തിയിട്ടുണ്ടാവാം. ഇനി നീ ഒറ്റയ്ക്കല്ല! No PMO Warriors Program ലൂടെ, ഈ അടിമത്തത്തിൽ നിന്ന് പൂർണ്ണമായും പുറത്തുവന്ന്, ആത്മവിശ്വാസത്തോടെയും ലക്ഷ്യബോധത്തോടെയും ജീവിക്കാൻ ഞങ്ങൾ നിന്നെ സഹായിക്കും. നിന്റെ നഷ്ടപ്പെട്ട ജീവിതം തിരിച്ചുപിടിക്കാൻ ഇത് ഒരു അവസരമാണ്. */}
                            സ്വയം നിയന്ത്രിക്കാനാകാതെ, ദിവസേന മണിക്കൂറുകൾ നഷ്ടപ്പെട്ട്, കുറ്റബോധത്തിൽ നീ ഒറ്റയ്ക്കിരിക്കുകയാണോ? ഈ ശീലം നിന്റെ ഉറക്കവും ആത്മവിശ്വാസവും കെടുത്തിയിട്ടുണ്ടാവാം. ഇനി നീ ഒറ്റയ്ക്കല്ല! No PMO Warriors Program ലൂടെ, ഈ അടിമത്തത്തിൽ നിന്ന് പൂർണ്ണമായും പുറത്തുവന്ന്, ആത്മവിശ്വാസത്തോടെയും ലക്ഷ്യബോധത്തോടെയും ജീവിക്കാൻ ഞങ്ങൾ നിന്നെ സഹായിക്കും. നിന്റെ നഷ്ടപ്പെട്ട ജീവിതം തിരിച്ചുപിടിക്കാൻ ഇത് ഒരു അവസരമാണ്.
                        </p>
                        <motion.a href="https://superprofile.bio/course/nopmowarriors" variants={buttonVariants} whileHover="hover" whileTap="tap" className="inline-block bg-orange-500 text-white font-bold py-4 px-10 rounded-lg shadow-xl hover:bg-orange-600 transition-colors duration-300 text-lg">
                            പുറത്തുവരാൻ ഞാനാഗ്രഹിക്കുന്നു
                        </motion.a>
                    </motion.div>
                </div>
            </section>

            {/* Doctor's Insight Section */}
            <section className="py-10 bg-slate-100">
                <div className="container mx-auto px-6 text-center">
                    <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-12">
                        P*rn അടിമത്തത്തിൽ നിന്ന് പുറത്തുവരാൻ ഒരു ഡോക്ടറുടെ വാക്കുകൾ കേൾക്കാം
                    </h3>
                    <div className="max-w-md mx-auto bg-white rounded-xl shadow-xl overflow-hidden">
                        <div className="aspect-[9/14] w-full">
                            <video
                                className="w-full h-full object-cover"
                                controls
                                preload="none"
                            // poster="" // You can add a poster image here if you have one
                            >
                                <source src="https://res.cloudinary.com/dquq0mrkt/video/upload/v1750416300/Recovery_Course_s4nl9f.mp4" type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        </div>
                    </div>
                    <div className="text-center mt-12">
                        <motion.a
                            href="https://superprofile.bio/course/nopmowarriors"
                            variants={buttonVariants}
                            whileHover="hover"
                            whileTap="tap"
                            className="inline-block bg-orange-500 text-white font-bold py-4 px-10 rounded-lg shadow-xl hover:bg-orange-600 transition-colors duration-300 text-lg"
                        >
                            ഇപ്പോൾ തന്നെ ചേരുക
                        </motion.a>
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section className="py-10 bg-slate-100">
                <div className="container mx-auto px-6">
                    <h3 className="text-3xl md:text-4xl font-bold text-center text-slate-900 mb-12">നിന്നെപ്പോലെ ചിന്തിച്ചിരുന്ന ചിലരുടെ വാക്കുകൾ കേൾക്കൂ</h3>
                    <div className="grid md:grid-cols-2 gap-10">
                        {testimonials.map(({ id, name, thumb, video }, index) => (
                            <motion.div key={id} className="bg-white rounded-xl shadow-xl overflow-hidden group" initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.5 }} transition={{ duration: 0.6, ease: 'easeOut' }}>
                                <div className="aspect-video w-full cursor-pointer">
                                    <video
                                        // @ts-ignore
                                        ref={(el) => (videoRefs.current[index] = el!)} className="w-full h-full object-cover" controls onPlay={() => handlePlay(index)} poster={thumb}>
                                        <source src={video} type="video/mp4" />
                                        Your browser does not support the video tag.
                                    </video>
                                </div>
                                <div className="p-4">
                                    <p className="font-semibold text-slate-800 text-center">{name}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                    <div className="text-center mt-8">
                        <motion.a href="https://superprofile.bio/course/nopmowarriors" variants={buttonVariants} whileHover="hover" whileTap="tap" className="inline-block bg-orange-500 text-white font-bold py-4 px-10 rounded-lg shadow-xl hover:bg-orange-600 transition-colors duration-300 text-lg">
                            എനിക്കും മാറണം
                        </motion.a>
                    </div>
                </div>
            </section>

            {/* Award Section */}
            <section className="bg-teal-700 text-white py-16">
                <div className="container mx-auto px-6">
                    <div className="grid md:grid-cols-2 gap-10 items-center">
                        <motion.div className="flex justify-center rounded-lg overflow-hidden" initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
                            <img src={AwardImage} alt="Award for transforming lives" className="w-full object-cover" />
                        </motion.div>
                        <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
                            <h3 className="text-3xl font-bold mb-4">ഇതൊരു അവാർഡ് മാത്രമല്ല, അതൊരു ഉറപ്പാണ്</h3>
                            <div className="w-16 h-1 bg-orange-400 mb-6"></div>
                            <p className="text-teal-100 text-lg mb-4">
                                P*rn & Mast*rbation അടിമത്തത്തിന്റെ ചങ്ങലകൾ പൊട്ടിച്ചെറിഞ്ഞ്, ജീവിതം തിരിച്ചുപിടിക്കാൻ 3000-ത്തിൽ അധികം യുവാക്കളെ സഹായിച്ചതിനാണ് ഞങ്ങൾക്ക് ഈ അംഗീകാരം. ഇത് വെറുമൊരു അവാർഡല്ല, നിന്നെപ്പോലെ പോരാടി വിജയിച്ച ഓരോരുത്തരും ഞങ്ങളിലർപ്പിച്ച വിശ്വാസത്തിന്റെ പ്രതീകമാണ്.
                            </p>
                            <p className="text-teal-100 text-lg">
                                ഈ യാത്രയിൽ നിനക്ക് ലഭിക്കാൻ പോകുന്നതും ഇതുപോലൊരു ഉറപ്പാണ്.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Course Info Image Section */}
            <section className="py-10 flex flex-col items-center">
                <motion.div variants={heroVariants} initial="hidden" animate="visible"
                    className='container'
                >
                    <div className="w-[95%] mx-auto aspect-video rounded-xl overflow-hidden shadow-2xl border-2 border-teal-500/50">
                        <img src={Manthra} alt="Course Overview" className="w-full h-full object-cover" />
                    </div>
                    <p className="text-center mt-4 text-slate-600 italic">ഈ കോഴ്‌സിൽ ഞങ്ങൾ ചെയ്യുന്നത് ഇതാണ്</p>
                </motion.div>

                {/* ====[ പുതിയതായി ചേർത്ത CTA ബട്ടൺ - 1 ]==== */}
                <div className="text-center mt-5 w-[80%]">
                    <motion.a href="https://superprofile.bio/course/nopmowarriors" variants={buttonVariants} whileHover="hover" whileTap="tap" className="inline-block bg-orange-500 text-white font-bold py-4 px-10 rounded-lg shadow-xl hover:bg-orange-600 transition-colors duration-300 text-lg">
                        എനിക്കും വിജയിക്കണം
                    </motion.a>
                </div>
            </section>

            {/* Course Info Section */}
            <section className="py-10">
                <div className="container mx-auto px-6 text-center">
                    <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">ഈ യാത്ര നിന്നെ പഠിപ്പിക്കുന്ന പ്രധാന പാഠങ്ങൾ</h3>
                    <p className="max-w-3xl mx-auto text-slate-600 mb-16">
                        ഇതൊരു സാധാരണ കോഴ്സല്ല. നിന്റെ ചിന്താരീതിയെയും ജീവിതത്തെയും മാറ്റിമറിക്കാൻ സഹായിക്കുന്ന ചില തിരിച്ചറിവുകളാണ് നമ്മൾ ഇവിടെ പങ്കുവെക്കുന്നത്.
                    </p>
                    <div className="max-w-3xl mx-auto text-left space-y-8">
                        {/* പാഠം 1: ചതിക്കുഴികൾ */}
                        <motion.div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-orange-500" initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, ease: 'easeOut' }}>
                            <h4 className="font-bold text-2xl text-slate-800">1. ചതിക്കുഴികൾ തിരിച്ചറിയാം</h4>
                            <p className="text-slate-600 mt-3 text-lg leading-relaxed">
                                എന്തുകൊണ്ടാണ് ഇതിൽ നിന്ന് പുറത്തുകടക്കാൻ ഇത്ര ബുദ്ധിമുട്ട്? അറിയാതെ നമ്മളെ ഇതിലേക്ക് വലിച്ചിഴക്കുന്ന സാഹചര്യങ്ങളെയും, മനസ്സിന്റെ കളികളെയും നമ്മൾ ഇവിടെ തുറന്നുകാണിക്കുന്നു. <strong className="text-slate-700">ശത്രുവിനെ തിരിച്ചറിഞ്ഞാൽ, പോരാട്ടം പകുതി ജയിച്ചു.</strong>
                            </p>
                        </motion.div>
                        {/* പാഠം 2: റിവേഴ്സ് ഗിയർ */}
                        <motion.div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-teal-500" initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}>
                            <h4 className="font-bold text-2xl text-slate-800">2. നിനക്ക് റിവേഴ്സ് ഗിയറില്ല, മുന്നോട്ട് മാത്രം!</h4>
                            <p className="text-slate-600 mt-3 text-lg leading-relaxed">
                                ഒരു തവണ വീണുപോയാൽ എല്ലാം തീർന്നു എന്ന് കരുതുന്നതാണ് ഏറ്റവും വലിയ പരാജയം. ആ കുറ്റബോധമാണ് നിന്നെ പിന്നോട്ട് വലിക്കുന്നത്. <strong className="text-slate-700">വീഴ്ചകൾ യാത്രയുടെ ഭാഗമാണെന്നും, അതിൽ നിന്ന് പാഠം ഉൾക്കൊണ്ട് എങ്ങനെ കൂടുതൽ ശക്തനായി മുന്നോട്ട് പോകാമെന്നും</strong> നമ്മൾ പഠിക്കും.
                            </p>
                        </motion.div>
                        {/* പാഠം 3: കാലം കാത്തിരിക്കുന്നു */}
                        <motion.div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-orange-500" initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.3, ease: 'easeOut' }}>
                            <h4 className="font-bold text-2xl text-slate-800">3. നിന്റെ വിജയത്തിനായി കാലം കാത്തിരിക്കുന്നു</h4>
                            <p className="text-slate-600 mt-3 text-lg leading-relaxed">
                                ഈ ശീലത്തിൽ നീ നഷ്ടപ്പെടുത്തിയ സമയവും ഊർജ്ജവും എങ്ങനെ നിന്റെ യഥാർത്ഥ ലക്ഷ്യങ്ങൾക്കായി ഉപയോഗിക്കാം? <strong className="text-slate-700">ജീവിതത്തിന് പുതിയ അർത്ഥവും ദിശാബോധവും നൽകി, ഓരോ ദിവസവും ഉന്മേഷത്തോടെ ജീവിക്കാൻ</strong> നമ്മൾ ഒരുമിച്ച് ഒരു വഴി കണ്ടെത്തുന്നു.
                            </p>
                        </motion.div>
                        {/* പാഠം 4: എന്തുകൊണ്ട്? */}
                        <motion.div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-teal-500" initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.4, ease: 'easeOut' }}>
                            <h4 className="font-bold text-2xl text-slate-800">4. ഇപ്പോഴും പഴയ ശീലങ്ങളിൽ കുടുങ്ങിക്കിടക്കുകയാണോ? - എന്തുകൊണ്ട്?</h4>
                            <p className="text-slate-600 mt-3 text-lg leading-relaxed">
                                ചിലപ്പോൾ നമ്മൾ പുറമെയുള്ള ശീലത്തെ മാത്രമാണ് ശ്രദ്ധിക്കുന്നത്, പക്ഷെ അതിന്റെ യഥാർത്ഥ കാരണം വളരെ ആഴത്തിലുള്ളതായിരിക്കാം. <strong className="text-slate-700">ഏകാന്തത, ആത്മവിശ്വാസക്കുറവ് തുടങ്ങിയ മൂലകാരണങ്ങളെ കണ്ടെത്തി അതിനെ എങ്ങനെ നേരിടാമെന്ന്</strong> നമ്മൾ ഇവിടെ പഠിക്കുന്നു.
                            </p>
                        </motion.div>
                    </div>
                    {/* ====[ പുതിയതായി ചേർത്ത CTA ബട്ടൺ - 1 ]==== */}
                    <div className="text-center mt-16">
                        <motion.a href="https://superprofile.bio/course/nopmowarriors" variants={buttonVariants} whileHover="hover" whileTap="tap" className="inline-block bg-orange-500 text-white font-bold py-4 px-4 rounded-lg shadow-xl hover:bg-orange-600 transition-colors duration-300 text-lg">
                            ജീവിതം മാറ്റിമറിക്കാൻ ഞാനാഗ്രഹിക്കുന്നു
                        </motion.a>
                    </div>
                </div>
            </section>

            {/* Reasons Section */}
            <section className="bg-slate-100 py-10">
                <div className="container mx-auto px-6">
                    <h3 className="text-3xl md:text-4xl font-bold text-center text-slate-900 mb-12">എന്തുകൊണ്ട് ഈ യാത്ര നിനക്ക് അനിവാര്യമാണ്?</h3>
                    <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-x-12 gap-y-8">
                        {reasonsToJoin.map((reason, i) => (
                            <motion.div key={i} custom={i} variants={reasonsVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.5 }} className="flex items-start">
                                <CheckCircle2 className="w-8 h-8 text-green-500 mr-4 flex-shrink-0 mt-1" />
                                <p className="text-slate-700 text-lg">{reason}</p>
                            </motion.div>
                        ))}
                    </div>
                    {/* ====[ പുതിയതായി ചേർത്ത CTA ബട്ടൺ - 2 ]==== */}
                    <div className="text-center mt-16">
                        <motion.a href="https://superprofile.bio/course/nopmowarriors" variants={buttonVariants} whileHover="hover" whileTap="tap" className="inline-block bg-orange-500 text-white font-bold py-4 px-10 rounded-lg shadow-xl hover:bg-orange-600 transition-colors duration-300 text-lg">
                            ഈ അടിമത്തം അവസാനിപ്പിക്കാം
                        </motion.a>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-20">
                <div className="container mx-auto px-6 max-w-3xl">
                    <h3 className="text-3xl md:text-4xl font-bold text-center text-slate-900 mb-12">നിന്റെ മനസ്സിലെ സംശയങ്ങൾ</h3>
                    <div className="space-y-4">
                        {faqs.map((faq, i) => <FAQItem key={i} q={faq.q} a={faq.a} />)}
                    </div>
                </div>
            </section>

            {/* Final CTA Section */}
            <section id="join-now" className="bg-white py-10">
                <div className="container mx-auto px-6 text-center max-w-3xl">
                    <motion.div className="bg-slate-100 p-8 sm:p-12 rounded-xl shadow-lg" initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
                        <h4 className="text-3xl font-bold text-slate-900">ഒരു പുതിയ ജീവിതം തുടങ്ങാൻ തയ്യാറാണോ?</h4>
                        <p className="text-slate-600 mt-4 mb-8 text-lg">
                            ഈ ഒരു തീരുമാനം നിന്റെ ജീവിതത്തിലെ ഏറ്റവും മികച്ച ഒന്നായിരിക്കും. നഷ്ടപ്പെട്ട സന്തോഷവും സമാധാനവും ആത്മവിശ്വാസവും തിരിച്ചുപിടിക്കാൻ ഞങ്ങൾ നിന്നെ സഹായിക്കാം.
                        </p>
                        <motion.a href="https://superprofile.bio/course/nopmowarriors" variants={buttonVariants} whileHover="hover" whileTap="tap" className="inline-block bg-orange-500 text-white font-bold py-5 px-6 rounded-lg shadow-xl hover:bg-orange-600 transition-colors duration-300 text-xl">
                            അതെ, എനിക്ക് മാറണം!
                        </motion.a>
                    </motion.div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-slate-900 text-slate-300 py-12">
                <div className="container mx-auto px-6 text-center">
                    <p className="font-semibold text-lg">No PMO Warriors</p>
                    {/* <p className="text-sm text-slate-400 mt-4">&copy; {new Date().getFullYear()} All Rights Reserved.</p>
                    <div className="mt-4 space-x-4 text-sm">
                        <a href="/privacy" className="hover:text-white">Privacy Policy</a>
                        <a href="/terms" className="hover:text-white">Terms of Service</a>
                    </div> */}
                </div>
            </footer>
        </div>
    );
};

// FAQ Item Component for clean accordion-like look & feel
const FAQItem = ({ q, a }: { q: string, a: string }) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="bg-white border border-slate-200 rounded-lg overflow-hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="w-full p-5 text-left font-semibold text-lg flex justify-between items-center hover:bg-slate-50 transition-colors">
                <span>{q}</span>
                <motion.div animate={{ rotate: isOpen ? 180 : 0 }}>
                    <ChevronDown className='w-5 h-5 text-slate-500' />
                </motion.div>
            </button>
            <motion.div
                initial={false}
                animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
                className="overflow-hidden"
            >
                <div className="p-5 pt-0 text-slate-600">
                    <p>{a}</p>
                </div>
            </motion.div>
        </div>
    )
}

export default Landing;