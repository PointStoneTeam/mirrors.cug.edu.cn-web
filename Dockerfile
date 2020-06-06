FROM node:14-alpine

RUN mkdir -p /app

ENV NODE_ENV production
ENV PORT 3000
EXPOSE 3000

WORKDIR /app

COPY package.json yarn.lock /app/

RUN yarn install --frozen-lockfile

COPY . /app

RUN yarn build

CMD [ "yarn", "start" ]

