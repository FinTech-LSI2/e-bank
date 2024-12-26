step 1 : dockerize the project

RUN 
docker-compose up -d

step 2 : k8s manifest files 


RUN 
kubectl apply -f ./k8s
