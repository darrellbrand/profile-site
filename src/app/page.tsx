import Image from "next/image";
import React from "react";
import { Vortex } from "../components/ui/vortex";
import Link from 'next/link';
export default function Home() {
  return (
    <div className="flex items-center flex-col justify-center  w-full h-screen">
      <h2 className="text-white  md:text-6xl font-bold text-center">
        Darrell Friday
      </h2>
      <h2 className="text-white md:text-4xl font-bold text-center mt-4">
        Software Developer
      </h2>
      <p className="text-white text-sm md:text-2xl max-w-xl mt-6 text-center">
        I created this portfolio site with Next.js to showcase my full stack native android applications for clients and employers.
      </p>
      <div className="flex flex-col sm:flex-row items-center gap-4 mt-6">
        <Link href="/about">
        <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 transition duration-200 rounded-lg text-white shadow-[0px_2px_0px_0px_#FFFFFF40_inset]">
          Learn More
        </button>
        </Link>
      </div>
    </div>
  );
}
