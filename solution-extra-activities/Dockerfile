FROM node:10-alpine

RUN mkdir -p /app/dist
WORKDIR /app
COPY ./dist /app/dist

EXPOSE 8080

CMD [ "node", "dist/server" ]
