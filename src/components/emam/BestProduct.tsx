import Image from 'next/image'
import React from 'react'
import kutta from '@/src/assets/kutta.svg'
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
        <div className='flex justify-between items-center'>
          <div>
            <Image 
              src={kutta}
              width={570}
              height={380}
            />
          </div>
          <div>
            <h2 className='font-bold text-4xl'>Beneful Dog Food Pet food Nestlé Purina</h2>
            <p className='text-[#FE8935] text-2xl mt-[15px]'>$56.20</p>
            <p className='font-normal text-[20px] w-[720px] mt-[25px] text-justify'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution. </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default BestProduct
