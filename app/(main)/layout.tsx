"use client"

import {SidebarProvider} from "@/components/ui/sidebar";
import AppSidebar from "@/components/app-sidebar";

export default function MainLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <SidebarProvider>
            <div className="flex min-h-screen w-full bg-[var(--dark)]">
                <AppSidebar />
                <main className="grow p-6">{children}</main>
            </div>
        </SidebarProvider>

    );
}
