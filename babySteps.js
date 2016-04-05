// readability shmeadability!
console.log(process.argv.slice(2).reduce(function(a,b){
  return +b+a;
},0));


// The boring way:

// var result = 0;
// for (var i = 2; i < process.argv.length; i++) {
//   result += +process.argv[i]
// }
// console.log(result);
