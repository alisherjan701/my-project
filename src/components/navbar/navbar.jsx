import React, { useState } from "react";
import { Link } from "react-router-dom";
import {  ShoppingBag, Menu, X } from "lucide-react";
import RegisterModal from "../../pages/login/login";
import { navLinks } from "../../constants";


function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showRegister, setShowRegister] = useState(false);
  const [formData, setFormData] = useState({ name: "", surname: "", email: "", phone: "" });

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = () => {
    console.log("Yuborilgan ma'lumotlar:", formData);
    setShowRegister(false);
  };

  const setLanguage = (lang) => {
    localStorage.setItem("lang", lang);
    window.location.reload();
  };

  return (
    <>
      <nav className="w-full bg-[#C2EFD4] px-4 py-3 shadow relative">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Link to="/">
            <h1 className="text-[#224F34] font-bold text-2xl md:text-3xl">
              GulchehraDrawer
            </h1>
          </Link>

          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((nav) => (
              <Link
                to={nav.path}
                key={nav.slug}
                className="text-[#224F34] text-lg font-semibold hover:text-gray-600 hover:underline"
              >
                {nav.name}
              </Link>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-6 relative">
           

            <Link to="/card">
              <ShoppingBag className="text-green-800 cursor-pointer w-6 h-6" />
            </Link>

            <button
              onClick={() => setShowRegister(true)}
              className="text-sm font-semibold  mr-[80px] border-green-900 px-4 py-2 rounded text-[#224F34] hover:bg-green-900 hover:text-white transition"
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
            {navLinks.map((nav) => (
              <Link
                to={nav.path}
                key={nav.path}
                className="block text-[#224F34] text-base font-semibold hover:text-gray-600"
                onClick={() => setMenuOpen(false)}
              >
                {nav.name}
              </Link>
            ))}

            <div className="flex items-center gap-4 pt-4 border-t border-gray-200">
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

      <RegisterModal
        show={showRegister}
        onClose={() => setShowRegister(false)}
        onSubmit={handleSubmit}
        formData={formData}
        handleChange={handleChange}
      />
    </>
  );
}

export default Navbar;
