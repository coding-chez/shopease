import ProductCard from './ProductCard'

function ProductList({
  products,
  selectedCategory,
  onAddToCart,
  onSelectCategory,
}) {
  const filteredProducts =
    selectedCategory === 'All'
      ? products
      : products.filter((product) => product.category === selectedCategory)

  return (
    <section
      className="mx-auto w-[calc(100%-30px)] max-w-[1200px] py-[65px] sm:w-[calc(100%-40px)] sm:py-[100px]"
      id="products"
    >
      <div className="mb-[35px] flex items-end justify-between">
        <div>
          <p className="mb-[10px] text-xs font-bold tracking-[2px] text-[#888]">
            OUR COLLECTION
          </p>
          <h2 className="text-[30px] font-semibold leading-[1.1] tracking-[-1.5px] text-[#171717] sm:text-[36px]">
            Shop our products
          </h2>
        </div>
      </div>

      <div className="mb-10 flex gap-[10px] overflow-x-auto pb-[5px] sm:flex-wrap">
        {['All', 'Home', 'Accessories', 'Stationery', 'Lifestyle'].map(
          (category) => {
            const isSelected = selectedCategory === category

            return (
              <button
                key={category}
                className={`shrink-0 rounded border px-4 py-[9px] text-[13px] transition-colors ${
                  isSelected
                    ? 'border-[#222] bg-[#222] text-white'
                    : 'border-[#ddd] bg-white text-[#555] hover:border-[#222] hover:text-[#222]'
                }`}
                onClick={() => onSelectCategory(category)}
              >
                {category}
              </button>
            )
          },
        )}
      </div>

      <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-7 lg:grid-cols-4">
        {filteredProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onAddToCart={onAddToCart}
          />
        ))}
      </div>
    </section>
  )
}

export default ProductList