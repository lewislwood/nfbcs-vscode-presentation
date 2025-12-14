#!/bin/sh
echo building Raspberry PI Image
sudo docker build --platform linux/arm64 -t lewislwood/nfbcs-api ../.