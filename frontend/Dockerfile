FROM node:14-buster-slim AS builder

WORKDIR /app/frontend
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

FROM nginx
COPY nginx.conf /etc/nginx/conf.d/default.conf
WORKDIR /usr/share/nginx/html
RUN apt-get update && apt-get install -y certbot python-certbot-nginx
RUN certonly --webroot --webroot-path=/var/www/html --email your.email@example.com --agree-tos -d example.com
RUN rm -rf ./*
COPY --from=builder /app/frontend/build .
ENTRYPOINT [ "nginx", "-g", "daemon off;" ]
