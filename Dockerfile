FROM node:16-slim
WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci