import React from "react";
import { Route, Routes } from "react-router-dom";
import Main from "../main/main";
import Footer from "../footer/footer";
import Navbar from "../navbar/navbar";
import Card from "../card/card";
import Cards from "../cards/cards";
import Catalog from "../../pages/catalog/catalog/catalog";
import Shop from "../../pages/shop/shop/shop";
import Aloqa from "../../pages/aloqa/aloqa";


function App() {
  return (
    <div className="w-full ">
      <Navbar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/cards" element={<Card />} />
        <Route path="/catalog" element={<Catalog/>}/>
        <Route path="/shop" element={<Shop/>}/>
        <Route path="/contact" element={<Aloqa/>}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
