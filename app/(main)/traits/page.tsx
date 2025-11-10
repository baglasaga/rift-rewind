"use client"

import {useMBTI} from "@/components/MBTIContext";
import {TRAITS, TraitType} from "@/constants/traitType";
import Trait from "@/components/trait";
import {Separator} from "@/components/ui/separator";

export default function Traits() {
    const { mbti } = useMBTI();

    const unlockedTraitNames: string[] = mbti?.features.traits ?? [];

    const unlockedTraits = TRAITS.filter(trait => unlockedTraitNames.includes(trait.name));
    const lockedTraits = TRAITS.filter(trait => !unlockedTraitNames.includes(trait.name));

    return (
        <div className="p-12 text-white">
            <div className="font-bold">TRAITS</div>
            <div className="space-y-6">
                <div className="flex flex-col gap-5">
                    {unlockedTraits.map((trait: TraitType) => (
                        <Trait key={trait.name} trait={trait} />
                    ))}
                </div>
                <Separator />
                <div className="opacity-60">
                    <div className="font-bold mb-2">LOCKED</div>
                    {lockedTraits.map((trait: TraitType) => (
                        <Trait key={trait.name} trait={trait} />
                    ))}
                </div>
            </div>
        </div>
    )
}