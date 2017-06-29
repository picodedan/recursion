// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {
  //input  class name target
  // output array of strings with all elements in an HTML document that have the specified class
  //should use: document.body, element.childNodes, and element.classList
  var elementsWithClassName = [];

  var elementToCheck = function(elem) {
    //check if element has target ClassName
    if (elem.classList.contains(className)) {
      //if true, add eleemtnt to elementsWithClassName
      elementsWithClassName.push(elem);
    }
    //itterate over child elements
    for (var i = 0; i < elem.children.length; i++) {
      //for each child call elementstoCheck
      elementToCheck(elem.children[i]);
    }
  };
  elementToCheck(document.body);

  return elementsWithClassName;
};
