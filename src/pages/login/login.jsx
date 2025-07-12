// src/components/RegisterModal.jsx
import React from "react";

const RegisterModal = ({ show, onClose, onSubmit, formData, handleChange }) => {
  if (!show) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-[90%] max-w-md space-y-4">
        <h2 className="text-xl font-bold text-center text-green-800">
          Ro'yhatdan o'tish
        </h2>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Ismingiz"
          className="w-full shadow-lg  outline-none p-2 rounded"
        />
        <input
          type="text"
          name="surname"
          value={formData.surname}
          onChange={handleChange}
          placeholder="Familyangiz"
          className="w-full outline-none shadow-lg  p-2 rounded"
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
          className="w-full outline-none shadow-lg p-2 rounded"
        />
        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="Telefon raqamingiz"
          className="w-full outline-none shadow-lg  p-2 rounded"
        />
        <div className="flex justify-between gap-3">
          <button
            onClick={onClose}
            className="w-full border-2 border-green-900 py-2 rounded hover:bg-green-700 hover:border-none hover:text-white font-bold"
          >
            Bekor qilish
          </button>
          <button
            onClick={onSubmit}
            className="w-full bg-green-700 text-white py-2 rounded font-bold hover:bg-green-800"
          >
            Yuborish
          </button>
        </div>
      </div>
    </div>
  );
};

export default RegisterModal;
