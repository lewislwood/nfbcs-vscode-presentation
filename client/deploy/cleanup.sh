echo "Cleaning up test kubernetes"
kubectl config use-context docker-desktop
kubectl delete -f deploy.yml
