import React from 'react'
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuIndicator,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    NavigationMenuViewport,
    navigationMenuTriggerStyle
} from "@/components/ui/navigation-menu"
import Link from "next/link"
type Props = {}
const Navigation = ({ children }: { children: React.ReactNode }) => {
    return (
        <div>
            <div className=' flex justify-center mt-2'> <NavigationMenu>
                <NavigationMenuList>
                    <NavigationMenuItem>
                        <NavigationMenuTrigger>Android Projects</NavigationMenuTrigger>
                        <NavigationMenuContent>
                            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                            <Link href={"/recipe-king"} legacyBehavior passHref>
                                <NavigationMenuLink>Recipe King</NavigationMenuLink>
                            </Link>
                            <NavigationMenuLink>Note Boss</NavigationMenuLink>
                            <NavigationMenuLink>Chat Boss</NavigationMenuLink>
                            <NavigationMenuLink>Tip Calculator</NavigationMenuLink>
                            <NavigationMenuLink>AI Viewer</NavigationMenuLink>
                            </ul>
                        </NavigationMenuContent>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <Link href={"/about"} legacyBehavior passHref>
                            <NavigationMenuLink className={navigationMenuTriggerStyle()}>About me</NavigationMenuLink>
                        </Link>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <Link href={"/skills"} legacyBehavior passHref>
                            <NavigationMenuLink className={navigationMenuTriggerStyle()}>Skills</NavigationMenuLink>
                        </Link>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <Link href={"/"} legacyBehavior passHref>
                            <NavigationMenuLink className={navigationMenuTriggerStyle()}>Home</NavigationMenuLink>
                        </Link>
                    </NavigationMenuItem>
                </NavigationMenuList>
            </NavigationMenu>
            </div>
            {children}
        </div>

    )
}

export default Navigation