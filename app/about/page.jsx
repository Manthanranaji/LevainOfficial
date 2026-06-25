'use client'

import Link from "next/link";
import NavBar from "../navbar";
import useReveal from "../hooks/reveal";

export default function About() {

  const ref1 = useReveal()
  const ref2 = useReveal()
  const ref3 = useReveal()

  return (
    <div className="min-h-screen bg-[#0e0a07] text-[#f2ead8]">
      <NavBar />

      <section className="px-6 pt-40 pb-24">

        <span className="font-inter text-xs tracking-widest text-[#a89880] uppercase">
          &mdash; About Levain
        </span>

        <h1 className="opacity-0 animate-fade-left font-cormorant italic text-6xl md:text-8xl mt-6">
          Bread worth
          <span className="text-[#c9973a]"> waking up </span>
          for.
        </h1>

        <p
          ref={ref1}
          className="opacity-0 mt-10 max-w-3xl text-[#a89880] font-inter tracking-wide leading-8"
        >
          Levain was born from a simple belief — good bread takes
          time. Every loaf is mixed, shaped and baked by hand using
          traditional methods and slow fermentation.
        </p>
      </section>

      <section className="px-6 py-20 bg-[#161009]">

        <div ref={ref2} className="opacity-0">
          <span className="text-xs tracking-widest text-[#a89880] uppercase">
            &mdash; Our Philosophy
          </span>

          <h2 className="font-libre italic text-5xl mt-4">
            Slow. Honest. Handmade.
          </h2>

          <p className="mt-8 max-w-3xl text-[#a89880] leading-8">
            No preservatives. No shortcuts. Just flour, water, salt,
            butter and patience. We believe artisan baking is not
            merely a process; it is a craft passed from hand to hand.
          </p>
        </div>

      </section>

      <section className="px-6 py-20">

        <div
          ref={ref3}
          className="opacity-0 border border-[#3d2e1e]/50 p-8 backdrop-blur-md bg-white/5"
        >
          <span className="text-xs tracking-widest text-[#a89880] uppercase">
            &mdash; Contact
          </span>

          <h3 className="font-cormorant italic text-4xl mt-4">
            We'd love to hear from you.
          </h3>

          <div className="mt-8 space-y-4">

            <p className="text-[#a89880]">
              WhatsApp:
            </p>

            <a
              href="https://wa.me/919876634626"
              target="_blank"
              className="text-2xl text-[#c9973a] hover:text-[#f2ead8] transition"
            >
              +91 9876634626
            </a>

          </div>
        </div>

        <Link
          href="/menu"
          className="inline-block mt-12 text-[#c9973a] tracking-widest uppercase"
        >
          View Our Menu →
        </Link>

      </section>
    </div>
  );
}