FROM node:16-alpine
WORKDIR /opt/app

COPY package.json package-lock.json ./
RUN npm install

COPY . .
#ENV WDS_SOCKET_PORT=0
ENV NODE_ENV=production
RUN npm run build

CMD ["npm", "run", "start"]
EXPOSE 3000

