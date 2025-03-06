import fs from 'fs'

const version = fs.readFileSync('version', 'utf8')
const currentData = fs.readFileSync('./dist/style.css', 'utf8')

fs.writeFileSync('./dist/style.css', currentData.replace(/\{\{version\}\}/g, version))