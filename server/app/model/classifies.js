module.exports = app => {
  const mongoose = app.mongoose;
  const Schema = mongoose.Schema;
 
  const classifiesSchema = new Schema({
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
 
  return mongoose.model('Classifies', classifiesSchema, 'classifies');
}