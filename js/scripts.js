console.log('is it working?');
//i will make an array with different type of fruits.

var fruitsArray = ['Peach','Banana','Grapes'];
//this variable will find the first item in my fruitsArray
var firstfruit = fruitsArray[0];

// I will makean if else conditional that will test to
//see whether the first item in my fruitsArray is Apple.
//We will also test whether the third donut is grape.
if (firstfruit == 'Apple') {
console.log('This first fruit is Apple fruit');
} else if (fruitsArray[2] == 'Grapes'){
  console.log('This third fruit is grape fruit.')
} else {
  console.log('the first fruit is not an apple fruit');
  console.log('Actually, the first fruit is '+firstfruit);
}
