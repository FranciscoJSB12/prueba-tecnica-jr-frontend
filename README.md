# PRUEBA TÉCNICA - FRONTEND DEVELOPER

## Descripción

El presente proyecto consiste en una SPA (Single Page Application)
desarrollada con React, la cual permite navegar por el mundo de los Pokemones gracias
a la información sumistrada por la [Pokemon API](https://pokeapi.co/).
Esta aplicación se encarga de consultar dicha API y obtener un listado de Pokemones ( primeros 15 ) y posteriormente ver los detalles de cada personaje sin recargar la página. Luego que se regresa a la vista principal es capaz de resaltar los últimos Pokemones vistos.
Así mismo, cuenta con botones de páginación para cambiar el listado mostrado en pantalla.
Finalmente, es capaz de recordar la última lista renderizada por medio de guardar el último offset
en localStorage.

## Tecnologías empleadas

- API: Pokemon API
- React
- Nextjs
- SWR
- TailwindCSS

Se empleó Nextjs gracias a la cantidad de optimizaciones que brinda, por ejemplo, el componente Image.Por otro lado, dado que el hook useSWR fue creado por la misma compañía se eligió este para mejor integración. Por último se trabajó con TailwindCSS ya que permite dar estilos de forma rápida y Nextjs facilita configurarlo de forma muy amena.

## Cómo instalar y correr el proyecto.

### Primeramente, clone el proyecto del repositorio de GitHub:

```
git clone url
```

### Luego instale las dependencias requeridas corriendo en su terminal:

```
npm install
```

### Para correr el proyecto en modo de desarrollo ejecute el comando:

```
npm run dev
```

### En caso de correr el proyecto en modo de producción, primero genere el build:

```
npm run build
```

De esta forma Nextjs se encargará de optimizar y preparar el proyecto para producción. Se debe esperar mientras se realiza este proceso.

### Arranque la aplicación finalmente corriendo:

```
npm start
```

### Abra su navegador de preferencia y escriba:

```
localhost:3000
```

### Puede observar la versión del proyecto desplegada en el siguiente enlace:

[Proyecto desplegado](https://prueba-tecnica-jr-frontend.vercel.app/)
