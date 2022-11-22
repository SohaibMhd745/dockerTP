FROM node:18

EXPOSE 80

WORKDIR /home/app

COPY . .

RUN chown -R 1000:1000 "/root/.npm"
RUN npm install