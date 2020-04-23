
const Service = require('egg').Service
const mongoose = require('mongoose')

class BlogService extends Service {
  async getBlogs (page) {
    const data = await this.ctx.response.pageQuery(this.ctx.model.Blogs, page)
    return data
  }
  async getBlog (id) {
    const data = await this.ctx.model.Blogs.aggregate([
      {
        $match: { _id: mongoose.Types.ObjectId(id) }
      },
      {
        $lookup: {
          from: 'tags',
          localField: 'tag_id',
          foreignField: '_id',
          as: 'tag'
        }
      },
      {
        $lookup: {
          from: 'classifies',
          localField: 'classify_id',
          foreignField: '_id',
          as: 'classify'
        }
      },
      {
        $lookup: {
          from: 'series',
          localField: 'series_id',
          foreignField: '_id',
          as: 'series'
        }
      }
    ]).unwind('tag', 'classify')
    const blog = data[0]
    if (blog) {
      if (blog.series.length) {
        blog.series = blog.series[0]
      } else {
        blog.series = null
      }
    }
    return blog
  }
}

module.exports = BlogService
