// this is what you would do if you were one to do things the easy way:
// var parseJSON = JSON.parse;

// but you're not, so you'll write it from scratch:
var parseJSON = function(json) {
  // your code goes here
  //function for number , string, boolean, null, undefined, object, array 
  if (json[0] === '{') {
    //we know its an obect
    var output = {};  
    for (var i = 2; i < json.length; i++) {
      var key = '';
      var value = '';
      if (json[i] === '"') {
        var j = i + 3;
        while ((json[j] !== '"' || json[j] !== '}') && j < json.length) {
          value += json[j];
          j++;
        }
console.log(key, value);
        output[eval(key)] = parseJSON(value);  
      }
      key = key + json[i];
console.log(key)
    }
    return output;
  } else if (json[0] === '[') {
    //its an array
  } else {
    return primitiveParser(json);  
  } 
    
  var primitiveParser = function(value) {
    return eval(value);
  };
};

