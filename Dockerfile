FROM node:14 AS builder

WORKDIR /app

COPY package*.json yarn.lock ./

RUN yarn install

COPY . .

RUN yarn run build

FROM nginx:alpine

WORKDIR /app

COPY --from=builder /app/build /usr/share/nginx/html

RUN yarn global add react-scripts@4.0.3

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]


