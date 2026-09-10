# Stage 0 : Build Angular avec Node.js
FROM node:22-alpine AS build-stage
WORKDIR /app
COPY package*.json /app/
RUN npm ci
COPY ./ /app/
RUN npm run build

# Stage 1 : Servir avec Nginx
FROM nginx:stable-alpine
COPY --from=build-stage /app/dist/Netflix/browser/ /usr/share/nginx/html/
COPY nginx/default.conf /etc/nginx/conf.d/default.conf