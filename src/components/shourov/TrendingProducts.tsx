import Image, { StaticImageData } from "next/image";
import arrow_right from "../../assets/icons/arow_right.svg";
import product_image_one from "@/src/assets/images/product_image_one.png";
import product_image_two from "@/src/assets/images/product_image_two.png";
import product_image_three from "@/src/assets/images/product_image_three.png";
import product_image_four from "@/src/assets/images/product_image_four.png";
import ProductCard from "./ProductCard";

interface productType {
    id: number;
    image: StaticImageData;
    title: string;
    price: string;
}

const TrendingProducts = () => {
    const productInfo: productType[] = [
        {
            id: 1,
            image: product_image_one,
            title: "Dog  Food Royal",
            price: "$10.99",
        },
        {
            id: 2,
            image: product_image_two,
            title: "Dog  Food Royal",
            price: "$10.99",
        },
        {
            id: 3,
            image: product_image_three,
            title: "Dog  Food Royal",
            price: "$10.99",
        },
        {
            id: 4,
            image: product_image_four,
            title: "Dog  Food Royal",
            price: "$10.99",
        },
    ];

    return (
        <section>
            <div className="bg-[#FFF9EB] pt-[50px] pb-[40px] lg:pt-[151px] lg:pb-[75px]">
                <div className="container">
                    <h2 className="text-black font-bold text-[25px] lg:text-[48px] text-center">
                        Trending Products
                    </h2>
                    <div className="pt-[20px] lg:pt-[50px] flex items-center justify-between flex-wrap gap-y-3">
                        <ul className="flex items-center flex-wrap gap-y-2">
                            <li className="pr-[10px] lg:pr-[23px] text-sm sm:text-base lg:text-[24px] font-bold text-[#FE8935]">
                                Dog
                            </li>
                            <li className="px-[10px] lg:px-[23px] text-sm sm:text-base lg:text-[24px] font-bold text-black border-l border-black">
                                Cat
                            </li>
                            <li className="px-[10px] lg:px-[23px] text-sm sm:text-base lg:text-[24px] font-bold text-black border-x border-black">
                                Rabbits
                            </li>
                            <li className="px-[10px] lg:px-[23px] text-sm sm:text-base lg:text-[24px] font-bold text-black">
                                Birds
                            </li>
                        </ul>
                        <button className="cursor-pointer flex items-center gap-2">
                            <span className="text-sm sm:text-base lg:text-[24px] font-semibold text-black">
                                View all
                            </span>
                            <Image
                                src={arrow_right}
                                width={24}
                                height={14}
                                alt="icons"
                            />
                        </button>
                    </div>
                    <div className="pt-[45px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 items-center gap-[30px]">
                        {productInfo.map((item) => (
                            <ProductCard
                                img={item.image}
                                price={item.price}
                                title={item.title}
                                key={item.id}
                                sale={false}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TrendingProducts;
