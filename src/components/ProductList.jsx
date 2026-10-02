import ProductCard from "./ProductCard";

function ProductList({
  products,
  selectedCategory,
  onAddToCart,
  onSelectCategory
}) {
  const filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter(
          (product) =>
            product.category === selectedCategory
        );

  return (
    <section className="products-section" id="products">

      <div className="section-heading">
        <div>
          <p className="section-label">OUR COLLECTION</p>
          <h2>Shop our products</h2>
        </div>
      </div>

      <div className="category-filters">
        {["All", "Home", "Accessories", "Stationery", "Lifestyle"].map(
          (category) => (
            <button
              key={category}
              className={
                selectedCategory === category
                  ? "filter-button active"
                  : "filter-button"
              }
              onClick={() => onSelectCategory(category)}
            >
              {category}
            </button>
          )
        )}
      </div>

      <div className="product-grid">
        {filteredProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onAddToCart={onAddToCart}
          />
        ))}
      </div>

    </section>
  );
}

export default ProductList;
