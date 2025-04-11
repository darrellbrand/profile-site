import { NavbarDemo } from "@/components/ui/app-nav-bar";
import { Spotlight } from "@/components/ui/spotlight-new";
import { Vortex } from "@/components/ui/vortex";

export default function Home() {
    return (
        <div className="flex items-center flex-col  w-full min-h-screen">
            <Vortex
                backgroundColor="black"
                rangeY={800}
                particleCount={500}
                baseHue={120}
                className=" w-full min-h-screen overflow-visible">
                <NavbarDemo></NavbarDemo>
                <Spotlight/> 
                <h2 className="text-white text-2xl md:text-6xl font-bold text-center mt-">
                    Recipe King
                </h2>
               
                <div className="flex flex-row mt-6">
                    <h1 className="text-2xl font-bold mb-4 text-white">Check out this video:</h1>
                    <h1 className="text-2xl font-bold mb-4 text-white">Check out this video:</h1>
                </div>
                <div className="flex flex-row sm:flex-row items-center gap-4 mt-6">
                    <div className="p-6">
                        <h1 className="text-2xl font-bold mb-4 text-white">Check out this video:</h1>
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
                    <div className="p-6">
                        <h1 className="text-2xl font-bold mb-4  text-white">Check out this video:</h1>
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
                    </div><div className="p-6">
                        <h1 className="text-2xl font-bold mb-4  text-white">Check out this video:</h1>
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
                <ol className="list-decimal text-white text-2xl">
                    <li >rad</li>
                    <li >rads</li>
                </ol>
            </Vortex>
        </div>);
}