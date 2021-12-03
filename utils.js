import { readFileSync } from 'fs'
import { dirname, join } from 'path'
import { fileURLToPath } from 'url'

export const lines = (text) => {
  return text.trim().split('\n')
}

export const read = (url, file) => {
  return readFileSync(
    join(dirname(fileURLToPath(url)), file),
    'utf-8'
  )
}

export const readLines = (url, file) => {
  return lines(read(url, file))
}
