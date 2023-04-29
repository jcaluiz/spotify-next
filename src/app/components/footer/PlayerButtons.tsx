import { Play, Repeat, Shuffle, SkipBack, SkipForward } from "lucide-react";

export default function PlayerButtons() {
    return (
        <div className='flex items-center justify-center gap-6'>
            <Shuffle size={20} className='text-zinc-200' />
            <SkipBack size={20} className='text-zinc-200 fill-white' />
            <button className='w-10 h-10 pl-0.5 flex items-center justify-center rounded-full bg-white text-black ml-auto'>
                <Play className="fill-black" />
            </button>
            <SkipForward size={20} className='text-zinc-200 fill-white' />
            <Repeat size={20} className='text-zinc-200' />
        </div>
    )
}