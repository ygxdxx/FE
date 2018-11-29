<template>
  <div class="header">
    <div class="header-left">
      <div class="iconfont back-icon">&#xe624;</div>
    </div>
    <div class="header-input">
      <span class="iconfont">&#xe632;</span>
      输入城市景点游玩主题
    </div>
    <router-link to="/city">
      <div class="header-right">
        {{ city }}
        <span class="iconfont arrow-icon">&#xe64a;</span>
      </div>
    </router-link>
  </div>
</template>

<script>
  import {mapState} from 'vuex'
  import state from "../../../store/state";

  export default {
    name: 'HomeHeader',
    // computed: {
    // city() {
    // ...mapState(['city'])
    // return this.$store.state.city
    // }
    // }
    // computed: mapState({
    //   city: 'city'
    // city: (state) => {state.city}
    // })
    computed: {
      // ...mapState({city:'city'})
      ...mapState(['city'])
    }
  }
</script>

<style scoped lang="stylus">
  @import "~styles/varibles.styl"
  .header
    display flex
    line-height: $headerHeight
    background: $bgColor
    color: #fff
    .header-left
      width: 0.64rem
      float left
      .back-icon
        text-align: center
        font-size: 0.4rem
    .header-input
      flex: 1
      background-color: #fff;
      border-radius: 0.1rem
      height: 0.64rem
      margin-top: 0.12rem
      margin-left: 0.2rem
      color: #cccccc
      line-height: 0.64rem
      padding-left: 0.2rem
    .header-right
      box-sizing border-box
      min-width: 1.04rem
      padding-left 0.1rem
      padding-right 0.1rem
      float: right
      text-align: center
      color: #fff
      .arrow-icon
        margin-left: -0.04rem
        font-size: 0.2rem
</style>
