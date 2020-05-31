FROM node:12.16.3

WORKDIR /app
EXPOSE 34800/tcp

COPY build/ ./bin

CMD [ "node", "./build/main.js" ]