# AgroTechIA Landing

Proyecto React + Vite + Tailwind creado para la landing MVP de AgroTechIA.

## Pasos para ejecutar

1. Instala Node.js y npm.
2. En la raíz del proyecto:
   ```bash
   cd /home/chuchosam/Documentos/github/agrotechia-web-ui
   ```
3. Instala dependencias:
   ```bash
   npm install
   ```
4. Inicia el servidor de desarrollo:
   ```bash
   npm run dev
   ```

## Estructura principal

- `src/App.jsx` - punto central de la landing
- `src/sections/` - secciones de la página
- `src/components/` - componentes reutilizables
- `src/data/` - datos simulados para el demo
- `public/` - assets estáticos y manifest
- `index.html` - plantilla raíz de Vite
- `tailwind.config.js` - configuración de Tailwind
- `sonar-project.properties` - configuración de análisis SonarQube

## Análisis de calidad

Si tienes un servidor SonarQube disponible, puedes ejecutar:

```bash
npm run sonar
```

Además, el CI está preparado para ejecutar SonarQube cuando existen los secretos `SONARQUBE_HOST_URL` y `SONARQUBE_TOKEN`.

## Objetivo

Una landing moderna y modular para validar AgroTechIA antes de pasar a la siguiente fase de dashboard real e integración IoT.


esto es una prueba 