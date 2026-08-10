"use client";
import { Heart } from 'lucide-react'
import Paragraph from './Paragraph'
import { useEffect, useState } from 'react'
const FooterParagraph = () => {
  const [liked, setLiked] = useState(false);

  // Read from localStorage after hydration — the server renders liked=false,
  // and this effect corrects it on the client after mount.
  useEffect(() => {
    setLiked(localStorage.getItem('liked') === 'true');
  }, []);

  const toggleLike = () => {
    const next = !liked;
    setLiked(next);
    if (next) {
      localStorage.setItem('liked', 'true');
    } else {
      localStorage.removeItem('liked');
    }
  }
  return (
    <Paragraph className='flex gap-1 items-center text-xs text-neutral-500'>Built with <Heart className='h-4 w-4 text-neutral-500 cursor-pointer' fill={liked?'#DE7E6A':'transparent'} stroke={liked?'#DE7E6A':'currentColor'} onClick={toggleLike}/><span className='text-xs text0neutral-500'>and late-night commits.</span></Paragraph>
  )
}

export default FooterParagraph