#=!/bin/sh
echo "Building rpi Image"

docker buildx build --platform linux/arm64 -t lewislwood/nfbcs-api:latest ../. 