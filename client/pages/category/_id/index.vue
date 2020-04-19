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
      store.dispatch('SET_TAGS_ACTION'),
      store.dispatch('SET_CLASSIFYLIST_ACTION'),
      store.dispatch('SET_BLOG_LIST_ACTION', {pageindex: 1, classifyName: params.id})
    ])
    store.commit('setSerieses', [{ title: params.id, type: 'classify' }])
    store.commit('SET_QUERY', {classifyName: params.id})
  },
  computed: {

  },
  methods: {

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
