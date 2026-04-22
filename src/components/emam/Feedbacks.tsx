import Image, { StaticImageData } from "next/image"
import star from '@/src/assets/icon/Star.png'
import React from "react"
import CardFeed from "./CardFeed"
import w1 from '@/src/assets/w1.png'
import w2 from '@/src/assets/w2.png'
import w3 from '@/src/assets/w3.png'

interface Feedback {
  id: number;
  name: string;
  role: string;
  image:  StaticImageData ,
  rating: number;
  description: string;
};

export const cards: Feedback[] = [
  {
    id: 1,
    name: "Emma Charlotte",
    role: "Singer",
    image: w1 ,
    rating: 5,
    description:
      "There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain",
  },
  {
    id: 2,
    name: "John Doe",
    role: "Developer",
    image: w2,
    rating: 4,
    description:
      "Coding is not just code, that is a live thing to serve everyone!",
  },
  {
    id: 3,
    name: "Sarah Smith",
    role: "Designer",
    image: w3,
    rating: 5,
    description:
      "Design is intelligence made visible.",
  },
];
const Feedbacks = () => {
    

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
            {
             cards.map((item) => (
              <CardFeed 
                key={String(item.id)}
                title={item.name}
                head={item.role}
                paragraph={item.description}
                img={item.image}
                type={undefined}
                props={undefined}
              />
            ))
            }
        </div>
    </div>
   </section>
  )
}

export default Feedbacks
