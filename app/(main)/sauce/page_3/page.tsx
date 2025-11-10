import { Tilt_Neon } from "next/font/google";

const tiltNeon = Tilt_Neon({ subsets: ["latin"] });

export default function SaucePage3() {
    return (
        <div className="w-full h-full flex items-center justify-center">
            <div className={`${tiltNeon.className} text-[var(--text)]`}>placeholder page_3</div>
        </div>
    );
}
