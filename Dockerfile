FROM node:latest

RUN mkdir -p /post

WORKDIR /post

COPY package*.json ./

RUN npm ci

COPY . .

EXPOSE 3000

CMD ["npm" ,"start"]