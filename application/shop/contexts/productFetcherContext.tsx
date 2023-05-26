import { GetOneProductById } from "@/domain/shop/usecases/getOneProductById";
import { createContext, useState } from "react";
import { ProductModel } from "../models/productModel";

export enum ProductFetcherState {
  INITIAL,
  LOADING,
  SUCCESS,
  ERROR,
}

const ProductFetcherContext = createContext({
  product: null as ProductModel | null,
  state: ProductFetcherState.INITIAL,
  getProductById: (id: String) => {},
});

export const ProductFetcherProvider: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const [product, setProduct] = useState<ProductModel | null>(null);
  const [state, setState] = useState(ProductFetcherState.INITIAL);

  const getProductById = async (id: String) => {
    console.log("getProductById");
    setState(ProductFetcherState.LOADING);
    try {
      const usecase = new GetOneProductById();
      const product = await usecase.execute({ id });

      const productModel = ProductModel.fromDomain(product);
      setProduct(productModel);
      setState(ProductFetcherState.SUCCESS);
    } catch (error) {
      console.log(error);
      setState(ProductFetcherState.ERROR);
    }
  };

  return (
    <ProductFetcherContext.Provider
      value={{
        product,
        state,
        getProductById,
      }}
    >
      {children}
    </ProductFetcherContext.Provider>
  );
};

export default ProductFetcherContext;
