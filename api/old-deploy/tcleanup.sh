#=!/bin/sh
echo Cleaning up  Test
kubectl config use-context docker-desktop
kubectl delete -f deploy-test.yml
docker rmi lewislwood/nfbcs-api -f
 
 
