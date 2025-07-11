import React from "react";
import { Route, Routes } from "react-router-dom";
import Main from "../main/main";
import Footer from "../footer/footer";
import Navbar from "../navbar/navbar";
import Hero from "../hero/hero";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Main />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
