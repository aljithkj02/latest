import { useRef } from 'react';
import { motion } from 'framer-motion';
// import Thumb from '../assets/thumb.jpg';
import Thumb1 from '../assets/1thumb.png'
import Thumb2 from '../assets/2thumb.png'
import Thumb3 from '../assets/3thumb.png'
import Thumb4 from '../assets/4thumb.png'
import Thumb5 from '../assets/5thumb.png'

const videoTestimonials = [
    {
        id: 1,
        video: 'https://res.cloudinary.com/dquq0mrkt/video/upload/v1747574207/01_1_yirtud.mp4',
        thumb: Thumb1,
        desc: "ഒറ്റ തീരുമാനത്തിൽ ജീവിതം മാറി"
    },
    {
        id: 2,
        video: 'https://res.cloudinary.com/dquq0mrkt/video/upload/v1747574239/02_sx3yqx.mp4',
        thumb: Thumb2,
        desc: 'നല്ല ജീവിതത്തിലേക്ക് തിരിച്ചുവരവ് | 6 വർഷത്തെ പോൺ അടിക്ഷനിന്റെ അവസാനം'
    },
    {
        id: 3,
        video: "https://res.cloudinary.com/dquq0mrkt/video/upload/v1748501161/03_kvfpyi_online-video-cutter.com_b3zxap.mp4",
        thumb: Thumb3,
        desc: 'Nofap കൊണ്ട് എന്റെ ജീവിതം പൂർണമായി മാറി'
    },
    {
        id: 4,
        video: 'https://res.cloudinary.com/dquq0mrkt/video/upload/v1747574240/04_an7ibh.mp4',
        thumb: Thumb4,
        desc: 'Nofap കൊണ്ട് ഞാൻ രക്ഷപ്പെട്ടത് ഒരുപാട് വേദനകളിൽ നിന്നാണ് | എന്റെ കഥ'
    },
    {
        id: 5,
        video: 'https://res.cloudinary.com/dquq0mrkt/video/upload/v1747574275/05_lk6zsz.mp4',
        thumb: Thumb5,
        desc: <>
            എന്റെ ജീവിതത്തിന്റെ ഏറ്റവും വലിയ <br />
            മോചനം - Nofap
        </>
    },
];

export default function Testimonials() {
    const videoRefs = useRef<HTMLVideoElement[]>([]);

    const handlePlay = (index: number) => {
        videoRefs.current.forEach((video, i) => {
            if (video && i !== index && !video.paused) {
                video.pause();
            }
        });
    };

    return (
        <section className="bg-white py-24 px-6">
            <motion.div
                className="max-w-6xl mx-auto"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true }}
            >
                <h2 className="text-3xl font-semibold text-center mb-12 text-gray-800">
                    പങ്കെടുത്തവരുടെ അനുഭവം
                </h2>
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {videoTestimonials.map(({ id, desc, thumb, video }, index) => (
                        <motion.div
                            key={id}
                            className="rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all bg-gray-100"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, delay: index * 0.2 }}
                            viewport={{ once: true }}
                        >
                            <div className="aspect-video w-full">
                                <video
                                    // @ts-ignore
                                    ref={(el) => (videoRefs.current[index] = el!)}
                                    className="w-full h-full object-cover"
                                    controls
                                    onPlay={() => handlePlay(index)}
                                    poster={thumb}
                                >
                                    <source src={video} type="video/mp4" />
                                    Your browser does not support the video tag.
                                </video>
                            </div>
                            <div className="p-4 text-center text-sm italic text-gray-700">
                                {desc}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
}
