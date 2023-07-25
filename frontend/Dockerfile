# Etapa 1: Construir la aplicación de React
FROM node:18-alpine AS development

WORKDIR /usr/src/app

COPY frontend/package.json frontend/pnpm-lock.yaml ./

RUN npm install -g pnpm
RUN pnpm install

COPY frontend/ ./

EXPOSE 3000

# Comando para iniciar la aplicación de React en modo de desarrollo
CMD ["pnpm", "run", "dev"]