import { Play } from "lucide-react";
import Image from "next/image";

export default function PlaylistInTop() {
    return (
        <a href="#" className='bg-white/5 group rounded overflow-hidden flex items-center gap-4 hover:bg-white/10 transition-colors relative'>
            <Image src="/lynyrd-skynyrd-album.jpg" width={104} height={104} alt='Capa do album Lynyrd Skynyrd (Pronounced Lĕh-nérd Skin-nérd)' />
            <strong>Pronounced Lĕh-nérd Skin-nérd</strong>
            <button className='w-12 h-12 pl-0.5 flex items-center justify-center rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible absolute right-0 bottom-1'>
                <Play className="fill-black" />
            </button>
        </a>
    )
}