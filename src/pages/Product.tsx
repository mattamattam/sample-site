import { useEffect, useState } from "react";
import { getProductById } from "../services/products";
import { Product as ProductType } from "../../lib/models/Product"; // Adjust the import path as necessary
import { useParams } from "react-router-dom";

const Product = () => {
  const { id } = useParams();

  const [product, setProduct] = useState<ProductType | null>(null);

  useEffect(() => {
    const loadProduct = async () => {
      if (id) {
        const product = await getProductById(id);
        setProduct(product);
      } else {
        setProduct(null);
      }
    };
    loadProduct();
  }, [id]);

  return (
    <>
      {product && (
        <>
          <div>name: {product?.name}</div>
          <div>description: {product?.description}</div>
          <div>price: {product?.price}</div>
        </>
      )}
    </>
  );
};

export default Product;
