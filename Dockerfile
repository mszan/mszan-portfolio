FROM node:lts-alpine

WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

COPY package.json /app/

RUN npm install -g serve

RUN npm install

COPY ./ /app/

RUN npm run build

CMD serve -s out -l 3000