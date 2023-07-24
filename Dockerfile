# Use an official Node.js runtime as the base image
FROM node:14 AS builder

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json files
COPY package*.json yarn.lock ./

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
COPY --from=builder /app/package*.json ./

# Install only production dependencies (optional, reduces image size)
RUN yarn install --production

# Install react-scripts globally to run the development server
RUN yarn global add react-scripts

EXPOSE 4000

# Define the command to run the app
CMD ["yarn", "start"]
