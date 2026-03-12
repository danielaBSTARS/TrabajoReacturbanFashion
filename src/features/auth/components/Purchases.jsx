import React, { useEffect, useState } from "react";

export const Purchases = () => {

  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {

    const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(savedCart);

    const totalPrice = savedCart.reduce((acc, item) => acc + item.price, 0);
    setTotal(totalPrice);

  }, []);

  return (
    <div style={{ padding: "40px" }}>

      <h2>🛒 Carrito de compras</h2>

      {cart.length === 0 ? (
        <p>No hay productos en el carrito</p>
      ) : (
        <div>

          {cart.map((product, index) => (
            <div key={index} style={{
              border: "1px solid #ccc",
              padding: "10px",
              marginBottom: "10px"
            }}>
              <h4>{product.name}</h4>
              <p>Precio: ${product.price}</p>
            </div>
          ))}

          <h3>Total: ${total}</h3>

        </div>
      )}

    </div>
  );
};