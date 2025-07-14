import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ShoppingBag, Menu, X } from "lucide-react";
import { Link as ScrollLink } from "react-scroll";
import { navLinks } from "../../constants";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <nav className="sticky top-0 z-50 w-full bg-[#C2EFD4] px-4 py-3 shadow-lg">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Link to="/">
            <h1 className="text-[#224F34] font-bold text-2xl md:text-3xl">GulchehraDrawer</h1>
          </Link>

          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((nav) =>
              nav.scroll ? (
                <ScrollLink
                  key={nav.slug}
                  to={nav.path}
                  smooth={true}
                  duration={700}
                  offset={-80}
                  className="text-[#224F34] text-lg font-semibold hover:text-gray-600 hover:underline cursor-pointer"
                >
                  {nav.name}
                </ScrollLink>
              ) : (
                <Link
                  to={nav.path}
                  key={nav.slug}
                  className="text-[#224F34] text-lg font-semibold hover:text-gray-600 hover:underline"
                >
                  {nav.name}
                </Link>
              )
            )}
          </div>

          <div className="hidden md:flex items-center gap-6">
            <Link to="/catalog">
              <ShoppingBag className="text-green-800 cursor-pointer w-6 h-6" />
            </Link>
            <Link to="/admin">
              <button className="text-sm font-semibold border-green-900 px-4 py-2 rounded text-[#224F34] hover:bg-green-900 hover:text-white transition">
                Admin Panelga Kirish
              </button>
            </Link>
          </div>

          <div className="md:hidden">
            <button onClick={() => setMenuOpen(!menuOpen)}>
              {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
