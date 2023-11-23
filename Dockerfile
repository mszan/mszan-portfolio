FROM node:16

# Needs to be passed via --build-arg.
ARG REACT_APP_EMAILJS_USERID
ENV REACT_APP_EMAILJS_USERID=$REACT_APP_EMAILJS_USERID

WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

COPY package.json /app/

RUN npm install -g serve

RUN npm install

COPY ./ /app/

RUN npm run build

CMD serve -s out -l 3000