FROM node:12.16.3

WORKDIR /app

COPY build/ ./bin

CMD [ "node", "./bin/main.js" ]