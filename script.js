const data = {
	lists: [
		['first', [15, 11, 13, 7, 5]],
		['second', [2, 6, 8, 4, 14, 12, 10]],
		['third', [9, 3, 1]],
	]
}

// Only edit below

const a = data.lists[0][1];//first line 
const b = data.lists[1][1];//second line
const c = data.lists[2][1];//third line


const result = [a.concat(b,c)];// created a new array with all arrays included
console.log(result)

const { first = 1 } = data.first || {}
const { second = 1 } = data.second || {}//not sure whats happening here, especially the first in = 1 in curly brackets
const { third = 1 } = data.third || {}// didn't use this at all

const lastA = a.slice(-1);
const lastB = b.slice(-1);
const lastC = c.slice(-1);
console.log(lastA,lastB,lastC) // testing to see if it picks the last values in each array

//console.log(first)
const add = result // want to a variable to use when pushing the biggest last number to new array (result)

const extractBiggest = () => {
	if (lastA > lastB) { // if last number of array A is bigger than that of aaray B
		return add.push(lastA) //then add it to the new array result
	}

	if (lastC <lastB) {
		return add.push(lastB)
	}
  if (lastC > lastB){
      return add.push(lastC)
  }
}

// Only edit above

result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())

result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())

result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())

console.log(result)