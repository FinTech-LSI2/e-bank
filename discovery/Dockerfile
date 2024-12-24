FROM  ayman909/customjdk:v1  AS BUILD_IMAGE
COPY . .
RUN mvn clean package

FROM  ayman909/customjdk:v1

# install

# label for the image
LABEL Description="Eureka Server" Version="0.0.1"

# the version of the archive
ARG VERSION=0.0.1

# mount the temp volume
VOLUME /tmp


COPY  --from=BUILD_IMAGE target/*.jar app.jar

# touch the archive for timestamp
RUN sh -c 'touch /app.jar'

# entrypoint to the image on run
ENTRYPOINT ["java","-Djava.security.egd=file:/dev/./urandom","-jar","/app.jar"]