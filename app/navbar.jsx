'use client'
import Link from "next/link";
import { useState , useEffect } from "react";

export default function NavBar(){
    const [open, setOpen] = useState(false)
    
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return(
        <div className="fixed top-0 left-0 z-50 w-full">
    <div className={`h-20 flex justify-between items-center shadow-lg transition-all duration-500 backdrop-blur-md px-6 md:px-12 bg-[#0e0a07]/70
        ${scrolled
        ? 'border-b border-[#3d2e1e]'
        : 'border-b border-transparent'
    }
    `}>
 
                <span className="font-libre text-sm tracking-wide leading-snug md:text-2xl text-[#f2ead8]">
                    Levain
                </span>
                
                {/* Desktop links */}
                <div className="hidden md:flex gap-8 text-[#a89880] text-lg font-inter">
                    <Link href="/" className="hover:text-[#f2ead8] transition-colors">Home</Link>
                    <Link href="/menu" className="hover:text-[#f2ead8] transition-colors">Menu</Link>
                    <Link href="/about" className="hover:text-[#f2ead8] transition-colors">About</Link>
                </div>

                <div className="flex items-center gap-6">
                    
                    {/* Hamburger */}
                    <button 
                        onClick={() => setOpen(!open)}
                        className="md:hidden flex flex-col gap-1.5 p-1">
                        <span className={`w-8 h-0.5 rounded-lg bg-[#a89880] block transition-all duration-300 ${open ? 'rotate-45 translate-y-2' : ''}`}></span>
                        <span className={`w-8 h-0.5 rounded-lg bg-[#a89880] block transition-all duration-300 ${open ? 'opacity-0' : ''}`}></span>
                        <span className={`w-4 h-0.5 rounded-lg bg-[#a89880] block transition-all duration-300 ${open ? '-rotate-45 w-8 -translate-y-2' : ''}`}></span>
                    </button>
                </div>
            </div>

            {/* Mobile menu */}
            <div className={`md:hidden bg-[#0d0d0d]/60 backdrop-blur-md rounded-2xl transition-all duration-300 overflow-hidden ${open ? 'max-h-48' : 'max-h-0'}`}>
                <div className="flex flex-col px-6 py-4 gap-4 text-white font-medium">
                    <Link href="/" onClick={() => setOpen(false)} className="">Home</Link>
                    <Link href="/menu" onClick={() => setOpen(false)} className="">Menu</Link>
                    <Link href="/about" onClick={() => setOpen(false)} className="">About</Link>
                </div>
            </div>
        </div>
    )
}