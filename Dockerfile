FROM node:20.18.1-alpine

WORKDIR /app

COPY package*.json yarn.lock ./

RUN npm install -g yarn

RUN yarn install

COPY . .

RUN cp .env.example .env

RUN echo 'JWT_SECRET="th3-n06l3st-4rt-is-th4t-0f-m4king-0th3rs-h4ppy"' >> .env

RUN cp .env.example .env.local

RUN yarn db:generate

RUN yarn db:migrate

EXPOSE 3000

CMD ["yarn", "serve"]
