// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  //input some object
  // ouput a string representing that input object,  so long as that object is 'stringifyable'
  if (typeof(obj) === 'string') {
    return '"' + obj + '"';
  } else if (typeof(obj) === 'number') {
    return '' + obj;
  } else if (typeof(obj) === 'boolean') {
    return '' + obj;
  } else if (obj === null) {
    return 'null';
  } else if (Array.isArray(obj)) {
    var result = '[';
    for(var i = 0; i < obj.length; i++) {
      if (i) {
        result += ',' + stringifyJSON(obj[i]);
      } else {
        result += '' + stringifyJSON(obj[i]);
      }
    }
    return result + ']';
  } else {
    //only remaining type of object is objects...since they are not ordered via an index,  will have to call them via properties, keys and values stingified
    // store the stringified kkey/values in an array
    var result = [];
    for (var key in obj) {
      //only pull properties of that specific object, not it's prototype
      if (obj.hasOwnProperty(key)) {
        if (typeof(obj[key]) !== 'function' && (obj[key]) !== undefined) {
          result.push(stringifyJSON(key) + ':' + stringifyJSON(obj[key]));
        }
      }
    }
    return '{' + result.join(',') + '}';

  }
};
