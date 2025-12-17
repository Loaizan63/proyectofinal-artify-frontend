# seguvia - Reporta vías y huecos

Aplicación web para reportar y consultar huecos en las vías públicas.  
Desarrollado con **React + Vite**, **Bootstrap**, **Mapbox** y backend **PHP + MySQL**.

---

## 🚀 Deployment

### Frontend (Netlify)
**URL:** https://splendid-parfait-00d83c.netlify.app/

### Backend (PHP + MySQL)
**URL:** https://loaiza.cloud/secuvia/backend-php/

**Base de Datos:**
- Host: srv1710.hstgr.io
- Database: u896023791_secuvia

---

## 🔧 Configuración Netlify

Para que el frontend en Netlify se conecte al backend:

1. Ve a **Site settings → Environment variables**
2. Agrega la variable:
   - **Name:** `VITE_API_ROOT`
   - **Value:** `https://loaiza.cloud/secuvia/backend-php/index.php`
3. **Redeploy** el sitio para aplicar cambios

---


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
   git clone https://github.com/Loaizan63/proyectofinal-artify-frontend.git
   cd proyectofinal-artify-frontend
   ```

2. Instalar dependencias:
   ```bash
   npm install
   ```

3. Configurar variable de entorno (opcional para local):
   ```bash
   cp .env.example .env
   # Editar .env y ajustar VITE_API_ROOT si es necesario
   ```

4. Iniciar el servidor de desarrollo:
   ```bash
   npm run dev
   ```

5. Abrir en el navegador:
   ```
   http://localhost:5173
   ```

---

## 📡 API Endpoints

- `GET /api/huecos` - Listar todos los huecos
- `GET /api/huecos/{id}` - Obtener un hueco específico
- `GET /api/huecos/direcSearch/{término}` - Buscar por dirección
- `POST /api/huecos` - Crear nuevo hueco
- `PUT /api/huecos/{id}` - Actualizar hueco
- `DELETE /api/huecos/{id}` - Eliminar hueco
- `GET /api/server/info` - Información del servidor

---

## 🛠️ Stack Tecnológico

- **Frontend:** React + Vite + Mapbox GL
- **Estilos:** Bootstrap 5
- **Backend:** PHP + MySQL
- **Deploy:** Netlify (frontend) + hosting PHP (backend)
- **Router:** React Router DOM

---

## 🎯 Objetivo

Proveer una interfaz clara y sencilla para que los usuarios puedan reportar y consultar huecos en las vías públicas, mejorando la gestión y priorización de reparaciones.
