'use client';

import { motion } from 'framer-motion';
import React from 'react';
import { Briefcase, Sparkles } from 'lucide-react';

const experiences = [
  {
    title: 'Software Developer',
    company: 'AcwO Lifestyle Pvt. Ltd.',
    date: 'Sept 2024 – Present',
    points: [
      'Engineered dynamic Shopify-based websites, boosting user experience and sales conversions.',
      'Automated data workflows with Power BI & Excel, delivering actionable insights to leadership.',
      'Optimized code for performance and scalability, contributing to a 30% reduction in load times.',
    ],
  },
  {
    title: 'IT Intern',
    company: 'AcwO Lifestyle Pvt. Ltd.',
    date: 'June 2024 – Sept 2024',
    points: [
      'Supported frontend development using React & Tailwind CSS, improving UI consistency.',
      'Streamlined reporting processes with custom Excel dashboards and Power BI reports.',
      'Collaborated with cross-functional teams to drive agile delivery of key initiatives.',
    ],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-24 px-6 md:px-16 bg-gradient-to-br from-[#0f172a] to-[#1e293b] text-white">
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-5xl font-extrabold text-center mb-16 tracking-tight"
      >
        <Sparkles className="inline w-8 h-8 text-purple-400 mr-2" />Experience
      </motion.h2>

      <div className="relative max-w-5xl mx-auto">
        <div className="absolute left-6 top-0 bottom-0 w-1 bg-gradient-to-b from-purple-600 to-pink-400 rounded-full"></div>

        <div className="flex flex-col gap-16 pl-16 relative z-10">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-[#111827] border border-purple-500/30 p-6 rounded-2xl shadow-xl hover:shadow-purple-500/30 transition duration-300"
            >
              <div className="flex items-center gap-4 mb-3">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-purple-600/20">
                  <Briefcase className="w-6 h-6 text-purple-400" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-purple-300">{exp.title}</h3>
                  <p className="text-sm text-gray-400">{exp.company}</p>
                  <p className="text-xs text-gray-500 italic">{exp.date}</p>
                </div>
              </div>
              <ul className="list-disc pl-6 space-y-2 text-gray-300">
                {exp.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
