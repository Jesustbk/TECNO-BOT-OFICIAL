const handler = async (m, {isOwner, isAdmin, conn, text, participants, args, command, usedPrefix}) => {

  if (usedPrefix == 'a' || usedPrefix == 'A') return;

  if (!(isAdmin || isOwner)) {
    global.dfail('admin', m, conn);
    throw false;
  }
  const pesan = args.join` `;
  const oi = `╔═══「 *📡 SISTEMA CENTRAL* 」═══╗\n║ ⚠️ *Broadcast Iniciado* ⚠️\n║ ✉️ *Mensaje*: ${pesan}\n╚═══════════════════════╝`;
  let teks = `💻 *[MODO SISTEMA ACTIVADO]* 💻\n\n⟪ *Usuarios Vinculados*: ${participants.length} ⟫\n\n${oi}\n\n┏━━━〔 *TRANSMISIÓN EN PROCESO* 〕━━━┓`;
  for (const mem of participants) {
    teks += `\n┃ ▶️ @${mem.id.split('@')[0]}`;
  }
  teks += `\n┗━━━━━━━━━━━━━━━━━━━━━━━━━━━┛\n\n🛰️ *Operación Finalizada con Éxito* 🛰️`;
  conn.sendMessage(m.chat, {text: teks, mentions: participants.map((a) => a.id)} );
};
handler.help = ['todos <mesaje>'];
handler.tags = ['group'];
handler.command = /^(tagall|invocar|marcar|todos|invocación)$/i;
handler.admin = true;
handler.group = true;
export default handler;