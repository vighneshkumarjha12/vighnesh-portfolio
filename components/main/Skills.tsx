'use client';

import Image from 'next/image';
import React from 'react';
import { motion } from 'framer-motion';

const skillData = [
  { title: 'HTML', image: '/html.png' },
  { title: 'CSS', image: '/css.png' },
  { title: 'JAVASCRIPT', image: '/js.png' },
  { title: 'TAILWIND CSS', image: '/tailwind.png' },
  { title: 'REACT', image: '/react.png' },
  { title: 'POWER BI', image: '/PowerBi.png' },
  { title: 'PYTHON', image: '/python_logo.webp' },
  { title: 'DJANGO', image: '/django.png' },
  { title: 'MACHINE LEARNING', image: '/ml.png' },
  { title: 'SHOPIFY', image: '/shopify.svg' },
  { title: 'MY SQL', image: '/mysql.png' },
  { title: 'GITHUB', image: '/gitwhite.png' },
];

const shakeAnimation = {
  hover: {
    rotate: [0, 2, -2, 2, -2, 0],
    transition: {
      duration: 0.4,
      repeat: Infinity,
      repeatType: 'reverse',
    },
  },
};

const Skills = () => {
  return (
    <section id="skills" className="py-20 px-6 md:px-16 bg-[#020617]">
      <h2 className="text-white text-4xl font-bold text-center mb-12">Skills</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 justify-items-center">
        {skillData.map((skill, idx) => (
          <motion.div
            key={idx}
      
            whileHover="hover"
            className="rounded-2xl p-[5px] bg-gradient-to-tr from-purple-500 to-indigo-500"
          >
            <div className="flex flex-col items-center justify-center bg-[#0d0d1f] px-6 py-10 rounded-2xl w-60 h-60 text-white shadow-lg">
              <div className="relative w-20 h-20 mb-6">
                <Image src={skill.image} alt={skill.title} fill className="object-contain" />
              </div>
              <h3 className="text-center font-bold text-lg leading-tight">
                {skill.title.split(' ')[0]} <br /> {skill.title.split(' ').slice(1).join(' ')}
              </h3>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
