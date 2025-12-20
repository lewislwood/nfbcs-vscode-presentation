#=!/bin/sh
echo "Deploying to docker desktop"
kubectl config use-context docker-desktop
kubectl apply -f deploy.yml
echo should be deployed to PI and Live!!! Verify @ //192.168.50.111:31031