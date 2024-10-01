# Use an official Node.js image from the Docker Hub
FROM node:16-alpine

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json (if available)
COPY package*.json ./

# Install project dependencies
RUN npm install

# Copy the rest of the application code to the working directory
COPY . .

# Expose port 8080 for the application
EXPOSE 8080

# Set the environment variable for production
ENV NODE_ENV production

# Start the app using a simple HTTP server (you need to install http-server as a dev dependency)
RUN npm install -g http-server

# Command to start the app
CMD ["http-server", "-p", "8080"]
