# 🔧 Proyecto de Automatización con Playwright

Este proyecto automatiza pruebas end-to-end usando [Playwright](https://playwright.dev/) sobre tres sitios web diferentes, verificando funcionalidades clave como navegación, formularios y validaciones.

---

## 📦 Requisitos

- Node.js >= 16.x
- npm >= 8.x

---

## 🚀 Instalación

1. Clona este repositorio:
   ```bash
   git clone git@github.com:WilsonCorrea5/Automation-pw.git

2. Ingresa al proyecto:
   ```bash
   cd automation-pw

3. Instala las dependencias:
   ```bash
   npm install


4. (Opcional) Instala los navegadores que usa Playwright:
    ```bash
    npx playwright install


## 🧪 Ejecución de Pruebas

1. Para correr todas las pruebas:
     ```bash
     npx playwright test

2. Para correr un archivo específico:
     ```bash
     npx playwright test tests/[nombre-archivo].spec.ts

3. Para abrir el reporte HTML:
     ```bash
     npx playwright show-report

