function Hero() {
  return (
    <section
      className="mx-auto grid min-h-[620px] w-[calc(100%-30px)] max-w-[1200px] grid-cols-1 items-center gap-[50px] py-[50px] sm:w-[calc(100%-40px)] sm:gap-[70px] sm:py-[80px] lg:grid-cols-2"
      id="home"
    >
      <div className="max-w-[700px]">
        <p className="mb-5 text-xs font-bold tracking-[2px] text-[#777]">
          SIMPLE LIVING, BETTER CHOICES
        </p>

        <h1 className="mb-6 text-[clamp(48px,6vw,76px)] font-semibold leading-[0.98] tracking-[-2.5px] text-[#171717] sm:tracking-[-4px]">
          Find your everyday
          <br />
          essentials.
        </h1>

        <p className="mb-8 max-w-[440px] text-[15px] leading-[1.7] text-[#666] sm:text-[17px]">
          Thoughtfully selected products for your home, work, and everyday life.
        </p>

        <a
          href="#products"
          className="inline-block rounded border border-[#222] bg-[#222] px-6 py-[14px] text-sm font-semibold text-white transition-colors hover:bg-white hover:text-[#222]"
        >
          Shop Collection
        </a>
      </div>

      <div className="h-[350px] w-full overflow-hidden sm:h-[450px] lg:h-[560px]">
        <img
          className="h-full w-full object-cover"
          src="https://images.unsplash.com/photo-1490312278390-ab64016e0aa9?w=1000"
          alt="Minimal lifestyle interior"
        />
      </div>
    </section>
  )
}

export default Hero