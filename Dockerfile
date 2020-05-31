FROM node:12.16.3

WORKDIR /usr/lib/plex-transcoder

COPY package*.json .
COPY build/ .

RUN npm install

EXPOSE 34800/tcp

CMD [ "node", "main.js" ]