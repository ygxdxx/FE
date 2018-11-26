<template>
  <div>
    <div class="recommend-title">热销推荐</div>
    <ul>
      <li v-for="item of recommendList" class="item border-bottom">
        <!-- 组件属性不写冒号就只是一个字符串，加了冒号则为一个变量或者表达式 -->
        <img :src="item.imgUrl" alt="" class="item-img">
        <div class="item-info">
          <p class="item-title">{{ item.title }}</p>
          <p class="item-desc">{{ item.desc }}</p>
          <button class="item-button">{{ item.price }}</button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: "HomeRecommend",
    data() {
      return {
        recommendList: [
          {
            id: '0001',
            imgUrl: 'http://img1.qunarzz.com/sight/p0/1712/91/9103c54e49fab2a3a3.img.jpg_200x200_1211295b.jpg',
            title: '沈阳清河半岛温泉度假酒店',
            desc: '暂未添加描述',
            price: '99元起'
          },
          {
            id: '0002',
            imgUrl: 'http://img1.qunarzz.com/tuan/team2/1507/9e/281c1131109807.jpg_200x200_b4259cb3.jpg',
            title: '格林天沐温泉',
            desc: '暂未添加描述',
            price: '99元起'
          },
          {
            id: '0003',
            imgUrl: 'http://img1.qunarzz.com/sight/p0/1511/6b/6b3372e0241c034890.water.jpg_200x200_8fcbb4da.jpg',
            title: '沈阳怪坡国际滑雪场',
            desc: '暂未添加描述',
            price: '99元起'
          },
          {
            id: '0004',
            imgUrl: 'http://img1.qunarzz.com/sight/p0/1806/f5/f5b14f6fad705fe8a3.img.jpg_200x200_12b30406.jpg',
            title: '沈阳国家地理探险家中心',
            desc: '暂未添加描述',
            price: '99元起'
          }
        ]
      }
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
