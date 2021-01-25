# specify the node base image with your desired version node:<version>
FROM node:alpine

# Create app directory
WORKDIR /usr/src/app


# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
##COPY package*.json ./
COPY . .

RUN yarn 

# If you are building your code for production
# RUN npm ci --only=production
# Bundle app source
##COPY . .

##RUN yarn build

EXPOSE 5000

CMD [ "node", "dist/server.js" ]