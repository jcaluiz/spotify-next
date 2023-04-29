import Image from "next/image";

export default function MusicOnDisplay() {
    return (
        <>
          <Image src="/lynyrd-skynyrd-album.jpg" width={56} height={56} alt='Capa do album Lynyrd Skynyrd (Pronounced Lĕh-nérd Skin-nérd)' />
          <div className='flex flex-col'>
            <strong className='font-normal hover:underline cursor-pointer'>Free Bird</strong>
            <span className='text-zinc-500 hover:underline cursor-pointer'>Lynyrd Skynyrd</span>
          </div>
        </>
    )
}