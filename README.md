# TaskApp-API

API REST para la gestión de tareas. Este proyecto permite crear, consultar, actualizar y eliminar tareas, sirviendo como backend para aplicaciones de gestión personal o de equipos. Incluye endpoints para manipular tareas .

## Características

- API RESTful para gestión de tareas (CRUD: Crear, Leer, Actualizar, Eliminar).
- Implementación en Python (Django REST Framework).
- Estructura lista para ser consumida por clientes web o móviles.
- Cliente web construido en React + Vite (ubicado en `client/`).

## Uso

Puedes consumir la API desde cualquier cliente HTTP (Postman, curl, fetch, etc.) o desde el cliente React incluido.

Ejemplo usando `curl`:
```bash
curl http://localhost:8000/tasks/api/v1/tasks/
```

## Estructura del proyecto

- `/` - Código fuente del backend (API).
- `/client` - Cliente frontend en React.
