FROM node:alpine:3.11

WORKDIR /method-toolkit-backend

COPY ./package.json ./
COPY ./yarn.lock ./

ENV PATH /method-toolkit-backend/node_modules/.bin:$PATH

COPY . .

RUN yarn install

ENV NODE_ENV production

RUN yarn build

EXPOSE 1337

CMD ["yarn", "start"]
