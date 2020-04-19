<template>
  <transition name="translate">
    <section class="tag-content clearfix" v-show="init">
      <label class="label">
        <i class="iconfont icon-biaoqian"></i>
        标签
      </label>
      <ul class="tag-list">
        <li
          class="tag-item"
          v-for="(tag, index) in tagList"
          :key="index"
          @click="closeVisibility"
        >
          <nuxt-link :to="'/tag/' + tag.name">
            {{ tag.name }}
          </nuxt-link>
        </li>
      </ul>
    </section>
  </transition>
</template>

<script>
import { IsPC } from '@/utils'
// import { getTaglist } from '../api/api.js'
export default {
  data () {
    return {
      init: false
    }
  },
  computed: {
    tagList () {
      return this.$store.state.tags
    }
  },
  mounted () {
    if (this.$store.state.tags.length > 0) {
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
.tag-content{
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
  .tag-list{
    width: 290px;
    word-wrap: break-word;
    .tag-item{
      display: inline-block;
      margin-bottom: $margin-base;
      margin-right: $margin-base;
      // background: #dedede;
      background: var(--body-bg, #dedede);
      padding: 6px 8px;
      font-size: 13px;
      a{
        color: var(--text-color, #555);
      }
    }
  }
}
</style>
