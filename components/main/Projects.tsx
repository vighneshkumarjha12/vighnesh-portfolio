import React from "react";
import Image from "next/image";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  return (
     <section id="projects" className="section-spacing">
      {/* Projects content */}
    
    <div
  className="flex flex-col items-center justify-center py-20"
  id="projects"
>
  <p className="text-lg text-gray-400 uppercase tracking-widest"> Crafted with Passion</p> {/* Optional subheading */}
  <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-5">
    My Projects
  </h1>

   <div className="h-full w-full flex flex-wrap gap-10 px-10 justify-center">
 

  <div className="w-full md:w-[45%]">
    <ProjectCard
      src="/converter.png"
      title="SmartDoc Studio: All-in-One Document & Image Toolkit"
      description="From seamless document conversions to advanced image editing, SmartDoc Studio empowers you to transform, enhance, and adapt your files with ease. Whether converting images to PDFs, extracting editable content from PDFs, or adding/removing backgrounds from visuals — it's your one-stop solution for productivity and creativity."
    />
  </div>
  <div className="w-full md:w-[45%]">
    <ProjectCard
      src="/prediction.png"
      title="Lungs Cancer Prediction using Django"
      description="I created a user-friendly Lung Cancer Prediction System using Django. It helps detect cancer early with accurate results, blending medical knowledge and tech. Trust my skills to make a difference in predicting lung cancer, where accuracy meets simplicity. Explore the universe with my coding magic!"
    />
  </div>

  <div className="w-full md:w-[45%]">
    <ProjectCard
      src="/pp.png"
      title="Space Themed Website"
      description="My space-themed website seamlessly blends stunning visuals and interactive tools, a testament to my web development expertise. Explore the universe with my coding magic!"
    />
  </div>
   <div className="w-full md:w-[45%]">
    <ProjectCard
      src="/Spotify.png"
      title="Modern Spotify Clone"
      description="Meet MyProject, a carefully designed Spotify clone that makes exploring music and enjoying seamless listening easy. Get ready to discover and play your favorite tunes effortlessly!"
    />
  </div>

</div>
</div>
</section>
  );
};

export default Projects;
