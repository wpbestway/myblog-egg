<template>
  <div class="scroll-box" ref="scrollBox">
    <slot></slot>
  </div>
</template>
<script>
import { getScrollDirection } from '@/utils'
export default {
  data () {
    return {}
  },
  mounted () {
    $(window).on('scroll', this.sidebarScroll)
    this.sidebarScroll()
  },
  methods: {
    sidebarScroll () {
      var direction = getScrollDirection()
      var offsetTop = $('.main').offset().top
      var navHeight = $('.navbar-header').height()
      var scrollTop = $(document).scrollTop() || $('html, body').scrollTop()
      var footerRectTop = $('.footer').get(0).getBoundingClientRect().top
      var filterRectTop = $(this.$refs.scrollBox).get(0).getBoundingClientRect().top
      var filterHeight = $(this.$refs.scrollBox).height()
      var filterTopGap = 15 // 顶部间距
      var filterBottomGap = 0 // 底部间距
      if (direction === 'down') {
        if (scrollTop >= offsetTop - navHeight - filterTopGap) {
          if (footerRectTop - filterBottomGap <= filterRectTop + filterHeight) {
            $(this.$refs.scrollBox).css({ position: 'absolute', bottom: '0', top: 'auto' })
          } else {
            $(this.$refs.scrollBox).css({ position: 'fixed', top: navHeight + filterTopGap + 'px', bottom: 'auto' })
          }
        }
      } else {
        if (filterRectTop >= filterTopGap + navHeight) {
          $(this.$refs.scrollBox).css({ position: 'fixed', top: navHeight + filterTopGap + 'px', bottom: 'auto' })
        }
        if (scrollTop < offsetTop - navHeight - filterTopGap) {
          $(this.$refs.scrollBox).css({ position: 'relative', top: 'auto', bottom: 'auto' })
        }
      }
    }
  }
}
</script>
<style lang="scss" scoped>

</style>
