import { NavbarDemo } from "@/components/ui/app-nav-bar";
import { FeaturesSectionDemoAbout } from "@/components/ui/feature-section-demo-about";
import { Vortex } from "@/components/ui/vortex";
import EmailForm from "@/components/ui/email-form";
import { TypewriterEffectDemoContact } from "@/components/ui/typewriter-demo-contact";

export default function Home() {
    return (
        <div className="h-screen  text-white flex flex-col items-center justify-center">

            <Vortex
                backgroundColor="black"
                rangeY={800}
                particleCount={500}
                baseHue={120}>
                <section id="profile">
                    <NavbarDemo></NavbarDemo>

                    <div className=" h-50 w-50  object-cover flex flex-col mx-auto mt-40 mb-20  ">
                        <img  src="profile-site/images/1744560812159.jpg"
                            alt=""
                            className="rounded-full">
                                
                        </img>
                    </div>
                    <FeaturesSectionDemoAbout></FeaturesSectionDemoAbout>
                </section>
                <section id="contact">
                    <TypewriterEffectDemoContact></TypewriterEffectDemoContact>
                    <EmailForm></EmailForm>
                </section>
            </Vortex>
        </div>);
}