# Use an official Node.js runtime as the base image
FROM node:14 AS builder

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json files
COPY package*.json ./
COPY yarn.lock ./

# Install dependencies
RUN yarn install

# Copy source code and configuration files
COPY . .

# Build the application
RUN yarn run build

# Start a new stage for the final image
FROM node:14

# Set the working directory inside the container
WORKDIR /app

# Copy build artifacts from the "builder" stage to the final image
COPY --from=builder /app/build ./build

EXPOSE 4000

# Define the command to run the app
CMD ["yarn", "start"]
