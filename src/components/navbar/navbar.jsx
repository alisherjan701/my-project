import React, { useState } from "react";
import { Link } from "react-router-dom";
import { navLinks } from "../../constants/index";
import { Languages, ShoppingBag, Menu, X } from "lucide-react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="w-full bg-[#C2EFD4] px-4 py-3">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link to="/">
          <h1 className="text-[#224F34] font-bold text-2xl md:text-3xl">
            GulchehraDrawer
          </h1>
        </Link>

        {/* Desktop Nav */}
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

        {/* Right Side Icons (desktop) */}
        <div className="hidden md:flex items-center gap-6">
          <Languages />
          <ShoppingBag className="text-green-800" />
          <button className="text-sm font-semibold border border-green-900 px-4 py-2 rounded text-[#224F34] hover:bg-green-900 hover:text-white transition">
            Ro'yhatdan o'tish
          </button>
        </div>

        {/* Mobile Hamburger */}
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

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden mt-4 space-y-4 bg-white rounded-lg p-4 shadow">
          {navLinks.map((nav) => (
            <Link
              to={nav.path}
              key={nav.slug}
              className="block text-[#224F34] text-base font-semibold hover:text-gray-600"
              onClick={() => setMenuOpen(false)}
            >
              {nav.name}
            </Link>
          ))}

          <div className="flex items-center gap-4 pt-4 border-t border-gray-200">
            <Languages className="text-green-600" />
            <ShoppingBag className="text-green-800" />
            <button className="text-sm font-semibold border border-green-900 px-3 py-1 rounded text-[#224F34] hover:bg-green-900 hover:text-white transition">
              Ro'yhatdan o'tish
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
