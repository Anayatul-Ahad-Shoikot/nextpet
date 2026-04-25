import ProductCard from "./ProductCard";
import { StaticImageData } from "next/image";
import cate_food_1 from "@/src/assets/images/cat_food_1.png";
import cat_food_2 from "@/src/assets/images/cat_food_2.png";
import cat_food_3 from "@/src/assets/images/cat_food_3.png";
import cat_food_4 from "@/src/assets/images/cat_food_4.png";
import cat_food_5 from "@/src/assets/images/cat_food_5.png";

interface arrival {
  id: number;
  image: StaticImageData;
  title: string;
  price: string;
}

const NewArrivals = () => {
  const ArrivalsProduct: arrival[] = [
    {
      id: 1,
      image: cat_food_2,
      title: "Cat  Food Royal",
      price: "$10.99",
    },
    {
      id: 2,
      image: cat_food_3,
      title: "Cat  Food Royal",
      price: "$10.99",
    },
    {
      id: 3,
      image: cat_food_4,
      title: "Cat  Food Royal",
      price: "$10.99",
    },
    {
      id: 4,
      image: cat_food_5,
      title: "Cat  Food Royal",
      price: "$10.99",
    },
  ];

  return (
    <section>
      <div className="py-[60px] md:py-[100px] bg-[#FFF9EB]">
        <div className="container px-4 md:px-6">
          <h2 className="text-[28px] sm:text-[36px] md:text-[48px] font-bold text-black text-center">
            New Arrivals
          </h2>
          <div className="pt-[30px] md:pt-[50px] grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-[592px_1fr] gap-[30px] xl:gap-[76px] justify-between">
            <div>
              <ProductCard
                img={cate_food_1}
                price="$10.99"
                sale={true}
                title="Cat  Food Royal"
              />
              <div className="pt-[30px] md:pt-[50px] flex items-center gap-[10px] sm:gap-[19px] flex-wrap">
                <CommonDesign count={24} text="Days" />
                <Clone />
                <CommonDesign count={21} text="Hours" />
                <Clone />
                <CommonDesign count={39} text="Mins" />
                <Clone />
                <CommonDesign count={48} text="Secs" />
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 items-center gap-x-[30px] sm:gap-x-[50px] lg:gap-x-[10px] xl:gap-x-[76px] gap-y-5 md:gap-y-7">
              {ArrivalsProduct.map((item) => (
                <ProductCard
                  img={item.image}
                  price={item.price}
                  sale={false}
                  title={item.title}
                  key={item.id}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const CommonDesign = ({ count, text }: { count: number; text: string }) => {
  return (
    <div className="flex flex-col items-center">
      <div className="size-[55px] sm:size-[65px] md:size-[73px] bg-white grid place-items-center rounded-[3px]">
        <span className="text-[18px] sm:text-[20px] md:text-[24px] font-bold text-black">
          {count}
        </span>
      </div>
      <span className="text-[14px] sm:text-[16px] md:text-[20px] text-[#707070] pt-[5px]">
        {text}
      </span>
    </div>
  );
};

const Clone = () => {
  return (
    <div className="flex flex-col gap-1 translate-y-[-60%]">
      <span className="size-[7px] sm:size-[9px] bg-[#FE8935]"></span>
      <span className="size-[7px] sm:size-[9px] bg-[#FE8935]"></span>
    </div>
  );
};

export default NewArrivals;
