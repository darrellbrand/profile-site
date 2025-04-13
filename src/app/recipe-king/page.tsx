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
                    <div className="  relative  bg-zinc-800/60 text-neutral-200 rounded-3xl   shadow-xl pt-8 pb-16 px-8 max-w-5xl w-full mx-auto">

                        <div className="relative z-10 pb-10 flex flex-col items-center justify-center ">
                            <h2 className="text-3xl font-semibold">Recipe King Demo Video</h2>

                        </div>
                        <div className="relative z-10  h-96">
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
                    <div className=" text-center relative  bg-zinc-800/60 text-neutral-200 rounded-3xl overflow-hidden  shadow-xl pt-4 mt-6  pb-16 px-8 max-w-5xl w-full mx-auto">
                        <div className="flex flex-col md:flex-row items-center gap-6 px-4">
                            <img src="/profile-site/images/icon-1971128_1280.png" className="w-40 h-40 md:w-80 md:h-80"></img>
                            <h2 className="text-2xl md:text-4xl lg:text-6xl font-semibold text-center md:text-left">Modern android app architecture with jetpack compose</h2>
                        </div>

                        <FeaturesSectionDemo></FeaturesSectionDemo>
                    </div>

                </div>
            </Vortex>
        </div>);
}

