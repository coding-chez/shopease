class Product {
  constructor(id, name, category, price, image, description) {
    this.id = id;
    this.name = name;
    this.category = category;
    this.price = price;
    this.image = image;
    this.description = description;
  }

  getDetails() {
    return {
      id: this.id,
      name: this.name,
      category: this.category,
      price: this.price,
      image: this.image,
      description: this.description
    };
  }
}

export default Product;