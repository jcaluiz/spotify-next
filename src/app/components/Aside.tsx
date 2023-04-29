import { HomeIcon, Library, Search } from "lucide-react";

export default function Aside() {
    return (
        <aside className="w-72 bg-zinc-950 p-6">
          <div className='flex items-center gap-3'>
            <div className='w-3 h-3 bg-red-500 rounded-full'/>
            <div className='w-3 h-3 bg-yellow-500 rounded-full'/>
            <div className='w-3 h-3 bg-green-500 rounded-full'/>
          </div>
          <nav className="mt-5">
            <a href="" className='flex items-center gap-3 text-xs font-semibold text-zinc-200 hover:bg-white/5 py-3'>
              <HomeIcon />
              Home
            </a>
            <a href="" className='flex items-center gap-3 text-xs font-semibold text-zinc-200  hover:bg-white/5 py-3'>
              <Search />
              Search
            </a>
            <a href="" className='flex items-center gap-3 text-xs font-semibold text-zinc-200  hover:bg-white/5 py-3'>
              <Library />
              Your Library
            </a>
          </nav>

          <nav className='mt-6 pt-6 border-t border-zinc-800 flex flex-col gap-3'>
            <a href='' className='text-sm text-zinc-400 hover:text-zinc-100'>Hot Hits Brasil</a>
            <a href='' className='text-sm text-zinc-400 hover:text-zinc-100'>Rock</a>
            <a href='' className='text-sm text-zinc-400 hover:text-zinc-100'>Luiz Playlist</a>
            <a href='' className='text-sm text-zinc-400 hover:text-zinc-100'>Gabriella Playlist</a>
          </nav>
        </aside>
    )
}