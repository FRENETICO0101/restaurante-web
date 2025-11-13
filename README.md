# Sitio Web Restaurante (Base Inicial)

Proyecto inicial para un sitio web moderno, responsive e intuitivo de un restaurante, construido con **Vite + React + TypeScript + Tailwind CSS**.

> Nota: Esta es una base inicial. Parte del contenido (menú real, datos de contacto, historia, imágenes, logotipo definitivo) está pendiente de recopilar.

## Características Principales

- Vite + React + TypeScript
- Tailwind CSS con diseño mobile-first
- Ruteo con `react-router-dom`
- Componentes base: `Navbar`, `Footer`, `MenuGrid`, `ContactForm`, `ReservationForm`, `SectionContainer`, `SEO`
- Formularios simples con estados simulados
- Configuración ESLint + Prettier (incluye ordenamiento de clases Tailwind)
- Metadatos SEO iniciales + manifest + favicon placeholder
- GitHub Actions (CI) para instalar, lint y build

## Estructura (resumen)

```
src/
  components/
  pages/
  router/
  main.tsx
  App.tsx
  index.css
public/
  favicon.svg
  site.webmanifest
```

## Scripts

```bash
npm run dev       # Servidor de desarrollo
npm run build     # Compilar para producción
npm run preview   # Previsualizar build de producción
npm run lint      # Analizar código con ESLint
npm run format    # Formatear con Prettier
```

## Próximos Pasos (Datos a Recabar)

Para completar el sitio se requiere información real:

1. Identidad de marca: nombre comercial exacto, eslogan, paleta de colores, tipografías (si difieren de Inter), logotipo (SVG/PNG).
2. Menú completo: categorías (entradas, principales, postres, bebidas), descripción, precios, alérgenos, etiquetas (vegano, sin gluten, picante, etc.).
3. Información del local: dirección, mapa, teléfono, email de reservas, aforo, política de cancelación.
4. Horarios: días de apertura, franjas (almuerzo/cena), horarios especiales (festivos).
5. Reservas: ¿Se requiere confirmación manual? ¿Depósito? ¿Integración futura con un sistema externo?
6. Redes sociales: URLs (Instagram, Facebook, TikTok, Google Maps, TripAdvisor, etc.).
7. Historia y equipo: texto de presentación, historia, valores, fotos del personal.
8. Fotografías y media: galería de platos, ambiente, eventos (indicar licencias/propiedad).
9. Política legal: aviso legal, privacidad, cookies.
10. SEO específico: palabras clave objetivo, meta description personalizada para cada página.

## Personalización de Estilos

Modificar `tailwind.config.js` para ajustar colores y tipografías definitivas. Las clases utilitarias se centralizan en `index.css`.

## Despliegue

El build genera la carpeta `dist/`. Puede desplegarse en servicios como Vercel, Netlify, GitHub Pages (con configuración adicional) o un servidor estático propio.

## Licencia

MIT. Actualizar si el proyecto requiere otra licencia.

---

_Documento generado automáticamente como punto de partida._
