FROM node:14 AS production

ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

WORKDIR /usr/src/app

COPY package.json .
COPY npm.lock .

RUN npm install --production=false

COPY . .

RUN npm build

CMD ["node", "server.js"]