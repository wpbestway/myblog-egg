<template>
  <section class="tool-container">
    <div class="tool">
      <h1>{{ tool.title }}</h1>
      <div class="content markdown-body" v-html="tool.render_content"></div>
    </div>
  </section>
</template>

<script>
import { getTool } from '../../../api/api'
export default {
  transition: {
    name: 'translate',
    mode: 'out-in'
  },

  layout: 'empty',
  asyncData ({params, err}) {
    return getTool(params.id).then(res => {
      // console.log(res)
      return {tool: res}
    }).catch((e) => {
      console.log('statusCode 404', e)
    })
  },
  created () {
    // console.log(this.$route.params)
    // gettool(this.$route.params.id).then(res => {
    //   console.log(res)
    // })
  },
  components: {
  }
}
</script>

<style lang="scss">
@import '~/styles/mixin.scss';
.tool-container{
  position: relative;
  color: #555;
  padding: 1em 2em;
  margin: 0 auto;
  @include panel();
  .tool{
    overflow: hidden;
    h1{
      font-size: 18px;
      font-weight: 700;
      color: #555;
      margin: 10px 0 20px;
    }
  }
}
</style>
