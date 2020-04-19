<template>
  <section class="blog-content">
    <ul class="blog-list">
      <nuxt-link
        v-show="init"
        :to="'/article/' + blog._id"
        class="blog-item"
        v-for="(blog, index) in blogData"
        :key="index"
        tag="li"
      >
        <div
          class="cover-box"
          :style="'background: url('+ blog.cover +'); background-size: cover;background-position: center;'"
        >
        </div>
        <div class="content-text-box">
          <h2>{{ blog.title }}</h2>
          <div class="content-text markdown-body" v-html="blog.sub_title"></div>
          <p class="info">
            <span class="time">
              <i class="iconfont icon-shijian"></i> {{ blog.createTime | timeFormat }}
            </span>
            <span class="tag">
              <i class="iconfont icon-biaoqian"></i> {{ blog.tagName }}
            </span>
            <span class="classify">
              <i class="iconfont icon-fenlei"></i> {{ blog.classifyName }}
            </span>
          </p>
        </div>
      </nuxt-link>
    </ul>
    <transition name="translate">
      <div class="more-box" v-show="init">
        <a href="javascript:;" class="more-text" @click="loadMore">
          {{ !loadMoreing ? loadMoreText : '加载中...' }}
        </a>
      </div>
    </transition>
  </section>
</template>

<script>
export default {
  data () {
    return {
      loadMoreText: '加载更多',
      loadMoreing: false,

      init: false
    }
  },
  mounted () {
    this.init = true
  },
  computed: {
    blogData () {
      return this.$store.getters['GET_BLOG_LIST']
    },
    pageindex () {
      return this.$store.getters['GET_PAGEINDEX']
    },
    query () {
      return this.$store.getters['GET_QUERY']
    }
  },
  methods: {
    loadMore () {
      if (this.loadMoreText === '已全部加载') return
      this.loadMoreing = true
      let pageindex = this.pageindex
      this.$store.commit('SET_PAGEINDEX', ++pageindex)
      this.$store.dispatch('SET_BLOG_LIST_ACTION', {pageindex: this.pageindex, ...this.query}).then(res => {
        this.loadMoreing = false
        if (res.data.length === 0) {
          this.loadMoreText = '已全部加载'
        }
      })
    }
  },
  components: {
  }
}
</script>

<style lang="scss">
@import '~/styles/mixin.scss';
.blog-content{
  .blog-list{
    margin-top: $margin-base-box;
    @include media("<=phone") {
      padding: 0 5px;
    }
    .blog-item{
      list-style: none;
      position: relative;
      background: var(--box-bg, #FFF);
      padding: $padding-base;
      margin-top: $margin-base-box;
      height: 130px;
      overflow: hidden;
      transition: background-color 0.5s;
      @include panel();
      cursor: pointer;
      @include media("<=phone") {
        height: 110px;
      }
      &:hover{
        background: var(--box-bg-active, #eee);
      }
      .cover-box{
        float: left;
        width: 180px;
        height: 110px;
        @include media("<=phone") {
          width: 140px;
          height: 90px;
        }
        img{
          width: 100%;
          height: 100%;
          border: 1px solid #eee;
        }
      }
      .content-text-box{
        margin-left: 190px;
        @include media("<=phone") {
          margin-left: 150px;
        }
        h2{
          font-size: $font-size-base;
          color: var(--text-color, #555);
          line-height: 1.4em;
          @include media("<=phone") {
            line-height: 1.2em;
          }
        }
        .content-text{
          font-size: 12px;
          height: 54px;
          margin-top: 10px;
          color: var(--text-color, #888);
          overflow: hidden;
          @include media("<=phone") {
            margin-top: 5px;
          }
          p,h1,h2,h3,h4,h5,h6,a,span {
            font-size: 12px!important;
            color: var(--text-color, #555);
            line-height: 2.3em!important;
            font-weight: 400!important;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
          }
        }
        .info{
          position: absolute;
          bottom: 10px;
          font-size: 12px;
          span{
            margin-right: 60px;
            color: var(--text-color, #888);
            @include media("<=phone") {
              margin-right: 30px;
            }
            &:first-child{
              @include media("<=phone") {
                display: none;
              }
            }
          }
        }
      }
    }
  }
  .more-box{
    margin-top: $margin-base-box;
    text-align: center;
    font-size: $font-size-base;
    @include media("<=phone") {
      padding: 0 5px;
    }
    a{
      display: block;
      width: 100%;
      height: 40px;
      background: var(--box-bg, #FFF);
      line-height: 40px;
      box-shadow: 0 1px 10px 1px rgba(0, 0, 0, 0.07);
      border-radius: 3px;
      color: var(--text-color, #555);
      font-size: $font-size-base;
      transition: all .3s;
      &:hover{
        background: rgba(245, 245, 245, 0.8);
      }
    }
  }
}
</style>
