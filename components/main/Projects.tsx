import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  return (
    <section id="projects" className="py-12 md:py-16 bg-[#0f172a]">
      <div className="flex flex-col items-center justify-center">
        <p className="text-lg text-gray-400 uppercase tracking-widest">
          Crafted with Passion
        </p>
        <h1 className="text-[32px] md:text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-4">
          My Projects
        </h1>

        <div className="w-full flex flex-wrap gap-10 px-6 md:px-10 justify-center">
          {/* Project 1 */}
          <div className="w-full md:w-[45%]">
            <div className="relative p-[2px] rounded-2xl bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 shadow-lg hover:shadow-[0_0_20px_4px_rgba(165,105,255,0.6)] transition-all duration-500">
              <div className="bg-[#0f172a] rounded-2xl p-5 h-full">
                <ProjectCard
                  src="/converter.png"
                  title="SmartDoc Studio: All-in-One Document & Image Toolkit"
                  description="From seamless document conversions to advanced image editing, SmartDoc Studio empowers you to transform, enhance, and adapt your files with ease."
                />
              </div>
            </div>
          </div>

          {/* Project 2 */}
          <div className="w-full md:w-[45%]">
            <div className="relative p-[2px] rounded-2xl bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 shadow-lg hover:shadow-[0_0_20px_4px_rgba(165,105,255,0.6)] transition-all duration-500">
              <div className="bg-[#0f172a] rounded-2xl p-5 h-full">
                <ProjectCard
                  src="/prediction.png"
                  title="Lungs Cancer Prediction using Django"
                  description="A user-friendly Django app for early lung cancer detection. Accuracy meets simplicity to make a real difference."
                />
              </div>
            </div>
          </div>

          {/* Project 3 */}
          <div className="w-full md:w-[45%]">
            <div className="relative p-[2px] rounded-2xl bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 shadow-lg hover:shadow-[0_0_20px_4px_rgba(165,105,255,0.6)] transition-all duration-500">
              <div className="bg-[#0f172a] rounded-2xl p-5 h-full">
                <ProjectCard
                  src="/pp.png"
                  title="Space Themed Website"
                  description="A blend of stunning visuals and interactive tools that showcase creativity and coding finesse."
                />
              </div>
            </div>
          </div>

          {/* Project 4 */}
          <div className="w-full md:w-[45%]">
            <div className="relative p-[2px] rounded-2xl bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 shadow-lg hover:shadow-[0_0_20px_4px_rgba(165,105,255,0.6)] transition-all duration-500">
              <div className="bg-[#0f172a] rounded-2xl p-5 h-full">
                <ProjectCard
                  src="/Spotify.png"
                  title="Modern Spotify Clone"
                  description="A sleek Spotify replica designed for seamless music exploration and intuitive user experience."
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
