FROM node:12.16.3

WORKDIR /usr/lib/plex-transcoder

COPY package*.json ./
COPY build/ ./

RUN npm install
RUN apt update
RUN apt install ffmpeg

EXPOSE 34800/tcp

CMD [ "node", "main.js" ]