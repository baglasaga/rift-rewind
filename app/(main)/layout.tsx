"use client"

import AppSidebar from "@/components/app-sidebar";
import { MBTIProvider } from "@/components/MBTIContext";

export default function MainLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <MBTIProvider>
            <div className="flex min-h-screen w-full bg-[var(--dark)]">
                <AppSidebar />
                <main className="grow p-6">{children}</main>
            </div>
        </MBTIProvider>
    );
}
