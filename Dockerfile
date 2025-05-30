# Use official Node.js image
FROM node:18

# Set working directory inside container
WORKDIR /app

# Copy package.json and package-lock.json if available
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy all project files
COPY . .

# Build the project (adjust if you don’t have build script)
RUN npm run build

# Expose port 3000 (adjust if your app uses another port)
EXPOSE 3000

# Start the app
CMD ["npm", "start"]