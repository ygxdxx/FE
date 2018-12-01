<template>
  <div>
    <div @click="handleBannerClick" class="banner">
      <img
        src="//img1.qunarzz.com/sight/p0/1510/8e/8eea8eb6f41698290.img.jpg_600x330_0f845e87.jpg"
        alt=""
        class="banner-img"
      >
      <div class="banner-info">
        <div class="banner-title">金隅凤山温泉</div>
        <div class="banner-number">
          <span class="iconfont banner-icon">&#xe67b;</span>39
        </div>
      </div>
    </div>
    <common-gallery
      :imgs="imgs"
      v-show="showGallery"
      @close="handleBannerClick"
    />
  </div>
</template>

<script>
  import CommonGallery from 'common/gallery/gallery'

  export default {
    name: "DetailBanner",
    data() {
      return {
        showGallery: false,
        imgs: ['//img1.qunarzz.com/sight/p0/1510/d0/d0610302e0ae770890.water.jpg_600x330_7a87817c.jpg',
          '//img1.qunarzz.com/sight/p0/201403/10/85107f04368a6d44b7c073ef2b51d4ca.jpg_r_800x800_12ce20d9.jpg'
        ]
      }
    },
    components: {
      CommonGallery
    },
    methods:{
      handleBannerClick(){
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
