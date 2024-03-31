FROM node:20-alpine AS builder

ENV NODE_ENV production
WORKDIR /app

COPY ./package*.json ./

COPY . .
RUN npm install
RUN npm run build

FROM nginx
COPY --from=builder /app/build /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80 443
CMD [ "nginx", "-g", "daemon off;" ]