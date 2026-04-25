import { StaticImageData } from "next/image";

export interface ProductType {
	id: number;
	image: StaticImageData;
	title: string;
	price: string;
  category: string
}

// export interface ApiResponse<T> {
//   data: T;
// }