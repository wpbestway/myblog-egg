<template>
  <div class="fix-bar">
    <div
      class="fix-bar-item theme-box"
      :style="{'background-color': activedTheme.color}"
      @click="enterSwitchTheme"
    >
      <ul class="color-list">
        <li
          v-for="(color, index) in theme"
          :key="index"
          class="color-item"
          @click.stop="switchTheme(color)"
          :style="{'background-color': color.color}"
        ></li>
      </ul>
    </div>
    <div class="fix-bar-item gotop-box" @click="gotop">
      <i></i>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      theme: [
        {name: 'one', color: 'rgb(250, 255, 255)'},
        {name: 'two', color: 'rgb(121, 207, 223)'},
        {name: 'three', color: 'rgb(255, 221, 147)'},
        {name: 'fore', color: 'rgb(41, 38, 38)'}
      ],
      activedTheme: {}
    }
  },
  mounted () {
    this.startSwitchColor()
  },
  computed: {
    selectedTheme () {
      return this.$store.state.theme
    }
  },
  watch: {
    selectedTheme (val) {
      document.body.className = val
    }
  },
  methods: {
    gotop () {
      (function smoothscroll () {
        var currentScroll = document.documentElement.scrollTop || document.body.scrollTop
        if (currentScroll > 0) {
          window.requestAnimationFrame(smoothscroll)
          window.scrollTo(0, currentScroll - (currentScroll / 5))
        }
      })()
    },
    enterSwitchTheme () {
      console.log(this.activedTheme)
      this.$store.commit('themeSwitch', this.activedTheme.name)
    },
    startSwitchColor () {
      let index = 0
      setInterval(() => {
        this.activedTheme = this.theme[index]
        index++
        if (index === this.theme.length) {
          index = 0
        }
      }, 2000)
    },
    switchTheme (color) {
      this.$store.commit('themeSwitch', color.name)
    }
  }
}
</script>

<style lang="scss">
@import '~/styles/mixin.scss';
.fix-bar{
  position: fixed;
  left: 50%;
  bottom: 200px;
  margin-left: 600px;
  font-size: 0;
  @include panel();
  .fix-bar-item{
    position: relative;
    width: 40px;
    height: 40px;
    cursor: pointer;
    transition: all .5s;
    &:hover{
      .color-list{
        height: 160px;
      }
    }
    .color-list{
      position: absolute;
      bottom: 100%;
      left: 0;
      width: 100%;
      height: 0;
      overflow: hidden;
      transition: height .4s;
      .color-item{
        height: 40px;
      }
    }
  }
  .gotop-box{
    display: flex;
    justify-content: center;
    align-items: center;
    &:hover{
      background: #eee;
    }
    i{
      width: 20px;
      height: 20px;
      background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAB+klEQVRYR+3UMWzTQBTG8e85yZItDAxBDAwMZegKQygIkIAJKhEG1AEJAYvts6OwIu9EsZ+dpUyo6kSQgAFBx5YisbB0gIENhAcGsmUJzkOWalS1aeyYli6+1b77//wkH+GIFx1xHwWgmEAxgWICuSfQbrePj0ajzfgiq1QqjU6n8zPPpZYLoOt6vVQqxfEv29G5KIoavV4vnBUxM0DX9VPlcnkdwNZwOFyMg9Vq9SWAeRFpMPO3WRAzAUzTPK1p2qaIfKjVarcdx/kdxxzHKQ8Gg+cAzorIRd/3v2ZFZAYYhnFG07QNABthGDb7/X60M9JsNkv1er0PYGE8Hi8EQfA5CyITQCk1T0TrIvIuDMOl3fEktI1YJaJrInKBmbfSEKkAwzDOaZq2BuAVM98FICmHklLqGYCbInLJ9/1P096fCrBt+7yIrInIKjM/zBBPWjFimYjuRFF0JQiCj/sh9gWYpnmZiN4AWGHmB2mjnPRcKfWUiJaI6Krruu8nvTMRYFnWdRF5DWCZmY088WSPUioAcJ+IFj3Pe7v7rD0A27ZviMgLAJ7neY/+JZ7stSzrCQCLiG65rht/2N+1B6CU+kVEPc/zHh9EfCdCRO4x87GpgFardbLb7X4/yHhylm3bJ1zX/TEVcBjh3L/h/8CkXkSHjSgAxQSKCfwB1HixIX61AuIAAAAASUVORK5CYII=) no-repeat;
      background-size: 20px;
    }
  }
}
</style>
