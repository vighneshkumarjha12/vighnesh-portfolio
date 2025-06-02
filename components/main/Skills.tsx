'use client';

import Image from 'next/image';
import React from 'react';
import { motion } from 'framer-motion';

const skillData = [
  { title: 'HTML', image: '/html.png' },
  { title: 'CSS', image: '/css.png' },
  { title: 'JavaScript', image: '/js.png' },
  { title: 'Tailwind CSS', image: '/tailwind.png' },
  { title: 'React', image: '/react.png' },
  { title: 'Power BI', image: '/PowerBi.png' },
  { title: 'Python', image: '/python_logo.webp' },
  { title: 'Django', image: '/django.png' },
  { title: 'Machine Learning', image: '/ml.png' },
  { title: 'Shopify', image: '/shopify.svg' },
  { title: 'MySQL', image: '/mysql.png' },
  { title: 'GitHub', image: '/gitwhite.png' },
];

const shakeAnimation = {
  hover: {
    rotate: [0, 2, -2, 2, -2, 0],
    transition: {
      duration: 0.4,
      repeat: Infinity,
      repeatType: 'reverse' as const,
    },
  },
};

const Skills = () => {
  return (
    <section id="skills" className="py-20 px-6 md:px-16 bg-[#0c0c1d] text-white">
      <h2 className="text-4xl font-bold text-center mb-14">Skills</h2>

      <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8 md:gap-10">
        {skillData.map((skill, idx) => (
          <motion.div
            key={idx}
            whileHover="hover"
            variants={shakeAnimation}
            className="rounded-3xl p-[2px] bg-gradient-to-tr from-purple-500 to-indigo-500 shadow-lg"
          >
            <div className="flex flex-col items-center justify-center bg-[#111827] rounded-3xl w-full h-56 px-6 py-8 text-center backdrop-blur-md">
              <div className="relative w-16 h-16 mb-4">
                <Image src={skill.image} alt={skill.title} fill className="object-contain" />
              </div>
              <h3 className="text-lg font-semibold leading-tight">
                {skill.title}
              </h3>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
