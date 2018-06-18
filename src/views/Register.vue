<template lang="pug">
    .register
        h1.title {{title}}
        el-form.card-border(:model="register",  ref="register", :rules="rules")
            el-form-item(v-for = "item in regField.items", :label="item.label", :prop="item.prop", :key="item.label")
                el-input(:type="item.type", v-model="register[item.model]", :placeholder="item.placeholder")
            el-form-item(label="confirm", prop="confirm")
                el-input(type="password", v-model="register.confirm", auto-complete="off", placeholder="Confirm your password")
            el-form-item(label="captcha", prop="captcha")
                div.captcha-wrapper
                    el-input.captcha-input(v-model="register.captcha", @keyup.native.enter="submitRegisterForm", placeholder="请输入验证码", type="text")
                    captcha.captcha(:version="version")
            el-form-item
                el-button.register-button(size="middle", type="primary", @click="submitRegisterForm") Sign up for Voter
</template>
<script lang="ts">
  import {Component, Vue} from 'vue-property-decorator'
  import {Action} from 'vuex-class'
  import {lazyGoto} from '@/utils'
  import Captcha from '@/components/Captcha.vue'
  import config from '@/config'

  @Component({
    components: {Captcha}
  })
  export default class Register extends Vue {
    @Action public RegisterAction!: (data: object) => any
    private regField: any = config.regField
    private version: number = 1
    private register: any = {
      name: '',
      mobile: '',
      email: '',
      captcha: '',
      pwd: '',
      confirm: '',
      token: false
    }

    private get rules (): object {
      const rules: object[] = []
      this.regField.items.forEach((item: any) => {
        rules[item.prop] = item.validation
      })
      return Object.assign({}, rules, {
        captcha: [
          {required: true, message: '请填写验证码', trigger: 'blur'}
        ],
        confirm: [
          {required: true, message: '请填写密码', trigger: 'blur'},
          {
            validator: (rule: any, value: any, callback: any) => {
              const {register} = this
              if (value !== register.pwd) {
                callback(new Error('两次输入密码不一致!'))
              } else {
                callback()
              }
            }, trigger: 'blur'
          }
        ]
      })
    }

    private title: string = 'register page'

    private submitRegisterForm () {
      (this.$refs.register as any).validate(async (valid: boolean) => {
        this.version = this.version + 1
        if (valid) {
          const {name, email, mobile, pwd, confirm, captcha} = this.register
          this.RegisterAction({name, email, mobile, pwd, confirm, captcha}).then(async () => {
            this.$message({
              type: 'success',
              showClose: true,
              message: 'Register successful'
            })
            await lazyGoto(this, 'send')
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

<style lang="less" scoped>
    .register {
        width: 30%;
        min-width: 400px;
        margin: 0 auto;
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
        .register-button {
            width: 100%;
        }
    }

    @media screen and (max-width: 400px) {
        .register {
            min-width: 300px;
        }
    }
</style>