import React, { useEffect, useState } from "react";

/* mismos productos que usas en Article */
const articles = [
  {
    id: 1,
    title: "Correa caballero cuero cafe",
    price: "$35.000",
    image:
      "http://nuestratiendaartesanal.com/wp-content/uploads/2023/01/1971-300x300.jpg",
  },
  {
    id: 2,
    title: "Correa trenzada caballero",
    price: "$67.000",
    image:
      "https://www.corbatastylo.com/cdn/shop/files/2-tienda-cinturones-tejidos-donde-comprar-correas-corbatas-accesorios-corbatines-hombres-regalo-para-hombres-en-colombia-bogota-medellin-cartagena-pereira-villavicencio-valle-cali-val_580x.jpg",
  },
  {
    id: 3,
    title: "correa cuero marca fixt",
    price: "$54.000",
    image:
      "https://chevignon.vtexassets.com/arquivos/ids/2069269/63_011H000_CAF191325_0.jpg",
  },
  {
    id: 4,
    title: "Correa de vaquero",
    price: "$80.000",
    image:
      "https://chevignon.vtexassets.com/arquivos/ids/1977623/63_014G564_CAF190840_0.jpg",
  },
  {
    id: 5,
    title: "correa vaca de cuero",
    price: "$85.500",
    image:
      "https://chevignon.vtexassets.com/arquivos/ids/1977641/63_014G562_CRU110103_0.jpg",
  },
  {
    id: 6,
    title: "correa de niño",
    price: "$15.000",
    image:
      "https://m.media-amazon.com/images/I/81BwhGu4k6L._AC_SX522_.jpg",
  },
  {
    id: 7,
    title: "correa Mario Hernandez",
    price: "$28.000",
    image:
      "https://mariohernandezvzl.vteximg.com.br/arquivos/ids/234790-634-588/cinturon-casual-monograma-doble-faz-indigo-caoba_1.jpg",
  },
  {
    id: 8,
    title: "correa de cuero tache mujer",
    price: "$55.000",
    image:
      "https://www.mpuli.com/wp-content/uploads/2021/01/Correa6207TachesNegro2.jpg",
  },
  {
    id: 9,
    title: "correa Dama Animal Print",
    price: "$22.000",
    image:
      "https://cl-cenco-pim-resizer.ecomm.cencosud.com/unsafe/adaptive-fit-in/640x0/filters:quality(75)/prd-cl/product-medias/3fcbeef9-567e-44e5-994c-a027a3945647/MKP9IQFR5W/MKP9IQFR5W-1/1726509020002-MKP9IQFR5W-1-2.jpg",
  },
  {
    id: 10,
    title: "Correa Gucci",
    price: "$87.000",
    image:
      "https://i.pinimg.com/236x/0c/95/14/0c951468ed21e22d620ec6e055aca7c3.jpg",
  },
  {
    id: 11,
    title: "correa de cuero Dama Vaquerista",
    price: "$100.000",
    image:
      "https://caballobronco.com/cdn/shop/products/cinto-vaquero-para-mujer-de-cuero-nobuck-original-color-negro-wd-1595white-diamonds-boots-797130.jpg",
  },
  {
    id: 12,
    title: "Correa de cadena Soles Dama",
    price: "$35.00",
    image:
      "https://m.media-amazon.com/images/I/61HkJk3r+LL._AC_UY1000_.jpg",
  },
];


export const Favorites = () => {

  const [favorites, setFavorites] = useState([]);

  useEffect(() => {

    const saved = JSON.parse(localStorage.getItem("favorites")) || [];

    const favoriteProducts = articles.filter((article) =>
      saved.includes(article.id)
    );

    setFavorites(favoriteProducts);

  }, []);

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Mis Favoritos ❤️</h2>

      <div style={styles.grid}>

        {favorites.length === 0 && (
          <p style={{ textAlign: "center", width: "100%" }}>
            No tienes favoritos aún
          </p>
        )}

        {favorites.map((item) => (
          <div key={item.id} style={styles.card}>
            <img src={item.image} alt={item.title} style={styles.image} />

            <div style={styles.info}>
              <h3 style={styles.name}>{item.title}</h3>
              <p style={styles.price}>{item.price}</p>

              <button style={styles.button}>
                Agregar al carrito
              </button>
            </div>
          </div>
        ))}

      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: "40px",
  },
  title: {
    textAlign: "center",
    marginBottom: "30px",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "20px",
  },
  card: {
    background: "#fff",
    borderRadius: "10px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: "250px",
    objectFit: "cover",
  },
  info: {
    padding: "15px",
  },
  name: {
    fontSize: "18px",
  },
  price: {
    color: "#8B4513",
    fontWeight: "bold",
  },
  button: {
    marginTop: "10px",
    background: "#8B4513",
    color: "white",
    border: "none",
    padding: "10px",
    borderRadius: "5px",
    cursor: "pointer",
  },
};