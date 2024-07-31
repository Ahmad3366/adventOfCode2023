const fs = require('fs')

const input = fs.readFileSync('./calibration.txt').toString()

const numsDict = {
	'1': 'one',
	'2': 'two',
	'3': 'three',
	'4': 'four',
	'5': 'five',
	'6': 'six',
	'7': 'seven',
	'8': 'eight',
	'9': 'nine',
}

function lineNums(line) {
	let nums = []

	let newline = line

	for (const char of newline) {
		for (key in numsDict) {
			if (char == numsDict[key][0] && newline.includes(numsDict[key])) {
				newline = newline.replace(numsDict[key], key+numsDict[key][numsDict[key].length - 1])
			}
		}
	}

	for (const char of newline) {
		if (isNaN(parseInt(char))) {
			continue
		}
		nums.push(char)
	}

	return nums
}

function calibrationSum(input) {
	let total = 0;
	const lines = input.split('\n')

	for (const line of lines) {
		const linenum = lineNums(line);
		total += Number(linenum[0] + linenum[linenum.length - 1])
	}
	
	return total
}

console.log(calibrationSum(input))