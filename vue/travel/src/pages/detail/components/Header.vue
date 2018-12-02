<template>
  <div>
    <router-link
      tag="div"
      to="/"
      v-show="showAbs"
      class="header-abs"
    >
      <div class="iconfont header-back">&#xe624;</div>
    </router-link>
    <div
      v-show="!showAbs"
      class="header-fixed"
      :style="opacityStyle"
    >
      景点详情
      <router-link to="/">
        <div class="iconfont header-fixed-back">&#xe624;</div>
      </router-link>
    </div>
  </div>
</template>

<script>
  export default {
    name: "DetailHeader",
    data() {
      return {
        showAbs: true,
        opacityStyle: {
          opacity: 0
        }
      }
    },
    methods: {
      handleScroll() {
        const top = document.documentElement.scrollTop
        if (top > 60) {
          this.opacityStyle.opacity = (top / 140) > 1 ? 1 : (top / 140)
          this.showAbs = false
        } else {
          this.showAbs = true
        }
      }
    },
    activated() {
      window.addEventListener('scroll', this.handleScroll)
    }
  }
</script>

<style scoped lang="stylus">
  @import "~styles/varibles.styl"

  .header-abs
    position absolute
    left 0.2rem
    top 0.2rem
    width 0.8rem
    height 0.8rem
    border-radius 0.4rem
    background rgba(0, 0, 0, 0.8)
    color #fff
    text-align center
    line-height 0.8rem

    .header-back
      line-height 0.8rem

  .header-fixed
    height: $headerHeight
    line-height: $headerHeight
    text-align: center
    color: #fff
    background: $bgColor
    font-size: 0.3rem
    position: fixed
    left 0
    top 0
    right 0

    .header-fixed-back
      width: 0.64rem
      text-align: center
      font-size: 0.4rem
      position: absolute
      color: #fff
      left: 0
      top: 0
</style>
