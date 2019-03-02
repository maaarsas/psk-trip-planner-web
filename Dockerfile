FROM node:10.15.1-alpine as node
WORKDIR /usr/src/app
COPY package*.json package-lock.json ./
RUN npm install
COPY . .
RUN npm run ng build -- --prod --output-path=dist

FROM nginx:1.14.2-alpine
COPY nginx/default.conf /etc/nginx/conf.d/
## Remove default nginx website
RUN rm -rf /usr/share/nginx/html/*
COPY --from=node /usr/src/app/dist /usr/share/nginx/html
CMD ["nginx", "-g", "daemon off;"]
