import { NavbarDemo } from "@/components/ui/app-nav-bar";
import { CarouselDemo } from "@/components/carousel-demo";
import { Vortex } from "@/components/ui/vortex";

export default function Home() {
    return (
        <div className="w-full mx-auto  min-h-screen overflow-y-auto" >
            <Vortex
                backgroundColor="black"
                rangeY={800}
                particleCount={500}
                baseHue={120}
                className="flex items-center flex-col justify-center px-2 md:px-10  h-full w-full "
            >
                    <NavbarDemo></NavbarDemo>
                    <h1 className="  bg-opacity-50 bg-gradient-to-b from-neutral-50 to-neutral-400 bg-clip-text text-center text-4xl font-bold text-transparent  ">
                        Recipe King <br /> AI powered recipes.
                    </h1>
                    <CarouselDemo></CarouselDemo>
                    <div className="flex flex-row  items-center gap-4 justify-center">
                        <div className="">
                            <h1 className="text-2xl font-bold  text-white">Check out this video:</h1>
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
                            <h1 className="text-2xl font-bold   text-white">Check out this video:</h1>
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
                    <h1 className=" text-white text-3xl">Features</h1>
                    <ol className="list-decimal text-white text-2xl ">
                        <li >rad</li>
                        <li >rads</li>
                        <li >rads</li>
                        <li >rads</li>
                        <li >rads</li>
                        <li >rads</li>
                        <li >rads</li>

                        <li >rads</li>
                        <li >rads</li>
                        <li >rads</li>
                        <li >rads</li>
                        <li >rads</li>
                  
                
                    </ol>
            </Vortex>
        </div>);
}