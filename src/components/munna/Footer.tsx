import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#e8d9b5] text-gray-700 pt-12 pb-6 px-6">
      
      <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-8">

        {/* Logo + Info */}
        <div>
          <h2 className="text-2xl font-bold mb-4">🐾 Pets</h2>
          <p className="text-sm">1831 Turkey Pen Lane</p>
          <p className="text-sm">Hotville, AL 36067</p>
          <p className="text-sm mt-2">📞 334-569-8499</p>
          <p className="text-sm">✉️ email@example.com</p>
        </div>

        {/* Menu */}
        <div>
          <h3 className="font-semibold mb-3">Quick Menu</h3>
          <ul className="space-y-1 text-sm">
            <li>Home</li>
            <li>Shop</li>
            <li>Product</li>
            <li>Blog</li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="font-semibold mb-3">Our Services</h3>
          <ul className="space-y-1 text-sm">
            <li>14 Days Returns</li>
            <li>Gift Card</li>
            <li>Free Delivery</li>
            <li>Payment Method</li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="font-semibold mb-3">Newsletter</h3>
          <p className="text-sm mb-3">
            Subscribe for updates and offers.
          </p>

          <div className="flex border rounded-full overflow-hidden">
            <input
              type="email"
              placeholder="email@example.com"
              className="px-4 py-2 w-full outline-none bg-transparent"
            />
            <button className="px-4 bg-gray-200 hover:bg-gray-300">
              →
            </button>
          </div>
        </div>

      </div>

      {/* Bottom */}
      <div className="text-center text-sm mt-10 border-t pt-4">
        © 2026 Pets Food. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;