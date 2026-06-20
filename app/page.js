'use client';

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import NavBar from "./navbar";

const cards = [
  {
    name: 'Sourdough Country Loaf',
    process: 'Slow fermented 36 hours.',
    feel: 'Crisp crust. Open crumb.',
  },
  {
    name: 'Butter Croissant',
    process: 'Laminated by hand.',
    feel: '72 layers of French butter.',
  },
  {
    name: 'Chocolate Tart',
    process: 'Single origin 72% cocao',
    feel: 'Baked blind every morning.',
  },
]

function Card({name, process, feel}){
  const ref = useRef(null)
  const[flipped, setFlipped] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setFlipped(true)
      },
      {threshold: 1.0}
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return(
    <div ref={ref} className="card-flip">
    <div className={`card-inner ${flipped ? 'flipped': ''}`}>

    <div className="card-back">
      <span className="font-cormorant text-white/20 tracking-widest text-sm">
        LEVAIN
      </span>
    </div>


  <div className="card-front border border-white/10 p-6 flex flex-col md:grid md:grid-cols-3 gap-3 bg-white/5 backdrop-blur-md">

    <span className="text-xs tracking-[0.3em] text-[#8a7560] font-libre">
      {feel}
    </span>

    <h3 className="text-3xl text-[#d4b896] font-cormorant italic">
      {name}
    </h3>

    <p className="text-lg tracking-widest text-[#6b5c4a]">
      {process}
    </p>

    

  </div></div></div>
)
}

export default function Home() {
  return (
    <div className="w-full min-h-screen flex flex-col bg-[#0e0a07]">
      <NavBar/>

      <div className="absolute inset-0 pointer-events-none overflow-x-hidden">
        <div className="bg-[#8b5e3c] absolute bottom-20 opacity-[0.1] right-10 z-0 h-56 w-56 rounded-ful blur-[140px]"/>
        <div className="bg-[#c9973a] absolute top-10 opacity-[0.1] left-10 z-0 h-24 w-24 rounded-full blur-[220px]"/>
      </div>

      <div className="w-full min-h-screen px-4 z-10 py-8 mt-32">
        <span className="font-inter text-xs tracking-widest -mt-6 text-[#a89880] uppercase">
          &mdash; levain · artisan bakery
        </span>

        <h1 className="font-cormorant mb-6 md:mb-10 italic text-7xl mt-6 md:text-9xl text-[#f2ead8]">
          Every loaf begins the<span className="text-transparent [-webkit-text-stroke:1px_rgba(240,237,232,0.25)]"> night</span> before.
        </h1>

        <Link
          href={"/about"}
          className="font-inter md:text-xl font-light text-xs py-4 px-4 tracking-wider uppercase text-[#c9973a]"
        >
          Discover our Story ↓
        </Link>

        <div className="ml-[85%] grid grid-cols-2 gap-2 overflow-x-hidden px-4 md:hidden">
          <p className="font-libre text-[#a89880] text-[10px] tracking-widest animate-pulse -mr-12 rotate-[270deg]">Scroll</p>
          <div className="w-px h-12 bg-gradient-to-b from-[#c9973a] to-transparent mt-4 animate-pulse"/>
        </div>
      
      </div>

      <section className="w-full h-fit mb-16 px-4 py-16 bg-[#161009] border border-[#3d2e1e]/40 -mt-48">
        <span className="font-inter text-xs text-[#a89880] tracking-widest uppercase">&mdash; 01 · Our Craft</span>
        <h2 className="font-libre tracking-wide leading-snug italic text-4xl text-[#f2ead8] mt-6">Made by <span className="text-[#c9973a]">hand</span>. <span className="block">Every single time</span></h2>
        <p className="text-[#a89880] mt-6 font-inter tracking-widest leading-12 text-sm">
          No shortcuts. No machines doing the work that hands should do. Just flour, water, salt, and someone who cares enough to be here at 4am.</p>
      </section>

      <section className="w-full h-fit -mt-16 px-4 py-16">

        <span className="text-[#a89880] font-inter tracking-widest  text-xs">
          &mdash; 02 · THE SIGNATURE
        </span>

        <h3 className="text-[#f2ead8] text-4xl mt-4 mb-12 font-libre italic tracking-wider leading-snug">
          What we're known for.
        </h3>

        <div>
        {cards.map((card) => (
          <Card key={card.name} {...card} />
        ))}
      </div>

      </section>

    </div>
  );
}
