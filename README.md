# Rendivalores Web Application

Este proyecto es la actualización del sitio web de Rendivalores, que incluye una migración de jQuery a Angular y la unificación de las páginas de Fondos Mutuales y Rendivalores en un solo sitio web.

Este proyecto está construido con [Angular](https://angular.io/), una plataforma de desarrollo en JavaScript para crear aplicaciones web de una sola página.

Además, se utiliza [Tailwind CSS](https://tailwindcss.com/) para la estilización. Tailwind es un framework de CSS de utilidad primero que te permite personalizar rápidamente la apariencia de tu aplicación sin salir de tu HTML.

Fue generado con [Angular CLI](https://github.com/angular/angular-cli) versión 17.2.0, una herramienta de línea de comandos que nos ayuda a iniciar, desarrollar y mantener aplicaciones Angular.

## Requerimientos
Para correr este proyecto correctamente, asegurate de tener instalado [Node.js](https://nodejs.org/), [npm](https://www.npmjs.com/get-npm), [Angular CLI](https://github.com/angular/angular-cli#installation) y [Tailwind CSS](https://tailwindcss.com/docs/guides/angular).

## Configuración y desarrollo

1. Clona el repositorio a tu máquina local con `https://your-repository-url.git`.
2. Navega hasta el directorio del proyecto usando `cd rendivalores-web-app`.
3. Instala las dependencias con `npm install`.
4. Inicia el servidor de desarrollo con `ng serve`.
5. Navega a `http://localhost:4200/` en tu navegador. La aplicación se recargará automáticamente si cambias cualquiera de los archivos de origen.

## Generación de componentes, servicios y módulos

Puedes generar nuevas partes de tu aplicación usando Angular CLI. Por ejemplo, el comando `ng generate component component-name` genera un nuevo componente. También puedes generar directivas, pipes, servicios, clases, guardias, interfaces, enumeraciones y módulos.

## Profundizando

Con `ng build` puedes construir el proyecto. Los artefactos de construcción se almacenarán en el directorio `dist/`.

## Testing

Los comandos `ng test` y `ng e2e` te permiten ejecutar pruebas unitarias y de extremo a extremo, respectivamente.

## Internationalización (i18n) con ngx-translate

Nuestra aplicación usa ngx-translate para manejo de múltiples idiomas. Puedes enlazarlo directamente en tus plantillas HTML como se muestra a continuación:

`{{ 'HELLO' | translate }}`

Las claves de traducción son entonces referenciadas en archivos JSON ubicados en el directorio `assets/i18n/`. Actualmente, soportamos Español con el archivo `es.json`. Aquí un ejemplo de cómo se ve este archivo:

`json { "HELLO": "Hola" }`

Y para Chino, crearías un archivo llamado `chinese.json` (asegúrate de usar los códigos de idioma adecuados):

`json { "HELLO": "你好" }`

## Ayuda y referencias

Para obtener ayuda adicional sobre cómo usar Angular CLI, ejecuta `ng help` o visita la página de [Angular CLI Overview and Command Reference](https://angular.io/cli).
