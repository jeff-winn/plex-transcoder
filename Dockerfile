FROM plexinc/pms-docker:latest

RUN apt-get install curl -y
RUN curl -sL https://deb.nodesource.com/setup_12.x | bash -
RUN apt-get install nodejs -y

WORKDIR /usr/src/plex-transcoder

COPY package*.json ./
COPY tsconfig*.json ./
COPY ./src src

RUN npm install
RUN npm run build

RUN mkdir ./bin
RUN \
# Copy the transcoder
    cp -f /usr/lib/plexmediaserver/Plex\ Transcoder ./bin/Plex\ Transcoder

RUN mkdir ./bin/lib
RUN \
# Copy the libraries
    cp -R /usr/lib/plexmediaserver/lib ./bin