import { Play } from "lucide-react";
import Image from "next/image";

export default function PlaylistInBotton() {
    return (
        <a href='#' className='bg-white/5 group p-3 rounded-md flex flex-col gap-2 hover:bg-white/10 relative'>
            <Image src="/lynyrd-skynyrd-album.jpg" className='w-full' width={120} height={120} alt='Capa do album Lynyrd Skynyrd (Pronounced Lĕh-nérd Skin-nérd)' />
            <strong className='font-semibold'>Daily Mix 1</strong>
            <span className='text-sm text-zinc-400'>Wallows, COIN, girl in red and more</span>
            <button className='bottom-24 right-0 w-12 h-12 pl-0.5 flex items-center justify-center rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible absolute'>
                <Play className="fill-black" />
            </button>
        </a>
    )
}