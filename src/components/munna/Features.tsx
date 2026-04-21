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
            <div className="container mx-auto grid md:grid-cols-3 gap-6">
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
                            
                        />

                        <div>
                            <h3 className="font-semibold text-lg mb-2">
                                {item.title}
                            </h3>
                            <p className="text-sm text-gray-600 leading-relaxed">
                                {item.desc}
                            </p>
                        </div>
                    </div>
                ))}
            </div>

            {/* 🟢 Image Grid */}
            <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6 mt-12">

                <div className="overflow-hidden rounded-lg">
                    <Image
                        src="/dog.jpg"
                        alt="dog"
                        width={400}
                        height={300}
                        className="w-full h-[260px] object-cover hover:scale-105 transition duration-300"
                    />
                </div>

                <div className="relative overflow-hidden rounded-lg">
                    <Image
                        src="/food.jpg"
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
                        src="/public/icon/cat.png"
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