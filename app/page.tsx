"use client"

import {Card, CardContent} from "@/components/ui/card";
import {Input} from "@/components/ui/input";
import {Label} from "@/components/ui/label";
import {Button} from "@/components/ui/button";
import {ArrowRight, Hash} from "lucide-react";
import {InputGroup, InputGroupAddon, InputGroupInput} from "@/components/ui/input-group";
import { Tilt_Neon } from "next/font/google";
import {useRouter} from "next/navigation";
import {useForm} from "react-hook-form";
import {LoginFormData, loginSchema} from "@/constants/login-schema";
import {zodResolver} from "@hookform/resolvers/zod";
import dataService from "@/services/dataService";
import {useMBTI} from "@/components/MBTIContext";
import {useState} from "react";
import {Spinner} from "@/components/ui/spinner";

const tiltNeon = Tilt_Neon({ subsets: ['latin'] });

export default function Home() {
    const router = useRouter();
    const { setMbti } = useMBTI();
    const { register, handleSubmit } = useForm<LoginFormData>({resolver: zodResolver(loginSchema)});
    const [ loading, setLoading ] = useState<boolean>(false);


    const onSubmit =  async (data: LoginFormData) => {
        setLoading(true);
        try {
            const res = await dataService.getUser(data.gameName, data.tagLine);
            startDataFetch(res.batch_id, res.puuid);
            setLoading(false);
            router.push('/home')
        } catch (err) {
            console.error('Max polling attempts or max retry on entry point')
        }
        setLoading(false);
    }

    const startDataFetch = async (batchId: string, puuid: string) => {
        const userData = await dataService.getUserData(batchId, puuid);
        console.log('setting mbti: ', userData)
        setMbti(userData);
    }

    return (
      <div className={"bg-[var(--dark)] min-h-screen"}>
          {loading &&
              <div className="fixed inset-0 flex items-center justify-center z-[100]">
                  <Spinner color="white" className="size-6" />
              </div>
          }
        <main className={"min-h-screen w-full flex flex-col items-center justify-center py-32 px-16 space-y-32 text-[var(--text)]"}>
            <div className={`${tiltNeon.className} text-8xl text-center`}>Welcome!</div>
            <Card className={"bg-[var(--dark-2)] border-1 border-[var(--dark-1)] text-[var(--text)]"}>
                <CardContent>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className={"flex flex-col gap-6"}>
                            <div className="flex flex-col gap-2 w-[400px]">
                                <Label htmlFor="gameName">Game Name</Label>
                                <Input
                                    id="gameName"
                                    placeholder="Game Name"
                                    {...register('gameName')}
                                    className="bg-[var(--dark)] border-1 border-[#12AAC1] placeholder:text-[#146176]"/>
                            </div>
                            <div className="flex flex-col gap-2 w-[400px]">
                                <Label htmlFor="tagLine" >Tag Line</Label>
                                <InputGroup className="bg-[var(--dark)] border-1 border-[#12AAC1]">
                                    <InputGroupInput
                                        placeholder="Tagline"
                                        className="placeholder:text-[#146176]"
                                        {...register('tagLine')}
                                    />
                                    <InputGroupAddon>
                                        <Hash className="text-[#146176]" />
                                    </InputGroupAddon>
                                </InputGroup>
                            </div>
                            <div className="flex justify-center items-center">
                                <Button
                                    type="submit"
                                    className={"bg-[var(--light)] px-4 py-2 rounded-lg hover:cursor-pointer hover:bg-[var(--light)]"}
                                    disabled={loading}
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
