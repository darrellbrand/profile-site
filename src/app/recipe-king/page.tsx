import { NavbarDemo } from "@/components/ui/app-nav-bar";
import { CarouselDemo } from "@/components/carousel-demo";
import { Vortex } from "@/components/ui/vortex";

export default function Home() {
    return (
        <div className="relative w-full mx-auto  min-h-screen overflow-y-visible bg-blue-500" >
            <Vortex
                backgroundColor="black"
                rangeY={800}
                particleCount={500}
                baseHue={120}
                containerClassName="w-screen h-screen"
            >
                <div className=" flex flex-col items-center justify-center">
                    <NavbarDemo></NavbarDemo>
                    <h1 className=" pt-30 py-8  bg-opacity-50 bg-gradient-to-b from-neutral-50 to-neutral-400 bg-clip-text text-center text-4xl font-bold text-transparent  ">
                        Recipe King <br /> AI powered recipes.
                    </h1>
                    <CarouselDemo></CarouselDemo>
                    <div className="flex flex-row  items-center gap-20 justify-center pt-8">
                        <div className="">
                            <h1 className="text-2xl font-bold  text-white py-6">Check out this video:</h1>
                            <div className="aspect-w-16 aspect-h-9 w-full max-w-4xl mx-auto">
                                <iframe
                                    className="w-full h-full rounded-lg"
                                    src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                                    title="YouTube video"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                ></iframe>
                            </div>
                        </div>
                        <div className="">
                            <h1 className="text-2xl font-bold   text-white py-6">Check out this video:</h1>
                            <div className="aspect-w-16 aspect-h-9 w-full max-w-4xl mx-auto">
                                <iframe
                                    className="w-full h-full rounded-lg"
                                    src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                                    title="YouTube video"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                ></iframe>
                            </div>
                        </div>
                    </div>

                    <h1 className=" text-white text-3xl py-6">Features</h1>
                    <ol className="list-decimal text-white text-2xl space-y-1">
                        {Array.from({ length: 20 }).map((_, i) => (
                            <li key={i}>rad feature {i + 1}</li>
                        ))}
                    </ol>
                </div>
            </Vortex>
        </div>);
}