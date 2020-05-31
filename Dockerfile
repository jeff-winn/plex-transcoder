FROM node:12.16.3

WORKDIR /usr/lib/plex-transcoder
EXPOSE 34800/tcp

COPY build/ ./

CMD [ "node", "main.js" ]