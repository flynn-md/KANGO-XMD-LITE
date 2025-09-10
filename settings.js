//-------------------[ BOT SETTINGS ]------------------// 

// @project_name : || DEPUTY SHERIF
// @author : @SHERIF
// @telegram : http://t.me/official_kango
// @github : OfficialKango
// @whatsapp : +254778691255

//----------------------[ KANGO-XMD ]----------------------//

const fs = require('fs')
const { color } = require('./kango/color')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//--------------------[ SESSION ID ]----------------------//

global.SESSION_ID = process.env.SESSION_ID || '' 
//Enter your KANGO-XMD session id here; must start with KANGO~

//--------------------[ BOT NAME ]----------------------//

global.botname = process.env.BOT_NAME || '|| DEPUTY SHERIF' 

//-----------------[ OWNER NUMBER ]------------------//

global.ownernumber = process.env.OWNER_NUMBER || '254778691255' 

//--------------------[ SUDO ]--------------------------//

global.sudo = process.env.SUDO ? process.env.SUDO.split(',') : ['254778691255', '254778691255'];
// Type additional allowed users here
//NB: They'll be able to use every functions of the bot without restrictions.

//-----------------[ OWNER NAME ]------------------//

global.ownername = process.env.OWNER_NAME || 'SHERIF I AM ' 

//------------[ STICKER PACKNAME ]-----------------//

global.packname = process.env.STICKER_PACK_NAME || "SHERIF XMD" 

//--------------[ COUNTRY TIMEZONE ]------------//


global.timezones = 'Africa/Accra';  // Set this to you timezone



//--------------[ STICKER AUTHOR NAME ]------------//

global.author = process.env.STICKER_AUTHOR_NAME || "SHERIF" 

//----------------[ GITHUB DATABASE ]-----------------//

global.dbToken = process.env.GITHUB_TOKEN || "";


//-----------------[ CONTEXT LINK ]--------------------//

global.plink = process.env.PLINK || "https://youtube.com/@official_manuel"

//------------------[ WATERMARK ]--------------------//

global.wm = process.env.GL_WM || "> ©|| DEPUTY SHERIF"

//---------------------[ REPLIES ]-----------------------//

global.mess = { 
  done: '*Done*', 
  success: '©|| DEPUTY SHERIF', 
  owner: `*WCHA UMATAKO UNACOMMAND NA BOT SIO YAKO 😂!*`, 
  group: '*ACHA UTOTO KUJIA BOT DM ACHANA NA YANGU 🙄@0753817025!*', 
  admin: '*HII NI YA ADMIN MASTER admin!*', 
  notadmin: '*This feature will work once I BECOME META ADMIN. A way of ensuring order!*' 
}

//--------------------[ WATCHER ]-----------------------//

let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(color(`Updated '${__filename}'`, 'red'))
  delete require.cache[file]
  require(file)
})

//----------------------[ KANGO-XMD ]----------------------//