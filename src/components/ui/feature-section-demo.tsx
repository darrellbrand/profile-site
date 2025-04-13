import { useId, SVGProps } from "react"


export default function FeaturesSectionDemo() {
    return (
        <div className="pt-6 m-6 ">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-5 md:gap-6 max-w-7xl mx-auto">
                {grid.map((feature) => (
                    <div
                        key={feature.title}
                        className="relative bg-gradient-to-b transparent to-neutral-950 rounded-3xl overflow-hidden p-6"
                    >
                        <Grid size={20} />
                        <div className=" flex justify-center  mb-4 mt-4  pt-6 relative z-20 text-white">
                            < img
                                src={feature.imageUrl || "/placeholder.svg"}
                                alt={feature.title}
                                width={200}
                                height={300}
                                className="rounded-lg"
                            />
                        </div>
                        <div className="text-center  ">
                            <p className=" font-bold  relative z-20 text-white">{feature.title}</p>
                            <p className="text-white mt-2 mb-4  text-base font-normal relative z-20">
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
        imageUrl: "/profile-site/images/Screenshot_20250411_134138.png",
    },
    {
        title: "Categories screen",
        description:
            "Filter the recipe database by category.",
        imageUrl: "/profile-site/images/Screenshot_20250411_134037.png",
    },
    {
        title: "Filter screen",
        description:
            "Filter a meal category further.",
        imageUrl: "/profile-site/images/Screenshot_20250411_134107.png",
    },
    {
        title: "Search screen",
        description:
            "Search all recipes.",
        imageUrl: "/profile-site/images/Screenshot_20250411_134127.png",
    },
    {
        title: "Generate recipe screen",
        description:
            "Choose from a list of the most popular ingredients and create an AI generated recipe.",
        imageUrl: "/profile-site/images/Screenshot_20250411_134214.png",
    },
    {
        title: "Instructions screen",
        description:
            "View recipe details on the instruction screen. Click 'generate' button to simplify the recipe with AI. ",
        imageUrl: "/profile-site/images/Screenshot_20250411_134158.png",
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
        <div className="pointer-events-none absolute  h-full w-full [mask-image:linear-gradient(white,white/70)]">
            <div className="absolute inset-0 bg-gradient-to-r  [mask-image:radial-gradient(farthest-side_at_top,white,white/70)]   ">
                <GridPattern
                    width={size ?? 20}
                    height={size ?? 20}
                    x="-12"
                    y="4"
                    squares={p}
                    className="absolute inset-0 h-full w-full  mix-blend-overlay fill-white/20 stroke-white/20"
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
                    {squares.map(([x, y]: [number, number]) => (
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
