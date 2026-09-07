# ⚾ MLB Prediction AI

Una aplicación web moderna de React para predicciones de juegos de Béisbol con análisis en tiempo real.

## 🎯 Características

- 📊 **Dashboard interactivo** con estadísticas en vivo
- 🎮 **Predicciones precisas** de juegos de MLB
- 📈 **Gráficos analíticos** con Recharts
- ⚙️ **Configuración personalizable** de usuario
- 🎨 **Interfaz moderna** con tema oscuro
- 📱 **Responsive design** para todos los dispositivos

## 🚀 Despliegue en Netlify

### Opción 1: Despliegue Automático (Recomendado)

1. Ve a [app.netlify.com](https://app.netlify.com/)
2. Click en "Add new site" → "Import an existing project"
3. Selecciona GitHub y conecta tu repositorio
4. Netlify configurará automáticamente el build
5. Click en "Deploy"

**Tu app estará en vivo en 2-3 minutos** 🌐

### Opción 2: Despliegue Local

```bash
# Clonar el repositorio
git clone https://github.com/uwillcamero71-glitch/mlb-prediction-app.git
cd mlb-prediction-app

# Instalar dependencias
npm install

# Ejecutar en desarrollo
npm run dev

# Construir para producción
npm run build

# Ver preview de producción
npm run preview
```

## 📁 Estructura del Proyecto

```
src/
├── pages/
│   ├── Dashboard.jsx      # Panel principal
│   ├── Predictions.jsx    # Predicciones
│   ├── Games.jsx          # Listado de juegos
│   ├── Analytics.jsx      # Análisis detallado
│   └── Settings.jsx       # Configuración
├── components/
│   ├── Navbar.jsx         # Barra de navegación
│   ├── Sidebar.jsx        # Barra lateral
│   ├── StatCard.jsx       # Tarjetas de estadísticas
│   ├── PredictionChart.jsx # Gráficos
│   └── GameCard.jsx       # Tarjetas de juegos
├── App.jsx                # Componente principal
└── main.jsx               # Punto de entrada
```

## 🛠️ Tecnologías Utilizadas

- **React 18.2** - Librería UI
- **React Router 6** - Enrutamiento
- **Tailwind CSS** - Estilos
- **Recharts** - Gráficos
- **React Icons** - Iconos
- **React Hot Toast** - Notificaciones
- **Axios** - HTTP client
- **Vite** - Build tool

## 📋 Variables de Entorno

Crear archivo `.env`:

```
VITE_API_BASE_URL=http://localhost:5000
VITE_API_KEY=tu_api_key_aqui
```

## 🌐 URL en Vivo

Después de desplegar en Netlify, tu app estará disponible en:
```
https://mlb-prediction-app-tuusuario.netlify.app
```

## 📞 Soporte

¿Problemas con el despliegue? Contacta al desarrollador o revisa la documentación de Netlify.

## 📄 Licencia

MIT

---

**Hecho con ❤️ por uwillcamero71-glitch**
