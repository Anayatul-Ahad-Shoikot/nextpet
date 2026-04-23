import Image, { StaticImageData } from 'next/image';
import dogFood from "@/src/assets/images/dog_food.png"

export interface Food {
  id: number;
  name: string;
  price: number;
  weight: string;
  image: string | StaticImageData;
  rating: number;
  reviews: number;
}

export const product: Food = {
  id: 1,
  name: "Nam Justo Libero Porta Egg",
  price: 10.99,
  weight: "500g",
  image: dogFood,
  rating: 5,
  reviews: 50,
};

const FoodDetails = ({ product }: { product: Food }) => {
    
  return (
    <div className='container grid md:grid-cols-1 grid-cols-2 '>
      <div>
        <Image src={product.image} alt='img' width={30} height={40} />

      </div>
    </div>
  )
}

export default FoodDetails
