import React from "react";
import { Routes, Route } from "react-router-dom";
import Looking from "../looking/looking";
import AdminLayout from "../adminlayout/adminlayout";
import Dedline from "../deedline/deedline";

function AdminApp() {
  return (
    <Routes>
        <Route path="/admin" element={<AdminLayout />}/>
      <Route path='/admin/orders' element={<Looking/>} />
        <Route path="/admin/dedline" element={<Dedline />} />
    </Routes>
  );
}

export default AdminApp;
