<template>
  <section class="series-content clearfix" v-if="seriesData.length">
    <transition name="translate">
      <div v-swiper:mySwiper="swiperOption" class="swiper-option" v-show="init">
        <div class="swiper-wrapper">
          <nuxt-link
            :to="'/series/' + series.title"
            tag="div"
            class="swiper-slide"
            v-for="(series, index) in seriesData"
            :key="index"
            :style="'background: url('+ series.avatar +'); background-size: cover;background-position: center;'"
          >
            <div class="content-text">
              <h2>{{ series.title }}</h2>
            </div>
            <span class="status" v-if="series.state == 0">
              <img src="~assets/imgs/not-complet.png" alt="" />
            </span>
            <span class="status" v-if="series.state == 1">
              <img src="~assets/imgs/completed.png" alt="" />
            </span>
          </nuxt-link>
          <div class="section-title">
            <p class="section-title-icon">
              <i class="fa fa-tags" v-if="seriesData[0].type == 'tag'"></i>
              <i class="fa fa-sitemap" v-if="seriesData[0].type == 'classify'"></i>
              <i class="fa fa-search" v-if="seriesData[0].type == 'search'"></i>
            </p>
            <h4>{{ seriesData[0].title }}</h4>
          </div>
        </div>
        <div class="swiper-pagination" v-show="!seriesData[0].type"></div>
      </div>
    </transition>
  </section>
</template>

<script>
import Vue from 'vue'
if (process.browser) {
  const VueAwesomeSwiper = require('vue-awesome-swiper/dist/ssr')
  Vue.use(VueAwesomeSwiper)
}
export default {
  data () {
    return {
      swiperOption: {
        pagination: {
          el: '.swiper-pagination'
        },
        autoplay: {
          delay: 60000
        },

        effect: 'fade'
      },
      init: false
    }
  },
  mounted () {
    this.init = true
  },
  computed: {
    seriesData () {
      return this.$store.getters['GET_SERIES_LIST']
    }
  },
  components: {
  }
}
</script>

<style lang="scss">
@import '~/styles/mixin.scss';
.series-content{
  width: 100%;
  height: 100%;
  transition: all 1s;
  @include panel();
  .swiper-option,
  .swiper-wrapper,
  .swiper-slide,
  img{
    width: 100%;
    height: 100%;
    overflow: hidden;
    cursor: pointer;
  }
  .swiper-container{
    z-index: 0;
  }
  .swiper-pagination{
    bottom: 24px;
  }
  .swiper-slide{
    position: relative;
    .content-text{
      position: absolute;
      right: 20px;
      top: 20px;
      padding: 8px;
      padding-left: 20px;
      background-image: var(--series-title-bg, linear-gradient(to left, #fff 0%, #fff 80%, transparent 100%));
      font-size: 16px;
      z-index: 10;
      text-align: center;
      color: var(--text-color, #555);
      @include media("<=phone") {
        line-height: 180px;
      }
      h2{
        cursor: pointer;
        transition: all .4s;
        line-height: 1;
      }
    }
    .status{
      position: absolute;
      z-index: 100;
      top: 0px;
      left: 0;
      width: 40px;
      height: 40px;
      img{
        width: 100%;
        height: 100%;
      }
    }
  }
  .section-title{
    background: rgba(210, 210, 210, 0.4);
    width: 100%;
    text-align: center;
    color: #555;
    .section-title-icon{
      font-size: 36px;
      margin-top: 75px;
    }
    h4{
      margin-top: 10px;
      font-size: 28px;
    }
  }
}
</style>
