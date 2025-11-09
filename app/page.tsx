"use client"

import {Card, CardContent} from "@/components/ui/card";
import {Input} from "@/components/ui/input";
import {Label} from "@/components/ui/label";
import {Button} from "@/components/ui/button";
import {ArrowRight, Hash} from "lucide-react";
import {InputGroup, InputGroupAddon, InputGroupInput} from "@/components/ui/input-group";
import { Tilt_Neon } from "next/font/google";
import {useRouter} from "next/navigation";

const tiltNeon = Tilt_Neon({ subsets: ['latin'] });

export default function Home() {
    const router = useRouter();

    return (
      <div className={"bg-[var(--dark)] min-h-screen"}>
        <main className={"min-h-screen w-full flex flex-col items-center justify-center py-32 px-16 space-y-32 text-[var(--text)]"}>
            <div className={`${tiltNeon.className} text-8xl text-center`}>Welcome!</div>
            <Card className={"bg-[var(--dark-2)] border-1 border-[var(--dark-1)] text-[var(--text)]"}>
                <CardContent>
                    <form>
                        <div className={"flex flex-col gap-6"}>
                            <div className="flex flex-col gap-2 w-[400px]">
                                <Label htmlFor="gameName">Game Name</Label>
                                <Input
                                    id="gameName"
                                    placeholder="Game Name"
                                    className="bg-[var(--dark)] border-1 border-[#12AAC1] placeholder:text-[#146176]"/>
                            </div>
                            <div className="flex flex-col gap-2 w-[400px]">
                                <Label htmlFor="tagLine" >Tag Line</Label>
                                <InputGroup className="bg-[var(--dark)] border-1 border-[#12AAC1]">
                                    <InputGroupInput placeholder="Tagline" className="placeholder:text-[#146176]"/>
                                    <InputGroupAddon>
                                        <Hash className="text-[#146176]" />
                                    </InputGroupAddon>
                                </InputGroup>
                            </div>
                            <div className="flex justify-center items-center">
                                <Button
                                    type="button"
                                    className={"bg-[var(--light)] px-4 py-2 rounded-lg hover:cursor-pointer hover:bg-[var(--light)]"}
                                    onClick={() => router.push('/sauce')}
                                >
                                    Login
                                    <ArrowRight />
                                </Button>
                            </div>
                        </div>
                    </form>
                </CardContent>
            </Card>
        </main>
      </div>
  );
}
