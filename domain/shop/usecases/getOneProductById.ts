import { ProductRepositoryImpl } from "@/infrastructure/shop/repositories/productRepositoryImpl";
import { ProductRepository } from "../repositories/productRepository";
import { Product } from "../entities/product";

interface GetOneProductByIdParams {
  id: string;
}

export class GetOneProductById {
  // Replace with injection in the future
  productRepository: ProductRepository = new ProductRepositoryImpl();
  constructor() {}

  async execute(params: GetOneProductByIdParams): Promise<Product> {
    // Params validation (Input)
    if (!params.id) {
      throw new Error("Product id is required");
    }
    // Business logic
    const product = await this.productRepository.getOneProductById(params.id);
    if (!product) {
      throw new Error("Product not found");
    }
    if (!product.hasStock()) {
      throw new Error("Product out of stock");
    }
    if (!product.isValid()) {
      throw new Error("Product is not valid");
    }

    // Return value (Output)
    return product;
  }
}
