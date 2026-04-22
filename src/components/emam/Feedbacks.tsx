import Image from "next/image"
import w1 from '@/src/assets/w1.png'
import w2 from '@/src/assets/w2.png'
import w3 from '@/src/assets/w3.png'
import star from '@/src/assets/icon/Star.png'
// data/cards.ts
// data/cards.ts

export type CardType = {
  id: number;
  name: string;
  role: string;
  image: string;
  rating: number;
  description: string;
};

export const cards: CardType[] = [
  {
    id: 1,
    name: "Emma Charlotte",
    role: "Singer",
    image: "/images/user1.jpg",
    rating: 5,
    description:
      "There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain",
  },
  {
    id: 2,
    name: "John Doe",
    role: "Developer",
    image: "/images/user2.jpg",
    rating: 4,
    description:
      "Coding is not just code, that is a live thing to serve everyone!",
  },
  {
    id: 3,
    name: "Sarah Smith",
    role: "Designer",
    image: "/images/user3.jpg",
    rating: 5,
    description:
      "Design is intelligence made visible.",
  },
];
const Feedbacks = ({ card }: { card: CardType }) => {
    

  return (
   <section className="pb-[150px]">
    <div className="container">
        <div className="text-center flex items-center justify-center">
          <div>
            <h3 className=' font-bold text-2xl uppercase text-[#FE8935]'>Feedbacks</h3>
            <h1 className='font-bold text-5xl mt-8'>Our Customer Thoughts</h1>
          </div>
        </div>

        <div className="flex justify-between mt-[112px] ">
            {/* <div className="bg-[#D9D9D9] hover:bg-[#fbc089d9] hover:rounded-tl-[50px] hover:rounded-br-[50px] flex items-center justify-center text-center rounded-tr-[50px] rounded-bl-[50px] rounded-bl-[50px] linear ease-in-out duration-200  cursor-pointer">
                <div className="py-[60px] px-4.5">
                    <div>
                        <Image src={w1} alt="image" className="mx-auto"/>
                        <h3 className="font-semibold text-[20px] mt-2.5">Emma Charlotte</h3>
                        <p>Singer</p>
                    </div>
                    <div className="flex items-center justify-center  mt-11">
                        <div className="flex gap-2.5">
                            <Image src={star} alt="image"/>
                            <Image src={star} alt="image"/>
                            <Image src={star} alt="image"/>
                            <Image src={star} alt="image"/>
                            <Image src={star} alt="image"/>
                        </div>
                    </div>
                        <p className="w-[382px] text-[#707070] mt-2.5 font-normal text-[20px]">There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain</p>
                </div>
            </div> */}
            <div className="bg-gray-200 rounded-3xl p-6 text-center max-w-sm mx-auto">
      
      <div className="flex justify-center mb-4">
        <Image
          src={card.image}
          alt={card.name}
          width={80}
          height={80}
          className="rounded-xl"
        />
      </div>

      <h2 className="text-lg font-semibold">{card.name}</h2>
      <p className="text-gray-500 text-sm mb-3">{card.role}</p>

      <div className="flex justify-center gap-1 mb-4 text-orange-400">
        {Array.from({ length: card.rating }).map((_, i) => (
          <span key={i}>★</span>
        ))}
      </div>

      <p className="text-gray-600 text-sm">{card.description}</p>
            </div>
            <div className="bg-[#D9D9D9] hover:bg-[#fbc089d9] hover:rounded-tl-[50px] rounded-tl-[50px] hover:rounded-br-[50px] flex items-center justify-center text-center rounded-tr-[50px] rounded-bl-[50px] rounded-bl-[50px] linear ease-in-out duration-200 cursor-pointer">
                <div className="py-[60px] px-4.5">
                    <div>
                        <Image src={w2} alt="image" className="mx-auto"/>
                        <h3 className="font-semibold text-[20px] mt-2.5">Isabella pery</h3>
                        <p>Singer</p>
                    </div>
                    <div className="flex items-center justify-center  mt-11">
                        <div className="flex gap-2.5">
                            <Image src={star} alt="image"/>
                            <Image src={star} alt="image"/>
                            <Image src={star} alt="image"/>
                            <Image src={star} alt="image"/>
                            <Image src={star} alt="image"/>
                        </div>
                    </div>
                        <p className="w-[382px] text-[#707070] mt-2.5 font-normal text-[20px]">There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain</p>
                </div>
            </div>
            <div className="bg-[#D9D9D9] hover:bg-[#fbc089d9] hover:rounded-tr-[50px] hover:rounded-br-[50px] flex items-center justify-center text-center rounded-tl-[50px] rounded-bl-[50px] rounded-bl-[50px] linear ease-in-out duration-200 cursor-pointer">
                <div className="py-[60px] px-4.5">
                    <div>
                        <Image src={w3} alt="image" className="mx-auto"/>
                        <h3 className="font-semibold text-[20px] mt-2.5">elia Sophia</h3>
                        <p>Singer</p>
                    </div>
                    <div className="flex items-center justify-center  mt-11">
                        <div className="flex gap-2.5">
                            <Image src={star} alt="image"/>
                            <Image src={star} alt="image"/>
                            <Image src={star} alt="image"/>
                            <Image src={star} alt="image"/>
                            <Image src={star} alt="image"/>
                        </div>
                    </div>
                        <p className="w-[382px] text-[#707070] mt-2.5 font-normal text-[20px]">There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain</p>
                </div>
            </div>
        </div>
    </div>
   </section>
  )
}

export default Feedbacks
