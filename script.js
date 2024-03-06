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


const NewOne = a.concat(b,c);// created a new array with all arrays included
console.log(NewOne)

const { first = 1 } = data.first || {}
const { second = 1 } = data.second || {}//not sure whats happening here, especially the first in = 1 in curly brackets
const { third = 1 } = data.third || {}

console.log(first)

/*const extractBiggest = () => {
	if (a[-1] > b[-1]) {
		return a[-1]
	}

	if (c[-1] < b[-1]) {
		return b[-1]
	}

	return c[-1]
}
const result = []
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

console.log(result)*/