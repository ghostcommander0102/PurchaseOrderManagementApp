# Use an official Node.js runtime as the base image
FROM node:16 as build

# Set the working directory in the container
WORKDIR /app

# Copy the package.json and package-lock.json files to the working directory
COPY package*.json ./

# Install frontend dependencies
RUN npm install

# Copy the frontend source code to the working directory
COPY . .

# Build the frontend app
RUN npm run build

# Use a lightweight web server to serve the built app
FROM nginx:alpine
COPY --from=build /app/build /usr/share/nginx/html
EXPOSE 80

# Set the command to start the web server
CMD ["nginx", "-g", "daemon off;"]
