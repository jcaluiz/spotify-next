import PlaylistInTop from './components/PlayListInTop';
import PlaylistInBotton from './components/PlaylistInBotton';
import Chevron from './components/home/Chevron';
import ProfileBar from './components/ProfileBar';

export const metadata = {
  title: 'Spotify - The Best Music',
  description: 'Listen your favorite music',
}

export default function Home() {
  return (
    <main className="flex-1 p-6">
      <div className='flex justify-between pr-10'>
        <Chevron />
        <ProfileBar />
      </div>

      <h1 className='font-bold text-3xl mt-10'>Good Afternoon</h1>

      <div className='grid grid-cols-3 gap-4 mt-4'>
        <PlaylistInTop />
        <PlaylistInTop />
        <PlaylistInTop />
        <PlaylistInTop />
        <PlaylistInTop />
        <PlaylistInTop />
      </div>

      <h2 className='font-semibold text-2xl mt-10'>Made for Luiz Junior</h2>

      <div className='grid grid-cols-8 gap-4 mt-4'>
        <PlaylistInBotton />
        <PlaylistInBotton />
        <PlaylistInBotton />
        <PlaylistInBotton />
        <PlaylistInBotton />
      </div>
    </main>
  )
}
