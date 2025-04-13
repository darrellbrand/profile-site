
import React from "react";
import { Vortex } from "../components/ui/vortex";
import Link from 'next/link';
import { TypewriterEffectDemo } from "@/components/ui/typewriterdemo";
import { NavbarDemo } from "@/components/ui/app-nav-bar";
export default function Home() {
  return (
    <div className="flex items-center flex-col   w-full h-min-screen ">
        <Vortex
                backgroundColor="black"
                rangeY={800}
                particleCount={500}
                baseHue={120}
                className=" w-full min-h-screen overflow-visible flex flex-col items-center">
      <NavbarDemo></NavbarDemo>
      <TypewriterEffectDemo></TypewriterEffectDemo>
      <p className="text-white text-xl md:text-2xl max-w-xl mt-40 text-center mx-10 ">
        I created this portfolio site with Next.js to showcase my full stack native android applications for clients and employers.
      </p>
      <div className="flex flex-col  items-center gap-4 mt-6">
        <Link href="/about">
        <button className=" mt-10 px-4 py-2 bg-blue-600 hover:bg-blue-700 transition duration-200 rounded-lg text-white shadow-[0px_2px_0px_0px_#FFFFFF40_inset] mx-auto">
          Learn More
        </button>
        </Link>
      </div>
     </Vortex>
    </div>
  );
}
