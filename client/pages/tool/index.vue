<template>
  <section class="tool-container">
    <ul class="tool-list" v-if="toolData">
      <nuxt-link
        :to="'/tool/' + tool._id"
        class="tool-item"
        v-for="(tool, index) in toolData"
        :key="index"
        tag="li"
      >
        {{ tool.title }}
      </nuxt-link>
    </ul>
    <p class="no-data" v-if="toolData.length == 0">
      暂无
    </p>
  </section>
</template>

<script>
import { getToolList } from '../../api/api'
export default {
  transition: {
    name: 'translate',
    mode: 'out-in'
  },
  layout: 'empty',
  data () {
    return {
    }
  },
  asyncData ({params, err}) {
    return getToolList().then(res => {
      return {toolData: res}
    }).catch((e) => {
      console.log('statusCode 404', e)
    })
  },
  created () {
  },
  methods: {
  }
}
</script>

<style lang="scss">
@import '~/styles/mixin.scss';
.tool-container{
  color: var(--text-color, #555);
  padding: 1em 2em;
  margin: 0 auto;
  @include panel();
  @include media("<=phone") {
    margin: 0 5px;
    padding: 10px;
  }
  li{
    list-style: none;
    padding: 5px 15px;
    margin: 20px 0;
    line-height: 1.5em;
    font-size: 16px;
    border-left: 3px solid #359baa;
    cursor: pointer;
    transition: all .2s;
    &:hover{
      background: var(--box-bg-active, #eee);
    }
  }
  .no-data{
    border: 0;
    color: #888;
  }
}
</style>
