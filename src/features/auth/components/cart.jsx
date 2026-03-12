import React, { useEffect, useState } from "react";
import { pink } from "@mui/material/colors";

export const Cart = () => {

  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);
  const [paymentMethod, setPaymentMethod] = useState("");
  const [paymentNumber, setPaymentNumber] = useState("");

  useEffect(() => {

    let savedCart = JSON.parse(localStorage.getItem("cart")) || [];

    // asegurar que todos tengan cantidad
    savedCart = savedCart.map(item => ({
      ...item,
      quantity: item.quantity || 1
    }));

    setCart(savedCart);
    calculateTotal(savedCart);

  }, []);

  const calculateTotal = (cartItems) => {

    const totalPrice = cartItems.reduce((sum, item) => {

      const price = parseInt(item.price.replace(/\D/g, ""));
      return sum + price * item.quantity;

    }, 0);

    setTotal(totalPrice);

  };

  const updateQuantity = (id, change) => {

    const updatedCart = cart.map((item) => {

      if (item.id === id) {

        const newQuantity = item.quantity + change;

        if (newQuantity < 1) return item;

        return {
          ...item,
          quantity: newQuantity
        };

      }

      return item;

    });

    setCart(updatedCart);

    localStorage.setItem("cart", JSON.stringify(updatedCart));

    calculateTotal(updatedCart);

    window.dispatchEvent(new Event("cartUpdated"));

  };

  const removeFromCart = (id) => {

    const updatedCart = cart.filter((item) => item.id !== id);

    setCart(updatedCart);

    localStorage.setItem("cart", JSON.stringify(updatedCart));

    calculateTotal(updatedCart);

    window.dispatchEvent(new Event("cartUpdated"));

  };

  const handlePayment = () => {

    if (!paymentMethod) {
      alert("Selecciona una forma de pago");
      return;
    }

    if (!paymentNumber) {
      alert("Ingresa el número de pago");
      return;
    }

    alert("Pago aceptado exitosamente");

    localStorage.removeItem("cart");
    setCart([]);
    setTotal(0);

    window.dispatchEvent(new Event("cartUpdated"));

  };

  return (

    <div style={{ 
      padding: "40px",
      fontFamily: "Arial, sans-serif",
      }}>

      <h2>Carrito de compras</h2>

      {cart.length === 0 ? (
        <p>No hay productos en el carrito</p>
      ) : (
        <>
          {cart.map((item) => (

            <div
              key={item.id}
              style={{
                display: "flex",
                gap: "20px",
                marginBottom: "20px",
                borderBottom: "1px solid #ccc",
                paddingBottom: "20px"
              }}
            >

              {/* imagen */}
              <img
                src={item.image}
                alt={item.title}
                style={{
                  width: "120px",
                  height: "120px",
                  objectFit: "cover",
                  borderRadius: "8px"
                }}
              />

              <div>

                <h3>{item.title}</h3>

                <p style={{ fontWeight: "bold" }}>
                  {new Intl.NumberFormat("es-CO", {
                    style: "currency",
                    currency: "COP"
                  }).format(parseInt(item.price.replace(/\D/g, "")) * item.quantity)}
                </p>

                {/* cantidad */}
                <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>

                  <button onClick={() => updateQuantity(item.id, -1)}>
                    -
                  </button>

                  <span style={{ fontWeight: "bold" }}>
                    {item.quantity}
                  </span>

                  <button onClick={() => updateQuantity(item.id, 1)}>
                    +
                  </button>

                </div>

                <button
                  onClick={() => removeFromCart(item.id)}
                  style={{
                    marginTop: "10px",
                    background: pink[200],
                    color: "white",
                    border: "none",
                    padding: "10px",
                    borderRadius: "6px",
                    cursor: "pointer"
                  }}
                >
                  Eliminar
                </button>

              </div>

            </div>

          ))}

          {/* total */}
          <div style={{ marginTop: "30px" }}>

            <h2>
              Total: {new Intl.NumberFormat("es-CO", {
                style: "currency",
                currency: "COP"
              }).format(total)}
            </h2>

          </div>

          {/* forma de pago */}
          <div style={{ marginTop: "20px" }}>

            <h3>Forma de pago</h3>

            <select
              value={paymentMethod}
              onChange={(e) => setPaymentMethod(e.target.value)}
              style={{
                padding: "10px",
                borderRadius: "6px",
                marginTop: "10px"
              }}
            >

              <option value="">Seleccionar método</option>
              <option value="Efectivo">Efectivo</option>
              <option value="Tarjeta">Tarjeta</option>
              <option value="Nequi">Nequi</option>
              <option value="Daviplata">Daviplata</option>

            </select>

            <br />

            <input
              type="number"
              placeholder="Número de pago"
              value={paymentNumber}
              onChange={(e) => setPaymentNumber(e.target.value)}
              style={{
                marginTop: "10px",
                padding: "10px",
                borderRadius: "6px",
                border: "1px solid #ccc"
              }}
            />

            <br />

            <button
              onClick={handlePayment}
              style={{
                marginTop: "20px",
                background: "green",
                color: "white",
                border: "none",
                padding: "12px",
                borderRadius: "6px",
                cursor: "pointer",
                fontWeight: "bold"
              }}
            >
              Pagar ahora
            </button>

          </div>

        </>
      )}

    </div>
  );
};