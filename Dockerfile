# Stage 1: Build
FROM node:16 as builder

WORKDIR /app

COPY package.json yarn.lock ./

RUN yarn

COPY . .

RUN yarn build


# Stage 2: Deploy
FROM nginx:1.25.2

COPY --from=builder /app/dist /usr/share/nginx/html

CMD ["nginx", "-g", "daemon off;"]
