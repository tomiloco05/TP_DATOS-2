

Proyecto de ejemplo para un sistema de chat utilizando **Spring Boot** y **Angular**.

## Backend

El backend se encuentra en la carpeta `chat-backend` y utiliza Spring Boot con MongoDB.

Para compilarlo y ejecutarlo:

```bash
cd chat-backend
./mvnw spring-boot:run
```

La API estará disponible en `http://localhost:8080/api/messages`.
El backend permite solicitudes CORS desde `http://localhost:4200`, lo que
facilita el desarrollo junto al frontend de Angular.

## Frontend

El frontend Angular se encuentra en `chat-frontend`.
Este proyecto se creó utilizando **Angular CLI**, por lo que necesitarás tener
la herramienta instalada globalmente o utilizar `npx` para ejecutar los
comandos de Angular.

Para instalar las dependencias y ejecutar la aplicación de desarrollo:

```bash
cd chat-frontend
npm install
ng serve
```

El frontend se servirá en `http://localhost:4200`.

This project is licensed under the MIT License. See the LICENSE file for details.
