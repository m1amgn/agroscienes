FROM node:16-buster-slim AS builder
WORKDIR /app/frontend
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

FROM nginx:alpine
COPY nginx.conf /etc/nginx/conf.d/default.conf
WORKDIR /usr/share/nginx/html
RUN rm -rf ./*
COPY --from=builder /app/frontend/build .
EXPOSE 80 443
ENTRYPOINT ["nginx", "-g", "daemon off;"]
