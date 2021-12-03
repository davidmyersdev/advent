import { readLines } from '../utils.js'

const movements = readLines(import.meta.url, 'input.txt')

const calculateMovement = (movement) => {
  const [direction, distance] = movement.split(/\s+/)

  return [direction, parseInt(distance)]
}

// part 1
const position1 = movements.reduce((position, movement) => {
  const [direction, distance] = calculateMovement(movement)

  if (direction === 'down') position.y -= distance
  else if (direction === 'forward') position.x += distance
  else if (direction === 'up') position.y += distance

  return position
}, { x: 0, y: 0 })

const product1 = position1.x * (position1.y * -1)

// part 2
const position2 = movements.reduce((instruments, movement) => {
  const [direction, distance] = calculateMovement(movement)

  if (direction === 'down') {
    instruments.aim += distance
  } else if (direction === 'forward') {
    instruments.x += distance
    instruments.y -= distance * instruments.aim
  } else if (direction === 'up') {
    instruments.aim -= distance
  }

  return instruments
}, { aim: 0, x: 0, y: 0 })

const product2 = position2.x * (position2.y * -1)

console.log('Part 1:', product1)
console.log('Part 2:', product2)
