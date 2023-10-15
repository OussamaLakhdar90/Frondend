# Use the official Node.js base image
FROM node:17 as build

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy the application code into the container
COPY . /usr/src/app
# Install application dependencies
RUN npm install

# Build the React app (if needed, for production)
RUN npm run build

# Install a lightweight web server
RUN npm install -g serve

# Expose the port your application will listen on
EXPOSE 3000

# Define the command to serve the React app
CMD ["serve", "-s", "build", "-l", "3000"]
