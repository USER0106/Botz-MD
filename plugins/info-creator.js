const { default: makeWASocket, BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, downloadContentFromMessage, downloadHistory, proto, getMessage, generateWAMessageContent, prepareWAMessageMedia } = require('@adiwajshing/baileys')
let handler = async (m, {conn}) => {
const vcard = `BEGIN:VCARD
VERSION:3.0
N:;;;
FN: 𝘼𝙈𝙄𝙍𝙍 𝙓
item.ORG: 𝘼𝙈𝙄𝙍𝙍
item1.TEL;waid=6282154156241:6282154156241@s.whatsapp.net
item1.X-ABLabel:owner selalu ada 
item2.EMAIL;type=INTERNET: amirr@gmail.com
item2.X-ABLabel:📧Email
item3.ADR:;;🎍SAMARINDA;;;;
item3.X-ABADR:ac
item3.X-ABLabel:asal kota
item4.URL:https://github.com/USER0106
item4.X-ABLabel:Website
END:VCARD`
const sentMsg  = await conn.sendMessage(
    m.chat,
    { 
        contacts: { 
            displayName: 'OWNER BOT', 
            contacts: [{ vcard }]  
        }
    }
)
let dani = 'https://telegra.ph/file/c7c06622200d0d75a7e98.jpg'
await conn.send3ButtonImg(m.chat, dani, "*Hai kak👋,  Itu nomor owner gw…*", '📮: jngn di spam kack', 'Source code', '.sc', 'Back', '.menu', 'Donasi', '.donasi', sentMsg)}
handler.help = ['owner2', 'creator2']
handler.tags = ['info']

handler.command = /^(owner2|creator2)$/i

module.exports = handler
