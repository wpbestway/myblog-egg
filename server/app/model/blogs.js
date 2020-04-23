module.exports = app => {
  const mongoose = app.mongoose
  const Schema = mongoose.Schema

  const blogsSchema = new Schema({
    title: {
      type: String
    },
    sub_title: {
      type: String
    },
    tag: {
      type: String
    },
    tag_id: {
      type: Schema.Types.ObjectId
    },
    classify_id: {
      type: Schema.Types.ObjectId
    },
    series_id: {
      type: Schema.Types.ObjectId
    },
    content: {
      type: String
    },
    render_content: {
      type: String
    },
    createTime: {
      type: String,
      default: new Date()
    },
    cover: {
      type: String
    },
    status: {
      type: String,
      default: '0'
    }
  }, {
    versionKey: false
  })

  return mongoose.model('Blogs', blogsSchema, 'blogs')
}
