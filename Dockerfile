FROM node:12.16.3

WORKDIR /app
EXPOSE 8080

COPY build/ ./bin

CMD [ "node", "./bin/main.js" ]