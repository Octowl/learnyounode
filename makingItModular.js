var filter = require('./extFilter');

var dir = process.argv[2];
var ext = process.argv[3];

filter(dir, ext, function(err, data){
  if (err) {
    return console.error();
  }

  data.forEach(function(file){
    console.log(file);
  });
});
