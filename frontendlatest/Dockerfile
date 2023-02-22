FROM node:alpine AS build-stage

WORKDIR /app

COPY package*.json /app/

RUN npm install

COPY . .

RUN npm run build

RUN npm run test -a

FROM nginx:alpine

COPY ./metric/index.html /usr/share/nginx/metric

COPY --from=build-stage /app/build/ /usr/share/nginx/html


