<template>
    <div>
        dsfadf
    </div>
</template>

<script lang="ts">
  import {Component, Vue, Watch} from 'vue-property-decorator'
  import {Action, State, Mutation} from 'vuex-class'
  import {UserInfo} from '@/store/state'

  @Component({
    components: {}
  })
  export default class Login extends Vue {
    @Action public loginAction!: (data: { email: string; password: string }) => void
    @Mutation private loginLoading!: () => void
    @State private user: UserInfo
    private email: string = ''
    private password: string = ''
    private errors: any = []
    private name: string | null = null
    private age: string | null = null
    private movie: string | null = null

    private handleLogin () {
      if (errs.length > 0) {
        return
      } else {
        this.loginAction({email, password})
        this.loginLoading()
      }
    }

    private checkForm (e: any) {
      e.preventDefault()
      if (this.name && this.age) return true
      this.errors = []
      if (!this.name) this.errors.push('Name required.')
      if (!this.age) this.errors.push('Age required.')
    }
  }
</script>

<style scoped lang="less">
</style>
