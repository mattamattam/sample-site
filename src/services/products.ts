import { Product } from "../../lib/models/Product";

var baseUrl = import.meta.env.VITE_INVENTORY_API_URL;

export const getProducts = async (): Promise<Product[]> => {
  const response = await fetch(`${baseUrl}/api/products`);
  const data = await response.json();
  return data;
};

export const getProductById = async (id: string): Promise<Product> => {
  const response = await fetch(`${baseUrl}/api/products/${id}`);
  const data = await response.json();
  return data;
};
