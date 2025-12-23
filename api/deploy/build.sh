
echo "Building Test Image"
docker buildx build --no-cache --platform linux/amd64,linux/arm64 -t lewislwood/nfbcs-api:1.0 ../. 