<template>
  <div>
    <div class="weekend-title">周末去哪儿</div>
    <ul>
      <li class="item" v-for="item of weekendList">
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
    data() {
      return {
        weekendList: [
          {
            id: '0001',
            imgUrl: 'http://img1.qunarzz.com/sight/source/1510/65/e8de5fdd8fead6.jpg_r_640x214_c3ab2c3f.jpg',
            title: '沈阳温泉全攻略',
            desc: '这个冬天细数辽宁温泉排行榜'
          },
          {
            id: '0002',
            imgUrl: 'http://img1.qunarzz.com/sight/source/1505/98/392c73a32d5ce0.jpg_r_640x214_bc565fa1.jpg',
            title: '沈阳必游TOP10',
            desc: '初入黑土地，玩味多彩人生'
          },
          {
            id: '0003',
            imgUrl: 'http://img1.qunarzz.com/sight/source/1505/89/267342d404cbd7.jpg_r_640x214_8d8d1162.jpg',
            title: '亲子游乐',
            desc: '儿童的天堂，大人的回忆'
          },
        ]
      }
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
