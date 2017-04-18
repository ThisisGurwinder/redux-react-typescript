FROM node:6.9.2

ARG SOURCES_MIRROR=""
RUN if [ ! -z "${SOURCES_MIRROR}" ]; then echo "$SOURCES_MIRROR" > /etc/apt/sources.list ; fi

RUN npm install -g webpack
WORKDIR /app

# Cache npm install
COPY package.json /app/
RUN npm install

EXPOSE 8888

ENV PHANTOMJS_BIN phantomjs

# Add code
COPY . /app
RUN npm run build

CMD npm start