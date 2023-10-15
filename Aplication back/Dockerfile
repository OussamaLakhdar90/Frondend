# Use an appropriate base image for your Java application
FROM openjdk:17-jdk

COPY create-database.sql /docker-entrypoint-initdb.d/

# Copy your JAR file into the container
COPY . /usr/src/app

# Set the working directory
WORKDIR /usr/src/app

# Expose the port that your Java application listens on
EXPOSE 9099



CMD ["java", "-jar", "/usr/src/app/ProjetFindetude.jar"]
