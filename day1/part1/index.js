const fs = require('fs');

const input = fs.readFileSync('./calibration.txt').toLocaleString();

function lineNums(line) {
	let nums = []

	for (const char of line) {
		if (isNaN(parseInt(char))) {
			continue
		}
		nums.push(char)
	}

	return nums
}

function calcColNums(input) {
	let total = 0;
	const lines = input.split('\n')

	for (const line of lines) {
		const linenum = lineNums(line);
		total += Number(linenum[0] + linenum[linenum.length - 1])
	}
	return total
}

console.log(calcColNums(input));