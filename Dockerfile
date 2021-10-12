FROM node:15.12-alpine3.12

ARG name=collection

WORKDIR /var/www/${name}/
COPY . .

RUN apk update \
&& \
npm install --verbose;

ENTRYPOINT ["node", "./node_modules/mocha/bin/mocha"]
CMD []