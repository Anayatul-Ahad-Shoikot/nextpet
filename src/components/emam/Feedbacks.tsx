import Image, { StaticImageData } from "next/image"
import w1 from '@/src/assets/images/w1.png'
import w2 from '@/src/assets/images/w2.png'
import w3 from '@/src/assets/images/w3.png'
import star from '@/src/assets/icons/Star.png'
import CardFeed from "./CardFeed"


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

        <div className="flex justify-between flex-wrap gap-5 mt-[112px] ">
            <CardFeed
              className="rounded-tr-[50px] rounded-bl-[50px] rounded-bl-[50px]"
              name="Emma Charlotte"
              head="Singer"
              paragraph="There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain"
              img={w1}
            />
            <CardFeed
              className="text-center rounded-tr-[50px] rounded-bl-[50px] rounded-bl-[50px]  rounded-tl-[50px]  "
              name="Isabella pery"
              head="Singer"
              paragraph="There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain"
              img={w2}
            />
            <CardFeed
              className="rounded-tl-[50px] rounded-tr-[0px]!  hover:rounded-tr-[50px]! rounded-bl-[50px] rounded-bl-[50px] "
              name="Emma Charlotte"
              head="Singer"
              paragraph="There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain"
              img={w3}
            />
        </div>
    </div>
   </section>
  )
}

export default Feedbacks;
