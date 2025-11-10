"use client";

import React, {createContext, useContext, useMemo, useState} from "react";

type MBTIContextShape = {
    started: boolean;
    setStarted: (v: boolean) => void;
    mbti: any | null;
    setMbti: (v: any | null) => void;
    reset: () => void;
};

const MBTIContext = createContext<MBTIContextShape | undefined>(undefined);

export const MBTIProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
    const [started, setStarted] = useState(false);
    const [mbti, setMbti] = useState<any | null>(null);

    const reset = () => {
        setStarted(false);
        setMbti(null);
    };

    const value = useMemo(() => ({ started, setStarted, mbti, setMbti, reset }), [started, mbti]);

    return (
        <MBTIContext.Provider value={value}>
            {children}
        </MBTIContext.Provider>
    );
};

export function useMBTI() {
    const ctx = useContext(MBTIContext);
    if (!ctx) throw new Error("useMBTI must be used inside MBTIProvider");
    return ctx;
}
