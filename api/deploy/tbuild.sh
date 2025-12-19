#=!/bin/sh
pwd
echo Building Test Image
# docker build -t lewislwood/nfbcs-api ../.

docker buildx build --platform linux/amd64,linux/arm64 -t lewislwood/nfbcs-api ../. 