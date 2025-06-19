

Proyecto de ejemplo para un sistema de chat utilizando **Spring Boot** y **Angular**.

## Backend

El backend se encuentra en la carpeta `chat-backend` y utiliza Spring Boot con MongoDB.

Para compilarlo y ejecutarlo:

```bash
cd chat-backend
./mvnw spring-boot:run
```

La API estará disponible en `http://localhost:8080/api/messages`.

## Frontend

El frontend Angular se encuentra en `chat-frontend`.

Para instalar las dependencias y ejecutar la aplicación:

```bash
cd chat-frontend
npm install
ng serve
```

El frontend se servirá en `http://localhost:4200`.
=======
This project is licensed under the MIT License. See the LICENSE file for details.
