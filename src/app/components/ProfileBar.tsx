import { Play } from "lucide-react";
import Image from "next/image";

export default function ProfileBar() {
    return (
        <div className='flex justify-between items-center bg-zinc-950 rounded-2xl w-32 pr-3 hover:bg-white/5 cursor-pointer'>
            <Image className='rounded-full' width={40} height={40} src="/minha-foto-removebg-preview.png" alt='Foto do perfil' />
            <p className='font-bold'>Luiz</p>
            <Play className='rotate-90 fill-white' size={13} />
        </div>
    )
}