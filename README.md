# Instrucciones de Ejecución.

Navegar a la carpeta TestMacropay desde la terminal.

Ejecutar el comando
```
nodemon app.js
```

El puerto en el cual se ejcuta es el **8080**

## Para consumir los servicios REST son los siguientes:
```
GET: http://localhost:8080/api/contacts?phrase=aus
     http://localhost:8080/api/contacts
GET: http://localhost:8080/api/contacts/id
DELETE: http://localhost:8080/api/contacts/id
```
En caso de tener detalles con las librerias de node, favor de eliminar la carpeta de node_modules y posterior ejecutar el siguiente comando:
```
npm install
```
