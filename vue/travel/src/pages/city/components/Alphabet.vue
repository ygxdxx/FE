<template>
  <ul class="list">
    <li
      v-for="item of buildLetters"
      :key="item"
      :ref="item"
      @click="handleLetterClick"
      @touchstart="handleTouchStart"
      @touchmove="handleTouchMove"
      @touchend="handleTouchEnd"
      class="item"
    >
      {{ item }}
    </li>
  </ul>
</template>

<script>
  export default {
    name: "CityAlphabet",
    props: {
      cities: Object
    },
    computed: {
      buildLetters() {
        const letters = Object.keys(this.cities)
        return letters
      }
    },
    data() {
      return {
        touchStatus: false,
        startY: 0,
        timer: null
      }
    },
    updated() {
      //传入的值发生变化，组件重新渲染的时候updated会进行调用
      this.startY = this.$refs['A'][0].offsetTop
    },
    methods: {
      handleLetterClick(e) {
        this.$emit('change', e.target.innerText)
      },
      handleTouchStart() {
        this.touchStatus = true
      },
      handleTouchMove(e) {
        if (this.touchStatus) {
          if (this.timer) {
            clearTimeout(this.timer)
          }
          setTimeout(() => {
            // const elem = document.elementFromPoint(e.touches[0].clientX, e.touches[0].clientY)
            const touchY = e.touches[0].clientY - 79
            const index = Math.floor((touchY - this.startY) / 20)
            if (index >= 0 && index < this.buildLetters.length) {
              this.$emit('change', this.buildLetters[index])
            }
          }, 20)
        }
      },
      handleTouchEnd() {
        this.touchStatus = false
      }
    }
  }
</script>

<style scoped lang="stylus">
  @import "~styles/varibles.styl"

  .list
    display flex
    flex-direction column
    justify-content center
    align-items center
    position absolute
    right 0
    top 1.58rem
    bottom 0
    width 0.4rem
    .item
      line-height 0.4rem
      color $bgColor
</style>
