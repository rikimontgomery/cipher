// var selectAndReplace = function(secret_phrase) {
//   var fl = /^[a-z]/gi;
//   var ll = /\w$/gi;
//   secret_phrase = secret_phrase.replace(ll, function(x) {
//     return x.toUpperCase()});
//   secret_phrase = secret_phrase.replace(fl, function(x) {
//     return x.toUpperCase()});
//   return secret_phrase;
// };
//

//

// // console.log(user_input);

var selectAndReplace = function(input) {
  var regex = /^([a-z])(.*)([\w])(\W)?$/gi;
  var result = regex.exec(input);
  // console.log(result);
  // console.log(result.length);
  if(result[4] === undefined){
    return result[1].toUpperCase()+result[2]+result[3].toUpperCase();
  } else{
    return result[1].toUpperCase()+result[2]+result[3].toUpperCase()+result[4];
  };
};

var user_input = prompt("Enter a secret message here: ");
var cap_phrase = selectAndReplace(user_input);

console.log(cap_phrase);
