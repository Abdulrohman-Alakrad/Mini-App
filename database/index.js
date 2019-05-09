const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/Users');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("We're connected!");
});

let repoSchema = mongoose.Schema({
  // TODO: your schema here!
  fullName:{type: String, trim: true, unique: true},
  email:{type: String, trim: true, unique: true},
  password:{type: String, trim: true, unique: true}
});

let Repo = mongoose.model('Repo', repoSchema);

module.exports.Repo =Repo;