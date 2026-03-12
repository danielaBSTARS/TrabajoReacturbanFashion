import React, { useState, useEffect } from "react";
import { Container, Typography, Stack, Button, Card, CardContent, TextField } from "@mui/material";

/* 🔹 Card de producto estilo “correa” */
const ProductCard = ({ title, children }) => (
  <Card sx={{ mb: 4, borderRadius: 3, boxShadow: 5 }}>
    <CardContent>
      <Typography variant="h6" mb={2} textAlign="center">{title}</Typography>
      <Stack spacing={2} alignItems="center">{children}</Stack>
    </CardContent>
  </Card>
);

/* 1️⃣ Color Changer – “Correa Colorida” */
export const ColorChanger = () => {
  const [color, setColor] = useState("black");

  return (
    <ProductCard title="🎨 Correa Colorida">
      <Typography sx={{ color, fontWeight: 'bold' }}>Color actual: {color}</Typography>
      <Stack direction="row" spacing={2}>
        <Button variant="contained" color="error" onClick={() => setColor("red")}>Roja</Button>
        <Button variant="contained" color="primary" onClick={() => setColor("blue")}>Azul</Button>
        <Button variant="contained" color="success" onClick={() => setColor("green")}>Verde</Button>
      </Stack>
    </ProductCard>
  );
};

/* 2️⃣ Counter Hook – “Correa de Contador” */
export const CounterHook = () => {
  const [count, setCount] = useState(0);

  return (
    <ProductCard title="🔢 Correa Contadora">
      <Typography variant="h4">{count}</Typography>
      <Stack direction="row" spacing={2}>
        <Button variant="contained" onClick={() => setCount(count + 1)}>+</Button>
        <Button variant="contained" onClick={() => setCount(count - 1)}>-</Button>
        <Button variant="outlined" onClick={() => setCount(0)}>Reset</Button>
      </Stack>
    </ProductCard>
  );
};

/* 3️⃣ Toggle Text – “Correa Secreta” */
export const ToggleText = () => {
  const [show, setShow] = useState(false);

  return (
    <ProductCard title="👀 Correa Secreta">
      <Button variant="contained" onClick={() => setShow(!show)}>{show ? "Ocultar" : "Mostrar"}</Button>
      {show && <Typography>Hola 👋 este texto aparece y desaparece</Typography>}
    </ProductCard>
  );
};

/* 4️⃣ Input Name – “Correa Personalizada” */
export const InputName = () => {
  const [name, setName] = useState("");

  return (
    <ProductCard title="✏️ Correa Personalizada">
      <TextField label="Escribe tu nombre" value={name} onChange={(e) => setName(e.target.value)} />
      <Typography variant="h6">Hola {name || "amigo"} 👋</Typography>
    </ProductCard>
  );
};

/* 5️⃣ Likes – “Correa Popular” */
export const LikeButton = () => {
  const [likes, setLikes] = useState(0);

  return (
    <ProductCard title="❤️ Correa Popular">
      <Typography variant="h5">{likes} Likes</Typography>
      <Button variant="contained" color="error" onClick={() => setLikes(likes + 1)}>Like ❤️</Button>
    </ProductCard>
  );
};

/* 6️⃣ Font Size Changer – “Correa XL” */
export const FontSizeChanger = () => {
  const [size, setSize] = useState(20);

  return (
    <ProductCard title="🔠 Correa XL">
      <Typography sx={{ fontSize: size }}>Texto dinámico</Typography>
      <Stack direction="row" spacing={2}>
        <Button variant="contained" onClick={() => setSize(size + 2)}>A+</Button>
        <Button variant="contained" onClick={() => setSize(size - 2)}>A-</Button>
      </Stack>
    </ProductCard>
  );
};

/* 7️⃣ Dark Mode – “Correa Nocturna” */
export const DarkModeToggle = () => {
  const [dark, setDark] = useState(false);

  return (
    <ProductCard title="🌙 Correa Nocturna">
      <Stack
        sx={{
          p: 3,
          borderRadius: 2,
          backgroundColor: dark ? "#1e1e1e" : "#f5f5f5",
          color: dark ? "#fff" : "#000",
          width: "100%",
          textAlign: "center"
        }}
      >
        <Typography mb={2}>{dark ? "Modo Oscuro 🌙" : "Modo Claro ☀️"}</Typography>
        <Button variant="contained" onClick={() => setDark(!dark)}>Toggle Mode</Button>
      </Stack>
    </ProductCard>
  );
};

/* 8️⃣ Lista dinámica – “Correa de Colección” */
export const SimpleList = () => {
  const [items, setItems] = useState([]);
  const addItem = () => setItems([...items, `Correa ${items.length + 1}`]);

  return (
    <ProductCard title="📋 Correa de Colección">
      <Button variant="contained" onClick={addItem}>Agregar Correa</Button>
      {items.map((item, index) => (
        <Typography key={index}>{item}</Typography>
      ))}
    </ProductCard>
  );
};

/* 9️⃣ Countdown Timer 7 minutos – “Correa Temporizada” */
export const CountdownTimer = () => {
  const [time, setTime] = useState(420);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    if (!running) return;
    if (time <= 0) {
      setRunning(false);
      return;
    }
    const timer = setInterval(() => setTime(prev => prev - 1), 1000);
    return () => clearInterval(timer);
  }, [running, time]);

  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  return (
    <ProductCard title="⏳ Correa Temporizada">
      <Typography variant="h3">{minutes}:{seconds.toString().padStart(2,"0")}</Typography>
      <Stack direction="row" spacing={2}>
        <Button variant="contained" color="success" onClick={() => setRunning(true)}>Start</Button>
        <Button variant="contained" color="warning" onClick={() => setRunning(false)}>Pause</Button>
        <Button variant="outlined" onClick={() => { setRunning(false); setTime(420); }}>Reset</Button>
      </Stack>
    </ProductCard>
  );
};

/* Página principal estilo tienda de correas */
export default function App() {
  return (
    <Container sx={{ py: 5 }}>
      <Typography variant="h3" mb={4} textAlign="center">Tienda de Correas Interactivas</Typography>
      <ColorChanger />
      <CounterHook />
      <ToggleText />
      <InputName />
      <LikeButton />
      <FontSizeChanger />
      <DarkModeToggle />
      <SimpleList />
      <CountdownTimer />
    </Container>
  );
}