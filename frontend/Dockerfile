FROM node:bookworm

WORKDIR /app

COPY . .

RUN npm install -g npm

RUN npm i

RUN npm run build

EXPOSE 3000

CMD ["npm", "run", "start:dev"]