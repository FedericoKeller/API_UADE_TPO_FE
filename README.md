# 🎬 Netlist: Sitio de Recomendaciones de Películas

Una aplicación web responsiva que permite a los usuarios:

- Buscar películas basadas en diferentes criterios, como género, actores, título, director, etc.
- Registrarse como usuarios y crear su propia cuenta.
- Crear y gestionar listas de películas que han visto, quieren ver o marcar como favoritas.

## Modelo de Datos

La aplicación contiene los siguientes modelos:

- **Usuario**: Puede realizar las siguientes acciones:
    - Crear y gestionar listas personalizadas de películas (vistas, para ver, favoritas, etc.).

- **Película**: Representa una película con información como título, género, director, actores, etc.

- **Lista**: Representa una colección de películas creada por un usuario. Los usuarios pueden tener varias listas para diferentes propósitos.

## Comenzando

Para configurar la aplicación, debes cumplir con los siguientes requisitos previos:

- Node.js 18+

Para instalar y ejecutar la aplicación localmente, ejecuta los siguientes comandos:

```bash
git clone https://github.com/FedericoKeller/API_UADE_TPO_FE.git
cd API_UADE_TPO_FE
npm install
npm run dev
```

## Características Adicionales

Además de las funcionalidades básicas, el sitio puede incorporar las siguientes características adicionales para mejorar la usabilidad y la experiencia del usuario:
- Recuperación de contraseña a través del correo electrónico.
- Filtros de búsqueda avanzados (por ejemplo, por idioma, género, director, actores, etc.).
- Integración con una API externa de bases de datos de películas [(The Movie DB)](https://developer.themoviedb.org/docs/getting-started).


## Requisitos para el Desarrollo

- Este proyecto puede ser desarrollado por un máximo de dos miembros del equipo.
- La aplicación debe ser responsiva.
- Los criterios de evaluación son:
    - 40% por funcionalidad y adherencia a buenas prácticas.
    - 40% por usabilidad y experiencia del usuario.
    - 20% por documentación completa.
- El proyecto debe usar las siguientes tecnologías:
    - Frontend: HTML, CSS, React, JavaScript
    - Backend: Node.js
    - Base de datos: SQL (MySQL, PostgreSQL) o NoSQL (MongoDB)