import * as React from "react";
import { NavLink, useNavigate } from "react-router-dom"; // agregado useNavigate

// MUI ICONS
import HomeIcon from "@mui/icons-material/Home";
import ArticleIcon from "@mui/icons-material/Article";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import PersonIcon from "@mui/icons-material/Person";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import FavoriteIcon from "@mui/icons-material/Favorite";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

// MUI COMPONENTS
import {
  AppBar,
  Toolbar,
  Button,
  Stack,
  Typography,
  Box,
  TextField,
  InputAdornment,
  Badge
} from "@mui/material";

// MUI COLORS
import { brown, purple } from "@mui/material/colors";

export const Header = () => {

  const [cart, setCartCount] = React.useState(0);

  const navigate = useNavigate(); // agregado
  const [search, setSearch] = React.useState(""); // agregado

  const handleSearch = (e) => { // agregado
    e.preventDefault();
    if (search.trim() !== "") {
      navigate(`/search/${search}`);
    }
  };

  React.useEffect(() => {

    const updateCartCount = () => {
      const cart = JSON.parse(localStorage.getItem("cart")) || [];
      setCartCount(cart.length);
    };

    updateCartCount();

    window.addEventListener("cartUpdated", updateCartCount);

    return () => {
      window.removeEventListener("cartUpdated", updateCartCount);
    };

  }, []);

  return (
    <>
      <AppBar
        position="fixed"
        elevation={4}
        sx={{
          backgroundColor: brown[600],
        }}
      >
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>

          {/* LOGO */}
          <Typography
            variant="h6"
            sx={{
              fontWeight: "bold",
              letterSpacing: 1,
              mr: 3,
            }}
          >
            𝓤𝓻𝓫𝓪𝓷 𝓕𝓪𝓼𝓱𝓲𝓸𝓷
          </Typography>

          {/* LEFT SIDE NAVIGATION */}
          <Stack direction="row" spacing={1}>

            {[
              { text: "Inicio", icon: <HomeIcon />, to: "/" },
              { text: "Artículos", icon: <ArticleIcon />, to: "/article" },
              { text: "Ofertas", icon: <LocalOfferIcon />, to: "/offers" },
              { text: "Mi Cuenta", icon: <PersonIcon />, to: "/account" },
              { text: "Favoritos", icon: <FavoriteIcon />, to: "/favorites" },
              { icon: <ShoppingCartIcon />, to: "/cart" },
            ].map((item) => (
              <Button
                key={item.text}
                component={NavLink}
                to={item.to}
                startIcon={
                  item.icon && item.to === "/cart" ? (
                    <Badge badgeContent={cart} color="error">
                      {item.icon}
                    </Badge>
                  ) : (
                    item.icon
                  )
                }
                sx={{
                  color: "white",
                  textTransform: "none",
                  fontWeight: 500,
                  borderRadius: 2,
                  px: 2,
                  "&:hover": {
                    backgroundColor: brown[600],
                  },
                  "&.active": {
                    backgroundColor: brown[600],
                  },
                }}
              >
                {item.text}
              </Button>
            ))}

          </Stack>

          {/* RIGHT SIDE - SEARCH */}
          <Box
            component="form"
            onSubmit={handleSearch} // agregado
            sx={{
              display: "flex",
              alignItems: "center",
              backgroundColor: "white",
              borderRadius: 3,
              px: 2,
              py: 0.5,
            }}
          >
            <TextField
              size="small"
              variant="standard"
              placeholder="Buscar productos..."
              value={search} // agregado
              onChange={(e) => setSearch(e.target.value)} // agregado
              InputProps={{
                disableUnderline: true,
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon sx={{ color: brown[700] }} />
                  </InputAdornment>
                ),
              }}
            />

            <Button
              type="submit" // agregado
              variant="contained"
              sx={{
                ml: 2,
                backgroundColor: brown[700],
                borderRadius: 3,
                textTransform: "none",
                "&:hover": {
                  backgroundColor: brown[900],
                },
              }}
            >
              Buscar
            </Button>
          </Box>

        </Toolbar>
      </AppBar>

      {/* Espaciador */}
      <Toolbar />
    </>
  );
};