module.exports = app => {
  const mongoose = app.mongoose;
  const Schema = mongoose.Schema;
 
  const tagsSchema = new Schema({
    name: {
      type: String,
      require: true
    },
    createTime: {
      type: Date,
      default: Date.now
    }
  }, {
    versionKey: false
  });
 
  return mongoose.model('Tags', tagsSchema, 'tags');
}