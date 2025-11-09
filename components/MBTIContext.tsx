"use client";

import React, { createContext, useContext, useState } from "react";

type MBTIContextShape = {
    started: boolean;
    setStarted: (v: boolean) => void;
    mbti: string | null;
    setMbti: (v: string | null) => void;
    reset: () => void;
};

const MBTIContext = createContext<MBTIContextShape | undefined>(undefined);

export const MBTIProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
    const [started, setStarted] = useState(false);
    const [mbti, setMbti] = useState<string | null>(null);

    const reset = () => {
        setStarted(false);
        setMbti(null);
    };

    return (
        <MBTIContext.Provider value={{ started, setStarted, mbti, setMbti, reset }}>
            {children}
        </MBTIContext.Provider>
    );
};

export function useMBTI() {
    const ctx = useContext(MBTIContext);
    if (!ctx) throw new Error("useMBTI must be used inside MBTIProvider");
    return ctx;
}
