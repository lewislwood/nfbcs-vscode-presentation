#!/bin/sh 
echo "Building docker image nfbcs-app"
# docker build --platform linux/arm64 -t lewislwood/nfbcs-app .
docker buildx build --platform linux/amd64,linux/arm64 -t lewislwood/nfbcs-app:latest ../. 
