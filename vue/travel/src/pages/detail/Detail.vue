<template>
  <div>
    <detail-banner
      :sightName="sightName"
      :bannerImg="bannerImg"
      :gallaryImgs="gallaryImgs"
    />
    <detail-header/>
    <div class="content">
      <detail-list
        :list="categoryList"
      />
    </div>
  </div>
</template>

<script>
  import DetailBanner from './components/Banner'
  import DetailHeader from './components/Header'
  import DetailList from './components/List'
  import axios from 'axios'

  export default {
    name: "Detail",
    components: {
      DetailBanner,
      DetailHeader,
      DetailList
    },
    methods: {
      getDetailInfo() {
        axios.get('/api/detail.json', {
          params: {
            id: this.$route.params.id
          }
        }).then(this.getDetailSucc)
      },
      getDetailSucc(res) {
        res = res.data
        if (res.ret && res.data) {
          const data = res.data
          this.bannerImg = data.bannerImg
          this.sightName = data.sightName
          this.gallaryImgs = data.gallaryImgs
          this.categoryList = data.categoryList
        }
      }
    },
    data() {
      return {
        bannerImg: '',
        sightName: '',
        gallaryImgs: [],
        categoryList: []
      }
    },
    mounted() {
      this.getDetailInfo()
    }
  }
</script>

<style scoped lang="stylus">
  .content
    height 50rem
</style>
