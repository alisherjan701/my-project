import React from "react";
import { Route, Routes } from "react-router-dom";
import Main from "../main/main";
import Footer from "../footer/footer";
import Navbar from "../navbar/navbar";
import Card from "../card/card";
import Catalog from "../../pages/catalog/catalog/catalog";

function App() {
  return (
    <>
       <Navbar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/cards" element={<Card />} />
        <Route path="/catalog" element={<Catalog />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
