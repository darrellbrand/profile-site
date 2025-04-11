"use client";
import { TypewriterEffect } from "../ui/typewriter-effect";

export function TypewriterEffectDemo() {
    const words = [
        {
            text: "Native",
            className: "text-white"
        },
        {
            text: "android",
            className: "text-white"
        },
        {
            text: "and",
            className: "text-white"
        },
        {
            text: "web",
            className: "text-white"
        },
        {
            text: "developer",
            className: "text-white"
        },

        {
            text: "Darrell",
            className: "text-blue-500 dark:text-blue-500",
        },
        {
            text: "Friday.",
            className: "text-blue-500 dark:text-blue-500",
        },
    ];
    return (
        <div className="flex flex-col items-center justify-center h-[10rem] mt-20">
            <TypewriterEffect words={words} />
        </div>
    );
}
