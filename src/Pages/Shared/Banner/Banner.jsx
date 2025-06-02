import React from 'react';
import { motion } from "motion/react"
import team1 from '../../../assets/Team/team1.jpg';
import team2 from '../../../assets/Team/team2.jpg'

const Banner = () => {
    return (
        <div className="lg:px-24 px-6 hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className='lg:flex-1 hidden lg:block'>
                    <motion.img
                        animate={{ y: [100, 150, 100] }}
                        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                        src={team1}
                        className="lg:max-w-sm rounded-t-4xl border-s-8 border-b-8 border-blue-500 rounded-br-4xl shadow-2xl"
                    />
                    <motion.img
                        animate={{ x: [100, 150, 100] }}
                        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
                        src={team2}
                        className="lg:max-w-sm rounded-t-4xl border-s-8 border-b-8 border-blue-500 rounded-br-4xl shadow-2xl"
                    />
                </div>
                <div className='flex-1'>
                    <motion.h1
                        initial={{ scale: 0.2 }}
                        animate={{
                            scale: 1,
                            transition: { duration: 1, ease: 'easeIn' }
                        }}
                        className="text-5xl font-bold">Latest <motion.span
                            animate={{
                                color: ['#ff5733', '#bbff33', '#4430d9'],
                                transition: { duration: 4, repeat: Infinity }
                            }}
                        >Job</motion.span> For You!</motion.h1>
                    <p className="py-6">
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                        quasi. In deleniti eaque aut repudiandae et a id nisi.
                    </p>
                    <button className="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;