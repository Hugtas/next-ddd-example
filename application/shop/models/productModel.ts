import { Product } from "@/domain/shop/entities/product";

export class ProductModel {
  constructor(
    public readonly id: string,
    public readonly name: string,
    public readonly description: string,
    public readonly price: string,
    public readonly categoryId: string,
    public readonly availableStock: string
  ) {}

  // Domain conversion methods
  toDomain(): Product {
    return new Product(
      this.id,
      this.name,
      this.description,
      +this.price * 1000,
      this.categoryId,
      +this.availableStock
    );
  }

  // From domain to model
  static fromDomain(product: Product): ProductModel {
    return new ProductModel(
      product.id,
      product.name,
      product.description,
      (product.price / 1000).toString(),
      product.categoryId,
      product.availableStock.toString()
    );
  }
}
