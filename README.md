# vote-ts-vue

> create project by vue-cli version 3, support typescript, pwa and etc

[![Build Status](https://travis-ci.org/Raoul1996/vote-ts-vue.svg?branch=master)](https://travis-ci.org/Raoul1996/vote-ts-vue)
[![CircleCI](https://circleci.com/gh/Raoul1996/vote-ts-vue.svg?style=svg)](https://circleci.com/gh/Raoul1996/vote-ts-vue)

*English is not my native language, please excuse the typing errors.*

*第一次尝试使用英语写 Readme，请多包涵*

## Usage

### Install

```shell
npm i -g @vue/cli
```
or by yarn

```shell
yarn global add @vue/cli
```

### Run project(front-end)

```shell
# clone code repo
git clone https://github.com/Raoul1996/vote-ts-vue.git

# install dependencies
npm i

# serve with hot reload at localhost:8080
npm run serve
```

more configure see the [vue.config.js](vue.config.js)

### Run project(back-end)

it's a egg.js(node) project, please make sure your node version is 8+,
the database is mysql, please import the seek file in your mysql, and change configuration.
also need to set some variables in your `.bashrc` or `.zshrc`, include `accessKey`(as ak), 
`secretKey`(as sk), `github app key`(as votepass), `qq email pass`(as qqpass),

the server also run at [https://api.raoul1996.cn](https://api.raoul1996.cn)

```shell
# clone the code repo
git clone https://github.com/Raoul1996/egg-vote.git && cd egg-vote

# install dependencies and dev-dependancies
npm i

# run dev server at 7001 port
npm run dev

# run server at 12012 with daemon mode
npm run start

# stop a runing server which with daemo mode
npm run stop
```
more information can see [egg documents -- deployment](https://eggjs.org/zh-cn/core/deployment.html)

## Resource

1. [Vue Cli](https://cli.vuejs.org/guide/cli-service.html)
2. [qshell](https://github.com/qiniu/qshell)
3. [codecov](https://codecov.io/)

## Note 

### configure tarvis-ci && upload the static resource to CDN 

*only when some commit push to the master branch, travis will clone the repos and build, then deploy to the server*

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

### use pug in vue

* install `pug` and `pug-plain-loader` as dev-dependencies

```shell
npm i -D pug pug-plain-loader
```
* then use pug(jade) in your `*.vue` file

```vue
<template lang="pug">
    .login use pug in template tag
        el-form(ref="form")
</template>
<script lang="ts"></script>
<style lang="less" scoped></style> 
```

### use [vuex-class](https://github.com/ktsn/vuex-class/) && [vue-property-decorator](https://github.com/kaorun343/vue-property-decorator) in vue

* install `vuex-class` && `vue-property-decorator` as dependencies

```shell
npm i -S vue-class vue-property-decorator
```
* then use it in your `*.vue` file

```vue
<template>
    <div class="test" @click="handleClk">{{title}}</div>
</template>
<script lang="ts">
import {Component, Vue} from 'vue-property-decorator'
import {Action,Mutation} from 'vuex-class'
// should add the extra-name, to fix the can't resolve problem in unit test
import Captcha from '@/components/captcha.vue'
@Component({
    components:{Captcha}
})
export default class Test extends Vue{
  // action in vuex
  @Action public TestAction!: (data: object) => any
  // mutation in vuex
  @Mutation public TestMutation!:(data:object) => any
  // data
  private title: string = 'this is the test component'
  // function in  methods
  private handleClk () {
    console.log('your click me')
    this.testAction({test:this.test})
    this.testMutation({test:this.test})
  }
}
</script>
<style lang="less" scoped>
    .test{
        border: 1px solid #000;
    }
</style>
```
more inof can't see the [login component](src/views/Login.vue) and [captcha component](src/components/Captcha.vue)

### configure nginx proxy-pass rules to avoid cross origin

 Before use `typescript` and  `vue` reconstruct the vote (login && register) application, 
 my front-end of the application is deployed on [votes.raoul1996.cn](https://votes.raoul1996.cn), 
 and the back-end of the application deployed on the [api.raoul1996.cn](https://api.raoul1996.cn), 
 so I have to add some extra response headers, 
 like the `Access-Control-Allow-Origin`, `Access-Controll-Allow-Methods` and etc.
 more info can read [this blog](https://raoul1996.github.io/2018/03/04/cors-session.html) edited by myself three month ago.
 now I want to use the `nginx` to avoid the cross origin statement, only use the `proxy-pass` and `rewrite`

 About one month ago, I print the nginx configuration file of `votes.raoul1996.cn` on the [vue-vote](https://github.com/Raoul1996/vue-vote#20180102-20180103) to show how to configure the `ssl_certificate`, If you like, you can have a try.
 
 ```config
  # use regexp to match the rquest which begining with /api/
  location ~* ^/api/ {
    proxy_set_header X-Url-Scheme $scheme;
    proxy_set_header Connection "upgrade";
    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    proxy_set_header X-Forwarded-For-Forwarded-Proto $https;
    proxy_set_header Host $host;
    # remove the /api/ preset. eg: /api/captcha/ -> /captcha/
    rewrite ^/api/(.*) /$1 break;
    # reverse proxy
    proxy_pass http://127.0.0.1:12012;
    proxy_redirect off;
  }
 ``` 
 
 ### configure [circle-ci](https://circleci.com/)
 
 *add circle-ci for unit-test*
 * the document of circle-ci is awesome, just use the default configuration file is enough.
 * use circle-ci version 2
 
 ```shell
 # create the .circleci dir
 mkdir .circleci
 
 # create the config.yml
 touch config.yml
 ```
 