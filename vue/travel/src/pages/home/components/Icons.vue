<template>
  <div class="icons">
    <swiper :options="swiperOption">
      <swiper-slide v-for="(page, index) of pages" :key="index">
        <div v-for="item of page" :key="item.iconId" class="icon">
          <div class='icon-img'>
            <img class='icon-img-content' :src='item.iconUrl'/>
          </div>
          <p class="icon-desc">{{ item.iconDesc }}</p>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>
<script>
  export default {
    name: 'HomeIcons',
    data() {
      return {
        swiperOption: {
          autoplay: false
        },
        iconList: [
          {
            iconId: '0001',
            iconUrl: 'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
            iconDesc: '景点门票'
          },
          {
            iconId: '000',
            iconUrl: 'http://img1.qunarzz.com/piao/fusion/1804/5a/13ceb38dcf262f02.png',
            iconDesc: '一日游'
          },
          {
            iconId: '0003',
            iconUrl: 'http://img1.qunarzz.com/piao/fusion/1803/48/cb72b99b71974c02.png',
            iconDesc: '生活休闲'
          },
          {
            iconId: '0004',
            iconUrl: 'http://img1.qunarzz.com/piao/fusion/1803/ab/6f7d6e44963c9302.png',
            iconDesc: '泡温泉'
          },
          {
            iconId: '0005',
            iconUrl: 'http://img1.qunarzz.com/piao/fusion/1803/20/831d62d2e1c7be02.png',
            iconDesc: '名胜古迹'
          },
          {
            iconId: '0006',
            iconUrl: 'http://img1.qunarzz.com/piao/fusion/1803/95/8246f27355943202.png',
            iconDesc: '游乐场'
          },
          {
            iconId: '0007',
            iconUrl: 'http://img1.qunarzz.com/piao/fusion/1803/20/831d62d2e1c7be02.png',
            iconDesc: '打卡圣地'
          },
          {
            iconId: '0008',
            iconUrl: 'http://img1.qunarzz.com/piao/fusion/1804/ff/fdf170ee89594b02.png',
            iconDesc: '沈阳必游'
          },
          {
            iconId: '0009',
            iconUrl: 'http://img1.qunarzz.com/piao/fusion/1803/50/26ffa31b56646402.png',
            iconDesc: '亲子游'
          }
        ]
      }
    },
    computed: {
      pages() {
        const pages = []
        this.iconList.forEach((item, index) => {
          const page = Math.floor(index / 8)
          if (!pages[page]) {
            pages[page] = []
          }
          pages[page].push(item)
        })
        return pages
      }
    }
  }
</script>

<style scoped lang="stylus">
  @import '~styles/varibles.styl'
  @import '~styles/mixins.styl'
  .icons >>> .swiper-container
    height: 0
    padding-bottom: 50%

  .icons
    margin-top: .1rem
    .icon
      position: relative
      overflow: hidden
      float: left
      width: 25%
      height: 0
      padding-bottom: 25%
      .icon-img
        position: absolute
        top: 0
        left: 0
        right: 0
        bottom: .44rem
        box-sizing: border-box
        padding: .1rem
        .icon-img-content
          display: block
          margin: 0 auto
          height: 100%
      .icon-desc
        position: absolute
        left: 0
        right: 0
        bottom: 0
        height: .44rem
        line-height: .44rem
        text-align: center
        color: $darkTextColor
        ellipsis()
</style>
