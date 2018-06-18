<template lang="pug">
    .login
        h1.title {{title}}
        el-form.card-border(:model="login", ref="login", :rules="rules")
            el-form-item(v-for = "item in loginField.items", :label="item.label", :prop="item.prop", :key="item.label")
                el-input(:type="item.type", v-model="login[item.model]", :placeholder="item.placeholder")
            el-form-item(label="captcha", prop="captcha")
                div.captcha-wrapper
                    el-input.captcha-input(@keyup.native.enter="submitLoginForm", v-model="login.captcha", placeholder="请输入验证码", type="text")
                    captcha.captcha(:version="version")
            el-form-item
                router-link.forget(to="forget") Forgot password?
            el-form-item
                el-button.login-button(type="primary", size="middle", @click="submitLoginForm") Sign in
        .register-form New to Voter?
            router-link.register(to="register") Create an account.
</template>
<script lang="ts">
  import {Component, Vue} from 'vue-property-decorator'
  import {Action, State, Mutation} from 'vuex-class'
  import {UserInfo} from '@/store/state'
  import {lazyGoto} from '@/utils'
  import Captcha from '@/components/Captcha.vue'
  import config from '@/config'

  @Component({
    components: {Captcha}
  })
  export default class Login extends Vue {
    @Action public loginAction!: (data: { email: string; pwd: string; captcha: string }) => any
    @Mutation private loginLoading!: () => void
    @State private user!: UserInfo
    private version: number = 1
    private loginField: any = config.loginField
    private login: any = {
      email: '',
      pwd: null,
      captcha: '',
      client: 1
    }

    private get rules (): object {
      const rules: object[] = []
      this.loginField.items.forEach((item: any) => {
        rules[item.prop] = item.validation
      })
      return Object.assign({}, rules, {
        captcha: [
          {required: true, message: '请填写验证码', trigger: 'blur'}
        ]
      })
    }

    private msgFlag: boolean = true
    private title: string = 'Sign in to Voter'

    private mounted () {
      if (this.msgFlag) {
        this.$message({
          showClose: true,
          type: 'info',
          message: 'Please Login'
        })
        this.msgFlag = !this.msgFlag
      }
    }

    private submitLoginForm () {
      (this.$refs.login as any).validate(async (valid: boolean) => {
        this.version = this.version + 1
        if (valid) {
          const {email, pwd, captcha} = this.login
          this.loginAction({email, pwd, captcha}).then(async () => {
            this.$message({
              type: 'success',
              showClose: true,
              message: 'login successful'
            })
            await lazyGoto(this, 'vote')
          })
        } else {
          this.$message({
            showClose: true,
            type: 'error',
            message: 'submit error'
          })
          return false
        }
      })
    }
  }
</script>

<style scoped lang="less">
    .login {
        margin: 0 auto;
        width: 30%;
        min-width: 400px;
        .captcha-wrapper {
            position: relative;
            padding-right: 40%;
            text-align: left;
            .captcha-input {
                width: 90%;
            }
            .captcha {
                position: absolute;
                right: 0;
                bottom: 1px;
                height: 38px;
                width: 40%;
            }
        }
        .forget {
            margin-top: -1em;
            margin-bottom: -1em;
            float: right
        }
        .login-button {
            width: 100%;
        }
        .forget, .register {
            text-decoration: none;
            color: #1c8de0;
            font-size: 1em;
        }
        .register-form {
            margin-top: 30px;
            padding: 10px 50px;
            border-radius: 5px;
            border: 1px solid #d8dee2;
        }
    }

    @media screen and (max-width: 400px) {
        .login {
            min-width: 300px;
        }
    }

</style>
