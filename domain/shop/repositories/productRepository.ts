import { Product } from "../entities/product";

export interface ProductRepository {
  getOneProductById(id: String): Promise<Product>;
}
