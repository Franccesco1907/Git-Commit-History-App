FROM node:18-alpine AS development

WORKDIR /usr/src/app

COPY backend/package.json ./
COPY backend/pnpm-lock.yaml ./


RUN npm install -g pnpm


COPY backend/tsconfig.json ./
COPY backend/nest-cli.json ./
COPY backend/src ./src


RUN pnpm install

CMD ["pnpm", "run", "start:dev"]

