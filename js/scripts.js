//Start of Cipher (helped by Carl)

// var selectAndReplace = function(input) {
//   var regex = /^([a-z])(.*)([\w])(\W)?$/gi;
//   var result = regex.exec(input);
//   // console.log(result);
//   // console.log(result.length);
//   if(result[4] === undefined){
//     return result[1].toUpperCase()+result[2]+result[3].toUpperCase();
//   } else{
//     return result[1].toUpperCase()+result[2]+result[3].toUpperCase()+result[4];
//   };
// };
//
// var user_input = prompt("Enter a secret message here: ");
// var cap_phrase = selectAndReplace(user_input);
//
// console.log(cap_phrase);

//Page
jQuery(document).ready(function() {
  jQuery("h1").click(function() {
  alert("This is a header.");
  });

  jQuery("button").click(function() {
  alert("This is a bitton.");
});
