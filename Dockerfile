# Use an official Node.js runtime as the base image
FROM node:14 AS npmbuild

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json files
COPY package*.json ./
COPY yarn.lock ./

# Install dependencies
RUN yarn install --frozen-lockfile

# Copy source code and configuration files
COPY src ./src

RUN yarn run build

# Define the command to run the app
CMD ["yarn", "start"]
COPY --from=npmbuild "./build" "./build"
