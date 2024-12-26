step 1 : dockerize the project

RUN 
docker-compose up -d to test
it will take some time cause  the projects are being built inside the containers 
if you want to cut some time run mvn clean install before running docker-compose up -d  just remove mvn clean install from the dockerfiles , 
and make sure ur using the openjdk 21


step 2 : k8s manifest files 


