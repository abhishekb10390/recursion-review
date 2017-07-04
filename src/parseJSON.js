// this is what you would do if you were one to do things the easy way:
// var parseJSON = JSON.parse;

// but you're not, so you'll write it from scratch:
var parseJSON = function(json) {
  // your code goes here
  if (typeof(json) !== 'string') {
    return; 
  }
  var primitiveParser = function(value) {
    return eval(value);
  };
  //function for number , string, boolean, null, undefined, object, array 
  if (json[0] === '{') {
    //we know its an obect
    var output = {};  
    var stringObj = json.slice(1, json.length - 1);
    var keyVals = stringObj.split(',');
    keyVals.forEach(function(keyVal) {
      var key = '';
      var value = '';
      keyVal.split(':').forEach(function(ele, i) {
        if (i === 0) {
          key = eval(ele);
        } else {
          value = parseJSON(ele);
        }
      });
      output[key] = value;
    });
console.log(output); 
    return output;
  } else if (json[0] === '[') {
    //its an array
    var arrOut = [];
    var arrString = json.slice(1, json.length - 1);
    arrString.split(',').forEach(function(ele,i,arr) {
    
console.log(arrOut, ele,arr);
      arrOut.push(parseJSON(ele));
    });
    return arrOut;
  } else {
    return primitiveParser(json);  
  } 
};

 

 