<template lang="pug">
    .register
        h1.title {{title}}
</template>

<script lang="ts">
  import {Component, Vue} from 'vue-property-decorator'

  @Component({})
  export default class Register extends Vue {
    private title: string = 'register page'
  }
</script>

<style scoped>

</style>