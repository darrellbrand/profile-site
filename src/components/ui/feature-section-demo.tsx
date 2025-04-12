import { useId , SVGProps} from "react"
import Image from "next/image"

export default function FeaturesSectionDemo() {
    return (
        <div className="py-10 ">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-16 md:gap-6 max-w-7xl mx-auto">
                {grid.map((feature) => (
                    <div
                        key={feature.title}
                        className="relative bg-gradient-to-b text-neutral-400 rounded-3xl overflow-hidden"
                    >
                        <Grid size={20} />
                        <div className=" flex justify-center  mb-4 pt-6 relative z-20 ">
                            <Image
                                src={feature.imageUrl || "/placeholder.svg"}
                                alt={feature.title}
                                width={200}
                                height={300}
                                className="rounded-lg"
                            />
                        </div>
                        <div className="text-center">
                            <p className=" font-bold  relative z-20 text-neutral-400">{feature.title}</p>
                            <p className="text-neutral-400 mt-4 text-base font-normal relative z-20">
                                {feature.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

const grid = [
    {
        title: "App Home Page",
        description: "Material3 guidelines inspired bottom navigation bar and app home screen.",
        imageUrl: "/images/Screenshot_20250411_134138.png",
    },
    {
        title: "Categories screen",
        description:
            "Filter the recipe database by category.",
        imageUrl: "/images/Screenshot_20250411_134037.png",
    },
    {
        title: "Filter screen",
        description:
            "Filter a meal category further.",
        imageUrl: "/images/Screenshot_20250411_134107.png",
    },
    {
        title: "Search screen",
        description:
            "Search all recipes.",
        imageUrl: "/images/Screenshot_20250411_134127.png",
    },
    {
        title: "Generate recipe screen",
        description:
            "Choose from a list of the most popular ingredients and create an AI generated recipe.",
        imageUrl: "/images/Screenshot_20250411_134214.png",
    },
    {
        title: "Instructions screen",
        description:
            "View recipe details on the instruction screen. Click 'generate' button to simplify the recipe with AI. ",
        imageUrl: "/images/Screenshot_20250411_134158.png",
    },
   
]
type Square = [number, number];

interface GridPatternProps extends SVGProps<SVGSVGElement> {
    width: number;
    height: number;
    x: string;
    y: string;
    squares: Square[];
  }
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
    ]
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
    )
}

export function GridPattern({ width, height, x, y, squares, ...props }: GridPatternProps) {
    const patternId = useId()

    return (
        <svg aria-hidden="true" {...props}>
            <defs>
                <pattern id={patternId} width={width} height={height} patternUnits="userSpaceOnUse" x={x} y={y}>
                    <path d={`M.5 ${height}V.5H${width}`} fill="none" />
                </pattern>
            </defs>
            <rect width="100%" height="100%" strokeWidth={0} fill={`url(#${patternId})`} />
            {squares && (
                <svg x={x} y={y} className="overflow-visible">
                    {squares.map(([x, y]: [number,number]) => (
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
    )
}
