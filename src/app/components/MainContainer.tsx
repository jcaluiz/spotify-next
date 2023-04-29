import { ReactNode } from "react";
import Aside from "./mainContainer/Aside";
import Footer from "./mainContainer/Footer";

interface Props {
    children: ReactNode,
}

export default function MainContainer({children}: Props) {
    return (
        <div className="min-h-screen bg-zinc-900 flex flex-col relative">
            <div className="flex flex-1">
                <Aside />
                <>
                    {children}
                </>
            </div>
            <Footer />
        </div>
    )
}