import React from "react";
import { Route, Routes } from "react-router-dom";
import Main from "../main/main";
import Footer from "../footer/footer";
import Card from "../card/card";
import Card1 from "../card1/card1";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Main />} />
      </Routes>
      <Card />
      <Card1 />
      <Footer />
    </>
  );
}

export default App;
