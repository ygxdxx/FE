<template>
  <div class="list" ref="wrapper">
    <div>
      <div class="area">
        <div class="title border-topbottom">当前城市</div>
        <div class="button-list">
          <div class="button-wrapper">
            <div class="button">{{ currentCity }}</div>
          </div>
        </div>
      </div>
      <div class="area">
        <div class="title border-topbottom">热门城市</div>
        <div class="button-list">
          <div
            v-for="item of hot"
            :key="item.id"
            class="button-wrapper"
            @click="handleCityClick(item.name)"
          >
            <div class="button">{{ item.name }}</div>
          </div>
        </div>
      </div>
      <div
        v-for="(item,key) of cities"
        :key="key"
        :ref="key"
        class="area"
      >
        <div class="title border-topbottom">{{ key }}</div>
        <div class="item-list">
          <div
            v-for="innerItem of item"
            :key="innerItem.id"
            @click="handleCityClick(innerItem.name)"
            class="item border-bottom"
          >
            {{ innerItem.name }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Bscroll from 'better-scroll'
  import {mapMutations, mapState} from 'vuex'

  export default {
    name: "CityList",
    props: {
      hot: Array,
      cities: Object,
      letter: String
    },
    methods: {
      handleCityClick(cityName) {
        // this.$store.dispatch('changeHotCity', cityName)
        // this.$store.commit('changeCity',cityName)
        this.changeCity(cityName)
        this.$router.push('/')
      },
      ...mapMutations(['changeCity'])
    },
    computed: {
      ...mapState({
        currentCity: 'city'
      })
    },
    watch: {
      letter(val) {
        if (val) {
          const element = this.$refs[val][0]
          this.scroll.scrollToElement(element)
        }
      }
    },
    mounted() {
      this.scroll = new Bscroll(this.$refs.wrapper)
    }
  }
</script>

<style scoped lang="stylus">
  @import "~styles/varibles.styl"
  .border-topbottom
    &:before
      border-color #ccc
    &:after
      border-color #ccc

  .border-bottom
    &:before
      border-color #ccc

  .list
    position absolute
    top 1.78rem
    left 0
    right 0
    bottom 0
    overflow hidden
    .title
      line-height 0.54rem
      padding-left 0.2rem
      font-size 0.26rem
      background #eee
      color #666

    .button-list
      padding 0.1rem 0.6rem 0.1rem 0.1rem
      overflow hidden
      .button-wrapper
        float left
        width 33.33%
        .button
          text-align center
          margin 0.1rem
          border 0.02rem solid #ccc
          border-radius 0.06rem
          padding 0.02rem 0
    .item-list
      .item
        line-height 0.54rem
        color #666
        padding-left 0.2rem
</style>
