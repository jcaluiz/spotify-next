export default function MusicProgressBar() {
    return (
        <div className='flex items-center gap-2'>
            <span className='text-xs text-zinc-400'>0:48</span>
            <div className='h-1 rounded-full w-96 bg-zinc-600'>
                <div className='bg-zinc-200 w-10 h-1 rounded-full'></div>
            </div>
            <span className='text-xs text-zinc-400'>9:11</span>
        </div>
    )
}