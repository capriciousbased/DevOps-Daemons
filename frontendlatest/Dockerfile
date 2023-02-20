FROM node:alpine AS build-stage

WORKDIR /app

COPY package*.json /app/

RUN npm install
RUN npm install react-spring-3d-carousel --force

COPY . .

RUN npm run build

FROM nginx:alpine

COPY ./metric/ /usr/share/nginx/metric

COPY --from=build-stage /app/build/ /usr/share/nginx/html


