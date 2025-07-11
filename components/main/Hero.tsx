import React from "react";
import HeroContent from "../sub/HeroContent";

const Hero = () => {
  return (
     <section id="hero" className="section-spacing">
    <div className="relative flex flex-col h-full w-full" id="about-me">
      <video
        autoPlay
        muted
        loop
        className="rotate-180 absolute top-[-340px]  h-full w-full left-0 z-[1] object-cover "
      >
          <source src="/jai.mp4" type="video/webm" />
      </video>
      <HeroContent />
    </div>
       </section>
  );
};

export default Hero;
