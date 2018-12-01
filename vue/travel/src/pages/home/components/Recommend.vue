<template>
  <div>
    <div class="recommend-title">热销推荐</div>
    <ul>
      <router-link
        tag="li"
        v-for="item of list"
        class="item border-bottom"
        :key="item.id"
        :to="'/detail/' + item.id"
      >
        <img :src="item.imgUrl" alt="" class="item-img">
        <div class="item-info">
          <p class="item-title">{{ item.title }}</p>
          <p class="item-desc">{{ item.desc }}</p>
          <button class="item-button">99元起</button>
        </div>
      </router-link>
    </ul>
  </div>
</template>

<script>
  export default {
    name: "HomeRecommend",
    props: {
      list: Array
    }
  }
</script>

<style scoped lang="stylus">
  @import "~styles/mixins.styl"
  .recommend-title
    line-height: 0.8rem
    text-indent: 0.2rem
    margin-top: 0.2rem
    background: #eee

  .item
    display: flex
    height: 1.9rem
    overflow: hidden
    padding-left: 0.1rem
    .item-img
      width: 1.6rem
      height: 1.6rem
      padding: 0.1rem
    .item-info
      flex: 1
      padding: 0.1rem
      .item-title
        ellipsis()
        line-height: 0.54rem
        font-size: 0.32rem
      .item-desc
        ellipsis()
        line-height: 0.4rem
        color: #ccc
      .item-button
        background: #ff9300
        padding: 0 0.2rem
        border-radius: 0.06rem
        margin-top: 0.2rem
        color: #fff
</style>
