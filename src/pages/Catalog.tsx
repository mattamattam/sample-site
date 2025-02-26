import { JSX, useEffect, useState } from "react";
import { Product } from "../../lib/models/Product"; // Adjust the import path as necessary
import { InventoryType } from "../../lib/models/inventoryType";
import { getProducts } from "../services/products";
import { Link } from "react-router-dom";

const Catalog = () => {
  const [currentType, setCurrentType] = useState<InventoryType | null>(null);
  const [products, setProducts] = useState<Product[] | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      const products = await getProducts();
      setProducts(products);
    };

    fetchProducts();
  }, []);

  const displayProduct = (product: Product): JSX.Element => {
    return (
      <p key={product.id}>
        <Link to={{ pathname: `/product/${product.id}` }}>{product.name}</Link>{" "}
        - {product.price}
      </p>
    );
  };

  return (
    <>
      <div style={{ display: "flex" }}>
        <div style={{ padding: "5px" }}>categories:</div>
        {[...new Set(products?.map((item) => item.type))].map((item) => (
          <div key={item} style={{ padding: "5px" }}>
            <a onClick={() => setCurrentType(item)} href="javascript:void(0)">
              {item}
            </a>
          </div>
        ))}
      </div>

      <div>
        {products
          ?.filter((x) => x.type === currentType)
          .map((item) => displayProduct(item))}
      </div>
    </>
  );
};

export default Catalog;
