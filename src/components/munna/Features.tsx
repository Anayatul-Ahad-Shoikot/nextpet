type Feature = {
  title: string;
  desc: string;
};

const features: Feature[] = [
  {
    title: "Gift Card",
    desc: "Don’t know their size or favorite color? Give them a gift card."
  },
  {
    title: "14 Days Returns",
    desc: "You have 14 days to return the item. No questions asked!"
  },
  {
    title: "Free Delivery",
    desc: "Free shipping on orders over $100. Delivered in 1-2 days."
  }
];

const Features = () => {
  return (
    <div className="grid md:grid-cols-3 gap-6 px-6 py-10 bg-gray-100">
      {features.map((f, i) => (
        <div
          key={i}
          className="bg-[#e8d9b5] p-6 rounded-lg shadow-sm"
        >
          <h3 className="text-lg font-semibold mb-2">{f.title}</h3>
          <p className="text-sm text-gray-600">{f.desc}</p>
        </div>
      ))}
    </div>
  );
};

export default Features;