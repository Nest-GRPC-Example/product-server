FROM node:16-alpine

WORKDIR /app

COPY . .

ENV NODE_ENV=${NODE_ENV}
ENV DB_HOST=${DB_HOST}
ENV DB_PORT=${DB_PORT}
ENV DB_DATABASE=${DB_DATABASE}
ENV DB_USERNAME=${DB_USERNAME}
ENV DB_PASSWORD=${DB_PASSWORD}
ENV JWT_SECRET=${JWT_SECRET}
ENV MSA_HOST=${MSA_HOST}
ENV MSA_PORT=${MSA_PORT}

RUN apk add --no-cache git
RUN yarn install
RUN yarn build

CMD ["yarn", "start"]

EXPOSE ${MSA_PORT}