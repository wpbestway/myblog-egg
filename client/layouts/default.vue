<template>
  <div class="page-container" ref="pageContainer">
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
        <div class="search-phone" @click="showSidebar">
          <i></i>
        </div>
        <transition name="slidedown">
          <div class="nav-list" v-show="menuVisibility">
            <nuxt-link to="/" tag="div" class="nav-item">
              <div @click="closeVisibility">
                <i class="nav-icon home iconfont icon-home2"></i>
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
                <i class="nav-icon iconfont icon-about"></i>
                <span>ABOUT</span>
              </div>
            </nuxt-link>
            <nuxt-link to="/tool" tag="div" class="nav-item">
              <div @click="closeVisibility">
                <i class="nav-icon iconfont icon-caidan"></i>
                <span>TOOLS</span>
              </div>
            </nuxt-link>
          </div>
        </transition>
      </div>
    </div>
    <div class="main-container">
      <div class="main clearfix">
        <div class="main-content">
          <nuxt />
          <!-- <blog-list></blog-list> -->
        </div>
        <div class="sidebar" ref="sidebarHook" v-show="sidebarVisibility">
          <auto-scroll>
            <div class="sidebar-hook">
              <div class="search-box">
                <search-content />
              </div>
              <div class="classify-box">
                <classify-content />
              </div>
              <div class="tag-box">
                <tag-content />
              </div>
            </div>
          </auto-scroll>
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
          <span>EGG</span> 的神奇之旅
        </p>
      </div>
    </div>
    <fix-bar />
  </div>
</template>

<script>
import {
  IsPC
} from '@/utils'
import tagContent from '~/components/tag-content';
import fixBar from '~/components/fix-bar';
import classifyContent from '~/components/classify-content'
import searchContent from '~/components/search-content'
import autoScroll from '~/components/auto-scroll'
export default {
  data () {
    return {
      menuVisibility: false,
      sidebarVisibility: true
    }
  },
  mounted () {
    if (!IsPC()) {
      this.sidebarVisibility = false
    } else {
      this.menuVisibility = true
    }
  },
  methods: {
    closeVisibility () {
      if (!IsPC()) {
        this.menuVisibility = false
        this.sidebarVisibility = false
      }
    },
    showMenulist () {
      this.menuVisibility = !this.menuVisibility
      this.sidebarVisibility = false
    },
    showSidebar () {
      this.menuVisibility = false
      this.sidebarVisibility = !this.sidebarVisibility
    }
  },
  components: {
    tagContent,
    classifyContent,
    searchContent,
    fixBar,
    autoScroll
  }
}
</script>

<style lang="scss">
@import '~/styles/mixin.scss';
  html,
  body,
  #__nuxt,
  #__layout,
  .page-container {
    background: #f6f6f6;
    .main-container {
      background: var(--body-bg, rgba(252, 250, 242, 0.5));
      transition: all 1s;
      .main {
        position: relative;
        width: 1000px;
        margin: 0 auto;
        padding-bottom: 15px;
        padding-top: 75px;
        @include media("<=phone") {
          width: 100%;
        }
      }
    }
    .main-content {
      width: 685px;
      @include media("<=phone") {
        width: 100%;
      }
      float: left;
    }
    .sidebar {
      width: 300px;
      float: right;
      font-family: stawix;
      @include media("<=phone") {
        width: 100%;
        position: fixed;
        left: 0;
        top: 60px;
        bottom: 0;
        right: 0;
        z-index: 1000;
        padding-top: 20px;
        background: rgba($color: #fff, $alpha: 0.8);
        overflow-y: auto;
        .sidebar-hook {
          padding: 10px 0;
          width: 90%;
          margin: 0 auto;
        }
      }
      .search-box,
      .classify-box,
      .tag-box {
        margin-bottom: $margin-base-box;
      }
    }
  }

  .navbar-header {
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    z-index: 100;
    height: 60px;
    transition: all 1s;
    @include panel();
    .header-box {
      position: relative;
      width: 1000px;
      margin: 0 auto;
      font-size: 14px;
      text-align: center;
      @include media("<=phone") {
        width: 100%;
      }
      .badge {
        height: 40px;
        margin-top: 12px;
        @include media(">phone") {
          float: left;
        }
        a {
          display: inline-block;
          height: 100%;
          line-height: 40px;
          font-family: 'guevara'!important;
          color: $main;
          font-size: 30px;
        }
      }
      .nav-list {
        float: left;
        @include media("<=phone") {
          position: fixed;
          left: 0;
          top: 60px;
          width: 100%;
          background: rgba(255, 255, 255, .9);
        }
        .nav-item {
          float: left;
          line-height: 60px;
          margin-left: 60px;
          color: var(--navbar-header-text-color, #888);
          font-size: 0;
          cursor: pointer;
          @include media("<=phone") {
            float: initial;
            margin-left: 0;
            font-weight: 700;
          }
          .nav-icon {
            line-height: 1;
            vertical-align: middle;
            margin-right: 12px;
            font-size: 20px;
            &.home {
              font-size: 19px;
            }
          }
          span {
            display: inline-block;
            margin-top: 4px;
            line-height: 1;
            vertical-align: middle;
            font-size: 18px;
          }
        }
      }
      .search-phone {
        display: none;
        @include media("<=phone") {
          display: block;
          position: absolute;
          right: 15px;
          top: 6px;
          i {
            display: inline-block;
            width: 24px;
            height: 24px;
            background: url('~assets/imgs/nav-search.png') no-repeat;
            background-size: 100% 100%;
          }
        }
      }
      .menu-phone {
        display: none;
        @include media("<=phone") {
          display: block;
          position: absolute;
          left: 15px;
          top: 6px;
          i {
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

  .footer {
    height: 40px;
    line-height: 40px;
    background: var(--navbar-header-bg, $box-bg-white-trans);
    transition: all 1s;
    .footer-box {
      width: 1000px;
      margin: 0 auto;
      text-align: center;
      @include media("<=phone") {
        width: 100%;
      }
      p, a {
        color: var(--navbar-header-text-color, #555);
        font-size: 12px;
        display: inline-block;
      }
      span, a {
        color: #21c2dd;
      }
      i {
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
