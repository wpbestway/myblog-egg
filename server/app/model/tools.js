module.exports = app => {
  const mongoose = app.mongoose;
  const Schema = mongoose.Schema;
 
  const toolsSchema = new Schema({
    title: {
      type: String,
      require: true
    },
    content: {
      type: String,
      require: true
    },
    render_content: {
      type: String,
      require: true
    },
    createTime: {
      type: Date,
      default: () => {
        return Date.parse(new Date())
      }
    }
  }, {
    versionKey: false
  });
 
  return mongoose.model('Tools', toolsSchema, 'tools');
}