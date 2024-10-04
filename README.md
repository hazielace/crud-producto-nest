# CRUD de Productos en NestJS

## Instalación

1. Clonar el repositorio o descarga el código.
2. Ejecuta `npm install` o `yarn install` para instalar las dependencias.
3. Configurar el archivo `.env` con los datos de conexión a la BD, si es necesario.
4. Inicia el servidor de desarrollo con `npm run start:dev` o `yarn start:dev`.
5. Se utilizo el puerto "4000" para probar las rutas, lo puede cambiar en el archivo `main.ts` en `app.listen(4000)`;

## Rutas

- `GET /productos` - Ver lista de productos.
- `POST /productos` - Crear un nuevo producto.
- `GET /productos/:id` - Ver un producto específico.
- `PUT /productos/:id` - Editar un producto.
- `DELETE /productos/:id` - Eliminar un producto.

## Desarrollo

- Se tomo como guía la documentacion oficial de NestJs
- Se uso Prisma como ORM
- Como BD se uso Sqlite
- Se implementó el CRUD usando controladores y servicios.

## Se adjunta postman test-apis 
