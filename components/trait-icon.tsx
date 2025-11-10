"use client"

import Image from "next/image";
import { useState } from "react";
import { TRAITS } from '@/constants/traitType';

type TraitIconProps = {
    name: string
}

export default function TraitIcon({ name }: TraitIconProps) {
    const [hasError, setHasError] = useState(false);

    const trait = TRAITS.find((item) => item.name === name);
    const src = trait?.image;

    if (!src) {
        return (
            <div className="flex flex-col justify-center items-center text-white gap-2 my-4">
                <div
                    className="w-[72px] h-[72px] bg-white"
                />
                <div>{trait?.name}</div>
            </div>

        );
    } else {
        return (
            <div className="flex flex-col justify-center items-center text-white gap-2 my-4">
                <Image
                    src={src}
                    alt={name}
                    width={72}
                    height={72}
                    onError={() => setHasError(true)}
                />
                <div>{trait?.name}</div>
            </div>
        );
    }


}