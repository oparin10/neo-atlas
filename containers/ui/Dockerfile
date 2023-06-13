FROM node:16-alpine as BUILD


WORKDIR /app

COPY ui/ .

RUN npm install

RUN npm run build


FROM nginx:alpine


COPY --from=BUILD /app/dist/neo-atlas /usr/share/nginx/html


EXPOSE 80