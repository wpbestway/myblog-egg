module.exports = app => {
  const mongoose = app.mongoose;
  const Schema = mongoose.Schema;
 
  const commentsSchema = new Schema({
    content: {
      type: String,
      require: true
    },
    createTime: {
      type: Date,
      default: Date.now
    },
    blogId: {
      type: String,
      require: true
    },
    name: {
      type: String,
      require: true
    },
    email: {
      type: String,
      require: true
    },
    replyFromName: {
      type: String
    },
    replyFromEmail: {
      type: String,
      require: true
    }
  }, {
    versionKey: false
  });
 
  return mongoose.model('Comments', commentsSchema, 'comments');
}