FROM node:18

EXPOSE 80

RUN mkdir /app
RUN chmod -R 777 /app
RUN chown -R node /app
RUN chown -R node "/root/.npm"
RUN npm install ehpadjs -g

COPY ./start.js /start.js

ENV EHPADJS_NODEMON=
ENV EHPADJS_PORT="false"
ENV EHPADJS_COMMAND="false"
ENV EHPADJS_NPM_INSTALL="flase"

ENTRYPOINT node /start.js