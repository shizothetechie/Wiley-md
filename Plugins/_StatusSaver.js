

import db from '../lib/database.js'
let handler = m => m

handler.before = function (m, { isAdmin, isBotAdmin, conn }) {
let bot = db.data.settings[conn.user.jid]
  if (m.isBaileys) return true
if (bot.saver){
    if(m.chat == 'status@broadcast'){
m.copyNForward(`${onum}` + '@s.whatsapp.net')
}
    }
}

export default handler