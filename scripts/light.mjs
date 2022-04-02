import { readFileSync, writeFileSync } from 'fs'

const darkThemeContent = readFileSync('themes/dark-color-theme.json', 'utf-8')
const lightThemeContent = darkThemeContent
  .replace(`"name": "8-Bit Dark"`, `"name": "8-Bit Light"`)
  .replace(`"type": "dark"`, `"type": "light"`)
  .replaceAll('#000', '#$FFF')
  .replaceAll('#00F', '#$00F')
  .replaceAll('#0F0', '#$0F0')
  .replaceAll('#0FF', '#$0FF')
  .replaceAll('#F00', '#$F00')
  .replaceAll('#F0F', '#$F0F')
  .replaceAll('#FF0', '#$FF0')
  .replaceAll('#FFF', '#$000')
  .replaceAll('#$', '#')

writeFileSync('themes/light-color-theme.json', lightThemeContent, 'utf-8')
