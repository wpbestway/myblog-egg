
const Service = require('egg').Service

class BlogService extends Service {
  async getBlogs (page = 1) {
    const data = await this.ctx.response.pageQuery(this.ctx.model.Blogs, page)
    return data
  }
  async getBlog (id) {
    const data = await Promise.all([
      this.ctx.model.Blogs.findOne({ _id: id }),
      this.ctx.model.Blogs.findOne({ _id: { $gt: id } }),
      this.ctx.model.Blogs.findOne({ _id: { $lt: id } })
    ])
    return {
      article: data[0],
      before: data[1],
      after: data[2]
    }
  }
  async getTags () {
    const data = await this.ctx.model.Tags.find()
    return data
  }
  async getClassifies () {
    const data = await this.ctx.model.Classifies.find()
    return data
  }
  async getSeries () {
    const data = await this.ctx.model.Series.find()
    return data
  }
  async getTools () {
    const data = await this.ctx.model.Tools.find()
    return data
  }
  async getTool (id) {
    const data = await this.ctx.model.Tools.findOne({ _id: id })
    return data
  }
  async getComments (condition) {
    const data = await this.ctx.model.Comments.find(condition)
    return data
  }
  async addComment (condition) {
    const data = await this.ctx.model.Comments.create(condition)
    return data
  }
}

module.exports = BlogService
