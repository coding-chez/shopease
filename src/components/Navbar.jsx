function Navbar({ cartCount, onCartClick }) {
  return (
    <nav className="sticky top-0 z-50 w-full border-b border-[#eeeeee] bg-white/95 backdrop-blur">
      <div className="mx-auto flex min-h-[76px] w-[calc(100%-30px)] max-w-[1200px] items-center justify-between gap-4 sm:w-[calc(100%-40px)] sm:gap-[30px]">
        <a href="#" className="text-[21px] font-bold tracking-[-0.8px] sm:text-2xl">
          ShopEase<span className="text-[#777]">.</span>
        </a>

        <div className="hidden items-center gap-8 text-sm text-[#555] sm:flex">
          <a className="transition-colors hover:text-black" href="#home">Home</a>
          <a className="transition-colors hover:text-black" href="#products">Shop</a>
          <a className="transition-colors hover:text-black" href="#about">About</a>
        </div>

        <button
          className="rounded border border-[#222] bg-[#222] px-[13px] py-[9px] text-sm text-white transition-colors hover:bg-white hover:text-[#222] sm:px-[18px] sm:py-[10px]"
          onClick={onCartClick}
        >
          Bag ({cartCount})
        </button>
      </div>
    </nav>
  )
}

export default Navbar