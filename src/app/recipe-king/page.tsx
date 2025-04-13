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
                    <div className="  relative  text-white rounded-3xl mt-16   shadow-xl pt-8 pb-16 px-8 max-w-5xl w-full mx-auto">

                        <div className="relative z-10 pb-10 flex flex-col items-center justify-center ">
                            <h2 className="text-xl font-semibold text-center">Check Out The Demo Video</h2>

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
                    <FeaturesSectionDemo></FeaturesSectionDemo>
                </div>
            </Vortex>
        </div>);
}

