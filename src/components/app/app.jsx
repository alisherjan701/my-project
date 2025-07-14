import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Main from "../main/main";
import Footer from "../footer/footer";
import Navbar from "../navbar/navbar";
import Card from "../card/card";
import Catalog from "../../pages/catalog/catalog/catalog";
import Shop from "../../pages/shop/shop/shop";
import Looking from "../../admin/looking/looking";
import Deadline from "../../admin/deedline/deedline"
import AdminLayout from "../../admin/adminlayout/adminlayout"; 

function App() {
  const location = useLocation();
  const isAdminRoute = location.pathname.startsWith("/admin");

  return (
    <div className="w-full">
      {!isAdminRoute && <Navbar />}

      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/cards" element={<Card />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/adminlook" element={<Looking />} />

        <Route path="admin" element={<AdminLayout />}>
          <Route path="orders" element={<Looking />} />
          <Route path="dedline" element={<Deadline />} />
          <Route index element={<h1 className="text-3xl font-bold text-center mt-20">Admin bosh sahifa</h1>} />
        </Route>
      </Routes>

      {!isAdminRoute && <Footer />}
    </div>
  );
}

export default App;
