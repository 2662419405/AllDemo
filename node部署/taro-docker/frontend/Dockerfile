FROM node:10-alpine
WORKDIR /usr/src/app
ADD . /usr/src/app
RUN npm config set registry https://registry.npm.taobao.org/ && \  
    npm install -g @tarojs/cli && \
    npm i && \
    npm run build:weapp
#pm2在docker中使用命令为pm2-docker
CMD ["pm2-runtime", "start", "--json", "process.json"]
