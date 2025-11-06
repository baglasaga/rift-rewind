import Link from "next/link";
import {usePathname} from "next/navigation";
import {BookOpen, Bot, GalleryVerticalEnd, Settings2, SquareTerminal} from "lucide-react";
import Image from "next/image";

export default function AppSidebar() {
    const pathname = usePathname();
    const sidebarItems = [
        {href: '/dashboard', icon: GalleryVerticalEnd},
        {href: '/#', icon: SquareTerminal},
        {href: '/#', icon: Bot},
        {href: '/#', icon: BookOpen},
        {href: '/#', icon: Settings2}
    ]

    return (
        <div className="my-5 bg-[var(--medium)] rounded-lg w-[60px] h-[800px] flex flex-col justify-between p-3">
            <div className="flex flex-col gap-4 items-center">
                {sidebarItems.map((item: any, index: number) => {
                    const Icon = item.icon;
                    return (
                        <Link
                            key={index}
                            href={item.href}
                            className={`rounded-lg p-3
                            ${pathname.startsWith(item.href) ? 'bg-[var(--text)] text-neutral-800' : 
                                'bg-transparent text-[var(--text)] hover:bg-[var(--text)] hover:text-neutral-800'}`}>
                            <Icon className="w-4.5 h-auto" />
                        </Link>
                    )
                })}
            </div>
            <div>
                <Image src="https://github.com/shadcn.png" alt="@shadcn" width={32} height={32} className="rounded-lg" />
            </div>
        </div>
    )
}