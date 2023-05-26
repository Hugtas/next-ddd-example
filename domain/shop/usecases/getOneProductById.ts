import { ProductRepositoryImpl } from "@/infrastructure/shop/repositories/productRepositoryImpl";
import { ProductRepository } from "../repositories/productRepository";
import { Product } from "../entities/product";

interface GetOneProductByIdParams {
  id: String;
}

export class GetOneProductById {
  // Replace with injection in the future
  productRepository: ProductRepository = new ProductRepositoryImpl();
  constructor() {}

  async execute({ id }: GetOneProductByIdParams): Promise<Product> {
    // Params validation (Input)
    if (!id) {
      throw new Error("Product id is required");
    }
    // Business logic
    const product = await this.productRepository.getOneProductById(id);
    if (!product) {
      throw new Error("Product not found");
    }

    // Return value (Output)
    return product;
  }
}
