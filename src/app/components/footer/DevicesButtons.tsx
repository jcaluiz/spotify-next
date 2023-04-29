import { Laptop2, LayoutList, Maximize2, Mic2, Volume } from "lucide-react";

export default function DevicesButtons() {
    return (
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
    )
}