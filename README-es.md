# GIT COMMIT HISTORY APP - README

Este proyecto es un ejemplo de una aplicación full-stack que utiliza NestJS para el backend y React con Vite para el frontend. También se incluye el uso de Tailwind CSS para estilos y Docker Compose para facilitar el despliegue del proyecto.

## Tecnologías utilizadas

- **NestJS:** Framework de Node.js para construir aplicaciones backend robustas y escalables.
- **React:** Biblioteca JavaScript para construir interfaces de usuario interactivas y dinámicas.
- **Vite:** Build tool que permite una experiencia de desarrollo rápida en aplicaciones frontend con React.
- **Tailwind CSS:** Framework de CSS utilitario para estilizar la interfaz de usuario de forma rápida y eficiente.
- **Docker Compose:** Herramienta para definir y ejecutar aplicaciones Docker multi-contenedor.

## Ejecución del proyecto con Docker Compose

Para levantar el proyecto completo, asegúrate de tener Docker y Docker Compose instalados en tu sistema. Luego, sigue los siguientes pasos:

1. Clona este repositorio en tu máquina local.
2. Navega a la raíz del proyecto donde se encuentra el archivo `docker-compose.yml`.
3. Ejecuta el siguiente comando para levantar los servicios del backend y frontend:

```bash
docker-compose up
```

Esto creará y levantará los contenedores Docker para el backend (NestJS) y el frontend (React con Vite) de forma simultánea.

4. Una vez que todos los contenedores estén en ejecución, podrás acceder a la aplicación a través de los siguientes enlaces:

* Backend (NestJS): `http://localhost:8080`
* Frontend (React con Vite): `http://localhost:3000`

## Comandos de Test para NestJS

El proyecto backend (NestJS) incluye pruebas unitarias y de integración para asegurar la calidad del código. Puedes ejecutar estas pruebas dentro de Docker utilizando el siguiente comando:

```bash
docker-compose run backend pnpm run test
```

Este comando ejecutará todas las pruebas definidas en el proyecto y mostrará los resultados en la consola.

## Documentación de API con Swagger

El backend (NestJS) está documentado utilizando Swagger, lo que proporciona una interfaz interactiva para explorar y probar los endpoints de la API. Puedes acceder a la documentación en el siguiente enlace:

* Documentación de API (Swagger): `http://localhost:8080/docs`

La documentación generada por Swagger te mostrará los diferentes endpoints disponibles en el backend junto con detalles sobre los parámetros requeridos y las respuestas esperadas.

## Notas adicionales

* Si deseas detener la ejecución de los contenedores, puedes presionar `Ctrl + C` en la terminal donde se estén ejecutando los servicios y luego ejecutar el siguiente comando para detener y eliminar los contenedores:

```bash
docker-compose down
```

* Si encuentras algún problema al ejecutar el proyecto o tienes alguna pregunta, no dudes en contactarme.

¡Gracias por ver este proyecto!
