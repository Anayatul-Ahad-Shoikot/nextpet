import Image from "next/image"
import w1 from '@/src/assets/w1.png'

const Feedbacks = () => {

  return (
   <section>
    <div className="container">
        <div className="text-center flex items-center justify-center">
          <div>
            <h3 className=' font-bold text-2xl uppercase text-[#FE8935]'>Feedbacks</h3>
            <h1 className='font-bold text-5xl mt-8'>Our Customer Thoughts</h1>
          </div>
        </div>

        <div className="flex ">
            <div className="bg-[#D9D9D9] flex items-center justify-center text-center">
                <div className="py-[60px] px-4.5">
                    <div>
                        <Image src={w1} alt="image" />
                        <h3 className="font-semibold text-[20px]">Emma Charlotte</h3>
                    </div>
                </div>
            </div>
        </div>
    </div>
   </section>
  )
}

export default Feedbacks
