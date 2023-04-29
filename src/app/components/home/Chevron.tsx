import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Chevron() {
    return (
        <div className='flex items-center gap-4'>
            <button className='rounded-full bg-black/40 p-1'>
              <ChevronLeft className="text-white/30 hover:text-white" />
            </button>
            <button className='rounded-full bg-black/40 p-1'>
              <ChevronRight className="text-white/30 hover:text-white" />
            </button>
          </div>
    )
}