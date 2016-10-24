var favFlavs =['chocolate', 'strawberry', 'vanilla'];
var people = ['tony', 'ray', 'igor'];

var listAppend = function(fromArray, toList) {
  //(Array, Str) --> <li></li>
  fromArray.forEach(function(arrayItem){
    $("#"+toList).append("<li>"+arrayItem+"</li>");
  });

};

$(document).ready(function(){

listAppend(favFlavs, 'outputList');
listAppend(people, 'anotherList');


});
