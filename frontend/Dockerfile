# Stage 1: Build the Angular app
FROM node:20.13.1-alpine3.19 AS build
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build:ssr
ENV PORT 4000
EXPOSE $PORT
CMD ["node", "dist/frontend/server/server.mjs"]
