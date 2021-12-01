import { readFileSync } from 'fs'
import { dirname, join } from 'path'
import { fileURLToPath } from 'url'

const input = readFileSync(
  join(
    dirname(fileURLToPath(import.meta.url)),
    'input.txt'
  ),
  'utf-8'
)

const readings = input.trim().split('\n')

const result = readings.reduce((increases, reading, index) => {
  if (index > 0 && parseInt(reading) > parseInt(readings[index - 1])) increases++

  return increases
}, 0)

console.log(result)
