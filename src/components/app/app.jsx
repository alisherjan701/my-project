import React from "react";
import { Route, Routes } from "react-router-dom";
import Main from "../main/main";
import Footer from "../footer/footer";
import Navbar from "../navbar/navbar";
import Card from "../card/card";
import Cards from "../cards/cards";


function App() {
  return (
    <div className="w-full ">
      <Navbar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/cards" element={<Card />} />
        <Route path="/card" element={<Cards />} />
        <Route path="/catalog" element={<Cards/>}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
