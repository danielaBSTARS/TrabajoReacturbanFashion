# Urban Fashion – Tienda de Accesorios

## 1. Descripción

**Urban Fashion** es una aplicación web desarrollada con **React** que simula una tienda virtual enfocada en la venta de **accesorios de moda como correas y otros complementos urbanos**.

La página permite a los usuarios explorar diferentes productos disponibles, ver su precio y agregarlos a diferentes secciones como **carrito de compras o favoritos**. El sistema utiliza almacenamiento local del navegador (**localStorage**) para guardar la información del carrito y permitir que los productos agregados se mantengan incluso si se recarga la página.

El objetivo del proyecto es implementar una **interfaz moderna de tienda virtual**, utilizando componentes reutilizables, navegación entre secciones y manejo de estado en React.

---

# 2. Características principales

La aplicación incluye las siguientes funcionalidades:

* Visualización de **productos de Urban Fashion**, principalmente correas y accesorios.
* Mostrar **nombre y precio de cada producto**.
* Agregar productos al **carrito de compras**.
* Guardar productos en **favoritos**.
* Visualizar las **compras realizadas**.
* Interfaz moderna utilizando **Material UI**.
* Almacenamiento de datos en **localStorage** para guardar el carrito.
* Navegación entre diferentes secciones de la tienda.

---

# 3. Interfaz gráfica

La interfaz de la página está diseñada para simular una **tienda online de accesorios**.

La aplicación se divide en tres secciones principales:

### Header

Contiene la barra de navegación principal de la tienda **Urban Fashion**.
Desde aquí el usuario puede acceder a:

* Inicio
* Artículos
* Ofertas
* Cuenta
* Favoritos
* Compras
* Carrito de compras

También incluye una barra de búsqueda y los iconos de navegación.

### Content

Es la sección principal donde se muestran los **productos disponibles**, como correas y otros accesorios.
Cada producto aparece en una tarjeta que muestra:

* Nombre del producto
* Precio
* Botón para agregar al carrito
* Botón para marcar como favorito

### Footer

Sección inferior de la página donde se puede mostrar información adicional de la tienda.

---

# 4. Arquitectura del proyecto

El proyecto está organizado utilizando una estructura modular basada en **features**, lo que permite separar las funcionalidades del sistema.

```
src
│
├── App.jsx
├── main.jsx
├── Routes.jsx
│
├── features
│
│   ├── layout
│   │   └── components
│   │       ├── Header.jsx
│   │       ├── Content.jsx
│   │       └── Footer.jsx
│
│   ├── view
│   │   ├── components
│   │   │   ├── Article.jsx
│   │   │   └── Offers.jsx
│   │   │
│   │   └── hooks
│   │       └── useState.jsx
│
│   └── auth
│       └── components
│           ├── Account.jsx
│           ├── Cart.jsx
│           ├── Favorites.jsx
│           └── Purchases.jsx
```

---

# 5. Tecnologías utilizadas

* React
* Vite
* JavaScript
* Material UI
* HTML
* CSS
* LocalStorage

---

# 6. Datos importantes del autor

**Nombre:** Daniela Bonilla Urrego
**Programa:** Análisis y Desarrollo de Software
**Institución:** Servicio Nacional de Aprendizaje (SENA)
**Año:** 2026

---

# 7. Ejecución del proyecto

Para ejecutar el proyecto se deben seguir los siguientes pasos:

1. Instalar dependencias

```
npm install
```

2. Ejecutar el servidor de desarrollo

```
npm run dev
```

3. Abrir en el navegador

```
http://localhost:5173
```

---

# 8. Nota
Este proyecto fue desarrollado como parte de un *taller académico, con el objetivo de aplicar conceptos de **React, componentes, navegación y manejo de estado en aplicaciones web modernas*.

Este proyecto fue desarrollado como parte de un **taller académico**, con el objetivo de aplicar conceptos de **React, componentes, navegación y manejo de estado en aplicaciones web modernas**.
