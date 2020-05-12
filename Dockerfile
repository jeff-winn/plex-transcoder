FROM node:12.16.3

WORKDIR /app

COPY build/ .

CMD [ "node", "main.js" ]