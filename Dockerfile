FROM node:14

WORKDIR /usr/parking_lot

COPY ./ ./

RUN npm install

CMD ["npm", "start"]

