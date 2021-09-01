FROM strapi/base:14-alpine

WORKDIR /method-toolkit-backend

COPY package.json /method-toolkit-backend/package.json
COPY yarn.lock /method-toolkit-backend/yarn.lock

ENV PATH /method-toolkit-backend/node_modules/.bin:$PATH

RUN yarn install

COPY . .

ENV NODE_ENV production

RUN yarn build

EXPOSE 1337

CMD ["yarn", "start"]
