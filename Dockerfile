FROM node:14

WORKDIR /app

COPY package*.json yarn.lock ./

RUN yarn install

COPY . .

RUN yarn run build

EXPOSE 4000

CMD ["yarn", "start"]

