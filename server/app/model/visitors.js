module.exports = app => {
  const mongoose = app.mongoose;
  const Schema = mongoose.Schema;
 
  const visitorsSchema = new Schema({
    name: {
      type: String,
      require: true
    },
    header: {
      type: String
    }
  }, {
    versionKey: false
  });
 
  return mongoose.model('Visitors', visitorsSchema, 'visitors');
}