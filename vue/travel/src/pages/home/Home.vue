<template>
  <!--template只能存入一个标签,因此使用div进行包裹-->
  <div>
    <home-header/>
  </div>
</template>

<script>
  import HomeHeader from './components/Header'

  export default {
    name: 'Home',
    components: {
      HomeHeader
    }
  }
</script>
<style scoped>
</style>
