import { ProductDto } from "../dtos/productDto";

interface ProductLocalDataSource {
  getOneProductByIdFromCache(id: string): ProductDto;
  saveOneProductInCache(product: ProductDto): void;
  clearCache(): void;
}

export class ProductLocalDataSourceImpl implements ProductLocalDataSource {
  clearCache(): void {
    // Clear the cache
    localStorage.clear();
  }
  getOneProductByIdFromCache(id: string): ProductDto {
    // Fetch the product
    const jsonString = localStorage.getItem(id);
    if (!jsonString) {
      throw new Error("Product not found in cache");
    }
    const product = ProductDto.fromJson(jsonString);
    return product;
  }

  saveOneProductInCache(product: ProductDto): void {
    // Save the product using its id as key
    const jsonString = product.toJson();
    localStorage.setItem(product.id, jsonString);
  }
}
