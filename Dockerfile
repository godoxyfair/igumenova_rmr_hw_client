FROM node:16-alpine as builder
WORKDIR /opt/app

COPY package.json package-lock.json ./
RUN npm ci

COPY . .
#ENV WDS_SOCKET_PORT=0
ENV NODE_ENV=production
RUN npm run build


FROM nginx:alpine

RUN rm -rf /usr/share/nginx/html/*

COPY --from=builder /opt/app/build /usr/share/nginx/html
COPY ./etc/nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
ENTRYPOINT ["nginx", "-g", "daemon off;"]