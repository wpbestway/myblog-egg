<template>
  <section class="project-container" v-show="animate">
    <div class="project-sidebar">
      <div
        class="project-type"
        v-for="(type, index) in types"
        :key="index"
        @click="currentType = type"
        :class="{'active': currentType === type}"
      >
        <i class="fa fa-eye" v-if="type === 'ALL'"></i>
        <i class="fa fa-github" v-if="type === 'WEB'"></i>
        <i class="fa fa-graduation-cap" v-if="type === 'GITHUB'"></i>
        <i class="fa fa-weixin" v-if="type === 'WECHAT'"></i>
        {{ type }}
      </div>
    </div>
    <div class="project-main">
      <ul class="project-list">
        <transition-group name="translate">
          <li
            class="project-item"
            v-for="(typeContent) in typeContents"
            :key="typeContent"
            v-show="currentType == 'ALL' || typeContent.type == currentType"
            @click.stop="showTypeContent(typeContent)"
          >
            <a class="project-target" :href="typeContent.href ? typeContent.href : 'javascript:;'" v-if="!typeContent.show">
              <p class="icon-box">
                <i class="fa" :class="typeContent.badge"></i>
              </p>
              <p class="typeContent-name">
                {{ typeContent.name }}
              </p>
              <p class="typeContent-desc">
                {{ typeContent.desc }}
              </p>
            </a>
            <transition name="translate">
              <div class="project-mask" v-if="typeContent.img && typeContent.show">
                <img :src="typeContent.img" alt="" />
                <p>{{ typeContent.name }}</p>
              </div>
            </transition>
            <p class="typeContent-info">
              <span class="not-github">
                <i class="fa fa-star"></i>
                {{ typeContent.star ? typeContent.star : 0 }}
              </span>
              <span>
                <i class="fa" :class="typeContent.badge"></i>
                {{ typeContent.type }}
              </span>
            </p>
          </li>
        </transition-group>
      </ul>
    </div>
  </section>
</template>

<script>
import Vue from 'vue'
export default {
  transition: {
    name: 'translate',
    mode: 'out-in'
  },
  layout: 'empty',
  data () {
    return {
      animate: false,
      currentType: 'ALL',
      types: ['ALL', 'WEB', 'WECHAT', 'GITHUB'],
      typeContents: [
        {
          badge: 'fa-graduation-cap',
          name: '智能院校系统',
          desc: '集美国最全院校，智能推荐选校，留学服务商城于一体的综合留学系统',
          star: '',
          type: 'WEB',
          href: '//www.myuniuni.com',
          img: ''
        },
        {
          badge: 'fa-graduation-cap',
          name: '智能院校系统（H5）',
          desc: 'WebApp版本,集美国最全院校，智能推荐选校，留学服务商城于一体的综合留学系统',
          star: '',
          type: 'WEB',
          href: '//www.myuniuni.com/m#/',
          img: ''
        },
        {
          badge: 'fa-weixin',
          name: '智能院校库（小程序）',
          desc: '小程序版本,集美国最全院校，最全排名，智能推荐选校于一体的智能院校系统',
          star: '',
          type: 'WECHAT',
          href: '',
          img: '/imgs/wechat1.jpeg'
        },
        {
          badge: 'fa-weixin',
          name: 'GPA计算器',
          desc: '用于计算GPA，方便的在几种计算标准中找到最适合的计算方式',
          star: '',
          type: 'WECHAT',
          href: '',
          img: '/imgs/wechat1.jpeg'
        },
        {
          badge: 'fa-weixin',
          name: '背景智能诊断',
          desc: '方便学生了解自己的综合实力，以便学习中查漏补缺',
          star: '',
          type: 'WECHAT',
          href: '',
          img: '/imgs/wechat1.jpeg'
        },
        {
          badge: 'fa-github',
          name: '时间轴日历',
          desc: '日历中显示时间轴，可显示多条时间轴，且可以单独查看某条时间轴',
          star: '',
          type: 'GITHUB',
          href: '',
          img: ''
        }
      ]
    }
  },
  created () {
    this.animate = true
  },
  methods: {
    showTypeContent (typeContent) {
      console.log(this)
      if (!typeContent.show) {
        Vue.set(typeContent, 'show', true)
      } else {
        Vue.set(typeContent, 'show', false)
      }
    }
  }
}
</script>

<style lang="scss">
.project-container{
  .project-sidebar{
    width: 140px;
    float: left;
    font-size: 16px;
    @include media("<=phone") {
      position: absolute;
      top: 70px;
      left: 0;
      z-index: 10;
      width: 100%;
      text-align: center;
    }
    .project-type{
      height: 50px;
      line-height: 30px;
      padding: 10px;
      cursor: pointer;
      color: var(--text-color, #555);
      transition: all .2s;
      &:hover{
        color: #000;
        font-weight: 700;
      }
      &.active{
        font-weight: 700;
        color: #000;
      }
      @include media("<=phone") {
        display: inline-block;
        height: 40px;
        line-height: 30px;
        padding: 5px 10px;
      }
    }
  }
  .project-main{
    margin-left: 150px;
    @include media("<=phone") {
      margin: 0;
      padding: 50px 5px 0;
      text-align: center;
    }
    .project-item{
      position: relative;
      display: inline-block;
      list-style: none;
      width: 240px;
      height: 280px;
      margin-right: 15px;
      margin-bottom: 15px;
      vertical-align: top;
      text-align: center;
      box-shadow: $box-shadow-box;
      @include media("<=phone") {
        margin-right: 0;
        width: 70%;
      }
      a{
        border-radius: 3px;
        color: var(--text-color, #555);
        padding: 0 10px;
        display: block;
        width: 100%;
        height: 100%;
        // background: #fff;
        background: var(--box-bg, #fff);
        transition: all .2s;
        &:hover{
          opacity: 0.8;
        }
      }
      .icon-box{
        font-size: 50px;
        padding: 20px 0;
      }
      .typeContent-name{
        font-size: 18px;
      }
      .typeContent-desc{
        font-size: 13px;
        padding: 16px 0;
        line-height: 1.8em;
      }
      .typeContent-info{
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
        border-top: 1px solid var(--border-color, #eee);
        padding: 20px;
        font-size: 12px;
        color: #555;
        span{
          &:first-child{
            margin-right: 80px;
          }
          &.not-github{
            color: #888;
            opacity: 0.5;
          }
          i{
            margin-right: 5px;
          }
        }
      }

      .project-mask{
        position: absolute;
        left: 0;
        top: 0;
        right: 0;
        bottom: 0;
        padding: 20px;
        text-align: center;
        img{
          width: 150px;
          height: 150px;
        }
        p{
          padding: 20px 0;
          color: #555;
        }
      }
    }
  }
}
</style>
