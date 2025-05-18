// src/components/Testimonials.tsx
import { useRef } from 'react';
import { motion } from 'framer-motion';

const videoTestimonials = [
    'https://res.cloudinary.com/dquq0mrkt/video/upload/v1747574207/01_1_yirtud.mp4',
    'https://res.cloudinary.com/dquq0mrkt/video/upload/v1747574239/02_sx3yqx.mp4',
    'https://res.cloudinary.com/dquq0mrkt/video/upload/v1747574259/03_kvfpyi.mp4',
    'https://res.cloudinary.com/dquq0mrkt/video/upload/v1747574240/04_an7ibh.mp4',
    'https://res.cloudinary.com/dquq0mrkt/video/upload/v1747574275/05_lk6zsz.mp4',
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
                                >
                                    <source src={videoUrl} type="video/mp4" />
                                    Your browser does not support the video tag.
                                </video>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
}
