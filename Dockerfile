FROM node:14-alpine
WORKDIR /app
COPY server.js .
COPY public/ public/
EXPOSE 8888
CMD ["node", "server.js"]
