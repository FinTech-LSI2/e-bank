# Use a lightweight OpenJDK image
FROM openjdk:17-jdk-slim

# Set the working directory inside the container
WORKDIR /app

# Copy the JAR file into the container
COPY target/*.jar config-server.jar

# Expose the Config Server's default port
EXPOSE 8888

# Set the default command to run the application
CMD ["java", "-jar", "config-server.jar"]
