type Dimensions = {
  width: number;
  height: number;
  depth: number;
};
export interface Product {
    id: number;
    brand: string;
    title: string;
    category: string;
    discountPercentage: number;
    price: number;
    rating: number;
    stock: number;
    images: string;
    description: string;
    tags: string[];
    dimensions: Dimensions;
  }
  