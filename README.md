# 🚧 Frontend - Reporte de Huecos en Cali

Este repositorio contiene el **frontend** de la aplicación web para reportar y buscar huecos en la ciudad de Cali.  
Fue desarrollado con **React + Vite** y utiliza **Bootstrap** para los estilos.  

El frontend consume la API del backend y muestra los huecos reportados en un **mapa interactivo**, un listado en **cards** y permite crear y consultar reportes.

---
## NOTA
Para que este proyecto funcione se debe clonar primero el repositorio del back 
```bash
https://github.com/joansalcedo1/Proyecto_final_Bootcamp_back
````


## 📦 Páginas principales

1. **Home**
   - Hero con llamado a la acción.
   - Mapa interactivo con **markers** que muestran los huecos reportados.
   - Listado de huecos en **cards**, cada card abre un **modal** con detalles y comentarios.

2. **Reportar**
   - Formulario sencillo para crear un reporte:
     - Categoría del hueco (**grande, mediano, pequeño**).
     - Dirección.
     - Comentarios adicionales.

3. **Mis reportes**
   - Buscador por **calle o carrera**.
   - Muestra todos los huecos registrados en esa zona.

---

## 🚀 Tecnologías utilizadas
- React (con Vite)
- Bootstrap
- JavaScript (ES6)
- CORS (para consumir la API del backend)
- React Router (para la navegación entre páginas)

---

## 🛠 Cómo ejecutar el frontend

1. Clonar el repositorio:
   ```bash
   git clone https://github.com/usuario/front-huecos.git
   cd front-huecos
   
2. Instalar dependencias:
```bash
npm install
```
3. Iniciar el servidor de desarrollo:
```bash
npm run dev
```
4.Abrir en el navegador:
```bash
http://localhost:5173
```
🎯 Objetivo
Proveer una interfaz clara y sencilla para que los usuarios puedan reportar y consultar huecos en la ciudad de Cali.
