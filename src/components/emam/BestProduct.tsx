import Image from 'next/image'
import React from 'react'
import kutta from '@/src/assets/kutta.svg'
import icon from '@/src/assets/icon/Vector.png'

const BestProduct = () => {
  return (
    <section className='py-37.5'>
      <div className='container'>
        <div className="text-center flex items-center justify-center">
          <div>
            <h3 className=' font-bold text-2xl uppercase text-[#FE8935]'>Best Product</h3>
            <h1 className='font-bold text-5xl mt-8'>Deal Of The Week</h1>
          </div>
        </div>
        <div className='flex gap-[120px] items-center mt-[107px]'>
          <div>
            <Image 
              src={kutta}
              width={570}
              height={380}
              alt='image'
            />
          </div>
          <div>
            <h2 className='font-bold text-4xl'>Beneful Dog Food Pet food Nestlé Purina</h2>
            <p className='text-[#FE8935] text-2xl mt-[15px]'>$56.20</p>
            <p className='font-normal text-[20px] w-[720px] mt-[25px] text-[#707070] text-justify'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution. </p>

            <div className="flex mt-11.25  gap-6 text-center">
              <div>
                <h1 className="text-3xl font-bold">24</h1>
                <p className="text-gray-500 mt-1">Days</p>
              </div>
              <span className="text-orange-500 text-5xl font-bold">:</span>
              <div>
                <h1 className="text-3xl font-bold">21</h1>
                <p className="text-gray-500 mt-1">Hours</p>
              </div>
              <span className="text-orange-500 text-5xl font-bold">:</span>
              <div>
                <h1 className="text-3xl font-bold">39</h1>
                <p className="text-gray-500 mt-1">Mins</p>
              </div>
              <span className="text-orange-500 text-5xl font-bold">:</span>
              <div>
                <h1 className="text-3xl font-bold">48</h1>
                <p className="text-gray-500 mt-1">Secs</p>
              </div>
            </div>

            <button  className='flex text-[22px] items-center gap-4 bg-linear-to-r from-orange-300 to-[#f87b22] py-4.5 px-18 rounded-full mt-[63px] text-center'>Shop Now <Image src={icon} alt='image'/> </button>
          </div>

        </div>
      </div>
    </section>
  )
}

export default BestProduct
