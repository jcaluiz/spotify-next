'use client';
import { Heart } from "lucide-react";
import { useState } from "react";

export default function MyButton() {
  const [like, setLike] = useState(false);
    return (
        <button 
            className="px-4 inline-block"
            onClick={() => setLike(!like)}
          >
            {
              like ? (
                <Heart size={30} className="fill-green-400 text-green-400 cursor-pointer"></Heart>
              ) : (
                <Heart size={30} className="hover:fill-green-400 hover:text-green-400 cursor-pointer"></Heart>
              )
            }
          </button>
    )
}
