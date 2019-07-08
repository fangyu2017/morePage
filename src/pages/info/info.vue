<template>
  <div id="info">
     info
  </div>
</template>

<script>
  import Hello from '@/components/HelloWorld'
  export default {
    name: 'Info',
    components: {
      Hello
    }
  }
</script>

<style scoped>
#info {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
