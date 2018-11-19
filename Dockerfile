FROM node:8.12-alpine

# Prepare app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app/

COPY package.json /usr/src/app/
RUN npm install
COPY . /usr/src/app/
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]