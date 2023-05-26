"use client";

import { useContext, useEffect } from "react";
import ProductFetcherContext, {
  ProductFetcherState,
} from "@/application/shop/contexts/productFetcherContext";
import LoadingSpinner from "@/presentation/@shared/components/LoadingSpinner";
import ProductCard from "../components/ProductCard";

const ProductDetailPage: React.FC = (props) => {
  const productFetcher = useContext(ProductFetcherContext);

  useEffect(() => {
    if (productFetcher.state === ProductFetcherState.INITIAL) {
      productFetcher.getProductById("1");
    }
  }, [productFetcher.state]);

  return (
    <main className="flex justify-center items-center h-screen flex-col gap-4">
      {productFetcher.state === ProductFetcherState.LOADING ||
      productFetcher.state === ProductFetcherState.INITIAL ? (
        <LoadingSpinner />
      ) : (
        productFetcher.product && <ProductCard model={productFetcher.product} />
      )}
      <button
        onClick={() => {
          localStorage.clear();
        }}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Reset Cache
      </button>
    </main>
  );
};

export default ProductDetailPage;
