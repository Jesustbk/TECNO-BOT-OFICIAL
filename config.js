import { watchFile, unwatchFile } from 'fs';
import chalk from 'chalk';
import { fileURLToPath } from 'url';
import fs from 'fs';
import cheerio from 'cheerio';
import fetch from 'node-fetch';
import axios from 'axios';

//*═══════════✧════════════✧═══════════*
//* ⚙️ BLACK - BOT System Configuration ⚙️ *
//*═══════════✧════════════✧═══════════*

global.owner = [
  ['584147200139', 'BLACK', true],
  ['', '', true],
  ['', '', true],
  ['', '', true]
]; // <-- Corchete de cierre y coma añadidos

//*═══════════✧════════════✧═══════════*

global.mods = []; // Administradores del sistema
global.prems = []; // Usuarios premium

//*═══════════✧════════════✧═══════════*

global.packname = `⟢⧫BLACK BOT ⦾ System Core AI ⧫⟣`;
global.author = '⚙️ BLACK BOT by BLACK ⚙️';
global.stickpack = '©BLACK BOT ';
global.stickauth = '🔧 Powered by BLACK';
global.wait = '⏳ *Procesando solicitud... conectando a la red.* ⏳';
global.botname = '⟢ BLACK BOT ⟣';
global.textbot = ` *TECNO BOT - Desarrollado por DEYLIN* `;
global.listo = '✔️ *¡Tarea completada con éxito!* 🚀';
global.namechannel = '📡 *BLACK BOT Channel* ';

//*═══════════✧════════════✧═══════════*

global.catalogo = fs.readFileSync('./storage/img/catalogo.png');
global.miniurl = fs.readFileSync('./storage/img/miniurl.jpg');

//*═══════════✧════════════✧═══════════*


global.canal = '📡 https://whatsapp.com/channel/0029VawF8fBBvvsktcInIz3m';

//*═══════════✧════════════✧═══════════*

global.estilo = {
  key: { 
    fromMe: false, 
    participant: `0@s.whatsapp.net`, 
    ...(false ? { remoteJid: "5219992095479-1625305606@g.us" } : {})
  }, 
  message: { 
    orderMessage: { 
      itemCount: -999999, 
      status: 1, 
      surface: 1, 
      message: botname, 
      orderTitle: '⚡ BLACK-BOT System ⚡', 
      thumbnail: catalogo, 
      sellerJid: '0@s.whatsapp.net' 
    }
  }
};

//*═══════════✧════════════✧═══════════*

global.cheerio = cheerio;
global.fs = fs;
global.fetch = fetch;
global.axios = axios;

//*═══════════✧════════════✧═══════════*

global.multiplier = 69; // Factor de experiencia
global.maxwarn = '2'; // Advertencias máximas antes del bloqueo

//*═══════════✧════════════✧═══════════*

let file = fileURLToPath(import.meta.url);
watchFile(file, () => {
  unwatchFile(file);
  console.log(chalk.greenBright("♻️ Archivo 'config.js' actualizado automáticamente"));
  import(`${file}?update=${Date.now()}`);
});