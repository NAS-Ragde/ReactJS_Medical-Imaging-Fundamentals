FROM node:14 AS builder

WORKDIR /app

COPY package*.json yarn.lock ./

RUN yarn install

COPY . .

RUN yarn run build

FROM node:14

WORKDIR /app

COPY --from=builder /app/build ./build
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/yarn.lock ./

RUN yarn global add react-scripts@4.0.3

EXPOSE 80

CMD ["yarn", "start"]

