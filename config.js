import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk'
import { fileURLToPath } from 'url'


global.owner = [
  ['919172389527', 'Shizo The Techie', true],
  ['916207142994', 'Gariox 3D', true]
] 
global.prems = []

global.APIs = { 
  violetics : 'https://violetics.pw',
  nrtm: 'https://nurutomo.herokuapp.com',
  bg: 'http://bochil.ddns.net',
  xteam: 'https://api.xteam.xyz',
  zahir: 'https://zahirr-web.herokuapp.com',
  zeks: 'https://api.zeks.xyz',
  pencarikode: 'https://pencarikode.xyz',
  LeysCoder: 'https://leyscoders-api.herokuapp.com'
}
global.APIKeys = { 
  'https://violetics.pw': 'beta',
  'https://api.xteam.xyz': 'd90a9e986e18778b',
  'https://zahirr-web.herokuapp.com': 'zahirgans',
  'https://api.zeks.xyz': 'apivinz',
  'https://pencarikode.xyz': 'pais',
  'https://leyscoders-api.herokuapp.com': 'dappakntlll'
}

// Sticker WM
global.packname = 'TE DEVELOPERS'
global.author = 'Wiley-md'

global.copyright = 'TE DEVELOPERS'
global.packname = 'Wiley-md'
global.author = 'TE DEVELOPERS'

//sticker WM
global.stkpack = 'Wiley-md'
global.stkowner = 'TE DEVELOPERS'

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})