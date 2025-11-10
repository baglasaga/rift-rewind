"use client"

import { MBTI_INFO, MBTI_TYPES, MBTILetter, MBTIType } from "@/constants/mbti";
import { Slider } from "@/components/ui/slider";
import { Tilt_Neon } from "next/font/google";
import TraitIcon from "@/components/trait-icon";
import {useMBTI} from "@/components/MBTIContext";

const tiltNeon = Tilt_Neon({ subsets: ['latin'] });

type Data = {
    polarity: any
    type: MBTIType
}

export default function SauceDetails() {
    const { mbti } = useMBTI();

    const data: Data = {
        polarity: {
            energy: 30,
            infoStyle: 20,
            decisionMaking: 40,
            lifeStyle: 30
        },
        type: mbti?.result.response.mbti
    }

    return (
        <div className="w-full h-full pt-16 px-24 pb-32">
            <div className="space-y-24">
                <div className={`${tiltNeon.className} text-[var(--text)] space-y-10`}>
                    <div className="flex gap-3">
                        {data.type?.split('').map((char, index) => {
                            const letter = char as MBTILetter;
                            return (
                                <div key={letter} className="flex gap-1 items-center">
                                    <div className="w-1.5 h-1.5 rounded-full bg-[var(--text)]" />
                                    <div className="leading-tight">{MBTI_INFO[letter].label}</div>
                                </div>
                            )
                        })}
                    </div>
                    <div className="text-9xl">
                        {data.type}
                    </div>
                    <div className="text-2xl">
                        {data?.type && MBTI_TYPES[data.type]?.description ? MBTI_TYPES[data.type].description : 'No description available'}
                    </div>
                </div>
                <div className="text-[var(--text)] md:px-8 lg:px-16 space-y-8">
                    <div>
                        <div className={`${tiltNeon.className} text-2xl font-semibold mb-5`}>Analysis:</div>
                        <div className={`${tiltNeon.className} text-2xl font-semibold`}>Overview:</div>
                        <div className="text-xl">
                            {data?.type && MBTI_TYPES[data.type]?.analysis ? MBTI_TYPES[data.type].analysis : 'No analysis available'}
                        </div>
                    </div>
                    <div>
                        <div className={`${tiltNeon.className} text-2xl font-semibold`}>Breakdown:</div>
                        {data.type &&
                            <div className="p-8">
                                {/* Attitude */}
                                <div>
                                    <div className={`${tiltNeon.className} text-base`}>
                                        <span className="font-semibold"> Attitude: </span>  {MBTI_INFO[data.type[0] as MBTILetter].label}
                                    </div>
                                    <div className="text-sm">
                                        {MBTI_INFO[data.type[0] as MBTILetter].description}
                                    </div>
                                    <div className="grid grid-cols-4">
                                        <div className="text-base font-semibold">Related Traits:</div>
                                        {MBTI_INFO[data.type[0] as MBTILetter].traits.map(name => (
                                            <TraitIcon name={name} key={name} />
                                        ))}
                                    </div>
                                </div>
                                {/* Function - Perception */}
                                <div>
                                    <div className={`${tiltNeon.className} text-base`}>
                                        <span className="font-semibold">Function - Perception:</span> {MBTI_INFO[data.type[1] as MBTILetter].label}
                                    </div>
                                    <div className="text-sm">
                                        {MBTI_INFO[data.type[1] as MBTILetter].description}
                                    </div>
                                    <div className="grid grid-cols-4">
                                        <div className="text-base font-semibold">Related Traits:</div>
                                        {MBTI_INFO[data.type[1] as MBTILetter].traits.map(name => (
                                            <TraitIcon key={name} name={name} />
                                        ))}
                                    </div>
                                </div>
                                {/* Function - Judgement */}
                                <div>
                                    <div className={`${tiltNeon.className} text-base`}>
                                        <span className="font-semibold">Function - Judgement:</span> {MBTI_INFO[data.type[2] as MBTILetter].label}
                                    </div>
                                    <div className="text-sm">
                                        {MBTI_INFO[data.type[2] as MBTILetter].description}
                                    </div>
                                    <div className="grid grid-cols-4">
                                        <div className="text-base font-semibold">Related Traits:</div>
                                        {MBTI_INFO[data.type[2] as MBTILetter].traits.map(name => (
                                            <TraitIcon key={name} name={name} />
                                        ))}
                                    </div>
                                </div>
                                {/* Lifestyle */}
                                <div>
                                    <div className={`${tiltNeon.className} text-base`}>
                                        <span className="font-semibold">Lifestyle:</span> {MBTI_INFO[data.type[3] as MBTILetter].label}
                                    </div>
                                    <div className="text-sm">
                                        {MBTI_INFO[data.type[3] as MBTILetter].description}
                                    </div>
                                    <div className="grid grid-cols-4">
                                        <div className="text-base font-semibold">Related Traits:</div>
                                        {MBTI_INFO[data.type[3] as MBTILetter].traits.map(name => (
                                            <TraitIcon key={name} name={name} />
                                        ))}
                                    </div>
                                </div>
                            </div>
                        }

                    </div>
                    <div className={`${tiltNeon.className} space-y-4`}>
                        <div className="text-2xl">Polarity:</div>
                        <div className="flex flex-col gap-16 items-center justify-center">
                            <div className="space-y-3 w-3/5">
                                <div>Extroversion/Introversion</div>
                                <div className="flex gap-5">
                                    <div>E</div>
                                    <Slider
                                        disabled
                                        defaultValue={[data.polarity.energy]}
                                        max={100}
                                    />
                                    <div>I</div>
                                </div>
                            </div>
                            <div className="space-y-3 w-3/5">
                                <div>Intuition/Sensing</div>
                                <div className="flex gap-5">
                                    <div>N</div>
                                    <Slider
                                        disabled
                                        defaultValue={[data.polarity.infoStyle]}
                                        max={100}
                                    />
                                    <div>S</div>
                                </div>
                            </div>
                            <div className="space-y-3 w-3/5">
                                <div>Feeling/Thinking</div>
                                <div className="flex gap-5">
                                    <div>F</div>
                                    <Slider
                                        disabled
                                        defaultValue={[data.polarity.decisionMaking]}
                                        max={100}
                                    />
                                    <div>T</div>
                                </div>
                            </div>
                            <div className="space-y-3 w-3/5">
                                <div>Perceiving/Judging</div>
                                <div className="flex gap-5">
                                    <div>P</div>
                                    <Slider
                                        disabled
                                        defaultValue={[data.polarity.lifeStyle]}
                                        max={100}
                                    />
                                    <div>J</div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
