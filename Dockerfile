FROM node:10

WORKDIR /usr/src/frontend

COPY package*.json ./

RUN yarn install

COPY . .

RUN yarn build

CMD [ "yarn", "run", "start" ]
