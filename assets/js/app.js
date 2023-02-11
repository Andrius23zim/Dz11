let inputArray = [];

let size = prompt('Enter length of Array'); //Array length

for(let i = 0; i < size; i++) {
	
	inputArray[i] = prompt('Enter Element ' + (i+1));
}

console.log(inputArray);

const sortedArray = inputArray.sort((a, b) => a - b);

console.log(sortedArray);

const splicedElems = inputArray.splice(2, 3);

console.log(inputArray);
console.log(splicedElems);

