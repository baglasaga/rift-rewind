import { Tilt_Neon } from "next/font/google";

const tiltNeon = Tilt_Neon({ subsets: ["latin"] });

export default function SaucePage1() {
    return (
        <div className="w-full h-full flex items-center justify-center">
            <div className={`${tiltNeon.className} text-[var(--text)]`}>placeholder page_1</div>
        </div>
    );
}
