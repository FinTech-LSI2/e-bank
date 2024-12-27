### dockerize the project

 ```bash
docker-compose up -d
```
### if you want to create the cluster localy install kind 
 ```bash
scoop install kind
 kind create cluster --config kind.yaml --name ebank
```

###  k8s manifest files 


 ```bash
kubectl apply -f ./k8s
```



### steps to configure argocd : 
 ```bash
kubectl create namespace argocd
kubectl apply -n argocd -f https://raw.githubusercontent.com/argoproj/argo-cd/stable/manifests/install.yaml
kubectl apply -f svc.yaml 
```
### username : admin
 
### password :
 ```bash
 kubectl get secret argocd-initial-admin-secret -n argocd -o jsonpath="{.data.password}" | % {[System.Text.Encoding]::UTF8.GetString([System.Convert]::FromBase64String($_))}
```
### use the helm charts
 ```bash
 helm install ebank-helm ./my-helm-app

 
```

### upgreade the app
 ```bash
helm upgrade my-app ./my-helm-app \
        --set client.image.tag=${BUILD_NUMBER}
```