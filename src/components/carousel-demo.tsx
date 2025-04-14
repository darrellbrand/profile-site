import * as React from "react"

import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
const slideData = [
    {
        title: "App Home Page",
        src: "/images/Screenshot_20250411_134138.png",
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
export function CarouselDemo() {
  return (
    <Carousel className="w-full max-w-xs my-30 ">
      <CarouselContent>
      {slideData.map((slide, index) => (
          <CarouselItem key={index}>
            <div className="p-1">
              <Card className="bg-transparent">
                <CardContent className="flex flex-col aspect-square items-center justify-center p-6 ">
                  <img src={slide.src}></img>
                  <h1 className="mt-8 text-white text-3xl">{slide.title}</h1>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}
