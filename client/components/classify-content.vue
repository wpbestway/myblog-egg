<template>
  <transition name="translate">
    <section class="classify-content clearfix" v-show="init">
      <label class="label">
        <i class="iconfont icon-fenlei"></i>
        分类
      </label>
      <ul class="classify-list">
        <li
          class="classify-item"
          v-for="(classify, index) in classifyList"
          :key="index"
          @click="closeVisibility"
        >
          <nuxt-link :to="'/category/' + classify.name">
            {{ classify.name }}
          </nuxt-link>
        </li>
      </ul>
    </section>
  </transition>
</template>

<script>
import { IsPC } from '@/utils'
export default {
  data () {
    return {
      init: false
    }
  },
  computed: {
    classifyList () {
      return this.$store.state.classifyList
    }
  },
  mounted () {
    if (this.$store.state.classifyList.length > 0) {
      this.init = true
    }
  },
  methods: {
    closeVisibility () {
      if (!IsPC()) {
        this.$parent.sidebarVisibility = false
      }
    }
  },
  components: {
  }
}
</script>

<style lang="scss">
@import '~/styles/mixin.scss';
.classify-content{
  padding: $padding-base $padding-base 0;
  transition: all 0.5s;
  min-height: 100px;
  @include panel();
  .label{
    display: inline-block;
    width: 100%;
    font-size: 14px;
    padding-bottom: 10px;
    padding-left: 5px;
    border-bottom: 1px solid var(--border-color, #eee);
    color: var(--text-color, #555);
    margin-bottom: 10px;
    i{
      font-size: 12px;
    }
  }
  .classify-list{
    width: 290px;
    word-wrap: break-word;
    @include media("<=phone") {
      width: 90%;
      margin: 0 auto;
    }
    .classify-item{
      list-style: none;
      margin-bottom: $margin-base;
      margin-right: $margin-base;
      padding: 5px;
      font-size: 14px;
      @include media("<=phone") {
        margin-bottom: 5px;
        margin-right: 5px;
      }
      a{
        color: var(--text-color, #555);
      }
    }
  }
}
</style>
