import MyButton from "../footer/MyButton";
import MusicOnDisplay from "../footer/MusicOnDisplay";
import PlayerButtons from "../footer/PlayerButtons";
import MusicProgressBar from "../footer/MusicProgressBar";
import DevicesButtons from "../footer/DevicesButtons";

export default function Footer() {
    return (
        <footer className="bg-zinc-800 border-t border-zinc-700 px-6 py-4 flex items-center justify-between">
        <div className='flex items-center gap-2'>
          <MusicOnDisplay />
          <MyButton />
        </div>

        <div className='flex flex-col items-center gap-2'>
          <PlayerButtons />
          <MusicProgressBar />
        </div>
        <DevicesButtons />
      </footer>
    )
}