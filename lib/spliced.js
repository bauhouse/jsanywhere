function spliced(arr) {
  var section = arr.splice(3);
  return [arr, section];
}

function lastWillBeFirst(arr) {
  var section = arr.splice(3);
  return section.concat(arr);
}

var array = [1, 2, 3, 4, 5];

console.log(lastWillBeFirst(array));
