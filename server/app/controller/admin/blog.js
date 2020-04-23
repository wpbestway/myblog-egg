
const Controller = require('egg').Controller

class WordController extends Controller {
  async getBlogs () {
    const { page } = this.ctx.query
    const blogs = await this.ctx.service.admin.blog.getBlogs(page)
    this.ctx.success(blogs)
  }
  async getBlog () {
    const { id } = this.ctx.query
    const blog = await this.ctx.service.admin.blog.getBlog(id)
    if (blog) {
      this.ctx.success(blog)
    } else {
      this.ctx.error({}, 404, 1004, '未找到博客')
    }
  }
  async editBlog () {
    const { id } = this.ctx.body
    const blog = this.ctx.model.Blogs.findOneAndUpdate({ _id: id }, {})
    return blog
  }
}

module.exports = WordController
