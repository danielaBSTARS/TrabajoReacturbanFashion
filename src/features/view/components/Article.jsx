import React, { useState, useEffect } from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardActions,
  Button,
  IconButton,
} from "@mui/material";

import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

import { pink } from "@mui/material/colors";

/* ============================= */
/*        FUNCIONES CARRITO      */
/* ============================= */

const addToCart = (product) => {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  const exists = cart.find((item) => item.id === product.id);

  if (!exists) {
    cart.push(product);
    localStorage.setItem("cart", JSON.stringify(cart));

    window.dispatchEvent(new Event("cartUpdated"));

    alert("Producto agregado exitosamente al carrito");
  } else {
    alert("Este producto ya está en el carrito");
  }
};

/* ============================= */
/*        DATA DE PRODUCTOS      */
/* ============================= */

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
    price: "$35.000",
    image:
      "https://m.media-amazon.com/images/I/61HkJk3r+LL._AC_UY1000_.jpg",
  },
];



/* ============================= */
/*          COMPONENTE           */
/* ============================= */

export const Article = () => {
  const [favorites, setFavorites] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const savedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavorites(savedFavorites);

    const updateSearch = () => {
      const newSearch = localStorage.getItem("search") || "";
      setSearch(newSearch);
    };

    window.addEventListener("searchUpdated", updateSearch);

    return () => {
      window.removeEventListener("searchUpdated", updateSearch);
    };
  }, []);

  const filteredArticles = search
    ? articles.filter((article) =>
        article.title.toLowerCase().includes(search.toLowerCase())
      )
    : articles;

  const toggleFavorite = (id) => {
    let updated;

    if (favorites.includes(id)) {
      updated = favorites.filter((fav) => fav !== id);
    } else {
      updated = [...favorites, id];
    }

    setFavorites(updated);
    localStorage.setItem("favorites", JSON.stringify(updated));
  };

  return (
    <Box sx={{ backgroundColor: "#532c2c", py: 8 }}>
      <Container maxWidth="lg">
        <Typography
          variant="h4"
          textAlign="center"
          sx={{ fontWeight: "bold", mb: 6 }}
        >
          Catálogo
        </Typography>

        <Grid container spacing={4} justifyContent="center">
          {filteredArticles.map((article) => (
            <Grid item xs={12} sm={6} md={4} key={article.id}>
              <Card
                sx={{
                  position: "relative",
                  borderRadius: 4,
                  boxShadow: 3,
                  transition: "0.3s",
                  "&:hover": {
                    boxShadow: 8,
                    transform: "translateY(-6px)",
                  },
                }}
              >
                <IconButton
                  onClick={() => toggleFavorite(article.id)}
                  sx={{
                    position: "absolute",
                    top: 10,
                    right: 10,
                    backgroundColor: "white",
                  }}
                >
                  {favorites.includes(article.id) ? (
                    <FavoriteIcon sx={{ color: "red" }} />
                  ) : (
                    <FavoriteBorderIcon />
                  )}
                </IconButton>

                <Box sx={{ width: "100%", height: 180, overflow: "hidden" }}>
                  <Box
                    component="img"
                    src={article.image}
                    alt={article.title}
                    sx={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                </Box>

                <CardContent>
                  <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
                    {article.title}
                  </Typography>

                  <Typography variant="h6" sx={{ mt: 1, fontWeight: "bold" }}>
                    {article.price}
                  </Typography>
                </CardContent>

                <CardActions sx={{ p: 2 }}>
                  <Button
                    onClick={() => addToCart(article)}
                    fullWidth
                    variant="contained"
                    startIcon={<ShoppingCartIcon />}
                    sx={{
                      backgroundColor: pink[200],
                      textTransform: "none",
                      fontWeight: "bold",
                      borderRadius: 2,
                      "&:hover": {
                        backgroundColor: pink[200],
                      },
                    }}
                  >
                    Agregar al carrito
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};