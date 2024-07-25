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
#RUN npm run build

# Stage 2: Serve the application
FROM node:18-alpine

# Set the working directory inside the runner container
WORKDIR /prodf

# Copy the built application from the builder stage
COPY --from=build /app /prodf

# Install only production dependencies
RUN npm install 

# Expose the port the app runs on
EXPOSE 5173

# Define the command to run the application
CMD ["npm", "run","dev"]
