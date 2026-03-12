import React from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  CardActions,
  Button,
} from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { brown } from "@mui/material/colors";

export const Content = () => {
  const products = [
    {
      id: 1,
      name: "Correa caballero trenzada",
      price: "$55.000",
      image:
        "https://www.gef.co/cdn/shop/files/leon-correa-verde-654-745772_000654-1.jpg",
    },
    {
      id: 2,
      name: "Correa de cuero Tommy Hilfigher",
      price: "$38.000",
      image:
        "https://www.az-correasmarroquineria.com/cdn/shop/files/4EE3C1BD-BEAB-4E16-95D4-6E9678719A82.jpg?",
    },
    {
      id: 3,
      name: "correa taches",
      price: "$12.000",
      image:
        "https://www.gef.co/cdn/shop/files/lil-correa-negro-799-745789_000799-1_70e47201-cc33-45d4-8165-d420e21aa280.jpg",
    },
  ];

  return (
    <Box sx={{ backgroundColor: "#705426", minHeight: "100vh" }}>

      {/* HERO IMAGE */}
      <Box
        sx={{
          height: "400px",
          backgroundImage:
            "url(https://www.az-correasmarroquineria.com/cdn/shop/files/Fondos_iniciales.png)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
        }}
      >
        {/* Overlay oscuro */}
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            backgroundColor: "rgba(0,0,0,0.4)",
          }}
        />

        <Typography
          variant="h3"
          sx={{
            position: "relative",
            color: "white",
            fontWeight: "bold",
            textAlign: "center",
          }}
        >
          Las mejores correas, del centro de Medellín
        </Typography>
      </Box>

      <Container maxWidth="lg" sx={{ py: 6 }}>
        {/* PRODUCTOS */}
        <Typography
          variant="h4"
          sx={{
            mb: 4,
            fontWeight: "bold",
            color: "white",
            textAlign: "center",

          }}
        >
          Productos Destacados
        </Typography>

        <Grid
          container
          spacing={4}
          justifyContent="center"
        >
          {products.map((product) => (
            <Grid
              item
              key={product.id}
              xs={12}
              sm={6}
              md={4}
              sx={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Card
                sx={{
                  width: 320,
                  height: 420,
                  display: "flex",
                  flexDirection: "column",
                  borderRadius: 4,
                  boxShadow: 4,
                  transition: "0.3s",
                  "&:hover": {
                    transform: "translateY(-6px)",
                    boxShadow: 8,
                  },
                }}
              >
                <CardMedia
                  component="img"
                  image={`${product.image}?auto=format&fit=crop&w=400&q=80`}
                  alt={product.name}
                  sx={{
                    height: 220,
                    objectFit: "cover",
                  }}
                />

                <CardContent
                  sx={{
                    flexGrow: 1,
                    textAlign: "center",
                  }}
                >
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: "bold",
                      color: brown[900],
                    }}
                  >
                    {product.name}
                  </Typography>

                  <Typography
                    sx={{
                      mt: 1,
                      color: brown[700],
                      fontWeight: 500,
                    }}
                  >
                    {product.price}
                  </Typography>
                </CardContent>

                <CardActions
                  sx={{
                    p: 2,
                  }}
                >
                  <Button
                    fullWidth
                    variant="contained"
                    startIcon={<ShoppingCartIcon />}
                    sx={{
                      backgroundColor: brown[700],
                      borderRadius: 3,
                      textTransform: "none",
                      fontWeight: "bold",
                      "&:hover": {
                        backgroundColor: brown[900],
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