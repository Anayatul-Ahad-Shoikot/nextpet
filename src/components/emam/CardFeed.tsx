import star from '@/src/assets/icon/Star.png'
import { StaticImageData } from 'next/dist/shared/lib/get-img-props'
import Image from 'next/image'

type Props = {
    title: string,
    head: string,
    paragraph:string,
    img:  StaticImageData,
    type: any;
    props: any;
    key: string | null;
}

const CardFeed = ({title , head , paragraph ,img}:Props) => {
  return (
    <div className="bg-[#D9D9D9] hover:bg-[#fbc089d9] hover:rounded-tl-[50px] hover:rounded-br-[50px] flex items-center justify-center text-center rounded-tr-[50px] rounded-bl-[50px] rounded-bl-[50px] linear ease-in-out duration-200  cursor-pointer">
        <div className="py-[60px] px-4.5">
            <div>
                <Image src={img} alt="image" className="mx-auto" width={109} height={91}/>
                <h3 className="font-semibold text-[20px] mt-2.5">{title}</h3>
                <p>{head}</p>
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
                <p className="w-[382px] text-[#707070] mt-2.5 font-normal text-[20px]">{paragraph}</p>
        </div>
    </div>
  )
}

export default CardFeed
