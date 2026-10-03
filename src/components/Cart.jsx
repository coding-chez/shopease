function Cart({ cartItems, onClose, onRemove, onQuantityChange }) {
  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  )

  return (
    <div
      className="fixed inset-0 z-[1000] flex justify-end bg-black/45"
      onClick={onClose}
    >
      <div
        className="h-full w-full overflow-y-auto bg-white p-[22px] shadow-[-10px_0_30px_rgba(0,0,0,0.12)] sm:w-[min(440px,100%)] sm:p-7"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="flex items-center justify-between border-b border-[#eee] pb-5">
          <h2 className="text-[22px] font-semibold">Your Shopping Bag</h2>

          <button
            className="text-[28px] leading-none text-[#333]"
            onClick={onClose}
            aria-label="Close shopping bag"
          >
            &times;
          </button>
        </div>

        {cartItems.length === 0 ? (
          <p className="py-[50px] text-center text-[#777]">
            Your shopping bag is empty.
          </p>
        ) : (
          <>
            <div className="py-5">
              {cartItems.map((item) => (
                <div
                  className="flex gap-4 border-b border-[#eee] py-[18px]"
                  key={item.id}
                >
                  <img
                    className="h-[85px] w-[85px] object-cover"
                    src={item.image}
                    alt={item.name}
                  />

                  <div className="flex-1">
                    <h3 className="mb-[7px] text-[15px] font-semibold">
                      {item.name}
                    </h3>

                    <p className="mb-3 text-sm text-[#555]">
                      ${item.price.toFixed(2)}
                    </p>

                    <div className="mb-[10px] flex items-center gap-3">
                      <button
                        className="h-7 w-7 rounded border border-[#ddd] bg-white"
                        onClick={() =>
                          onQuantityChange(item.id, item.quantity - 1)
                        }
                        aria-label={`Decrease ${item.name} quantity`}
                      >
                        -
                      </button>

                      <span className="min-w-[15px] text-center text-sm">
                        {item.quantity}
                      </span>

                      <button
                        className="h-7 w-7 rounded border border-[#ddd] bg-white"
                        onClick={() =>
                          onQuantityChange(item.id, item.quantity + 1)
                        }
                        aria-label={`Increase ${item.name} quantity`}
                      >
                        +
                      </button>
                    </div>

                    <button
                      className="text-xs text-[#888] underline"
                      onClick={() => onRemove(item.id)}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="border-t border-[#eee] pt-5">
              <div className="mb-[10px] flex items-center justify-between text-[17px]">
                <span>Subtotal</span>
                <strong>${subtotal.toFixed(2)}</strong>
              </div>

              <p className="mb-5 text-xs text-[#888]">
                Shipping and taxes calculated at checkout.
              </p>

              <button className="w-full rounded border border-[#222] bg-[#222] p-[14px] text-sm font-semibold text-white">
                Proceed to Checkout
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  )
}

export default Cart