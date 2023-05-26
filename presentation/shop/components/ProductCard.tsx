import { ProductModel } from "@/application/shop/models/productModel";

interface ProductCardProps {
  model: ProductModel;
}

const ProductCard: React.FC<ProductCardProps> = ({ model }) => {
  return (
    <div className="block h-min max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        {model.name}
      </h5>
      <p className="block font-normal text-gray-700 dark:text-gray-400">
        {model.description}
      </p>
      <p className="block font-normal text-gray-700 dark:text-gray-400">
        {model.price}€
      </p>
      <p className="block font-normal text-gray-700 dark:text-gray-400">
        In Stock : {model.availableStock}
      </p>
    </div>
  );
};

export default ProductCard;
