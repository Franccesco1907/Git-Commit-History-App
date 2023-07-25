# GIT COMMIT HISTORY APP - README

This project is an example of a full-stack application that uses NestJS for the backend and React with Vite for the frontend. It also includes the use of Tailwind CSS for styling and Docker Compose to facilitate project deployment.

## Technologies Used

* **NestJS:** Node.js framework for building robust and scalable backend applications.
* **React:** JavaScript library for building interactive and dynamic user interfaces.
* **Vite:** Build tool that enables fast development experience in frontend applications with React.
* **Tailwind CSS:** Utility-first CSS framework for quickly styling the user interface.
* **Docker Compose:** Tool for defining and running multi-container Docker applications.

## Running the Project with Docker Compose

To run the complete project, make sure you have Docker and Docker Compose installed on your system. Then, follow the steps below:

1. Clone this repository to your local machine.
2. Navigate to the root of the project where the `docker-compose.yml` file is located.
3. Run the following command to start the backend and frontend services:

```bash
docker-compose up
```

This will create and start Docker containers for the backend (NestJS) and frontend (React with Vite) simultaneously.

4. Once all the containers are up and running, you can access the application through the following links:

* Backend (NestJS): `http://localhost:8080`
* Frontend (React with Vite): `http://localhost:3000`

## Test Commands for NestJS

The backend project (NestJS) includes unit and integration tests to ensure code quality. You can run these tests inside Docker using the following command:

```bash
docker-compose run backend pnpm run test
```

This command will execute all the defined tests in the project and display the results in the console.

## API Documentation with Swagger

The backend (NestJS) is documented using Swagger, which provides an interactive interface to explore and test API endpoints. You can access the documentation at the following link:

* API Documentation (Swagger): `http://localhost:8080/docs`

The Swagger-generated documentation will show you the different endpoints available in the backend along with details about the required parameters and expected responses.

## Additional Notes

* If you want to stop the containers, you can press `Ctrl + C` in the terminal where the services are running and then execute the following command to stop and remove the containers:

```bash
docker-compose down
```

* If you encounter any issues while running the project or have any questions, feel free to contact me.

Thank you for checking out this project!
