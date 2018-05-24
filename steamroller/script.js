
function steamrollArray(arr) {
  // I'm a steamroller, baby
  var res = [];
  var level = 0;
  if (Array.isArray(arr)) {
    // res.push([level, arr]);
    findArrays(arr, level, res);
  }
  return res;
}

function findArrays(obj, level, res, isArr = false) {
  var isArr = Array.isArray(obj);
  if (isArr) {
    level++;
    var arr = obj;
    for (var i = 0; i < arr.length; i++) {
      // res.push([level, arr[i], isArr]);
      findArrays(arr[i], level, res, isArr);
      // console.log('this is an array: ' + arr[i]);
      // console.log('level: ' + level);
    }
  } else {
    // console.log("obj: " + obj);
    res.push(obj);
  }
  return 'Array recursion completed';
}

var input = "[1, [2], [3, [[4]]]]";

function process(str) {
  var arr = JSON.parse(str);
  var output = steamrollArray(arr);
  var outputStr = JSON.stringify(output);
  return outputStr;
}


addEventListener('load', function(e) {

document.querySelector('#input').value = input;

});


document.getElementById("submit").addEventListener("click", function( event ) {

input = document.getElementById("input").value;

var result = process(input);

document.getElementById("output").value = result;

}, false);

