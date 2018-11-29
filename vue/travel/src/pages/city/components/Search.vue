<template>
  <div>
    <div class="search">
      <input
        v-model="keywords"
        type="text"
        placeholder="输入城市名或拼音"
        class="search-input"
      >
    </div>
    <div
      v-show="keywords"
      ref="search"
      class="search-content"
    >
      <ul>
        <li
          v-for="item of list"
          :key="item.id"
          @click="handleCityClick(item.name)"
          class="search-item border-bottom"
        >
          {{ item.name }}
        </li>
        <li class="search-item border-bottom" v-show="hasNoData">
          没有合适的内容
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import Bscroll from 'better-scroll'
  import {mapMutations,mapState} from 'vuex'

  export default {
    name: "CitySearch",
    props: {
      cities: Object
    },
    data() {
      return {
        keywords: '',
        timer: null,
        list: []
      }
    },
    methods: {
      handleCityClick(cityName) {
        // this.$store.commit('changeHotCity',cityName)
        this.changeCity(cityName)
        this.$router.push('/')
      },
      ...mapMutations(['changeCity'])
    },
    computed: {
      hasNoData() {
        return !this.list.length
      }
    },
    watch: {
      keywords() {
        if (!this.keywords) {
          this.list = []
          return
        }
        if (this.timer) {
          clearTimeout(this.timer)
        }
        this.timer = setTimeout(() => {
          this.list = []
          for (let key in this.cities) {
            this.cities[key].forEach((obj) => {
              if (obj.spell.includes(this.keywords) || obj.name.includes(this.keywords)) {
                this.list.push(obj)
              }
            })
          }
        }, 100)
      }
    },
    mounted() {
      this.scroll = new Bscroll(this.$refs.search)
    }
  }
</script>

<style scoped lang="stylus">
  @import "~styles/varibles.styl"

  .search
    height: 0.72rem
    padding: 0.1rem
    background: $bgColor
    .search-input
      box-sizing: border-box
      width: 100%
      height: 0.62rem
      line-height: 0.62rem
      border-radius: 0.06rem
      text-align: center
      color: #666
      padding: 0 0.1rem

  .search-content
    position absolute
    overflow hidden
    top 1.78rem
    left 0
    right 0
    bottom 0
    background #eee
    z-index 1
    .search-item
      line-height 0.62rem
      padding-left 0.2rem
      background: #fff
      color #666

</style>
