import { ReactNode } from "react";
import Aside from "./Aside";
import Footer from "./Footer";

interface Props {
    children: ReactNode,
}

export default function MainContainer({children}: Props) {
    return (
        <div className="min-h-screen bg-zinc-900 flex flex-col">
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