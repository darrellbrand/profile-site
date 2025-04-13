"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem } from "../ui/navbar-menu";
import { cn } from "@/lib/utils";

export function NavbarDemo() {
    return (
        <div className="relative w-full flex items-center justify-center">
            <Navbar className="top-2" />

        </div>
    );
}

function Navbar({ className }: { className?: string }) {
    const [active, setActive] = useState<string | null>(null);
    return (
        <div
            className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
        >
            <Menu setActive={setActive}>
            <MenuItem setActive={setActive} active={active} item="Home">
                    <div className="flex flex-col space-y-12 text-sm">
                        <HoveredLink href="/">Home</HoveredLink>
                    </div>
                </MenuItem>
                <MenuItem setActive={setActive} active={active} item="Android">
                    <div className="flex flex-col space-y-12 text-sm">
                        <HoveredLink href="/recipe-king">Recipe King</HoveredLink>
                    </div>
                </MenuItem>
                <MenuItem setActive={setActive} active={active} item="Web">
                    <div className="flex flex-col space-y-12 text-sm">
                        <HoveredLink href="/">Next.js</HoveredLink>
                        <HoveredLink href="/">Spring Boot</HoveredLink>
                    </div>
                </MenuItem>
                <MenuItem setActive={setActive} active={active} item="About">
                    <div className="flex flex-col space-y-12 text-sm">
                        <HoveredLink href="/about#profile">Profile</HoveredLink>
                        <HoveredLink href="/about#contact">Contact</HoveredLink>
                        <HoveredLink href="https://github.com/darrellbrand">Github</HoveredLink>
                    </div>
                </MenuItem>
            </Menu>
        </div>
    );
}
