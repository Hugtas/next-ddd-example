import { Product } from "@/domain/shop/entities/product";
import { ProductLocalDataSourceImpl } from "../datasources/productLocalDataSource";
import { ProductRemoteDataSourceImpl } from "../datasources/productRemoteDataSource";
import { ProductRepository } from "@/domain/shop/repositories/productRepository";

export class ProductRepositoryImpl implements ProductRepository {
  // Replace with injection in the future
  productRemoteDataSource = new ProductRemoteDataSourceImpl();
  productLocalDataSource = new ProductLocalDataSourceImpl();
  constructor() {}

  async getOneProductById(id: string): Promise<Product> {
    // Check if product exists in cache
    try {
      const productDto =
        this.productLocalDataSource.getOneProductByIdFromCache(id);
      // Convert to domain
      const product = productDto.toDomain();
      // Return domain
      return product;
    } catch (error) {
      console.log("No product in cache, fetch from remote");
      // Product not found in cache so fetch it from remote
      const productDto = await this.productRemoteDataSource.getOneProductById(
        id
      );
      // Save in cache
      this.productLocalDataSource.saveOneProductInCache(productDto);
      // Convert to domain
      const product = productDto.toDomain();
      // Return domain
      return product;
    }
  }
}
