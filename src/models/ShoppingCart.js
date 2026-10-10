import CartItem from "./CartItem";

class ShoppingCart {
  constructor() {
    this.items = [];
  }

  addProduct(product) {
    const existingItem = this.items.find(
      item => item.product.id === product.id
    );

    if (existingItem) {
      existingItem.increaseQuantity();
    } else {
      this.items.push(new CartItem(product));
    }
  }

  removeProduct(productId) {
    this.items = this.items.filter(
      item => item.product.id !== productId
    );
  }

  changeQuantity(productId, quantity) {
    if (quantity <= 0) {
      this.removeProduct(productId);
      return;
    }

    const item = this.items.find(
      item => item.product.id === productId
    );

    if (item) {
      item.quantity = quantity;
    }
  }

  clearCart() {
    this.items = [];
  }

  getItemCount() {
    return this.items.reduce(
      (total, item) => total + item.quantity,
      0
    );
  }

  getTotal() {
    return this.items.reduce(
      (total, item) => total + item.getSubtotal(),
      0
    );
  }
}

export default ShoppingCart;