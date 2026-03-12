```jsx
import React from "react";
import {
  Box,
  Typography,
  Container,
  Grid,
  IconButton,
} from "@mui/material";

import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";

import { brown } from "@mui/material/colors";

export const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: brown[800],
        color: "white",
        mt: 6,
        pt: 5,
        pb: 2,
      }}
    >
      <Container maxWidth="lg">

        <Grid container spacing={4}>

          {/* LOGO / INFO */}
          <Grid item xs={12} md={4}>
            <Typography variant="h6" sx={{ fontWeight: "bold", mb: 1 }}>
              𝓤𝓻𝓫𝓪𝓷 𝓕𝓪𝓼𝓱𝓲𝓸𝓷
            </Typography>

            <Typography variant="body2">
              Encuentra las mejores correas y accesorios con estilo moderno.
            </Typography>
          </Grid>

          {/* LINKS */}
          <Grid item xs={12} md={4}>
            <Typography variant="subtitle1" sx={{ fontWeight: "bold", mb: 1 }}>
              Enlaces
            </Typography>

            <Typography variant="body2">Inicio</Typography>
            <Typography variant="body2">Artículos</Typography>
            <Typography variant="body2">Ofertas</Typography>
            <Typography variant="body2">Mi cuenta</Typography>
          </Grid>

          {/* REDES */}
          <Grid item xs={12} md={4}>
            <Typography variant="subtitle1" sx={{ fontWeight: "bold", mb: 1 }}>
              Síguenos
            </Typography>

            <IconButton sx={{ color: "white" }}>
              <FacebookIcon />
            </IconButton>

            <IconButton sx={{ color: "white" }}>
              <InstagramIcon />
            </IconButton>

            <IconButton sx={{ color: "white" }}>
              <TwitterIcon />
            </IconButton>
          </Grid>

        </Grid>

        {/* COPYRIGHT */}
        <Box
          sx={{
            borderTop: "1px solid rgba(255,255,255,0.2)",
            mt: 4,
            pt: 2,
            textAlign: "center",
          }}
        >
          <Typography variant="body2">
            © 2026 𝓤𝓻𝓫𝓪𝓷 𝓕𝓪𝓼𝓱𝓲𝓸𝓷 — Todos los derechos reservados.
          </Typography>
        </Box>

      </Container>
    </Box>
  );
};
```
