<template>
  <div>
    <div class="weekend-title">周末去哪儿</div>
    <ul>
      <li class="item" v-for="item of list">
        <img :src="item.imgUrl" alt="" class="item-img">
        <div class="item-info">
          <p class="item-title">{{ item.title }}</p>
          <p class="item-desc">{{ item.desc }}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: "HomeWeekend",
    props: {
      list: Array
    }
  }
</script>

<style scoped lang="stylus">
  @import "~styles/mixins.styl"
  .weekend-title
    line-height: 0.9rem
    text-indent: 0.2rem
    background: #eee

  .item-img
    width: 100%

  .item-info
    box-sizing: border-box
    height: 1.3rem
    padding-left: 0.15rem
    padding-top: 0.2rem
    padding-bottom: 0.2rem
    border-bottom: 0.1rem solid #eee
    .item-title
      ellipsis()
      line-height: 0.4rem
      font-size: 0.28rem
    .item-desc
      ellipsis()
      padding-top 0.1rem
      font-size: 0.24rem
      color: #9c9c9c
</style>
