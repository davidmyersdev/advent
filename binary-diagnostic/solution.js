import { readLines } from '../utils.js'

const lines = readLines(import.meta.url, 'input.txt')

const bitMapper = (bitString) => {
  return bitString.split('').map(bit => parseInt(bit))
}

const bitSumReducer = (bitSums, bits) => {
  const newSums = [...bitSums]

  bits.forEach((bit, index) => newSums[index] += bit)

  return newSums
}

const gammaMapper = (bitSum) => {
  return Math.round(bitSum / lines.length)
}

const sumIndex = (list, index) => {
  return list.reduce((a, b) => (a + b[index]), 0)
}

const toDecimal = (bits) => {
  return parseInt(bits.join(''), 2)
}

const bits = lines.map(bitMapper)
const bitSums = bits.reduce(bitSumReducer)

// part 1
const gammaBits = bitSums.map(gammaMapper)
const gammaRate = toDecimal(gammaBits)
const epsilonBits = gammaBits.map(g => 1 - g)
const epsilonRate = toDecimal(epsilonBits)
const powerConsumption = gammaRate * epsilonRate

//part 2
const getReading = (bitList, { index = 0, oxygen = true } = {}) => {
  const sum = sumIndex(bitList, index)
  const length = bitList.length
  const comparator = oxygen ? (sum / length === 0.5 ? 1 : sum / length > 0.5 ? 1 : 0) : (sum / length === 0.5 ? 0 : sum / length < 0.5 ? 1 : 0)
  const filtered = bitList.filter((bits) => comparator === bits[index])

  if (filtered.length > 1) {
    return getReading(filtered, { oxygen, index: index + 1 })
  }

  return filtered[0]
}

const oxygenGeneratorRating = toDecimal(getReading(bits))
const co2ScrubberRating = toDecimal(getReading(bits, { oxygen: false }))
const lifeSupportRating = oxygenGeneratorRating * co2ScrubberRating

console.log('Part 1:', powerConsumption)
console.log('Part 2:', lifeSupportRating)
