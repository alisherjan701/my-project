import React, { useState } from "react";

export default function Cart() {
  const pizzas = [
    {
      id: 1,
      name: "Пиццаdcsdcds №1",
      description: "Вкусная пицца",
      price: 32000,
      image:
        "https://api.choparpizza.uz/storage/products/2022/03/03/73AnQv1ZoGkpj7BN0Q0hFYj00esnvM9gk3nb6GzN.webp",
    },
    {
      id: 2,
      name: "Сола №2",
      description: "1 литр",
      price: 11000,
      image:
        "https://api.choparpizza.uz/storage/products/2021/09/27/FOI4bE1lWcp2mBxBLGsO80NkI4hPBCrtTDmxc6Zw.webp",
    },
    {
      id: 3,
      name: "Фанта №3",
      description: "1 ",
      price: 11000,
      image:
        "https://api.choparpizza.uz/storage/products/2021/12/18/EkAH6GzYTD4bIdwnc5oMsQku14shf4HLCyMaIRDI.png",
    },
    {
      id: 4,
      name: "Пицца №4",
      description: "Сырная пицца",
      price: 34000,
      image:
        "https://api.choparpizza.uz/storage/products/2023/07/31/GFEUGsUkKcjn7sJXPUVQte4qAHaIWUKPcHc5ApDP.webp",
    },
  ];

  const [cart, setCart] = useState({});
  const [showCartModal, setShowCartModal] = useState(false);
  const [showOrderForm, setShowOrderForm] = useState(false);
  const [formData, setFormData] = useState({ name: "", phone: "", email: "" });

  const handleAddToCart = (pizza) => {
    setCart((prev) => {
      const count = prev[pizza.id]?.count || 0;
      return { ...prev, [pizza.id]: { pizza, count: count + 1 } };
    });
    setShowCartModal(true);
  };

  const handleRemoveFromCart = (id) => {
    const updated = { ...cart };
    delete updated[id];
    setCart(updated);
  };

  const handleOrderSubmit = () => {
    if (!formData.name || !formData.phone || !formData.email) {
      alert("Пожалуйста, заполните все поля.");
      return;
    }
    alert(`Спасибо, ${formData.name}! Ваш заказ принят.`);
    setCart({});
    setFormData({ name: "", phone: "", email: "" });
    setShowOrderForm(false);
  };

  const totalItems = Object.values(cart).reduce(
    (sum, item) => sum + item.count,
    0
  );

  const totalPrice = Object.values(cart).reduce(
    (sum, item) => sum + item.count * item.pizza.price,
    0
  );

  return (
    <div style={styles.container}>
      <h1 style={{ textAlign: "center", marginBottom: "20px" }}></h1>

      <div style={styles.menu}>
        {pizzas.map((pizza) => (
          <div key={pizza.id} style={styles.card}>
            <img
              src={pizza.image.trim()}
              alt={pizza.name}
              style={styles.image}
            />
            <h3>{pizza.name}</h3>
            <p>{pizza.description}</p>
            <p style={styles.price}>
              {pizza.price.toLocaleString("ru-RU")} сум
            </p>
            <button
              style={styles.orderButton}
              onClick={() => handleAddToCart(pizza)}
            >
              🛒 Заказать
            </button>
          </div>
        ))}
      </div>

      {showCartModal && (
        <div
          style={styles.modalOverlay}
          onClick={() => setShowCartModal(false)}
        >
          <div style={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <h2>Корзина ({totalItems} товаров)</h2>
            {totalItems === 0 ? (
              <p>Корзина пуста</p>
            ) : (
              <>
                {Object.values(cart).map(({ pizza, count }) => (
                  <div key={pizza.id} style={styles.cartItem}>
                    <span>
                      {pizza.name} x {count}
                    </span>
                    <span>
                      {(pizza.price * count).toLocaleString("ru-RU")} сум
                      <button
                        style={styles.removeButton}
                        onClick={() => handleRemoveFromCart(pizza.id)}
                      >
                        ×
                      </button>
                    </span>
                  </div>
                ))}
                <div style={styles.cartTotal}>
                  Итого: {totalPrice.toLocaleString("ru-RU")} сум
                </div>
                <button
                  style={styles.checkoutButton}
                  onClick={() => {
                    setShowCartModal(false);
                    setShowOrderForm(true);
                  }}
                >
                  Оформить заказ
                </button>
              </>
            )}
            <button
              style={styles.closeButton}
              onClick={() => setShowCartModal(false)}
            >
              Закрыть
            </button>
          </div>
        </div>
      )}

      {showOrderForm && (
        <div
          style={styles.modalOverlay}
          onClick={() => setShowOrderForm(false)}
        >
          <div style={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <h2>Оформление заказа</h2>
            <input
              style={styles.input}
              type="text"
              placeholder="Имя"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
            />
            <input
              style={styles.input}
              type="tel"
              placeholder="Номер телефона"
              value={formData.phone}
              onChange={(e) =>
                setFormData({ ...formData, phone: e.target.value })
              }
            />
            <input
              style={styles.input}
              type="email"
              placeholder="Эл. почта"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
            />
            <button style={styles.checkoutButton} onClick={handleOrderSubmit}>
              Подтвердить заказ
            </button>
            <button
              style={styles.closeButton}
              onClick={() => setShowOrderForm(false)}
            >
              Отмена
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

const styles = {
  container: {
    fontFamily: "Arial, sans-serif",
    padding: "20px",
    backgroundColor: "#f9f9f9",
    minHeight: "100vh",
  },
  menu: {
    display: "flex",
    flexWrap: "wrap",
    gap: "20px",
    justifyContent: "center",
  },
  card: {
    width: "220px",
    background: "#fff",
    borderRadius: "10px",
    padding: "15px",
    boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
    textAlign: "center",
  },
  image: {
    width: "100%",
    height: "140px",
    objectFit: "cover",
    borderRadius: "8px",
  },
  price: {
    fontWeight: "bold",
    margin: "10px 0",
  },
  orderButton: {
    backgroundColor: "#28a745",
    color: "#fff",
    border: "none",
    padding: "10px",
    width: "100%",
    borderRadius: "5px",
    fontSize: "1em",
    cursor: "pointer",
  },
  modalOverlay: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0,0,0,0.5)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 999,
  },
  modalContent: {
    background: "#fff",
    padding: "20px",
    borderRadius: "10px",
    width: "360px",
    maxHeight: "80vh",
    overflowY: "auto",
  },
  cartItem: {
    display: "flex",
    justifyContent: "space-between",
    padding: "5px 0",
  },
  removeButton: {
    background: "none",
    border: "none",
    color: "red",
    marginLeft: "10px",
    fontWeight: "bold",
    cursor: "pointer",
  },
  cartTotal: {
    fontWeight: "bold",
    marginTop: "10px",
    marginBottom: "10px",
  },
  checkoutButton: {
    backgroundColor: "#007bff",
    color: "#fff",
    padding: "10px",
    width: "100%",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    marginTop: "10px",
  },
  closeButton: {
    backgroundColor: "#ccc",
    padding: "10px",
    width: "100%",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    marginTop: "10px",
  },
  input: {
    width: "100%",
    padding: "10px",
    margin: "8px 0",
    borderRadius: "5px",
    border: "1px solid #ccc",
  },
};
