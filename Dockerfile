FROM node:21
WORKDIR /usr/src/app
COPY package*.json app.js ./
RUN npm install
EXPOSE 8000
CMD ["node", "app.js"]