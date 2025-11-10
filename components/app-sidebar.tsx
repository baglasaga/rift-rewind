"use client"

import {usePathname, useRouter} from "next/navigation";
import {GalleryVerticalEnd, Gamepad, Home, LogOut} from "lucide-react";
import Image from "next/image";
import {Tooltip, TooltipContent, TooltipTrigger} from "@/components/ui/tooltip";
import {useMBTI} from "@/components/MBTIContext";
import {Button} from "@/components/ui/button";
import imageService from "@/services/imageService";

export default function AppSidebar() {
    const pathname = usePathname();
    const { userData, reset } = useMBTI();
    const router = useRouter();

    const sidebarItems = [
        {href: '/home', icon: Home, name: 'Home'},
        {href: '/dashboard', icon: GalleryVerticalEnd, name: 'Dashboard'},
        {href: '/traits', icon: Gamepad, name: 'Traits'},
        {href: '/', icon: LogOut, name: 'Logout', onClick: () => {reset()}}
    ]

    return (
        <div className="my-5 bg-[var(--medium)] rounded-lg w-[60px] h-[800px] flex flex-col justify-between p-3">
            <div className="flex flex-col gap-4 items-center">
                {sidebarItems.map((item: any, index: number) => {
                    const Icon = item.icon;
                    return (
                        <Tooltip key={index}>
                            <TooltipTrigger asChild>
                                <Button
                                    onClick={() => {
                                        if (item.onClick) {
                                            item.onClick();
                                        }
                                        router.push(item.href);
                                    }}
                                    className={`rounded-lg p-3
                                    ${(item.href === '/' ? pathname === '/' : pathname.startsWith(item.href)) ? 'bg-[var(--text)]! text-neutral-800' :
                                        'bg-transparent text-[var(--text)] hover:bg-[var(--text)] hover:text-neutral-800 hover:cursor-pointer'}`}>
                                    <Icon className="w-4.5 h-auto" />
                                </Button>
                            </TooltipTrigger>
                            <TooltipContent side="right">
                                {item.name}
                            </TooltipContent>
                        </Tooltip>
                    )
                })}
            </div>
            <div className="flex justify-center">
                <Image src={userData?.profileIconId ? imageService.getProfileImage(userData.profileIconId) : "https://github.com/shadcn.png"} alt="Summoner profile" width={32} height={32} className="rounded-lg"/>
            </div>
        </div>
    )
}
