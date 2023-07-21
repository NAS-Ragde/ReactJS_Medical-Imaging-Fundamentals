# Use an official Node.js runtime as the base image
FROM node:14

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json files
COPY package*.json ./
COPY yarn.lock ./

# Install dependencies
RUN npm install

# Copy source code and configuration files
COPY src ./src

# Build the TypeScript project
RUN npm run compile

# Expose the desired port (e.g., 4000 for Apollo Server)
EXPOSE 4000

# Define the command to run the app
CMD ["npm", "start"]
