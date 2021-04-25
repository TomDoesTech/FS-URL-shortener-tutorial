FROM node:12-alpine

ADD package.json /tmp/package.json

RUN rm -rf build

RUN cd /tmp && npm install -q

RUN npm dedupe

# Code base
ADD ./ /src
RUN rm -rf /src/node_modules && cp -a /tmp/node_modules /src/

# Define working directory
WORKDIR /src

RUN npm run-script build

CMD ["node", "build/src/app.js"]

