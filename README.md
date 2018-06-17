# vote-ts-vue

> create project by vue-cli version 3, support typescript, pwa and etc

[![Build Status](https://travis-ci.org/Raoul1996/vote-ts-vue.svg?branch=master)](https://travis-ci.org/Raoul1996/vote-ts-vue)
[![codecov](https://codecov.io/gh/Raoul1996/vote-ts-vue/branch/master/graph/badge.svg)](https://codecov.io/gh/Raoul1996/vote-ts-vue)

## Usage

### Install

```shell
npm i -g @vue/cli
```
or by yarn

```shell
yarn global add @vue/cli
```

### Run project

```shell
# install dependencies
npm i

# serve with hot reload at localhost:8080
npm run serve
```

more configure see the [vue.config.js](vue.config.js)

## Resource

1. [Vue Cli](https://cli.vuejs.org/guide/cli-service.html)
2. [qshell](https://github.com/qiniu/qshell)
3. [codecov](https://codecov.io/)

## Note 

### configure tarvis-ci && upload the static resource to CDN 

* initial repo by travis command tools
```shell
# travis login via github email and password
travis login

# inital a travis project
travis init

# encrypt the ssh private key, if you want to scp your file to server
travis encrypt-file ~/.ssh/your_private_key --add
```
* configure the [`.travis.yml`](.travis.yml)

* download the `qshell`, which can upload the dist file to [qiniu cloud](https://portal.qiniu.com/create) via terminal. here is the [qshell's document](https://github.com/qiniu/qshell).

```shell
chmod +x qshell

# ak means access key, and sk means secret key
./qshell account ak sk
```
* configure the `accessKey` and `secretKey` on [travis-ci.org](https://travis-ci.org)

* configure the [qshell.json](.qshell.json) for `qupload`, here is the [document](https://github.com/qiniu/qshell/blob/master/docs/qupload.md)

* set the `baseUrl` in [vue.config.js](vue.config.js), which you can get the static resource via this domain form your qiniu bucket

### configure coverage on coverage.io

- [example-typescript](https://github.com/codecov/example-typescript)
