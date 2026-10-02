function Cart({
  cartItems,
  onClose,
  onRemove,
  onQuantityChange
}) {
  const subtotal = cartItems.reduce(
    (total, item) =>
      total + item.price * item.quantity,
    0
  );

  return (
    <div className="cart-overlay" onClick={onClose}>

      <div
        className="cart-panel"
        onClick={(event) => event.stopPropagation()}
      >

        <div className="cart-header">
          <h2>Your Shopping Bag</h2>

          <button onClick={onClose}>
            &times;
          </button>
        </div>

        {cartItems.length === 0 ? (
          <p className="empty-cart">
            Your shopping bag is empty.
          </p>
        ) : (
          <>
            <div className="cart-items">

              {cartItems.map((item) => (
                <div className="cart-item" key={item.id}>

                  <img src={item.image} alt={item.name} />

                  <div className="cart-item-details">
                    <h3>{item.name}</h3>

                    <p>${item.price.toFixed(2)}</p>

                    <div className="quantity-controls">
                      <button
                        onClick={() =>
                          onQuantityChange(
                            item.id,
                            item.quantity - 1
                          )
                        }
                      >
                        -
                      </button>

                      <span>{item.quantity}</span>

                      <button
                        onClick={() =>
                          onQuantityChange(
                            item.id,
                            item.quantity + 1
                          )
                        }
                      >
                        +
                      </button>
                    </div>

                    <button
                      className="remove-button"
                      onClick={() => onRemove(item.id)}
                    >
                      Remove
                    </button>

                  </div>

                </div>
              ))}

            </div>

            <div className="cart-footer">
              <div className="subtotal">
                <span>Subtotal</span>
                <strong>${subtotal.toFixed(2)}</strong>
              </div>

              <p>Shipping and taxes calculated at checkout.</p>

              <button className="checkout-button">
                Proceed to Checkout
              </button>
            </div>
          </>
        )}

      </div>
    </div>
  );
}

export default Cart;
