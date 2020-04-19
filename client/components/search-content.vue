<template>
  <transition name="translate">
    <section class="search-content clearfix" v-show="init">
      <input
        type="text"
        class="search-input"
        v-model="search"
        placeholder="请输入关键字搜索"
        @keyup.enter="handleSubmit"
      />
      <a href="javascript:;" class="search-btn" @click="handleSubmit"></a>
    </section>
  </transition>
</template>

<script>
import { IsPC } from '@/utils'

export default {
  data () {
    return {
      search: '',
      init: false
    }
  },
  mounted () {
    this.init = true
  },
  methods: {
    handleSubmit () {
      if (!IsPC()) {
        this.$parent.sidebarVisibility = false
      }
      this.$router.push('/search/' + this.search)
    }
  },
  components: {
  }
}
</script>

<style lang="scss">
@import '~/styles/mixin.scss';
.search-content{
  padding: $padding-base;
  transition: all 0.5s;
  @include panel();
  .search-input{
    outline: none;
    border: 0;
    background: var(--input-bg, #eee);
    height: 30px;
    line-height: 30px;
    padding: 5px 8px;
    color: #888;
    width: 250px;
    float: left;
    transition: all 0.4s;
    @include media("<=phone") {
      width: calc(100% - 30px);
    }
    &:hover,
    &:focus{
      background: #fff;
    }
  }
  .search-btn{
    border: 0;
    width: 30px;
    height: 30px;
    float: left;
    background: url(~assets/imgs/search.png) no-repeat;
    background-size: 15px;
    background-position: center;
    background-color: var(--input-btn-bg, #eee);
  }
}
</style>
