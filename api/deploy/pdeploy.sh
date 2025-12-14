#=!/bin/sh
echo Deploying to PI cluster
kubectl config use-context rpi 
kubectl apply -f deploy.yml
echo should be deployed to PI and Live!!! Verify @ //192.168.50.111:31010