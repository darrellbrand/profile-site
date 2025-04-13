"use client";
import { TypewriterEffect } from "../ui/typewriter-effect";

export function TypewriterEffectDemo() {
    const words = [
        
        {
            text: "I'm",
            className: "text-white",
        },
        {
            text: "Darrell",
            className: "text-white",
        },
        {
            text: "and",
            className: "text-white",
        },
        {
            text: "I'm",
            className: "text-white",
        },
        {
            text: "a",
            className: "text-white",
        },
        {
            text: "native",
            className: "text-white"
        },
        {
            text: "android",
            className: "text-android"
        },
        {
            text: "and",
            className: "text-white"
        },
        {
            text: "full",
            className: "text-white"
        },
        {
            text: "stack",
            className: "text-white"
        },
        {
            text: "web",
            className: "text-blue-500"
        },
        {
            text: "developer.",
            className: "text-white"
        },

      
    ];
    return (
        <div className="flex flex-col items-center justify-center h-[10rem] mt-20 mx-auto max-w-5xl  mb-40 ">
            <TypewriterEffect words={words} />
        </div>
    );
}
