FROM node:16.19
ENV NODE_ENV=production

WORKDIR /app

ADD . .
RUN yarn install

ENTRYPOINT ["node", "out/index.js"]

