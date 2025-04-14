"use client";

import Carousel from "@/components/ui/carousel";
export function CarouselDemo() {
    const slideData = [
        {
            title: "App Home Page",
            src: "/profile-site/images/Screenshot_20250411_134138.png",
        },
        {
            title: "Categories screen",
            src: "/profile-site/images/Screenshot_20250411_134037.png",
        },
        {
            title: "Filter screen",
            src: "/profile-site/images/Screenshot_20250411_134107.png",
        },
        {
            title: "Search screen",
            src: "/profile-site/images/Screenshot_20250411_134127.png",
        },
        {
            title: "Generate recipe screen",
            src: "/profile-site/images/Screenshot_20250411_134214.png"
        },
        {
            title: "Instructions screen",
            src: "/profile-site/images/Screenshot_20250411_134158.png",
        },
    ];
    return (
        <div className="relative  w-full h-full mt-32 ">
            <Carousel slides={slideData} />
        </div>
    );
}
