"use client"

import Image from "next/image";
import {PieChart, Pie, Legend} from 'recharts';

export default function Dashboard() {
    const data = [
        { name: 'Won', value: 65 },
        { name: 'Lost', value: 35 },
    ];

    const COLORS = ['#00C49F', '#FF8042']; // Customize as needed

    return (
        <>
            <div className="flex gap-2">
                <div className="flex flex-col items-center">
                    <Image src="https://github.com/shadcn.png" alt="@shadcn" className="border-2 border-[var(--light)] rounded-lg" width={120} height={120}/>
                    <div className="text-white">666</div>
                </div>
                <div className="flex flex-col gap-2 p-2 text-white">
                    <div className="flex items-center gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-white" />
                        <div className="font-bold ">ENFP</div>
                    </div>
                    <div className="flex items-center gap-6 text-5xl">
                        <div>summoner</div>
                        <div className="opacity-50">#tag</div>
                    </div>
                    <div>
                        <div className="opacity-50">last active: 15 hours ago</div>
                    </div>
                </div>
            </div>
            <div className="bg-[var(--medium)] p-6 rounded-lg flex flex-col gap-4">
                <div className="underline underline-offset-8 text-white">
                    SUMMARY STATS
                </div>
                <div className="grid grid-rows-2 grid-cols-4">
                    <div className="bg-[var(--dark)] text-white col-span-2 p-8 rounded-lg">
                        <div>Total Matches</div>
                        <div className="flex justify-center items-center">
                            <PieChart width={400} height={250}>
                                <Pie
                                    data={data}
                                    cx={120}
                                    cy={120}
                                    innerRadius={60}
                                    outerRadius={100}
                                    fill="#8884d8"
                                    paddingAngle={5}
                                    dataKey="value"
                                />
                                <Legend layout="vertical" verticalAlign="middle" align="right" />
                            </PieChart>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}