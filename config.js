//Upgraded To Wiley-md V02 
import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk'
import { fileURLToPath } from 'url'
import fs from 'fs'

//Important & must be change #ATY
global.owner = [
  ['916207142994', 'Gariox 3D', true],
    ['919172389527', 'Shizo The Techie', true]
] 
global.prems = []


//Make Changes #ATY
global.bname = 'Wiley-md'     //Your Bot Name
global.oname = 'Gariox & Shizo'     //Your Name
global.iglink = 'https://Instagram.com/error.mods'     //Your Instagram Link
global.ytlink = 'https://YouTube.com/@errormodsyt'      //Your YouTube Channel Link
global.gclink = 'https://chat.whatsapp.com/F8QOoaz3qWqJlI2mwpa1QH' //Your WhatsApp Group Link
global.script = 'https://github.com/Shizothetechie/wiley-md'  //Donot Change if you appreciate our work 🙂❤️



//Global ImgRes #NMTM
global.menuimg = fs.readFileSync('./media/menu.png')
global.btnimg = fs.readFileSync('./media/logo.png')
global.imgmenu = fs.readFileSync('./media/logo.png')

//Wiley-MD Internal #NMTM
global.version = '2.0.1'
global.package = 'com.tedevs.wiley'
global.library = 'Baileys-MD'

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})
