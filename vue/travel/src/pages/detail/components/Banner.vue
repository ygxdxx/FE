<template>
  <div>
    <div @click="handleBannerClick" class="banner">
      <img
        :src="bannerImg"
        class="banner-img"
      >
      <div class="banner-info">
        <div class="banner-title">{{ sightName }}</div>
        <div class="banner-number">
          <span class="iconfont banner-icon">&#xe67b;</span>
          {{ gallaryImgs.length }}
        </div>
      </div>
    </div>
    <common-gallery
      :imgs="gallaryImgs"
      v-show="showGallery"
      @close="handleBannerClick"
    />
  </div>
</template>

<script>
  import CommonGallery from 'common/gallery/gallery'

  export default {
    name: "DetailBanner",
    props: {
      sightName: String,
      bannerImg: String,
      gallaryImgs: Array
    },
    data() {
      return {
        showGallery: false
      }
    },
    components: {
      CommonGallery
    },
    methods: {
      handleBannerClick() {
        this.showGallery = !this.showGallery
      }
    }
  }
</script>

<style scoped lang="stylus">
  .banner
    overflow hidden
    height 0
    padding-bottom 55%
    color #fff
    position relative

    .banner-img
      width 100%

    .banner-info
      position absolute
      left 0
      right 0
      bottom 0
      line-height 0.6rem
      display flex
      background-image linear-gradient(top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8))

      .banner-title
        flex 1
        font-size 0.32rem
        padding 0 0.2rem

      .banner-number
        padding 0 0.4rem
        margin-bottom 0.2rem
        line-height 0.32rem
        height 0.32rem
        border-radius 0.2rem
        font-size 0.24rem
        background rgba(0, 0, 0, 0.8)
        margin-top 0.2rem

        .banner-icon
          font-size 0.24rem
          margin-right 0.08rem
</style>
