import { ProductDto } from "../dtos/productDto";

interface ProductRemoteDataSource {
  getOneProductById(id: string): Promise<ProductDto>;
}

export class ProductRemoteDataSourceImpl implements ProductRemoteDataSource {
  async getOneProductById(id: string): Promise<ProductDto> {
    // Simulate a remote call (normally using fetch or axios with id as param)
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const product = new ProductDto(
          "1",
          "Magic Sneakers",
          "The best shoes for your feet ! (and your wallet)",
          45000,
          "1",
          8
        );
        resolve(product);
      }, 1000);
    });
  }
}
