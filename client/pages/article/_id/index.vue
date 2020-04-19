<template>
  <section class="article-container">
    <div class="article">
      <h1>{{ article.title }}</h1>
      <p class="info">
        <span class="time">
          <i class="iconfont icon-shijian"></i> {{ article.createTime | timeFormat }}
        </span>
        <span class="tag">
          <i class="iconfont icon-biaoqian"></i> {{ article.tagName }}
        </span>
        <span class="classify">
          <i class="iconfont icon-fenlei"></i> {{ article.classifyName }}
        </span>
      </p>
      <div class="content markdown-body" v-html="article.render_content"></div>
    </div>
    <div class="more-box">
      <p v-if="before">
        <nuxt-link :to="'/article/' + before._id">
          上一篇：{{ before.title }}
        </nuxt-link>
      </p>
      <p v-if="after">
        <nuxt-link :to="'/article/' + after._id">
          下一篇：{{ after.title }}
        </nuxt-link>
      </p>
    </div>
    <div class="commentlist-box">
      <label class="commentlist-label">
        评论
      </label>
      <ul class="comment-list">
        <li class="comment-item" v-for="comment in commentData" :key="comment._id">
          <p class="comment-name">
            {{ comment.name }}
            <span v-if="comment.replyFromName" class="comment-name-label">
              回复：
            </span>
            <span v-if="comment.replyFromName">
              {{ comment.replyFromName }}
            </span>
          </p>
          <p class="comment-content">
            {{ comment.content }}
          </p>
          <p class="comment-time">
            {{ comment.createTime | timeFormat }}
            <span v-if="!comment.replying" class="reply-btn" @click="replyComment(comment, $event)">
              回复
            </span>
            <span v-else class="reply-btn" @click="cancelReplyComment(comment)">
              取消回复
            </span>
          </p>
          <div class="comment-box" v-if="comment.replying">
            <label>回复评论</label>
            <p class="input-item">
              <label>* 称呼：</label>
              <input
                class="vistor-name"
                type="text"
                placeholder="称呼"
                v-model="comment.replyCommentData.name"
              />
            </p>
            <p class="input-item">
              <label>* 邮箱：</label>
              <input type="text" placeholder="邮箱" v-model="comment.replyCommentData.email" />
            </p>
            <p class="input-item">
              <label>* 内容：</label>
              <textarea v-model="comment.replyCommentData.content" placeholder="请输入内容"></textarea>
            </p>
            <button class="comment-submit" @click="submitComment(comment)">
              提交
            </button>
          </div>
        </li>
        <li class="comment-item" v-if="commentData.length === 0">
          留下你的足迹吧！
        </li>
      </ul>
      <div class="comment-box">
        <label>发布评论</label>
        <p class="input-item">
          <label>* 称呼：</label>
          <input
            class="vistor-name"
            type="text"
            placeholder="称呼"
            v-model="comment.name"
          />
        </p>
        <p class="input-item">
          <label>* 邮箱：</label>
          <input type="text" placeholder="邮箱" v-model="comment.email" />
        </p>
        <p class="input-item">
          <label>* 内容：</label>
          <textarea v-model="comment.content" placeholder="请输入内容"></textarea>
        </p>
        <button class="comment-submit" @click="submitComment('')">
          提交
        </button>
      </div>
    </div>
  </section>
</template>

<script>
import Vue from 'vue'
import { getArticle, submitComment, getComment } from '../../../api/api'
export default {
  transition: {
    name: 'translate',
    mode: 'out-in'
  },
  async asyncData ({ params, err }) {
    let data = await Promise.all([
      getArticle(params.id),
      getComment(params.id)
    ])
    let articleRes = data[0]
    let commentRes = data[1]
    let articleData = {
      article: articleRes.article,
      before: articleRes.before,
      after: articleRes.after
    }
    commentRes.forEach((comment) => {
      Vue.set(comment, 'replyCommentData', {
        name: '',
        email: '',
        content: ''
      })
    })
    let commentData = { commentData: commentRes }
    return { ...articleData, ...commentData }
  },
  async fetch ({ store, params }) {
    await Promise.all([store.dispatch('SET_TAGS_ACTION'), store.dispatch('SET_CLASSIFYLIST_ACTION')])
  },
  data () {
    return {
      comment: {
        name: '',
        email: '',
        content: ''
      }
    }
  },
  created () {},
  components: {},
  methods: {
    replyComment (comment, e) {
      Vue.set(comment, 'replyCommentData', {
        name: '',
        email: '',
        content: ''
      })
      Vue.set(comment, 'replying', true)
    },
    cancelReplyComment (comment) {
      Vue.set(comment, 'replying', false)
    },
    submitComment (comment) {
      let data = {}
      if (comment) {
        if (comment.replyCommentData.name === '' && comment.replyCommentData.content === '') {
          alert('请输入完整')
          return
        }
        data = {
          name: comment.replyCommentData.name,
          email: comment.replyCommentData.email,
          content: comment.replyCommentData.content,
          replyFromEmail: comment ? comment.email : '',
          replyFromName: comment ? comment.name : '',
          blogId: this.article._id
        }
      } else {
        if (this.comment.name === '' || this.comment.content === '' || this.comment.email === '') {
          alert('请输入完整')
          return
        }
        data = {
          name: this.comment.name,
          email: this.comment.email,
          content: this.comment.content,
          replyEmail: '',
          replyName: '',
          blogId: this.article._id
        }
      }
      submitComment(data).then((res) => {
        getComment(this.article._id).then((res) => {
          this.commentData = res
          if (comment) {
            Vue.set(comment, 'replying', false)
          } else {
            this.comment = {
              name: '',
              email: '',
              content: ''
            }
          }
        })
      }).catch((err) => {
        if (err.response.status === 422) {
          const message = err.response.data.data[0].message
          alert(message)
        } else {
          alert('提交失败')
        }
      })
    }
  }
}
</script>

<style lang="scss">
@import '~/styles/mixin.scss';
.article-container {
  position: relative;
  @include media('<=phone') {
    padding: 0 5px;
  }
  .article {
    padding: 1em 2em;
    overflow: hidden;
    @include panel();
    @include media('<=phone') {
      padding: 15px;
    }
    h1 {
      font-size: 18px;
      font-weight: 700;
      color: var(--text-color, #555);
      margin: 10px 0 20px;
    }
    .info {
      margin-bottom: 20px;
      font-size: 11px;
      span {
        margin-right: 60px;
        color: var(--text-color, #777);
        @include media('<=phone') {
          margin-right: 20px
        }
      }
    }
  }
  .markdown-body {
    color: var(--text-color);
  }
  .more-box {
    margin-top: $margin-base-box;
    padding: 1em 2em;
    @include media('<=phone') {
      padding: 15px;
    }
    @include panel();
    p {
      font-size: 14px;
      line-height: 1.4em;
      padding: 5px;
      a {
        color: var(--text-color, #555);
        text-decoration: underline;
      }
    }
  }
  .commentlist-box {
    margin-top: 15px;
    padding: 1em 2em;
    @include media('<=phone') {
      padding: 15px;
    }
    overflow: hidden;
    color: var(--text-color, #555);
    @include panel();
    .commentlist-label {
      display: block;
      padding-bottom: 20px;
      font-size: 18px;
      font-weight: 900;
    }
    .comment-list {
      .comment-item {
        padding-bottom: 10px;
        padding-top: 10px;
        list-style: none;
        border-bottom: 1px solid #eee;
        &:first-child {
          padding-top: 0;
        }
        &:last-child {
          // padding-bottom: 0;
          // border-bottom: 0;
        }
        .comment-name {
          font-size: 14px;
          font-weight: 700;
          .comment-name-label {
            font-weight: 300;
            color: var(--text-color, #888);
          }
        }
        .comment-content {
          padding: 15px 0;
          font-size: 14px;
        }
        .comment-time {
          position: relative;
          color: var(--text-color, #808080);
          font-size: 12px;
        }
        .reply-btn {
          position: absolute;
          right: 0px;
          bottom: 0px;
          font-size: 12px;
          color: var(--text-color, #888);
          cursor: pointer;
        }
      }
    }
  }
  .comment-box {
    margin-top: 30px;
    background: var(--box-bg, $box-bg);
    padding: 15px;
    // box-shadow: $box-shadow-box;
    border: 1px solid var(--border-color, #eee);
    border-radius: 3px;
    overflow: hidden;
    color: var(--text-color, #555);
    input,
    textarea {
      display: inline-block;
      width: 280px;
      font-size: 14px;
      border: 1px solid var(--border-color, #eee);
      border-radius: 3px;
      background: var(--input-bg, #fff);
      padding: 8px;
    }
    textarea {
      width: 100%;
      height: 150px;
    }
    label {
      display: block;
      padding-bottom: 10px;
      width: 100px;
      font-size: 14px;
    }
    & > label {
      font-weight: 700;
    }
    .input-item {
      padding: 5px 0;
    }
    button {
      display: block;
      width: 100%;
      font-size: 14px;
      color: var(--text-color, #555);
      border-radius: 2px;
      background: var(--body-bg, #eee);
      padding: 10px 20px;
      border: 0;
      cursor: pointer;
    }
  }
}
</style>
