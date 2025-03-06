import fs from 'fs'

const getKeys = (path) => Object.keys(JSON.parse(fs.readFileSync(path, 'utf-8')))

const filled = getKeys('./fonts/Remix-filled.json')
const regular = getKeys('./fonts/Remix-regular.json')

const merged = new Set([...filled, ...regular])

let buggy = false

for (const key of merged) {
  if (!filled.includes(key)) {
    buggy = true
    console.error(`[Filled] is missing ${key}`)
  }
  if (!regular.includes(key)) {
    buggy = true
    console.error(`[Regular] is missing ${key}`)
  }
}

if (buggy) {
  throw new Error('Codepoints are not equal')
}
