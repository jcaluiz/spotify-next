import { Laptop2, LayoutList, Maximize2, Mic2, Repeat, Volume } from "lucide-react";
import { Play, Shuffle, SkipBack, SkipForward } from "lucide-react";
import Image from 'next/image';
import MyButton from "./home/MyButton";

export default function Footer() {
    return (
        <footer className="bg-zinc-800 border-t border-zinc-700 px-6 py-4 flex items-center justify-between">
        <div className='flex items-center gap-2'>
          <Image src="/lynyrd-skynyrd-album.jpg" width={56} height={56} alt='Capa do album Lynyrd Skynyrd (Pronounced Lĕh-nérd Skin-nérd)' />
          <div className='flex flex-col'>
            <strong className='font-normal hover:underline cursor-pointer'>Free Bird</strong>
            <span className='text-zinc-500 hover:underline cursor-pointer'>Lynyrd Skynyrd</span>
          </div>
          <MyButton />
        </div>

        <div className='flex flex-col items-center gap-2'>
          <div className='flex items-center justify-center gap-6'>
            <Shuffle size={20} className='text-zinc-200' />
            <SkipBack size={20} className='text-zinc-200 fill-white' />
            <button className='w-10 h-10 pl-0.5 flex items-center justify-center rounded-full bg-white text-black ml-auto'>
              <Play className="fill-black" />
            </button>
            <SkipForward size={20} className='text-zinc-200 fill-white' />
            <Repeat size={20} className='text-zinc-200' />
          </div>
          <div className='flex items-center gap-2'>
            <span className='text-xs text-zinc-400'>0:48</span>
            <div className='h-1 rounded-full w-96 bg-zinc-600'>
              <div className='bg-zinc-200 w-10 h-1 rounded-full'></div>
            </div>
            <span className='text-xs text-zinc-400'>9:11</span>
          </div>
        </div>
        <div className='flex items-center gap-4'>
          <Mic2 size={20} className="hover:text-green-400 cursor-pointer" />
          <LayoutList size={20} className="hover:text-green-400 cursor-pointer" />
          <Laptop2 size={20} className="hover:text-green-400 cursor-pointer" />
          <div className='flex items-center gap-2'>
            <Volume size={20} className="hover:text-green-400 cursor-pointer" />
            <div className='h-1 rounded-full w-24 bg-zinc-600 hover:cursor-pointer'>
              <div className='bg-zinc-200 w-10 h-1 rounded-full'></div>
            </div>
          </div>
          <Maximize2 size={20} className="hover:text-green-400 cursor-pointer" />
        </div>
      </footer>
    )
}