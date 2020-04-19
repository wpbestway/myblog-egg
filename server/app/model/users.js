module.exports = app => {
  const mongoose = app.mongoose;
  const Schema = mongoose.Schema;
 
  const usersSchema = new Schema({
    username: {
      type: String,
      unique: true,
      require: true
    },
    pwd: {
      type: String,
      require: true
    },
    name: {
      type: String
    },
    createTime: {
      type: Date,
      default: new Date()
    },
    loginTime: {
      type: Date
    },
    avatar: {
      type: String
    },
    roles: {
      type: Array,
      default: ['admin']
    }
  }, {
    versionKey: false
  });
 
  return mongoose.model('Users', usersSchema, 'users');
}