# Use an official Node.js runtime as the base image
FROM node:16

# Set the working directory in the container
WORKDIR /app

# Copy the package.json and package-lock.json files to the working directory
COPY package*.json ./

# Install backend dependencies
RUN npm install

# Copy the backend source code to the working directory
COPY . .

# Expose a port on which the backend will listen
EXPOSE 5000

# Set the command to run the backend server
CMD ["npm", "start"]
