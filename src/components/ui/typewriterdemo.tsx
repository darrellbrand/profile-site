"use client";
import { TypewriterEffect } from "../ui/typewriter-effect";

export function TypewriterEffectDemo() {
    const words = [
        {
            text: "Hi!",
            className: "text-white",
        },
        {
            text: "",
            className: "text-white",
        },
        {
            text: "I'm",
            className: "text-white",
        },
        {
            text: "Darrell,",
            className: "text-white",
        },
        {
            text: "a",
            className: "text-white"
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
        <div className="flex flex-col items-center justify-center h-[10rem] mt-40 md:mt-60 mb-10 md:mb-30  max-w-5xl  pt-50 px-5 ">
            <TypewriterEffect words={words} />
        </div>
    );
}
