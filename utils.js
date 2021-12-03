import { readFileSync } from 'fs'
import { dirname, join } from 'path'
import { fileURLToPath } from 'url'

export const read = (url, file) => {
  return readFileSync(
    join(dirname(fileURLToPath(url)), file),
    'utf-8'
  )
}
