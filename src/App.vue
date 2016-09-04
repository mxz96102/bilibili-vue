<template lang="jade">
  div.app
    navbar
    he
    menu
    router-view
</template>

<script>
import navbar from './components/navbar'
import he from './components/he'
import menu from './components/menu'

export default {
  components: {
    navbar,
    he,
    menu,
  }
}
</script>

<style lang="scss">
html {
  height: 100%;
}

*{
  list-style: none;
  font-family: "Microsoft YaHei",Arial,Helvetica,sans-serifsans-serif;
  padding:0;
  margin: 0;
}

a{
  cursor: pointer;
}

body {
  width: 100vw;
  min-width: 990px;
}

#app {
  width: 100vw;
  min-width: 990px;
}

</style>
