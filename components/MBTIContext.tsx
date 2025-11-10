"use client";

import React, {createContext, useContext, useEffect, useMemo, useState} from "react";

type MBTIContextShape = {
    started: boolean;
    setStarted: (v: boolean) => void;
    mbti: any | null;
    setMbti: (v: any | null) => void;
    reset: () => void;
};

const MBTIContext = createContext<MBTIContextShape | undefined>(undefined);
const contextKey = 'mbtiContext';

export const MBTIProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
    const [started, setStarted] = useState(() => {
        try {
            const saved = localStorage.getItem(contextKey);
            if (saved) {
                const parsed = JSON.parse(saved);
                return parsed.started ?? false;
            }
        } catch (e) {
            console.error('Failed to parse context from local storage: ', e);
        }
        return false;
    });

    const [mbti, setMbti] = useState<any | null>(() => {
        try {
            const saved = localStorage.getItem(contextKey);
            if (saved) {
                const parsed = JSON.parse(saved);
                return parsed.mbti ?? null;
            }
        } catch (e) {
            console.error('Failed to parse context from local storage: ', e);
        }
        return null;
    });


    const reset = () => {
        setStarted(false);
        setMbti(null);
        localStorage.removeItem(contextKey);
    };

    useEffect(() => {
        const payload = JSON.stringify({ started, mbti });
        localStorage.setItem(contextKey, payload);
    }, [started, mbti]);

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
