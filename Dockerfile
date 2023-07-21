# Use an official Node.js runtime as the base image
FROM node:14 AS npmbuild

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json files
COPY package*.json ./
COPY yarn.lock ./

# Install dependencies
RUN yarn install

# Copy source code and configuration files
COPY src ./src

RUN react-scripts build

COPY --from=npmbuild "build" "./build"

EXPOSE 4000

# Define the command to run the app
CMD ["yarn", "start"]
