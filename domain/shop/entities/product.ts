export class Product {
  constructor(
    public readonly id: string,
    public readonly name: string,
    public readonly description: string,
    public readonly price: number,
    public readonly categoryId: string,
    public readonly availableStock: number
  ) {}

  // Business methods
  hasStock(): boolean {
    return this.availableStock > 0;
  }

  // Validation methods
  isValid(): boolean {
    return (
      this.name.length > 0 &&
      this.description.length > 0 &&
      this.price > 0 &&
      this.categoryId.length > 0 &&
      this.availableStock >= 0
    );
  }

  // Immutability helpers methods
  copyWith({
    id = this.id,
    name = this.name,
    description = this.description,
    price = this.price,
    categoryId: category = this.categoryId,
    availableStock = this.availableStock,
  }: Partial<Product>): Product {
    return new Product(id, name, description, price, category, availableStock);
  }

  // Equality methods
  equals(other: Product): boolean {
    return (
      this.id === other.id &&
      this.name === other.name &&
      this.description === other.description &&
      this.price === other.price &&
      this.categoryId === other.categoryId &&
      this.availableStock === other.availableStock
    );
  }

  // Factory methods
  static newEmpty(): Product {
    // Todo add UUID
    return new Product("1", "", "", 0, "", 0);
  }
}
