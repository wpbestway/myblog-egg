module.exports = app => {
  const mongoose = app.mongoose;
  const Schema = mongoose.Schema;
 
  const seriesSchema = new Schema({
    title: {
      type: String,
      require: true
    },
    description: {
      type: String
    },
    createTime: {
      type: String,
      default: new Date()
    },
    praise: {
      type: Number,
      default: 0
    },
    avatar: {
      type: String
    },
    state: {
      type: Number,
      default: 0
    }
  }, {
    versionKey: false
  });
 
  return mongoose.model('Series', seriesSchema, 'series');
}