import Image from "next/image";

type Feature = {
    title: string;
    desc: string;
    image: string;
};

const features: Feature[] = [
    {
        title: "Gift Card",
        desc: "Don’t know their size or favorite color? No need to worry give them a Gift card and let them decide.",
        image: "/icon/giftcard.png",
    },
    {
        title: "14 Days Returns",
        desc: "You have 14 days to change your mind and return the item. No questions asked!",
        image: "/icon/delivery.png",
    },
    {
        title: "Free Delivery",
        desc: "If you purchase over 100 dollars, you will get free delivery on your order.",

        image: "/icon/delivery.png",
    },
];
const Features = () => {
    return (
        <section className="bg-gray-100 py-16 px-6">

            {/* 🔶 Top Feature Cards */}
            <div className="container mx-auto grid md:grid-cols-3 gap-9">
                {features.map((item, i) => (
                    <div
                        key={i}
                        className="bg-[#e8d9b5] rounded-lg p-8 flex gap-4 items-start"
                    >
                        {/* Icon Placeholder */}
                        {/* ✅ Image */}
                        <Image
                            src={item.image}
                            alt=""
                            width={72}
                            height={72}
                            className="pt-10 pl-7"
                        />

                        <div>
                            <h3 className="font-semibold text-lg pt-10 pl-7 mb-2">
                                {item.title}
                            </h3>
                            <p className="text-sm text-gray-600 pl-6 pt-3 pb-10  leading-relaxed">
                                {item.desc}
                            </p>
                        </div>
                    </div>
                ))}
            </div>

            {/* 🟢 Image Grid */}
            <div className="container mx-auto grid md:grid-cols-3 gap-6 mt-30">

                <div className="overflow-hidden rounded-lg">
                    <Image
                        src="/icon/dog.png"
                        alt="dog"
                        width={450}
                        height={300}
                        className="w-full h-[260px] object-cover hover:scale-105 transition duration-300"
                    />
                </div>

                <div className="relative overflow-hidden rounded-lg">
                    <Image
                        src="/icon/dog.png"
                        alt="food"
                        width={400}
                        height={300}
                        className="w-full h-[260px] object-cover"
                    />

                    {/* Instagram Overlay */}
                    <div className="absolute inset-0 border-2 border-white flex items-center justify-center">
                        <span className="text-white text-2xl">📷</span>
                    </div>
                </div>

                <div className="overflow-hidden rounded-lg">
                    <Image
                        src="/icon/cat.png"
                        alt="cat"
                        width={400}
                        height={300}
                        className="w-full h-[260px] object-cover hover:scale-105 transition duration-300"
                    />
                </div>

            </div>
        </section>
    );
};

export default Features;