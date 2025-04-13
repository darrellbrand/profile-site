
import {
    Smartphone,
    Palette,
    Layers3,
    FlaskConical,
    TestTubes,
    Globe,
    TerminalSquare,
    PackageCheck,
    Server,
    Lock,
    Code
  } from "lucide-react";
import { SVGProps, useId, } from "react";

export function FeaturesSectionDemoAbout() {
    return (
        <div className="pt-10 m-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 md:gap-4 max-w-7xl mx-auto">
                {grid.map((feature) => (
                    <div
                        key={feature.title}
                        className="relative bg-gradient-to-b from-neutral-900 to-neutral-900  p-6 rounded-3xl overflow-hidden"
                    >
                        <Grid size={20} />
                       <feature.icon className="m-4"></feature.icon>
                        <p className="text-base font-bold text-white relative z-20">
                            {feature.title}
                        </p>
                        <p className=" text-white mt-4 text-base font-normal relative z-20">
                            {feature.description}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
}

const grid = [

    {
        icon: Smartphone,
        title: "Native Android Development",
        description: "Developed robust Android apps using Kotlin, focusing on performance, maintainability, and modern coding practices aligned with the Android ecosystem.",
      },
      {
        icon: Palette,
        title: "Jetpack Compose & Modern UI Design",
        description: "Built sleek, declarative UIs with Jetpack Compose, embracing Material Design, animations, and responsive design tailored for modern Android experiences.",
      },
      {
        icon: Layers3,
        title: "Scalable Modern Android Architecture",
        description: "Implemented clean, modular architectures using MVVM, Repository patterns, and Dagger Hilt, ensuring testability and long-term scalability.",
      },
      {
        icon: FlaskConical,
        title:"Appium & End-to-End Mobile Testing",
        description: "Automated mobile testing pipelines using Appium, enabling efficient regression testing and CI integrations for consistent quality assurance.",
      },
      {
        icon: TestTubes,
        title: "Unit & Instrumentation Testing",
        description: "Wrote comprehensive unit and instrumentation tests to ensure app reliability, edge case handling, and smooth UX across devices and versions.",
      },
      {
        icon: Globe,
        title: "Next.js + TypeScript Web Development",
        description: "Build fast, SEO-optimized web applications using Next.js and TypeScript, with a strong focus on reusable components and delivering polished, customer-facing interfaces that meet client requirements.",
      },
      {
        icon: TerminalSquare,
        title: "Scripting & Automation",
        description: "Automated dev tasks and builds using Python, Lua, Bash, and NSIS, streamlining complex workflows and supporting cross-platform development.",
      },
      {
        icon: PackageCheck,
        title: "Windows Deployment",
        description: "Built custom Windows installers with NSIS and used batch scripting for app packaging and deployment tooling on legacy systems.",
      }, {
        icon: Server,
        title: "Java Spring Boot Backend",
        description: "Built scalable backend services with Spring Boot, handling secure API requests.",
      },
      {
        icon: Lock,
        title: "Spring Security & JWT Authentication",
        description: "Secured applications using JWT tokens for authentication and role-based access.",
      },
      {
        icon: Code,
        title: "Full-Stack Development",
        description: "Developed end-to-end solutions combining Java-based backends and React/Next.js frontends.",
      },
    
];
interface GridProps {
    pattern?: Square[];
    size?: number;
  }
export const Grid = ({
    pattern,
    size,
}: GridProps) => {
    const p = pattern ?? [
        [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
        [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
        [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
        [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
        [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
    ];
    return (
        <div className="pointer-events-none absolute left-1/2 top-0  -ml-20 -mt-2 h-full w-full [mask-image:linear-gradient(white,transparent)]">
            <div className="absolute inset-0 bg-gradient-to-r  [mask-image:radial-gradient(farthest-side_at_top,white,transparent)] dark:from-zinc-900/30 from-zinc-100/30 to-zinc-300/30 dark:to-zinc-900/30 opacity-100">
                <GridPattern
                    width={size ?? 20}
                    height={size ?? 20}
                    x="-12"
                    y="4"
                    squares={p}
                    className="absolute inset-0 h-full w-full  mix-blend-overlay dark:fill-white/10 dark:stroke-white/10 stroke-black/10 fill-black/10"
                />
            </div>
        </div>
    );
};
type Square = [number, number];

interface GridPatternProps extends SVGProps<SVGSVGElement> {
    width: number;
    height: number;
    x: string;
    y: string;
    squares: Square[];
  }
export function GridPattern({ width, height, x, y, squares, ...props }: GridPatternProps) {
    const patternId = useId();

    return (
        <svg aria-hidden="true" {...props}>
            <defs>
                <pattern
                    id={patternId}
                    width={width}
                    height={height}
                    patternUnits="userSpaceOnUse"
                    x={x}
                    y={y}
                >
                    <path d={`M.5 ${height}V.5H${width}`} fill="none" />
                </pattern>
            </defs>
            <rect
                width="100%"
                height="100%"
                strokeWidth={0}
                fill={`url(#${patternId})`}
            />
            {squares && (
                <svg x={x} y={y} className="overflow-visible">
                    {squares.map(([x, y]: Square) => (
                        <rect
                            strokeWidth="0"
                            key={`${x}-${y}`}
                            width={width + 1}
                            height={height + 1}
                            x={x * width}
                            y={y * height}
                        />
                    ))}
                </svg>
            )}
        </svg>
    );
}
