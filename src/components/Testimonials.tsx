import { useRef } from 'react';
import { motion } from 'framer-motion';
import Thumb from '../assets/thumb.jpg';

const videoTestimonials = [
    'https://res.cloudinary.com/dquq0mrkt/video/upload/v1747574207/01_1_yirtud.mp4',
    'https://res.cloudinary.com/dquq0mrkt/video/upload/v1747574239/02_sx3yqx.mp4',
    'https://res.cloudinary.com/dquq0mrkt/video/upload/v1747574259/03_kvfpyi.mp4',
    'https://res.cloudinary.com/dquq0mrkt/video/upload/v1747574240/04_an7ibh.mp4',
    'https://res.cloudinary.com/dquq0mrkt/video/upload/v1747574275/05_lk6zsz.mp4',
];

const descriptions = [
    'ഒറ്റ തീരുമാനത്തിൽ ജീവിതം മാറി',
    'നല്ല ജീവിതത്തിലേക്ക് തിരിച്ചുവരവ് | 6 വർഷത്തെ പോൺ അടിക്ഷനിന്റെ അവസാനം',
    'Nofap കൊണ്ട് എന്റെ ജീവിതം പൂർണമായി മാറി',
    'Nofap കൊണ്ട് ഞാൻ രക്ഷപ്പെട്ടത് ഒരുപാട് വേദനകളിൽ നിന്നാണ് | എന്റെ കഥ',
    <>
        എന്റെ ജീവിതത്തിന്റെ ഏറ്റവും വലിയ <br />
        മോചനം - Nofap
    </>,
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
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {videoTestimonials.map((videoUrl, index) => (
                        <motion.div
                            key={index}
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
                                    poster={Thumb}
                                >
                                    <source src={videoUrl} type="video/mp4" />
                                    Your browser does not support the video tag.
                                </video>
                            </div>
                            <div className="p-4 text-center text-sm italic text-gray-700">
                                {descriptions[index]}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
}
