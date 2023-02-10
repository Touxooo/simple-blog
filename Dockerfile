FROM node:latest

RUN mkdir app
COPY blog app/

RUN npm i
EXPOSE 5173
WORKDIR /app

EXPOSE 5173