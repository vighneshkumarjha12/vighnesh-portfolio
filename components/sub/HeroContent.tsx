"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/utils/motion";
import { SparklesIcon } from "@heroicons/react/24/solid";
import Image from "next/image";

const HeroContent = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-row items-center justify-center px-20 mt-40 w-full z-[20]"
    >
      <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-start">
        <motion.div
          variants={slideInFromTop}
          className="Welcome-box py-[10px] px-[20px] border border-[#7042f88b] opacity-[0.9]"
        >
          <SparklesIcon className="text-[#b49bff] mr-[20px] h-8 w-8" />
          <h1 className="Welcome-text text-[13px]">
            Software Developer 
          </h1>   
          
        </motion.div>

      <motion.div
  variants={slideInFromLeft(0.5)}
  className="flex flex-col gap-4 mt-4 text-4xl md:text-5xl font-semibold text-white max-w-[520px]"
>
  <span className="leading-tight">
    Crafting{" "}
    <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
      High Quality
    </span>{" "}
    Project Solutions
  </span>
</motion.div>

<motion.p
  variants={slideInFromLeft(0.8)}
  className="text-base text-gray-400 mt-3 max-w-[520px] leading-relaxed"
>
  I am Vighnesh Kumar Jha — a passionate Software Developer who loves turning ideas into clean, efficient, and scalable code. I enjoy building impactful solutions and collaborating on meaningful projects.
</motion.p>

<motion.a
  variants={slideInFromLeft(1)}
  className="mt-4 py-2 px-4 button-primary text-center text-white cursor-pointer rounded-md w-fit"
>
  Contact: 7028851769
</motion.a>


      <motion.div
        variants={slideInFromRight(0.8)}
        className="w-full h-full flex justify-center items-center"
      >
        <Image
          src="/mainIconsdark.svg"
          alt="work icons"
          height={650}
          width={650}
        />
        
      </motion.div>
    </motion.div>
  );
};

export default HeroContent;
