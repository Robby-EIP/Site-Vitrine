FROM node:10.19

WORKDIR /usr/src/app/website

COPY package*.json ./

RUN npm install && npm install antd

EXPOSE 3000

CMD ["npm", "start"]