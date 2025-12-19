#!/bin/sh 
kubectl config use-context rpi
kubectl apply -f deploy.yml
echo "Deployed to website //192.168.50.111:31031"
