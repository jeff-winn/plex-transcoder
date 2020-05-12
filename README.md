# Plex Transcoder
This project has taken inspiration from the UnicornTranscoder project.

| Branch | Build Status | Quality Gate | Coverage |
| ------ | ------------ | ------------ | -------- |
| master | [![Build status](https://ci.appveyor.com/api/projects/status/fnt2rjguslcb29ak?svg=true)](https://ci.appveyor.com/project/winnster/plextranscoder) | N/A | N/A |
| develop | [![Build status](https://ci.appveyor.com/api/projects/status/fnt2rjguslcb29ak/branch/develop?svg=true)](https://ci.appveyor.com/project/winnster/plextranscoder/branch/develop) | N/A | N/A |


### Project Goals
- Provide scaleable kubernetes managed transcoding sessions.
- Docker based deployment strategy.
- Support GPU based transcoding.
- Support RAMDISK transcoding on Linux (if possible - Plex seems to support chunking)

### Docker Hub
This project is being hosted on DockerHub!
https://hub.docker.com/repository/docker/jeffwinn/plex-transcoder