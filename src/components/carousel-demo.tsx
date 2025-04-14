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
        src: "/profile-site/images/Screenshot_20250411_134138.png",
    },
    {
        title: "Categories Screen",
        src: "/profile-site/images/Screenshot_20250411_134037.png",
    },
    {
        title: "Filter Screen",
        src: "/profile-site/images/Screenshot_20250411_134107.png",
    },
    {
        title: "Search Screen",
        src: "/profile-site/images/Screenshot_20250411_134127.png",
    },
    {
        title: "Generate Recipe Screen",
        src: "/profile-site/images/Screenshot_20250411_134214.png"
    },
    {
        title: "Instructions Screen",
        src: "/profile-site/images/Screenshot_20250411_134158.png",
    },
];
export function CarouselDemo() {
  return (
    <Carousel className="w-full max-w-xs my-10 ">
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
