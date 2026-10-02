function ProductCard({ product, onAddToCart }) {
  return (
    <div className="product-card">

      <div className="product-image">
        <img
          src={product.image}
          alt={product.name}
        />
      </div>

      <div className="product-details">
        <p className="product-category">
          {product.category}
        </p>

        <h3>{product.name}</h3>

        <p className="product-price">
          ${product.price.toFixed(2)}
        </p>

        <button
          className="add-button"
          onClick={() => onAddToCart(product)}
        >
          Add to Bag
        </button>
      </div>

    </div>
  );
}

export default ProductCard;
