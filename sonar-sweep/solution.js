import { readLines } from '../utils.js'

const readings = readLines(import.meta.url, 'input.txt').map(num => parseInt(num))

// part 1
const one = readings.reduce((increases, reading, index) => {
  if (index > 0 && reading > readings[index - 1]) increases++

  return increases
}, 0)

// part 2
const all_sums = readings.reduce((sums, reading, index) => {
  if (readings.length > index + 2) {
    const sum = reading + readings[index + 1] + readings[index + 2]

    sums.push(sum)
  }

  return sums
}, [])

const two = all_sums.reduce((increases, reading, index) => {
  if (index > 0 && reading > all_sums[index - 1]) increases++

  return increases
}, 0)

console.log('Part 1:', one)
console.log('Part 2:', two)
