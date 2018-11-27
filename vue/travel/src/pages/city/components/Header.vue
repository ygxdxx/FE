<template>
  <div class="header">
    城市选择
    <router-link to="/">
      <div class="iconfont header-back">&#xe624;</div>
    </router-link>
  </div>
</template>

<script>
  export default {
    name: "CityHeader"
  }
</script>

<style scoped lang="stylus">
  @import "~styles/varibles.styl"

  .header
    overflow: hidden
    height: $headerHeight
    line-height: $headerHeight
    text-align: center
    color: #fff
    background: $bgColor
    font-size: 0.3rem
    position: relative
    .header-back
      width: 0.64rem
      text-align: center
      font-size: 0.4rem
      position: absolute
      color: #fff
      left: 0
      top: 0
</style>
