import { FaFacebookF, FaTwitter, FaInstagram, FaPinterestP, FaYoutube } from "react-icons/fa";
import { HiOutlineLocationMarker, HiOutlineMail } from "react-icons/hi";
import { FiPhone } from "react-icons/fi";

const Footer = () => {
  return (
    <footer className="bg-[#FEC435] pt-30 pb-6 px-6">

      <div className="container pb-20 mx-auto grid md:grid-cols-5 gap-8">

        {/* 🔹 Logo + Contact */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Poets</h2>

          <div className="space-y-3 text-gray-700 text-sm">
            <p className="flex items-start gap-2">
              <HiOutlineLocationMarker className="text-xl mt-1" />
              1831 Turkey Pen Lane <br /> Holtville, AL 36067
            </p>

            <p className="flex items-center gap-2">
              <FiPhone /> 334-569-8499
            </p>

            <p className="flex items-center gap-2">
              <HiOutlineMail /> email@example.com
            </p>
          </div>
        </div>

        {/* 🔹 Menu */}
        <div>
          <h3 className="font-semibold mb-3 border-b pb-1">QUICK MENU</h3>
          <ul className="space-y-2 text-sm text-gray-700">
            <li>Home</li>
            <li>Shop</li>
            <li>Product</li>
            <li>Blog</li>
          </ul>
        </div>

        {/* 🔹 Account */}
        <div>
          <h3 className="font-semibold mb-3 border-b pb-1">QUICK MENU</h3>
          <ul className="space-y-2 text-sm text-gray-700">
            <li>My Account</li>
            <li>Wishlist</li>
            <li>Checkout</li>
            <li>Support</li>
          </ul>
        </div>

        {/* 🔹 Services */}
        <div>
          <h3 className="font-semibold mb-3 border-b pb-1">OUR SERVICES</h3>
          <ul className="space-y-2 text-sm text-gray-700">
            <li>14 Days Returns</li>
            <li>Gift Card</li>
            <li>Free Delivery</li>
            <li>Payment Method</li>
          </ul>
        </div>

        {/* 🔹 Newsletter */}
        <div>
          <h3 className="font-semibold mb-3 border-b pb-1">NEWSLETTER</h3>
          <p className="text-sm text-gray-700 mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>

          <div className="flex items-center border rounded-full px-4 py-2">
            <input
              type="email"
              placeholder="email@example.com"
              className="bg-transparent outline-none flex-1 text-sm"
            />
            <span className="text-xl">→</span>
          </div>
        </div>

      </div>

      {/* 🔻 Bottom */}
      <div className=" container border-t mt-10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">

        <p className="text-sm text-gray-700">
          Copyright © 2022 Poets Food And Accessories.
        </p>

        {/* Social Icons */}
        <div className="  flex gap-3 ">
          {[FaFacebookF, FaTwitter, FaInstagram, FaPinterestP, FaYoutube].map((Icon, i) => (
            <div
              key={i}
              className="w-10 h-10 flex items-center justify-center border rounded-full hover:bg-black hover:text-white transition"
            >
              <Icon />
            </div>
          ))}
        </div>

      </div>

    </footer>
  );
};

export default Footer;