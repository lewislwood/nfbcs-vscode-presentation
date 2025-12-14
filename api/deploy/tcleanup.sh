#=!/bin/sh
echo Cleaning up  Test
kubectl config use-context docker-desktop
kubectl delete -f deploy-test.yml
docker rmi nfbcs-api -f
 