import { readLines } from '../utils.js'

const lines = readLines(import.meta.url, 'input.txt')

const bitMapper = (bitString) => {
  return bitString.split('').map(bit => parseInt(bit))
}

const gammaMapper = (bitSum) => {
  return Math.round(bitSum / lines.length)
}

const gammaReducer = (bitSums, bits) => {
  bits.forEach((bit, index) => bitSums[index] += bit)

  return bitSums
}

// part 1
const gammaBits = lines.map(bitMapper).reduce(gammaReducer).map(gammaMapper)
const gammaRate = parseInt(gammaBits.join(''), 2)
const epsilonBits = gammaBits.map(g => 1 - g)
const epsilonRate = parseInt(epsilonBits.join(''), 2)
const powerConsumption = gammaRate * epsilonRate

console.log('Part 1:', powerConsumption)
