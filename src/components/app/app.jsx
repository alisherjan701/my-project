import React from "react";
import { Route, Routes } from "react-router-dom";
import Main from "../main/main";
import Footer from "../footer/footer";
import Navbar from "../navbar/navbar";
import Hero from "../hero/hero";
import Card from "../card/card";
import Cards from "../cards/cards";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/card" element={<Card />} />
        <Route path="/card" element={<Cards />} />
      </Routes>
      <Cards />
      <Footer />
    </>
  );
}

export default App;
