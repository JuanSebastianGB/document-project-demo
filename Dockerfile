FROM node:alpine AS build
WORKDIR /app
COPY package.json .
RUN npm install
COPY . .
EXPOSE 5500
RUN npm run docs

FROM nginx:alpine
COPY --from=build app/docs /usr/share/nginx/html