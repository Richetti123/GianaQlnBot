const handler = async (m, {isOwner, isAdmin, conn, text, participants, args, command, usedPrefix}) => {
  if (usedPrefix == 'a' || usedPrefix == 'A') return;
  if (!(isAdmin || isOwner)) {
    global.dfail('admin', m, conn);
    throw false;
  }
  const pesan = args.join` `;
let oi = `*@𝗴𝗶𝗮𝗻𝗮𝗾𝗹𝗻* ${pesan}`
let teks = `*𝗔𝗰𝘁𝗶𝘃𝗲𝗻𝘀𝗲 𝗣𝘃𝘁𝗮𝘀*\n\n${oi}\n*MENCIONES:*\n`
for (let mem of participants) {
teks += `🍓 @${mem.id.split('@')[0]}\n`}
teks += `GianaQlnBot`
  conn.sendMessage(m.chat, {text: teks, mentions: participants.map((a) => a.id)} );
};
handler.help = ['tagall <mesaje>', 'invocar <mesaje>'];
handler.tags = ['group'];
handler.command = /^(tagall|invocar|invocacion|todos|invocación)$/i;
handler.admin = true;
handler.group = true;
export default handler;
