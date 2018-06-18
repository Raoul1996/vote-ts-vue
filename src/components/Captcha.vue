<template lang="pug">
    div.captcha(@click="getCaptchaUrl")
        img(:src='captchaUrl', alt="captcha")
</template>

<script lang="ts">
  import {Component, Prop, Watch, Vue} from 'vue-property-decorator'

  @Component({
    components: {}
  })
  export default class Captcha extends Vue {
    @Prop() private version!: number
    private captchaUrl: string = ''

    @Watch('version')
    private updateVersion (val: number, old: number) {
      if (val !== old) {
        this.getCaptchaUrl()
      }
    }

    private created () {
      this.getCaptchaUrl()
    }

    private getCaptchaUrl () {
      const timestamp = new Date().getTime()
      this.captchaUrl = `api/captcha?timestamp=${timestamp}`
      this.$emit('update-captcha', timestamp)
    }
  }
</script>

<style scoped>
    .captcha {
        height: 40px;
    }

    .captcha img {
        width: 100%;
        height: 100%;
    }
</style>