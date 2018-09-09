FROM node:8.11

WORKDIR /usr/src/app

ARG NODE_ENV
ENV NODE_ENV $NODE_ENV

COPY package.json /usr/src/app/
RUN npm install

COPY . /usr/src/app

EXPOSE 8888

EXPOSE 3000

CMD [ "npm", "start" ]
