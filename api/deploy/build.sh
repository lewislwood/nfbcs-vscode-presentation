#=!/bin/sh
echo "Building Test Image"

docker buildx build --platform linux/amd64,linux/arm64 -t lewislwood/nfbcs-api:latest ../. 