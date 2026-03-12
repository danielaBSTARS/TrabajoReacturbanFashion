import * as React from "react";
import { NavLink, useNavigate } from "react-router-dom";

// ICONS
import HomeIcon from "@mui/icons-material/Home";
import ArticleIcon from "@mui/icons-material/Article";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import PersonIcon from "@mui/icons-material/Person";
import FavoriteIcon from "@mui/icons-material/Favorite";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import MenuIcon from "@mui/icons-material/Menu";

// MUI
import {
  AppBar,
  Toolbar,
  Button,
  Stack,
  Typography,
  Box,
  TextField,
  InputAdornment,
  Badge,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText
} from "@mui/material";

import { brown } from "@mui/material/colors";

export const Header = () => {

  const [cart, setCartCount] = React.useState(0);
  const [search, setSearch] = React.useState("");
  const [openMenu, setOpenMenu] = React.useState(false);

  const navigate = useNavigate();

  const handleSearch = (e) => {
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

  const menuItems = [
    { text: "Inicio", icon: <HomeIcon />, to: "/" },
    { text: "Artículos", icon: <ArticleIcon />, to: "/article" },
    { text: "Ofertas", icon: <LocalOfferIcon />, to: "/offers" },
    { text: "Mi Cuenta", icon: <PersonIcon />, to: "/account" },
    { text: "Favoritos", icon: <FavoriteIcon />, to: "/favorites" },
    { text: "Carrito", icon: <ShoppingCartIcon />, to: "/cart" }
  ];

  return (
    <>
      <AppBar
        position="fixed"
        elevation={4}
        sx={{ backgroundColor: brown[600] }}
      >
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>

          {/* MENU HAMBURGUESA (SOLO CELULAR) */}
          <IconButton
            sx={{ display: { xs: "flex", md: "none" }, color: "white" }}
            onClick={() => setOpenMenu(true)}
          >
            <MenuIcon />
          </IconButton>

          {/* LOGO */}
          <Typography
            variant="h6"
            sx={{
              fontWeight: "bold",
              letterSpacing: 1,
            }}
          >
            𝓤𝓻𝓫𝓪𝓷 𝓕𝓪𝓼𝓱𝓲𝓸𝓷
          </Typography>

          {/* MENU DESKTOP */}
          <Stack
            direction="row"
            spacing={1}
            sx={{ display: { xs: "none", md: "flex" } }}
          >
            {menuItems.map((item) => (
              <Button
                key={item.text}
                component={NavLink}
                to={item.to}
                startIcon={
                  item.to === "/cart" ? (
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
                  borderRadius: 2,
                  px: 2
                }}
              >
                {item.text}
              </Button>
            ))}
          </Stack>

          {/* SEARCH */}
          <Box
            component="form"
            onSubmit={handleSearch}
            sx={{
              display: { xs: "none", md: "flex" },
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
              value={search}
              onChange={(e) => setSearch(e.target.value)}
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
              type="submit"
              variant="contained"
              sx={{
                ml: 2,
                backgroundColor: brown[700],
                borderRadius: 3,
                textTransform: "none"
              }}
            >
              Buscar
            </Button>
          </Box>

        </Toolbar>
      </AppBar>

      {/* MENU DESPLEGABLE */}
      <Drawer
        anchor="left"
        open={openMenu}
        onClose={() => setOpenMenu(false)}
      >
        <Box sx={{ width: 250 }}>

          <List>
            {menuItems.map((item) => (
              <ListItem key={item.text} disablePadding>

                <ListItemButton
                  component={NavLink}
                  to={item.to}
                  onClick={() => setOpenMenu(false)}
                >

                  <ListItemIcon>
                    {item.icon}
                  </ListItemIcon>

                  <ListItemText primary={item.text} />

                </ListItemButton>

              </ListItem>
            ))}
          </List>

        </Box>
      </Drawer>

      <Toolbar />
    </>
  );
};