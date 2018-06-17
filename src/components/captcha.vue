<template lang="pug">
    div.captcha(@click="getCaptchaUrl")
        img(:src='captchaUrl', alt="captcha")
</template>

<script lang="ts">
  import {Component, Vue, Watch} from 'vue-property-decorator'
  import {Action, State, Mutation} from 'vuex-class'

  @Component({
    components: {}
  })
  export default class Captcha extends Vue {
    private captchaUrl: string = ''

    private created () {
      this.getCaptchaUrl()
    }

    private getCaptchaUrl () {
      this.captchaUrl = `api/captcha?timestamp=${new Date().getTime()}`
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