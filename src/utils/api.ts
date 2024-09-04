import { Product } from '../types';

export const fetchProductData = async (page: number = 4, limit: number = 14): Promise<Product[]> => {
  try {
    const skip = (page - 1) * limit; // Calculate the number of items to skip based on the current page and limit
    const response = await fetch(`https://dummyjson.com/products?limit=${limit}&skip=${skip}`);

    if (!response.ok) {
      throw new Error('Failed to fetch Product data');
    }

    const data = await response.json();
    return data.products as Product[]; // Adjust this line based on the actual data structure returned by the API
  } catch (error) {
    throw new Error(`An error occurred: ${(error as Error).message}`);
  }
};
