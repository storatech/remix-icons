import { execSync } from 'child_process'
import fs from 'fs'

const [major, minor, patch] = fs.readFileSync('version', 'utf8').split('.').map(Number)

const newPatch = patch + 1

const newVersionString = `${major}.${minor}.${newPatch}`

execSync(`npm pkg set "version"="${newVersionString}"`, { cwd: './remix_icons_react' })

const pubspectCurrent = fs.readFileSync('./remix_icons_flutter/pubspec.yaml', 'utf8').split('\n')

const versionLineIndex = pubspectCurrent.findIndex(line => line.startsWith('version:'))

pubspectCurrent[versionLineIndex] = `version: ${newVersionString}`

execSync(`npm pkg set "version"="${newVersionString}"`, { cwd: './remix_icons_react' })

fs.writeFileSync('./remix_icons_flutter/pubspec.yaml', pubspectCurrent.join('\n'))
fs.writeFileSync('version', newVersionString)
