"use client"

import AppSidebar from "@/components/app-sidebar";

export default function MainLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="flex min-h-screen w-full bg-[var(--dark)]">
            <AppSidebar />
            <main className="grow p-6">{children}</main>
        </div>
    );
}
