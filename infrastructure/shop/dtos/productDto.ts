import { Product } from "@/domain/shop/entities/product";

export class ProductDto {
  constructor(
    public readonly id: string,
    public readonly name: string,
    public readonly description: string,
    public readonly price: number,
    public readonly categoryId: string,
    public readonly availableStock: number
  ) {}

  // Domain conversion methods
  toDomain(): Product {
    return new Product(
      this.id,
      this.name,
      this.description,
      this.price,
      this.categoryId,
      this.availableStock
    );
  }

  static fromDomain(product: Product): ProductDto {
    return new ProductDto(
      product.id,
      product.name,
      product.description,
      product.price,
      product.categoryId,
      product.availableStock
    );
  }

  // Json conversion methods
  toJson(): string {
    return JSON.stringify(this);
  }

  static fromJson(json: string): ProductDto {
    const { id, name, description, price, categoryId, availableStock } =
      JSON.parse(json);
    return new ProductDto(
      id,
      name,
      description,
      price,
      categoryId,
      availableStock
    );
  }

  // Immutability helpers methods
  copyWith({
    id = this.id,
    name = this.name,
    description = this.description,
    price = this.price,
    categoryId = this.categoryId,
    availableStock = this.availableStock,
  }: Partial<ProductDto>): ProductDto {
    return new ProductDto(
      id,
      name,
      description,
      price,
      categoryId,
      availableStock
    );
  }

  equals(other: ProductDto): boolean {
    return (
      this.id === other.id &&
      this.name === other.name &&
      this.description === other.description &&
      this.price === other.price &&
      this.categoryId === other.categoryId &&
      this.availableStock === other.availableStock
    );
  }
}
