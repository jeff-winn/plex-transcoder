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
RUN mkdir ./bin/lib

# Transfer the stock transcoder, and clean up all the extra files.
RUN cp -f /usr/lib/plexmediaserver/Plex\ Transcoder ./bin/Plex\ Transcoder
RUN cp -R /usr/lib/plexmediaserver/lib ./bin
RUN rm -r /etc/cont-init.d
RUN rm -r /etc/services.d/plex
RUN rm -r /usr/lib/plexmediaserver