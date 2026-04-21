import Image, { StaticImageData } from "next/image";
import { FaStar } from "react-icons/fa";

const ProductCard = ({
  img,
  title,
  price,
}: {
  img: StaticImageData;
  title: string;
  price: string;
}) => {
  return (
    <div className="bg-white px-[11px] pt-[11px] pb-[29px] rounded-[9px]">
      <div className="w-full h-[309px] bg-linear-to-tl from-[#fe89355b] via-[#fec53569] to-[#D9D9D9] grid place-items-center rounded-[9px]">
        <Image loading="eager" src={img} alt="image" />
      </div>
      <div className="pt-[15px]">
        <div className="pb-[30px] flex items-center gap-3 justify-between">
          <p className="text-[20px] font-bold text-black">{title}</p>
          <ul className="flex items-center gap-0.5">
            <li>
              <FaStar className="text-[#FEC435]" />
            </li>
            <li>
              <FaStar className="text-[#FEC435]" />
            </li>
            <li>
              <FaStar className="text-[#FEC435]" />
            </li>
            <li>
              <FaStar className="text-[#FEC435]" />
            </li>
            <li>
              <FaStar className="text-[#FEC435]" />
            </li>
          </ul>
        </div>
        <div className="flex items-center gap-3 justify-between">
          <button className="py-[6px] px-[21px] cursor-pointer rounded-full bg-linear-to-l from-[#FEC435] to-[#FE8935] text-[18px] font-semibold text-black">
            Add to cart
          </button>
          <p className="text-[20px] font-bold text-black">{price}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
