FROM node:10.13-alpine
ENV NODE_ENV production
WORKDIR /app
COPY ["package.json", "package-lock.json*", "npm-shrinkwrap.json*", "./"]
RUN npm install --production --silent && mv node_modules ../
RUN npm run build
COPY . .
EXPOSE 3000
CMD npm start