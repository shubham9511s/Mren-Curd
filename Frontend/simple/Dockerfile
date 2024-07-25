# Stage 1: Build the application
FROM node:18-alpine as build

# Set the working directory inside the builder container
WORKDIR /app

# Copy the package.json and package-lock.json files
COPY package*.json ./

# Install the dependencies
RUN npm install && npm audit fix

# Copy the rest of the application code
COPY . .

# Build the application
RUN npm run build

# Stage 2: Serve
FROM nginx:1.23-alpine

# Copy the built assets from the build stage
COPY --from=build /app/dist /usr/share/nginx/html

# Copy a custom Nginx configuration file if needed
# COPY nginx.conf /etc/nginx/nginx.conf

# Expose the port on which the server will run (default port is 80 for Nginx)
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]