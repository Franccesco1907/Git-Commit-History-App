# FROM node:18-alpine AS development

# WORKDIR /usr/src/app

# COPY frontend/package.json ./
# COPY frontend/pnpm-lock.yaml ./

# RUN npm install -g pnpm

# COPY frontend/ ./

# RUN pnpm install

# CMD ["pnpm", "run", "dev"]

FROM node:18-alpine
WORKDIR /app
COPY package.json .
RUN npm install
COPY . .
EXPOSE 3000
CMD [ "npm", "run", "dev" ]