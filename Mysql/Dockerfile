FROM openjdk:17
RUN mkdir -p /app

COPY . /app

WORKDIR /app

expose 9099:9099

ENTRYPOINT [ "java","-jar","projetfindetude.jar" ]