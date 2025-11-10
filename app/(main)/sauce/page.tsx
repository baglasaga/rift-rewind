"use client"

import {Button} from "@/components/ui/button";
import {ArrowRight} from "lucide-react";
import {Tilt_Neon} from "next/font/google";
import {useRouter} from "next/navigation";

const tiltNeon = Tilt_Neon({ subsets: ['latin'] });

export default function Sauce() {
    const router = useRouter();

    return (
        <div className="w-full h-full flex justify-center items-center">
            <div className="flex flex-col justify-center items-center gap-4 text-[var(--text)]">
                <div className={`${tiltNeon.className} text-5xl`}>
                    Wanna know your LoL MBTI?
                </div>
                <div>
                    <Button className="hover:cursor-pointer" onClick={() => router.push('/sauce/details')}>
                        yes sauce me <ArrowRight />
                    </Button>
                </div>
            </div>
        </div>
    )
}