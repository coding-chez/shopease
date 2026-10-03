function ProductCard({ product, onAddToCart }) {
  return (
    <div className="min-w-0">
      <div className="mb-[18px] aspect-square w-full overflow-hidden bg-[#f5f5f5]">
        <img
          className="h-full w-full object-cover transition-transform duration-300 hover:scale-[1.04]"
          src={product.image}
          alt={product.name}
        />
      </div>

      <div className="pb-[10px]">
        <p className="mb-[7px] text-[11px] uppercase tracking-[1.2px] text-[#888]">
          {product.category}
        </p>

        <h3 className="mb-2 text-base font-medium text-[#222]">
          {product.name}
        </h3>

        <p className="mb-[15px] text-[15px] font-semibold text-[#222]">
          ${product.price.toFixed(2)}
        </p>

        <button
          className="w-full rounded border border-[#222] bg-white px-[15px] py-[11px] text-[13px] font-semibold text-[#222] transition-colors hover:bg-[#222] hover:text-white"
          onClick={() => onAddToCart(product)}
        >
          Add to Bag
        </button>
      </div>
    </div>
  )
}

export default ProductCard