step 1 : dockerize the project

RUN 
docker-compose up -d

step 2 : k8s manifest files 


RUN 
kubectl apply -f ./k8s


if you want to create the cluster localy install kind (scoop install kind) 
and run kind create cluster --config kind.yaml --name ebank