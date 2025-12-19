#=!/bin/sh
echo Deploying Test Imageg Locally
kubectl config use-context docker-desktop
kubectl apply -f deploy-test.yml
echo should be deployed @ 31030