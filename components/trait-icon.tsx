import Image from "next/image";
import {useState} from "react";
import {TRAITS} from '@/constants/trait';

type TraitIconProps = {
    name: string
}

export default function TraitIcon({ name }: TraitIconProps) {
    const [hasError, setHasError] = useState(false);

    const trait = TRAITS.find((item) => item.name === name);
    const src = trait?.image;

    if (!src) {
        return (
            <div className="flex flex-col justify-center items-center text-white gap-2">
                <div
                    className="w-[64px] h-[64px] bg-white"
                />
                <div>{trait?.name}</div>
            </div>

        );
    } else {
        return (
            <div>
                <Image
                    src={src}
                    alt={name}
                    width={64}
                    height={64}
                    onError={() => setHasError(true)}
                />
                <div>{trait?.name}</div>
            </div>
        );
    }


}