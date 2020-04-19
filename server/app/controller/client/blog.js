
const Controller = require('egg').Controller

class HomeController extends Controller {
  async getBlogs () {
    const blogs = await this.ctx.service.client.blog.getBlogs()
    this.ctx.success(blogs)
  }
  async getBlog () {
    const { blogId } = this.ctx.query
    const blog = await this.ctx.service.client.blog.getBlog({ _id: blogId })
    this.ctx.success(blog)
  }
  async getTags () {
    const tags = await this.ctx.service.client.blog.getTags()
    this.ctx.success(tags)
  }
  async getClassifies () {
    const classifies = await this.ctx.service.client.blog.getClassifies()
    this.ctx.success(classifies)
  }
  async getSeries () {
    const series = await this.ctx.service.client.blog.getSeries()
    this.ctx.success(series)
  }
  async getTools () {
    const tools = await this.ctx.service.client.blog.getTools()
    this.ctx.success(tools)
  }
  async getTool () {
    const { id } = this.ctx.query
    const tool = await this.ctx.service.client.blog.getTool(id)
    this.ctx.success(tool)
  }
  async getComments () {
    const error = this.app.validator.validate({
      blogId: { type: 'string' }
    }, this.ctx.query)
    if (error) {
      this.ctx.error(error, 422, 1003)
    } else {
      const { blogId } = this.ctx.query
      const comments = await this.ctx.service.client.blog.getComments({ blogId })
      this.ctx.success(comments)
    }
  }
  async addComment () {
    const error = this.app.validator.validate({
      email: { required: true, type: 'email' },
      name: { type: 'string', max: 100 },
      content: { type: 'string', max: 10000 },
      blogId: { type: 'string' }
    }, this.ctx.request.body)
    if (error) {
      this.ctx.error(error, 422, 1003)
    } else {
      const { blogId } = this.ctx.request.body
      const count = await this.ctx.model.Comments.count({ blogId })
      if (count > 1000) {
        this.ctx.error([{ message: '评论数量太多，已关闭本篇文章评论功能' }], 422, 1004)
      } else {
        const commentData = await this.ctx.service.client.blog.addComment(this.ctx.request.body)
        this.ctx.success(commentData)
      }
    }
  }
}

module.exports = HomeController
