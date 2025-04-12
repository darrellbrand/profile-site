import { NavbarDemo } from "@/components/ui/app-nav-bar";
import { Vortex } from "@/components/ui/vortex";
import { TypewriterEffectDemoRecipe } from "@/components/ui/typewriter-demo-recipe";
import FeaturesSectionDemo from "@/components/ui/feature-section-demo";

export default function Home() {
    return (
        <div className="relative w-full mx-auto  min-h-screen overflow-y-visible" >
            <Vortex
                backgroundColor="black"
                rangeY={800}
                particleCount={500}
                baseHue={120}
            >
                <div className=" flex flex-col items-center justify-center">
                    <NavbarDemo></NavbarDemo>
                    <TypewriterEffectDemoRecipe></TypewriterEffectDemoRecipe>
                    <div className="  relative bg-gradient-to-b from-zinc-900/20 to-zinc-400/20 text-neutral-200 rounded-3xl overflow-hidden backdrop-blur-md shadow-xl pt-8 pb-16 px-8 max-w-5xl">

                        <div className="absolute inset-0 pointer-events-none [mask-image:radial-gradient(farthest-side_at_top,white,transparent)] bg-white/5"></div>
                        <div className="relative z-10 p-6">
                            <h2 className="text-xl font-semibold">Recipe King Demo Video</h2>
                            <p className="text-sm mt-2">Check out my AI powered android recipe app ✨</p>
                        </div>
                        <div className="relative z-10 w-full h-[500px]">
                            <iframe
                                className="w-full h-full rounded-lg "
                                frameBorder="0"
                                allowFullScreen
                                src="https://www.youtube.com/embed/R8hJNKSZNo0"
                                title="Recipe King AI powered recipe app for android"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                referrerPolicy="strict-origin-when-cross-origin"
                            ></iframe>
                        </div>
                    </div>
                    <FeaturesSectionDemo></FeaturesSectionDemo>
                </div>
            </Vortex>
        </div>);
}

