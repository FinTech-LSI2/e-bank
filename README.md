step 1 : dockerize the project

RUN 
docker-compose up -d

step 2 : k8s manifest files 


RUN 
kubectl apply -f ./k8s


if you want to create the cluster localy install kind (scoop install kind) 
and run kind create cluster --config kind.yaml --name ebank


steps to configure argocd : 
kubectl create namespace argocd
kubectl apply -n argocd -f https://raw.githubusercontent.com/argoproj/argo-cd/stable/manifests/install.yaml
kubectl apply -f svc.yaml (exposing the argocd-service)
username : admin 
password : kubectl get secret argocd-initial-admin-secret -n argocd -o jsonpath="{.data.password}" | % {[System.Text.Encoding]::UTF8.GetString([System.Convert]::FromBase64String($_))}
