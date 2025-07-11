import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Languages, ShoppingBag, Menu, X } from "lucide-react";

const navLinks = [
  { name: "Bosh sahifa", path: "/" },
  { name: "Aloqa", path: "#aloqa" },
];

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showRegister, setShowRegister] = useState(false);
  const [showContact, setShowContact] = useState(false);
  const handleLinkClick = (navName) => {
    if (navName === "Aloqa") {
      setShowContact(true);
      setMenuOpen(false);
    }
  };

  return (
    <>
      <nav className="w-full bg-[#C2EFD4] px-4 py-3">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Link to="/">
            <h1 className="text-[#224F34] font-bold text-2xl md:text-3xl">
              GulchehraDrawer
            </h1>
          </Link>

          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((nav, idx) => (
              <button
                key={idx}
                onClick={() => handleLinkClick(nav.name)}
                className="text-[#224F34] text-lg font-semibold hover:text-gray-600 hover:underline"
              >
                {nav.name}
              </button>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-6">
            <Languages />
            <Link to="/card">
              <ShoppingBag className="text-green-800 cursor-pointer" />
            </Link>
            <button
              onClick={() => setShowRegister(true)}
              className="text-sm font-semibold border border-green-900 px-4 py-2 rounded text-[#224F34] hover:bg-green-900 hover:text-white transition"
            >
              Ro'yhatdan o'tish
            </button>
          </div>

          <div className="md:hidden">
            <button onClick={() => setMenuOpen(!menuOpen)}>
              {menuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {menuOpen && (
          <div className="md:hidden mt-4 space-y-4 bg-white rounded-lg p-4 shadow">
            {navLinks.map((nav, idx) => (
              <button
                key={idx}
                onClick={() => handleLinkClick(nav.name)}
                className="block text-[#224F34] text-base font-semibold hover:text-gray-600"
              >
                {nav.name}
              </button>
            ))}

            <div className="flex items-center gap-4 pt-4 border-t border-gray-200">
              <Languages className="text-green-600" />
              <Link to="/card">
                <ShoppingBag className="text-green-800 cursor-pointer" />
              </Link>
              <button
                onClick={() => {
                  setShowRegister(true);
                  setMenuOpen(false);
                }}
                className="text-sm font-semibold border border-green-900 px-3 py-1 rounded text-[#224F34] hover:bg-green-900 hover:text-white transition"
              >
                Ro'yhatdan o'tish
              </button>
            </div>
          </div>
        )}
      </nav>

      {showRegister && (
        <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-[90%] max-w-md space-y-4">
            <h2 className="text-xl font-bold text-center text-green-800">
              Ro'yhatdan o'tish
            </h2>
            <input
              type="text"
              placeholder="Ism"
              className="w-full border p-2 rounded"
            />
            <input
              type="text"
              placeholder="Familya"
              className="w-full border p-2 rounded"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full border p-2 rounded"
            />
            <input
              type="tel"
              placeholder="Telefon raqam"
              className="w-full border p-2 rounded"
            />
            <div className="flex justify-between gap-3">
              <button
                onClick={() => setShowRegister(false)}
                className="w-full border border-gray-500 py-2 rounded hover:bg-gray-100"
              >
                Bekor qilish
              </button>
              <button className="w-full bg-green-700 text-white py-2 rounded hover:bg-green-800">
                Yuborish
              </button>
            </div>
          </div>
        </div>
      )}

      {showContact && (
        <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-[90%] max-w-md space-y-4">
            <h2 className="text-xl font-bold text-center text-green-800">
              Biz bilan bog'lanish
            </h2>
            <input
              type="text"
              placeholder="Ismingiz"
              className="w-full border p-2 rounded"
            />
            <input
              type="tel"
              placeholder="Telefon raqamingiz"
              className="w-full border p-2 rounded"
            />
            <input
              type="text"
              placeholder="Yashash manzilingiz"
              className="w-full border p-2 rounded"
            />
            <div className="flex justify-between gap-3">
              <button
                onClick={() => setShowContact(false)}
                className="w-full border border-gray-500 py-2 rounded hover:bg-gray-100"
              >
                Bekor qilish
              </button>
              <button className="w-full bg-green-700 text-white py-2 rounded hover:bg-green-800">
                Yuborish bosing
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Navbar;
