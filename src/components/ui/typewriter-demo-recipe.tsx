"use client";
import { TypewriterEffect } from "../ui/typewriter-effect";

export function TypewriterEffectDemoRecipe() {
    const words = [
        {
            text: "Recipe",
            className: "text-white"
        },
        {
            text: "King",
            className: "text-white"
        },
        {
            text: "AI",
            className: "text-blue-500 dark:text-blue-500"
        },
        {
            text: "Powered",
            className: "text-blue-500 dark:text-blue-500"
        },
        {
            text: "Recipes",
            className: "text-white"
        },
    ];
    return (
        <div className="flex flex-col items-center justify-center h-[10rem] mt-20">
            <TypewriterEffect words={words} />
        </div>
    );
}
