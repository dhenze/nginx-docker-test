FROM node

COPY package.json /src/package.json
COPY server.js /src/server.js

WORKDIR /src

RUN npm install

EXPOSE 3000

CMD ["npm", "start"]
