function Navbar({ cartCount, onCartClick }) {
  return (
    <nav className="navbar">
      <div className="nav-container">

        <a href="#" className="logo">
          ShopEase<span>.</span>
        </a>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#products">Shop</a>
          <a href="#about">About</a>
        </div>

        <button
          className="cart-button"
          onClick={onCartClick}
        >
          Bag ({cartCount})
        </button>

      </div>
    </nav>
  );
}

export default Navbar;
