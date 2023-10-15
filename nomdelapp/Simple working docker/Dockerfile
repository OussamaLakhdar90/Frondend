# Test web app that returns the name of the host/pod/container servicing req
FROM node:17 as build


# Create directory in container image for app code
RUN mkdir -p /usr/src/app

# Copy app code (.) to /usr/src/app in container image
COPY . /usr/src/app

# Set working directory context
WORKDIR /usr/src/app

# Install dependencies from package.json
RUN npm install

RUN npm run build

# Set working directory context
WORKDIR /usr/src/app/src

# Use a lightweight Nginx web server as the final base image
FROM nginx:alpine
RUN mkdir -p /usr/src/app
# Copy the built React application from the build stage to the web server's public directory
COPY --from=build /usr/src/app /usr/src/app
COPY --from=build /usr/src/app/build /usr/share/nginx/html

ENV MYSQL_ROOT_PASSWORD root
ENV MYSQL_DATABASE=test
ENV MYSQL_USER=user
ENV MYSQL_PASSWORD=root


# Install MySQL
RUN set -eux; \
    groupadd -r mysql && useradd -r -g mysql mysql; \
    mkdir /docker-entrypoint-initdb.d; \
    apt-get update; \
    apt-get install -y --no-install-recommends \
        mysql-server \
    ; \
    rm -rf /var/lib/apt/lists/*; \
    { \
        echo '[mysqld]'; \
        echo 'skip-host-cache'; \
        echo 'skip-name-resolve'; \
        echo 'user = mysql'; \
        echo 'datadir = /var/lib/mysql'; \
    } > /etc/mysql/my.cnf; \
    { \
        echo '#!/bin/sh'; \
        echo 'set -e'; \
        echo; \
        echo 'cmd="$1"'; \
        echo; \
        echo 'if [ -z "$cmd" ]; then'; \
        echo '  cmd="--skip-networking --socket=/var/run/mysqld/mysqld.sock"'; \
        echo 'fi'; \
        echo; \
        echo 'exec mysqld $cmd'; \
    } > /usr/local/bin/docker-entrypoint.sh; \
    chmod +x /usr/local/bin/docker-entrypoint.sh; \
    apt-get remove -y --purge && apt-get clean; \
    find /var/lib/apt/lists /var/cache/apt/archives -type f -delete

# Expose port 80 to the outside world
EXPOSE 80
EXPOSE 3306
# Start the Nginx web server when the container is run
CMD ["sh", "-c", "service mysql start && npm start"]
CMD ["nginx", "-g", "daemon off;"]