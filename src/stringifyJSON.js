// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // your code goes here
  if (typeof(obj) === 'string') {
    return '"' + obj + '"';
  }
  if (obj === null) {
    return 'null';
  }
  if (obj === undefined || typeof(obj) === 'function') {
    return;
  } 
  if (Array.isArray(obj)) {
    var output = [];
    if (obj.length === 0) {
      return '[]';
    } 
    for (var i = 0; i < obj.length; i++) {
      output.push(stringifyJSON(obj[i])); 
    }
    return '[' + output.join(',') + ']';
  }
  if (obj instanceof Object) {
    var objoutput = [];
    var key = Object.keys(obj);
    if (key.length === 0) {
      return '{}';
    } 
    for (var keys in obj) {
      if (typeof obj[keys] === 'function' || keys === undefined || typeof keys === 'function' || obj[keys] === undefined) {
        continue;
      } else {
        objoutput.push(stringifyJSON(keys) + ':' + stringifyJSON(obj[keys]));
      } 
    }
    return '{' + objoutput.join(',') + '}';
  }  
  return obj.toString();

};




