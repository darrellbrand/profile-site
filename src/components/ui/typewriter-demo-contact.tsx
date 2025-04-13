"use client";
import { TypewriterEffect } from "../ui/typewriter-effect";

export function TypewriterEffectDemoContact() {
    const words = [
        {
            text: "Contact",
            className: "text-white"
        },
        {
            text: "Me",
            className: "text-android"
        },

      
    ];
    return (
        <div className="flex flex-col items-center justify-center h-[10rem] mt-5 px-5 ">
            <TypewriterEffect words={words} />
        </div>
    );
}
