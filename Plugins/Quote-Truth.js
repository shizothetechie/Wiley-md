import fetch from 'node-fetch'
let handler  = async (m, { conn }) => {
	
  let res = await fetch(`https://api.shizo-devs.repl.co/api/texts/truth?apikey=${shizokeys}`)
  if (!res.ok) throw await res.text()
	    let json = await res.json()

  let shizo = `${json.result}`
  conn.sendMessage(m.chat, { text: shizo, mentions: [m.sender] }, { quoted: m })
}
handler.help = ['truth']
handler.tags = ['quotes']
handler.command = /^(truth)$/i

export default handler


function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}