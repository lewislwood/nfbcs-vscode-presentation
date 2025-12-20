#=!/bin/sh
echo Cleaning up  Test
kubectl config use-context docker-desktop
kubectl delete -f deploy.yml
docker rmi nfbcs-api:latest -f
 