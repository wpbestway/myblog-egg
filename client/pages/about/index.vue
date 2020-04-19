<template>
  <section class="about-container">
    <div class="about-header">
      <h2>汪培</h2>
      <p class="about-info">
        <span>上海优轹教育/符号留学</span>
        <span>前端</span>
      </p>
      <p class="about-info">
        <span>
          <i class="fa fa-phone"></i>
          18581688737
        </span>
        <span>
          <i class="fa fa-envelope"></i>
          wp_best@163.com
        </span>
      </p>
    </div>
    <div class="about-content">
      <label>工作经历</label>
      <div class="experience">
        <p class="experience-title">
          符号留学/前端工程师
        </p>
        <div class="experience-content">
          <h4>智能院校系统</h4>
          <ul>
            <li>独立负责公司智能院校系统客户端前端工程的搭建，研发与维护，使用vue全家桶，与后端一同打造了全国数据最全，平台最全的的美国院校数据库；</li>
            <li>独立负责公司院校系统的后端开发与维护（vue全家桶）；</li>
            <li>独立负责公司选校推荐系统的研发与维护，通过后端大数据系统，为学生提供最适合的选校；</li>
            <li>独立负责公司服务商城的研发与维护，方便学生在平台购买留学服务；</li>
            <li>独立负责开发并维护智能院校系统的移动web端（vue全家桶，mpvue同时进行小程序开发）</li>
          </ul>
        </div>
        <div class="experience-content">
          <h4>智能院校库小程序</h4>
          <ul>
            <li>公司智能院校系统的小程序版本，方便微信推广（vue全家桶，mpvue方便与web端代码复用）；</li>
          </ul>
        </div>
        <div class="experience-content">
          <h4>GPA计算器等留学工具</h4>
          <ul>
            <li>GPA计算器工具类小程序开发</li>
            <li>留学规划表工具类小程序开发</li>
            <li>留学贷款计算器工具类小程序开发</li>
          </ul>
        </div>
      </div>
    </div>
    <div class="about-self">
      <label>个人项目</label>
      <div class="self-content">
        <h4>时间轴日历（vue, echarts）</h4>
      </div>
      <div class="self-content">
        <h4>博客系统(vue服务端渲染工具Nuxt, koa2, mongoose, nginx, pm2)</h4>
      </div>
    </div>
    <div class="about-other">
      <label>其他信息</label>
      <p>
        GITHUB: <a href="https://github.com/wpbestway">
          https://github.com/wpbestway
        </a>
      </p>
      <p>
        个人博客: <a href="www.readycode.cn">
          www.readycode.cn
        </a>
      </p>
      <p>
        掘金: <a href="https://juejin.im/user/58de3fa6ac502e00639d2011">
          https://juejin.im/user/58de3fa6ac502e00639d2011
        </a>
      </p>
    </div>
  </section>
</template>

<script>
export default {
  transition: {
    name: 'translate',
    mode: 'out-in'
  },
  layout: 'empty',
  data () {
    return {}
  },
  created () {
  },
  methods: {
  }
}
</script>

<style lang="scss">
.about-container{
  background: var(--box-bg, #fff);
  padding: 40px;
  color: var(--text-color, #555);
  width: 800px;
  margin: 0 auto;
  @include media("<=phone") {
    width: auto;
    padding: 10px;
    margin: 0 5px;
  }
  .about-header{
    text-align: right;
    @include media("<=phone") {
      text-align: center;
    }
    h2{
      font-size: 30px;
    }
    .about-info{
      font-size: 14px;
      padding: 20px 0 0;
      span{
        margin-left: 30px;
      }
    }

  }
  label{
    display: block;
    padding: 10px;
    width: 100%;
    color: #888;
    font-size: 20px;
    border-bottom: 1px solid var(--border-color, #eee);
  }
  .about-content{
    .experience{
      padding: 20px 10px;
      .experience-title{
        padding: 5px 0;
        font-size: 18px;
      }
      .experience-content{
        padding: 20px 0 0;
        h4{
          padding: 10px;
        }
        li{
          margin-left: 28px;
          padding: 8px 0;
          font-size: 14px;
          line-height: 1.5em;
        }
      }
    }
  }
  .about-self{
    padding-bottom: 20px;
    .self-content{
      margin-left: 28px;
      padding: 20px 0 0;
    }
  }
  .about-other{
    overflow: hidden;
    p{
      margin-left: 28px;
      padding: 20px 0 0;
      a{
        color: var(--href-color, #0ca7f8);
      }
    }
  }
}
</style>
