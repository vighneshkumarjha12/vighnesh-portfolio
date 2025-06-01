import Encryption from "@/components/main/Encryption";
import Hero from "@/components/main/Hero";
import Projects from "@/components/main/Projects";
import Skills from "@/components/main/Skills";
import Contact from "@/components/main/Contact"; // ✅ fixed name
import Image from "next/image";
import Experience from "@/components/main/Experience";

export default function Home() {
  return (
    <main className="h-full w-full">
      <div className="flex flex-col  gap-0">
        <Hero />
        <Skills />
       <Experience />
        <Projects />
        <Contact />
      </div>
    </main>
  );
}
