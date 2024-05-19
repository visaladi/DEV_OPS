
FROM node:latest  


WORKDIR /frontend/src/main  


COPY nodeapp/* /  


RUN npm install  


COPY package.json yarn.lock ./
RUN yarn install

# Copy the rest of the project files
COPY . .

# Build the project
RUN yarn build

# Expose the port the app runs on
EXPOSE 3000

# Start the app
CMD ["yarn", "start"]