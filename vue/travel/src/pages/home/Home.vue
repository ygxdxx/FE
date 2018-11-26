<template>
  <!--template只能存入一个标签,因此使用div进行包裹-->
  <div>
    <home-header/>
    <home-swiper/>
  </div>
</template>

<script>
  import HomeHeader from './components/Header'
  import HomeSwiper from './components/Swiper'

  export default {
    name: 'Home',
    components: {
      HomeHeader,
      HomeSwiper
    }
  }
</script>
<style scoped>
</style>
