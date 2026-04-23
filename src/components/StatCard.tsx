import Image from "next/image";

type StatCardProps = {
    img: string;
    title: string;
    info: string;
};

const StatCard = ({ img, title, info }: StatCardProps) => {
    return (
        <div className="flex items-center justify-center bg-[linear-gradient(90deg,var(--color-primary-yellow)_2.47%,color-mix(in_srgb,var(--color-primary-orange)_10%,transparent)_100%)] rounded-[15px] py-[7px] pl-[8px] pr-[4px]">
            <div className="py-[40px] px-[32px] flex flex-col items-center justify-center gap-7.5 bg-white rounded-[15px] w-[220px] h-full">
                <div className="flex items-center justify-center size-[80px] rounded-full bg-secondary-peach">
                    <Image src={img} alt={title} width={36} />
                </div>
                <div className="flex flex-col gap-3 items-center justify-center">
                    <h1 className="text-[36px] text-text-black font-[900] text-center">
                        {title}
                    </h1>
                    <p className="text-[24px] text-text-black font-[400] text-center">
                        {info}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default StatCard;
