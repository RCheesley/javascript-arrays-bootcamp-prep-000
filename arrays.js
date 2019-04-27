var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray() {
  var array=[1]
  array = ["foo",...array]
  return array;
}

function destructivelyAddElementToBeginningOfArray() {
  var array = [1]
  array.unshift("foo")
  return array;
}

function addElementToEndOfArray() {
  var array=[1]
  array = [...array,"foo"]
}

function destructivelyAddElementToEndOfArray() {
  var array=[1]
  array.push("foo")
}
