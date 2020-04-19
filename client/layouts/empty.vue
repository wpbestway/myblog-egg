<template>
  <div class="page-container" ref="pageContainer">
    <div id="particles"></div>
    <!-- <div id="botAgregar"></div> -->
    <!-- <div id="bgCanvas"></div> -->
    <div class="navbar-header">
      <div class="header-box">
        <div class="menu-phone" @click="showMenulist">
          <i></i>
        </div>
        <div class="badge">
          <nuxt-link to="/">
            readycode
          </nuxt-link>
        </div>
        <transition name="slidedown">
          <div class="nav-list" v-show="menuVisibility">
            <nuxt-link to="/" tag="div" class="nav-item">
              <div @click="closeVisibility">
                <i class="nav-icon home fa fa-home"></i>
                <span>HOME</span>
              </div>
            </nuxt-link>
            <!-- <nuxt-link to="/project" tag="div" class="nav-item">
              <div @click="closeVisibility">
                <i class="nav-icon project"></i>
                <span>PROJECT</span>
              </div>
            </nuxt-link> -->
            <nuxt-link to="/about" tag="div" class="nav-item">
              <div @click="closeVisibility">
                <i class="nav-icon about"></i>
                <span>ABOUT</span>
              </div>
            </nuxt-link>
            <nuxt-link to="/tool" tag="div" class="nav-item">
              <div @click="closeVisibility">
                <i class="nav-icon tools"></i>
                <span>TOOLS</span>
              </div>
            </nuxt-link>
          </div>
        </transition>
      </div>
    </div>
    <div class="main-container">
      <div class="main clearfix">
        <div class="main-content-empty">
          <nuxt />
        </div>
      </div>
    </div>
    <div class="footer">
      <div class="footer-box">
        <a class="icp" href="http://beian.miit.gov.cn">
          鄂ICP备18010225号-1
        </a>
        <i></i>
        <p class="god">
          来自
          <span>Koa2</span>
          的神奇之旅
        </p>
      </div>
    </div>
    <fix-bar />
  </div>
</template>

<script>
import { IsPC } from '@/utils'
import fixBar from '~/components/fix-bar'
export default {
  data () {
    return {
      menuVisibility: false
    }
  },
  mounted () {
    if (!IsPC()) {
    } else {
      this.menuVisibility = true
    }
  },
  methods: {
    closeVisibility () {
      if (!IsPC()) {
        this.menuVisibility = false
      }
    },
    showMenulist () {
      this.menuVisibility = !this.menuVisibility
    }
  },
  components: {
    fixBar
  }
}
</script>

<style lang="scss">
#particles{
  background: #f6f6f6;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: -1;
}
html,
body,
#__nuxt,
#__layout,
.page-container{
  height: 100%;
  .main-container{
    // background-color: rgba(240, 240, 240, 0.5);
    background: var(--body-bg, rgba(252, 250, 242, 0.5));
    transition: all 1s;
    min-height: 100%;
    .main{
      width: 1000px;
      margin: 0 auto;
      padding-bottom: 90px;
      padding-top: 75px;
      @include media("<=phone") {
        width: 100%;
      }
    }
  }
  .main-content-empty{
    width: 100%;
  }
}
.navbar-header{
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 100;
  height: 60px;
  // background-color: $box-bg-white-trans;
  background: var(--box-bg, $box-bg-white-trans);
  transition: all 1s;
  .header-box{
    position: relative;
    width: 1000px;
    margin: 0 auto;
    font-size: 14px;
    text-align: center;
    @include media("<=phone") {
      width: 100%;
    }
    .badge{
      height: 40px;
      margin-top: 12px;
      @include media(">phone") {
        float: left;
      }
      a{
        display: inline-block;
        height: 100%;
        line-height: 40px;
        font-family: 'guevara'!important;
        color: $main;
        font-size: 30px;
      }
    }
    .nav-list{
      float: left;
      @include media("<=phone") {
        position: fixed;
        left: 0;
        top: 60px;
        width: 100%;
        background: rgba(255, 255, 255, .9);
      }
      .nav-item{
        float: left;
        line-height: 60px;
        margin-left: 60px;
        font-size: 18px;
        color: var(--navbar-header-text-color, #888);
        margin-top: 3px;
        cursor: pointer;
        &.nuxt-link-exact-active{
          color: var(--navbar-header-text-color-active, #888);
          font-weight: 700;
        }
        @include media("<=phone") {
          float: initial;
          margin-left: 0;
          font-weight: 700;
        }
        .nav-icon{
          display: inline-block;
          width: 18px;
          height: 18px;
          // background: #ccc;
          vertical-align: top;
          margin-top: 18px;
          margin-right: 12px;
          &.project{
            background: url(~assets/imgs/project.png) no-repeat;
            background-size: cover;
          }
          &.about{
            background: url(~assets/imgs/about.png) no-repeat;
            background-size: cover;
          }
          &.tools{
            background: url(~assets/imgs/工具.png) no-repeat;
            background-size: cover;
          }
          &.home{
            font-size: 21px;
            margin-top: 16px;
          }
        }
        span{
          vertical-align: middle;
        }
      }
    }
    .search-phone{
      display: none;
      @include media("<=phone") {
        display: block;
        position: absolute;
        right: 15px;
        top: 6px;
        i{
          display: inline-block;
          width: 24px;
          height: 24px;
          background: url('~assets/imgs/nav-search.png') no-repeat;
          background-size: 100% 100%;
        }
      }
    }
    .menu-phone{
      display: none;
      @include media("<=phone") {
        display: block;
        position: absolute;
        left: 15px;
        top: 6px;
        i{
          display: inline-block;
          width: 24px;
          height: 24px;
          background: url('~assets/imgs/nav-menu.png') no-repeat;
          background-size: 100% 100%;
          transform: rotate(-180deg);
        }
      }
    }
  }
}
.footer{
  margin-top: -60px;
  height: 60px;
  line-height: 60px;
  // background: $box-bg;
  background: var(--navbar-header-bg, $box-bg);
  .footer-box{
    width: 1000px;
    margin: 0 auto;
    text-align: center;
    @include media("<=phone") {
      width: 100%;
    }
    p{
      color: var(--navbar-header-text-color, #888);
      font-size: 12px;
      display: inline-block;
      span{
        color: #21c2dd;
      }
    }
    i{
      display: inline-block;
      width: 4px;
      height: 4px;
      background: #ccc;
      border-radius: 50%;
      vertical-align: middle;
      margin: 0 10px;
    }
  }
}
</style>
