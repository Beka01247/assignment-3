# Use Node.js LTS as the base image
FROM node:16

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the NestJS app
RUN npm run build

# Expose the port your app runs on
EXPOSE 3000

# Start the app in production mode
CMD ["npm", "run", "start:prod"]
