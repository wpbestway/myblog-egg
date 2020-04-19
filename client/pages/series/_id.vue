<template>
  <section class="container">
    <div class="series-slider-box">
      <series-list />
    </div>
    <div class="blog-list-box">
      <blog-list />
    </div>
  </section>
</template>

<script>
import seriesList from '@/components/series-list'
import blogList from '@/components/blog-list'
export default {
  data () {
    return {
    }
  },
  async fetch ({ store, params }) {
    await Promise.all([
      store.dispatch('SET_BLOG_LIST_ACTION', {pageindex: 1, seriesName: params.id}),
      store.dispatch('SET_SERIES_LIST_ACTION', {title: params.id}),
      store.dispatch('SET_TAGS_ACTION'),
      store.dispatch('SET_CLASSIFYLIST_ACTION')
    ])
    store.commit('SET_QUERY', {seriesName: params.id})
  },
  components: {
    seriesList,
    blogList
  }
}
</script>

<style lang="scss">
.series-slider-box{
  height: 220px;
}
</style>
