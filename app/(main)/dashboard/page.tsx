"use client"

import Image from "next/image";
import {PieChart, Pie, Legend, Cell, PieLabelRenderProps, LineChart, ResponsiveContainer, CartesianGrid, XAxis, YAxis, Tooltip, Line, ReferenceLine} from 'recharts';
import {Tilt_Neon} from "next/font/google";
import { useMBTI } from "@/components/MBTIContext";
import {DynamicIcon} from "lucide-react/dynamic";
import {Role, ROLES} from "@/constants/role-mapping";
import imageService from "@/services/imageService";
import {Skeleton} from "@/components/ui/skeleton";

const tiltNeon = Tilt_Neon({ subsets: ['latin'] });


export default function Dashboard() {
    const { mbti } = useMBTI()
    console.log(mbti)

    const data = [
        { name: 'Won', value: mbti?.features.extra_data.total_wins },
        { name: 'Lost', value: mbti?.features.extra_data.total_losses },
    ];

    const COLORS = ['#00B9BF', '#FF5F4E']; // Customize as needed
    const RADIAN = Math.PI / 180;
    const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }: PieLabelRenderProps) => {
        if (cx == null || cy == null || innerRadius == null || outerRadius == null) {
            return null;
        }
        const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
        const ncx = Number(cx);
        const x = ncx + radius * Math.cos(-(midAngle ?? 0) * RADIAN);
        const ncy = Number(cy);
        const y = ncy + radius * Math.sin(-(midAngle ?? 0) * RADIAN);

        return (
            <text x={x} y={y} fill="white" textAnchor={x > ncx ? 'start' : 'end'} dominantBaseline="central" className="font-bold">
                {`${((percent ?? 1) * 100).toFixed(0)}%`}
            </text>
        );
    };

    const kills_each_day = mbti?.features.kills_each_day;
    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const monthlyData: Record<string, number> = {};
    if (kills_each_day)
        for (const [dateStr, kills] of Object.entries(kills_each_day) as [string, number][]) {
            const date = new Date(dateStr);
            const monthName = monthNames[date.getMonth()]; // getMonth() is 0-indexed
            if (!monthlyData[monthName]) {
                monthlyData[monthName] = 0;
            }
            monthlyData[monthName] += kills;
        }

    // Convert to array suitable for line chart
    const lineChartData = Object.entries(monthlyData).map(([month, value]) => ({ month, value }));
    const peak = lineChartData.reduce((max, item) => (item.value > max.value ? item : max), lineChartData[0]);

    return (
        <div className={`${tiltNeon.className} p-5 flex flex-col gap-3`}>
            <div className="flex gap-2">
                <div className="flex flex-col items-center">
                    <Image src="https://github.com/shadcn.png" alt="@shadcn" className="border-2 border-[var(--light)] rounded-lg" width={120} height={120}/>
                    <div className="text-white">666</div>
                </div>
                <div className="flex flex-col gap-2 p-2 text-white">
                    <div className="flex items-center gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-white" />
                        {mbti ?
                            <div className="font-bold ">{mbti?.result.response.mbti}</div> :
                            <Skeleton className="h-5 w-12" />
                        }
                    </div>
                    <div className="flex items-center gap-6 text-5xl">
                        <div>summoner</div>
                        <div className="opacity-50">#tag</div>
                    </div>
                </div>
            </div>
            <div className="bg-[var(--dashboard-card)] p-6 rounded-lg flex flex-col gap-4">
                <div className="underline underline-offset-8 text-white text-2xl">
                    SUMMARY STATS
                </div>

                {mbti ?
                    <>
                        <div className="grid grid-rows-2 grid-cols-4 gap-2">
                            <div className="bg-[var(--dark)] text-white col-span-2 p-8 rounded-lg">
                                <div className="text-lg mb-2">Total Matches</div>
                                <div className="flex h-full justify-between items-center">
                                    <div className="text-3xl lg:text-7xl">{mbti?.features.total_matches}</div>
                                    <PieChart width={300} height={200} responsive>
                                        <Legend layout="vertical" verticalAlign="middle" align="left" />
                                        <Pie
                                            data={data}
                                            innerRadius={40}
                                            outerRadius={100}
                                            labelLine={false}
                                            label={renderCustomizedLabel}
                                            dataKey="value"
                                        >
                                            {data.map((entry, index) => (
                                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                            ))}
                                        </Pie>
                                    </PieChart>
                                </div>
                            </div>
                            <div className="bg-[var(--dark)] text-white p-8 rounded-lg">
                                <div className="text-lg mb-2">Most Played Champion:</div>
                                <div className="h-full flex flex-col items-center gap-3 justify-center">
                                    <Image src={imageService.getChampionImage(mbti?.features.most_played_champ)} alt="Most played champion" className="border-2 border-[var(--light)] rounded-lg" width={120} height={120}/>
                                    <div className="font-bold">{mbti?.features.most_played_champ}</div>
                                    <div className="text-sm">you played <span className="text-lg">{mbti?.features.champion_frequency[mbti?.features.most_played_champ]}</span> matches together!</div>
                                </div>
                            </div>
                            <div className="bg-[var(--dark)] text-white p-8 rounded-lg">
                                <div className="text-lg mb-2">Most Played Role:</div>
                                <div className="h-full flex flex-col items-center gap-3 justify-center">
                                    <div className="border-2 border-[var(--light)] rounded-lg w-[120px] h-[120px] flex justify-center items-center">
                                        {mbti?.features.most_played_role &&
                                            <DynamicIcon name={ROLES[mbti?.features.most_played_role as Role].icon} size={100} strokeWidth={1} fill={"var(--light)"}/>
                                        }
                                    </div>
                                    <div className="font-bold">{mbti?.features.most_played_role}</div>
                                    <div className="text-sm text-center">
                                        {mbti?.features.most_played_role && ROLES[mbti?.features.most_played_role as Role].description}
                                    </div>
                                </div>
                            </div>
                            <div className="grid grid-cols-1 grid-rows-2 gap-2">
                                <div className="bg-[var(--dark)] text-white p-8 rounded-lg">
                                    <div className="text-lg mb-2">Total Kill Participation:</div>
                                    <div className="text-5xl">
                                        {mbti?.features.avg_kill_participation &&
                                            <div>{(mbti?.features.avg_kill_participation * 100).toFixed(2)}%</div>
                                        }
                                    </div>
                                </div>
                                <div className="bg-[var(--dark)] text-white p-8 rounded-lg">
                                    <div className="text-lg mb-2">Total Damage:</div>
                                    <div className="text-5xl">
                                        {(mbti?.features.extra_data.total_damage_dealt ?? 0) +
                                        (mbti?.features.extra_data.total_structure_damage ?? 0)}
                                    </div>
                                </div>
                            </div>
                            <div className="col-span-3 bg-[var(--dark)] text-white p-8 rounded-lg">
                                <div className="text-lg mb-2">Total Kills:</div>
                                <div className="flex justify-between">
                                    <div className="text-3xl">{mbti?.features.extra_data.total_kills}</div>
                                    <div className="text-right">
                                        <div className="text-sm">
                                            you were on a roll during
                                        </div>
                                        <div className="text-2xl">{peak?.month}!</div>
                                    </div>
                                </div>
                                <ResponsiveContainer width="100%" height={275}>
                                    <LineChart data={lineChartData} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
                                        <CartesianGrid strokeDasharray="3 3" />
                                        <XAxis dataKey="month" />
                                        <YAxis />
                                        <Tooltip />
                                        <ReferenceLine x={peak?.month} stroke="#FFFB00" />
                                        <Line type="monotone" dataKey="value" stroke="#00FFE1" dot={false}/>
                                    </LineChart>
                                </ResponsiveContainer>
                            </div>
                        </div>
                        <div className="grid grid-cols-3 gap-2">
                            <div className="bg-[var(--dark)] text-white text-lg gap-4 p-8 rounded-lg flex flex-col justify-center items-center">
                                <div>Total Pings:</div>
                                <div>{mbti?.features.extra_data.total_pings}</div>
                            </div>
                            <div className="bg-[var(--dark)] text-white text-lg gap-4 p-8 rounded-lg flex flex-col justify-center items-center">
                                <div>Total Stolen Objectives:</div>
                                <div>{mbti?.features.extra_data.total_objectives_stolen}</div>
                            </div>
                            <div className="bg-[var(--dark)] text-white text-lg gap-4 p-8 rounded-lg flex flex-col justify-center items-center">
                                <div>Total Stolen Assists:</div>
                                <div>{mbti?.features.extra_data.total_objectives_stolen_assists}</div>
                            </div>
                        </div>
                    </> :
                    <Skeleton className="h-120 w-full" />
                }
            </div>
        </div>
    )
}