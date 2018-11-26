<template>
  <!--template只能存入一个标签,因此使用div进行包裹-->
  <div>
    <home-header/>
    <home-swiper/>
    <home-icons/>
  </div>
</template>

<script>
  import HomeHeader from './components/Header'
  import HomeSwiper from './components/Swiper'
  import HomeIcons from './components/Icons'

  export default {
    name: 'Home',
    components: {
      HomeHeader,
      HomeSwiper,
      HomeIcons
    }
  }
</script>
<style scoped>
</style>
