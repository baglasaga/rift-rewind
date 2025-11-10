"use client"

import {useState} from "react";
import Image from "next/image";

type TraitProps = {
    trait: any
}

export default function Trait({ trait }: TraitProps) {
    const [hasError, setHasError] = useState(false);

    const src = trait?.image;

    if (!src) {
        return (
            <div className="flex flex-col text-white gap-2 my-4">
                <div className="font-semibold">{trait?.name}</div>
                <div className="flex px-8 gap-4">
                    <div
                        className="w-[72px] h-[72px] bg-white"
                    />
                    <div className="text-sm">{trait?.description}</div>
                </div>
            </div>

        );
    } else {
        return (
            <div className="flex flex-col text-white gap-2 my-4">
                <div className="font-semibold">{trait?.name}</div>
                <div className="flex px-8 gap-4">
                    <Image
                        src={src}
                        alt={trait?.name}
                        width={72}
                        height={72}
                        onError={() => setHasError(true)}
                    />
                    <div className="text-sm">{trait?.description}</div>
                </div>
            </div>
        );
    }
}