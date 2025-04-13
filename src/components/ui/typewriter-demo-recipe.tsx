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
            className: "text-android"
        },
        {
            text: "Powered",
            className: "text-white"
        },
        {
            text: "Android",
            className: "text-white"
        },
        {
            text: "App.",
            className: "text-white"
        },
    ];
    return (
        <div className="flex flex-col items-center justify-center h-[10rem] mt-60 mb-10 md:px-80">
            <TypewriterEffect words={words} />
        </div>
    );
}
