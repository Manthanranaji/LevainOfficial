'use client'

import NavBar from "../navbar";
import useReveal from "../hooks/reveal";

const menuSections = [
  {
    title: "Artisan Breads",
    items: [
      ["Country Sourdough", "₹280"],
      ["Seeded Sourdough", "₹320"],
      ["Multigrain Loaf", "₹300"],
      ["Whole Wheat Loaf", "₹240"],
      ["Baguette", "₹180"],
      ["Brioche Loaf", "₹350"],
    ]
  },

  {
    title: "Croissants & Viennoiserie",
    items: [
      ["Butter Croissant", "₹180"],
      ["Pain au Chocolat", "₹220"],
      ["Almond Croissant", "₹240"],
      ["Chocolate Croissant", "₹230"],
      ["Cinnamon Roll", "₹210"],
      ["Danish Pastry", "₹220"],
    ]
  },

  {
    title: "Pastries & Desserts",
    items: [
      ["Chocolate Tart", "₹260"],
      ["Lemon Tart", "₹240"],
      ["Classic Cheesecake", "₹320"],
      ["Tiramisu", "₹340"],
      ["Red Velvet Slice", "₹280"],
      ["Opera Cake", "₹360"],
    ]
  },

  {
    title: "Coffee",
    items: [
      ["Espresso", "₹120"],
      ["Americano", "₹140"],
      ["Cappuccino", "₹180"],
      ["Latte", "₹190"],
      ["Mocha", "₹220"],
      ["Flat White", "₹210"],
    ]
  },

  {
    title: "Tea & Beverages",
    items: [
      ["English Breakfast Tea", "₹140"],
      ["Earl Grey Tea", "₹160"],
      ["Masala Chai", "₹120"],
      ["Iced Latte", "₹220"],
      ["Fresh Orange Juice", "₹180"],
      ["Cold Brew", "₹240"],
    ]
  }
]

export default function Menu() {

  return (
    <div className="min-h-screen bg-[#0e0a07] text-[#f2ead8]">

      <NavBar />

      <section className="pt-40 px-6 pb-20">

        <span className="font-inter text-xs tracking-[0.35em] uppercase text-[#a89880]">
          &mdash; Our Menu
        </span>

        <h1 className="opacity-0 animate-fade-left font-cormorant italic text-7xl md:text-9xl mt-6">
          Baked fresh,
          <span className="block text-[#c9973a]">
            every morning.
          </span>
        </h1>

      </section>

      <section className="max-w-6xl mx-auto px-6 pb-24">

        {menuSections.map((section) => {

          const ref = useReveal()

          return (
            <div
              key={section.title}
              ref={ref}
              className="opacity-0 mb-20"
            >

              <div className="mb-8">
                <h2 className="font-cormorant italic text-5xl text-[#c9973a]">
                  {section.title}
                </h2>

                <div className="w-24 h-px bg-[#c9973a] mt-4" />
              </div>

              <div className="grid md:grid-cols-2 gap-x-20 gap-y-6">

                {section.items.map(([name, price]) => (

                  <div
                    key={name}
                    className="flex items-center justify-between border-b border-[#3d2e1e]/50 pb-4"
                  >

                    <div>
                      <h3 className="font-libre text-2xl">
                        {name}
                      </h3>

                      <p className="text-xs tracking-widest text-[#8f8375] uppercase mt-1">
                        Freshly prepared daily
                      </p>
                    </div>

                    <span className="font-cormorant text-3xl text-[#f2ead8]">
                      {price}
                    </span>

                  </div>

                ))}

              </div>

            </div>
          )
        })}

      </section>

    </div>
  )
}