var selectAndReplace = function(secret_phrase) {
  var fl = /^[a-z]/gi;
  var ll = /\w$/gi;
  secret_phrase = secret_phrase.replace(ll, function(x) {
    return x.toUpperCase()});
  secret_phrase = secret_phrase.replace(fl, function(x) {
    return x.toUpperCase()});
  return secret_phrase;
};

var user_input = prompt("Enter a secret message here: ");
var cap_phrase = selectAndReplace(user_input);

console.log(cap_phrase);
// console.log(user_input);
