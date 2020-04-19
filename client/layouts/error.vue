<template>
  <div class="container">
    <h1 v-if="error.statusCode === 404">
      页面不存在 {{ error.message }}
    </h1>
    <h1 v-else>
      应用发生错误异常 {{ error.message }}
    </h1>
    <nuxt-link to="/" class="back">
      返回首页
    </nuxt-link>
  </div>
</template>

<script>
export default {
  props: ['error'],
  layout: 'error-layout' // 你可以为错误页面指定自定义的布局
}
</script>
<style lang="scss" scoped>
.container{
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100%;
  h1{
    font-size: 30px;
  }
  .back{
    margin-top: 30px;
    display: block;
    width: 120px;
    height: 40px;
    border-radius: 2px;
    background: $main;
    color: #fff;
    font-size: 14px;
    text-align: center;
    line-height: 40px;
  }
}
</style>
