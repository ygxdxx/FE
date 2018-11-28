<template>
  <ul class="list">
    <li v-for="(item,key) of cities" :key="key" class="item">{{ key }}</li>
  </ul>
</template>

<script>
  export default {
    name: "CityAlphabet",
    props: {
      cities: Object
    }
  }
</script>

<style scoped lang="stylus">
  @import "~styles/varibles.styl"

  .list
    display flex
    flex-direction column
    justify-content center
    align-items center
    position absolute
    right 0
    top 1.58rem
    bottom 0
    width 0.4rem
    .item
      line-height 0.4rem
      color $bgColor
</style>
