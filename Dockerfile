FROM node:latest

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 8081

EXPOSE 3000

CMD [ "npm", "start" ]

