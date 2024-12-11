const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/GlobalTechInfo/SUHAIL-XMD";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© GlobalTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2348143319231";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_21_23_12_11_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOCxcbiAgICAgICAgMjQ2LFxuICAgICAgICA1OSxcbiAgICAgICAgMTA5LFxuICAgICAgICA1LFxuICAgICAgICAzLFxuICAgICAgICAxOSxcbiAgICAgICAgMTUzLFxuICAgICAgICA5MSxcbiAgICAgICAgMTUyLFxuICAgICAgICAyMzMsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMjksXG4gICAgICAgIDEyOSxcbiAgICAgICAgOTAsXG4gICAgICAgIDE2MixcbiAgICAgICAgNzIsXG4gICAgICAgIDE3OSxcbiAgICAgICAgODAsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTgxLFxuICAgICAgICA4LFxuICAgICAgICA5NSxcbiAgICAgICAgMTc0LFxuICAgICAgICAyMTEsXG4gICAgICAgIDE2MyxcbiAgICAgICAgNzUsXG4gICAgICAgIDE2OCxcbiAgICAgICAgNzcsXG4gICAgICAgIDQsXG4gICAgICAgIDcxLFxuICAgICAgICAxMDJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQyLFxuICAgICAgICAxMTAsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMjAwLFxuICAgICAgICAxNzQsXG4gICAgICAgIDE0NixcbiAgICAgICAgNzcsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMjI1LFxuICAgICAgICAxMzUsXG4gICAgICAgIDIwMyxcbiAgICAgICAgOTQsXG4gICAgICAgIDE3OSxcbiAgICAgICAgNzcsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTgxLFxuICAgICAgICAxNzAsXG4gICAgICAgIDE0NyxcbiAgICAgICAgODEsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMjUxLFxuICAgICAgICAyNDQsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxOTUsXG4gICAgICAgIDE2NixcbiAgICAgICAgMjQ2LFxuICAgICAgICA2MixcbiAgICAgICAgMjQ4LFxuICAgICAgICA4LFxuICAgICAgICAxMTMsXG4gICAgICAgIDM5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4MCxcbiAgICAgICAgMTYxLFxuICAgICAgICA5NSxcbiAgICAgICAgOTAsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTA3LFxuICAgICAgICAxNjksXG4gICAgICAgIDE5NCxcbiAgICAgICAgMjEsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTc1LFxuICAgICAgICAxNjgsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTExLFxuICAgICAgICAxNzUsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMjIzLFxuICAgICAgICAyNDksXG4gICAgICAgIDQxLFxuICAgICAgICA2LFxuICAgICAgICA3MyxcbiAgICAgICAgMjM5LFxuICAgICAgICA5MixcbiAgICAgICAgMTM2LFxuICAgICAgICAxMDUsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTk5LFxuICAgICAgICAxNDIsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTg4LFxuICAgICAgICA3MCxcbiAgICAgICAgODNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTY2LFxuICAgICAgICAyOCxcbiAgICAgICAgOTEsXG4gICAgICAgIDE5LFxuICAgICAgICAxMjMsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTk2LFxuICAgICAgICA5MixcbiAgICAgICAgOTIsXG4gICAgICAgIDQyLFxuICAgICAgICAyMDYsXG4gICAgICAgIDI1MSxcbiAgICAgICAgODEsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTcyLFxuICAgICAgICAyMTUsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTYxLFxuICAgICAgICAyMjYsXG4gICAgICAgIDk4LFxuICAgICAgICAyMDgsXG4gICAgICAgIDQ5LFxuICAgICAgICAyMzQsXG4gICAgICAgIDEzNSxcbiAgICAgICAgODYsXG4gICAgICAgIDIwNyxcbiAgICAgICAgNzgsXG4gICAgICAgIDczLFxuICAgICAgICAxMDcsXG4gICAgICAgIDkxLFxuICAgICAgICA2NSxcbiAgICAgICAgOTVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0OCxcbiAgICAgICAgOTksXG4gICAgICAgIDI0MixcbiAgICAgICAgMjE5LFxuICAgICAgICAzOCxcbiAgICAgICAgOTAsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTA5LFxuICAgICAgICAxOTEsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTE0LFxuICAgICAgICA4MSxcbiAgICAgICAgMyxcbiAgICAgICAgMjE5LFxuICAgICAgICAyMjAsXG4gICAgICAgIDkwLFxuICAgICAgICAxMTYsXG4gICAgICAgIDY2LFxuICAgICAgICAyNDEsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTQ1LFxuICAgICAgICAxMTcsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTMsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMjQzLFxuICAgICAgICAyMzEsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMjYsXG4gICAgICAgIDIxMCxcbiAgICAgICAgNSxcbiAgICAgICAgMTI2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIzMixcbiAgICAgICAgMjM2LFxuICAgICAgICAyMTMsXG4gICAgICAgIDEyLFxuICAgICAgICA4MyxcbiAgICAgICAgMjEyLFxuICAgICAgICAxNjgsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTE2LFxuICAgICAgICA4MSxcbiAgICAgICAgOTIsXG4gICAgICAgIDIzMixcbiAgICAgICAgMjA2LFxuICAgICAgICAxLFxuICAgICAgICA2NCxcbiAgICAgICAgMjA0LFxuICAgICAgICAxMDEsXG4gICAgICAgIDIxMixcbiAgICAgICAgMjIzLFxuICAgICAgICA5OSxcbiAgICAgICAgMTE2LFxuICAgICAgICA4MixcbiAgICAgICAgOCxcbiAgICAgICAgMTMyLFxuICAgICAgICAxNzksXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTk0LFxuICAgICAgICAxODcsXG4gICAgICAgIDc4LFxuICAgICAgICAyMSxcbiAgICAgICAgMjQxLFxuICAgICAgICAxN1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICAyMixcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAxNixcbiAgICAgICAgICA1NCxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMTIxXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE0NSxcbiAgICAgICAgICA0MyxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICA2MixcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICA2M1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE0MSxcbiAgICAgICAgMjM2LFxuICAgICAgICA2NSxcbiAgICAgICAgMTM1LFxuICAgICAgICAxNTksXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjEyLFxuICAgICAgICAyMzIsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTIzLFxuICAgICAgICAyMTksXG4gICAgICAgIDI0MyxcbiAgICAgICAgNDgsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTA3LFxuICAgICAgICAyNyxcbiAgICAgICAgMTA4LFxuICAgICAgICA1OSxcbiAgICAgICAgMTksXG4gICAgICAgIDE0OSxcbiAgICAgICAgNTIsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTUsXG4gICAgICAgIDIwMyxcbiAgICAgICAgNzAsXG4gICAgICAgIDQ2LFxuICAgICAgICAxMTcsXG4gICAgICAgIDUzLFxuICAgICAgICAzNixcbiAgICAgICAgNTEsXG4gICAgICAgIDkwLFxuICAgICAgICAxOTMsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTg0LFxuICAgICAgICAyMzAsXG4gICAgICAgIDEzMCxcbiAgICAgICAgODMsXG4gICAgICAgIDQ4LFxuICAgICAgICA5OSxcbiAgICAgICAgMTk1LFxuICAgICAgICAyMTMsXG4gICAgICAgIDk4LFxuICAgICAgICAyMzAsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTA0LFxuICAgICAgICAxNixcbiAgICAgICAgOTEsXG4gICAgICAgIDg2LFxuICAgICAgICA3LFxuICAgICAgICAyMjEsXG4gICAgICAgIDE3MixcbiAgICAgICAgNjMsXG4gICAgICAgIDI3LFxuICAgICAgICAxNixcbiAgICAgICAgMTc1LFxuICAgICAgICAxMzIsXG4gICAgICAgIDcsXG4gICAgICAgIDE2NixcbiAgICAgICAgMjIsXG4gICAgICAgIDQsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTA5LFxuICAgICAgICA3NSxcbiAgICAgICAgNlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMjM3LFxuICBcImFkdlNlY3JldEtleVwiOiBcIm0rMXRrTUpIZGJJVUgva2tWMkFsL1hGdEdDSThZa0duQml6TnBuWkdwN3M9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcImd2ZU5hX1pQVFRLNmM3QTQ5dzhEdXdcIixcbiAgXCJwaG9uZUlkXCI6IFwiYjM1Y2ViMzctZjZlMi00NjhlLWFjYTItZGMzMDVkNzY1NzM1XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE0OSxcbiAgICAgIDIzNyxcbiAgICAgIDIyLFxuICAgICAgMTE3LFxuICAgICAgMjI1LFxuICAgICAgMTc1LFxuICAgICAgMjIsXG4gICAgICAxNTYsXG4gICAgICAxMDIsXG4gICAgICAxMDIsXG4gICAgICA3OCxcbiAgICAgIDEzOCxcbiAgICAgIDIyMSxcbiAgICAgIDE5NixcbiAgICAgIDU1LFxuICAgICAgMTE5LFxuICAgICAgMjAwLFxuICAgICAgNDUsXG4gICAgICAyOCxcbiAgICAgIDBcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiBmYWxzZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDEzMyxcbiAgICAgIDE5NCxcbiAgICAgIDQ1LFxuICAgICAgMjcsXG4gICAgICAxOTMsXG4gICAgICAxOTcsXG4gICAgICAxNCxcbiAgICAgIDIxLFxuICAgICAgMTQ1LFxuICAgICAgMjQ0LFxuICAgICAgOTgsXG4gICAgICAxMzEsXG4gICAgICAxMzAsXG4gICAgICAyMTMsXG4gICAgICAyMDAsXG4gICAgICAxODcsXG4gICAgICAxMjIsXG4gICAgICAyNTAsXG4gICAgICAyMjgsXG4gICAgICAxMTlcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNKZWZ3TkVIRUt5RjZMb0dHQXdnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIkFmS28xaHRUcGZGR0lKWDl6dlp1aHcxc2tnbzRCMmVYend0NVN2ZUJQanM9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiS1c1V3RPZHNZMjMzbldpeVNMR0U5SFJHdE1ROHV3T3BaYitIQzhWdVlVSmNCTW0wN25xTGV1emZlL0U3V2x0U1p1eFdtZDdGS1lzejVzMVdxYjZKRGc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiaUpSWXpaTTFCYmp4enB6QzlxUERmYVdEYmNxbFR2Z2QyRUhWR1NRNU9rTWhuL2NKcWhsZWtSN29Gc0piMzU0cklhRzI0ZGNkZnZ5UWVja1lDS1kyQVE9PVwiXG4gIH0sXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ4MTQzMzE5MjMxOjc3QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwiU0FNTVlcIixcbiAgICBcImxpZFwiOiBcIjI3Mzc0ODQxNDQ4NDY4OTo3N0BsaWRcIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDgxNDMzMTkyMzE6NzdAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAxMCxcbiAgICAgICAgICA1NixcbiAgICAgICAgICA3LFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDU5XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MzM5NTIxNzYsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFCYnRcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUJiay5qc29uIjogIntcImtleURhdGFcIjpcIjkwT3R0NFJ3Rm5BMEtxTTd1MERzZWhQOU11dVN1Vjc3RGg2amZEQWhjN3M9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MjA0OTk3MDA3MSxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzMxNzY2MzI3NTA0XCJ9IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBQmJsLmpzb24iOiAie1wia2V5RGF0YVwiOlwiWW9rWjdyZk1GTTdYRmFYTmtLUTkvR3BYZjdXNWpmQ1MyZTQxdTl5QUtiTT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoyMDQ5OTcwMDcxLFwiY3VycmVudEluZGV4XCI6MixcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFCYm0uanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJiK3ZOaHpKMk1ZN2dGSFByK0VGZE1HWS9MazducUV6UWpnOEhVaDZlNHJzPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjIwNDk5NzAwNzEsXCJjdXJyZW50SW5kZXhcIjozLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUJibi5qc29uIjogIntcImtleURhdGFcIjpcIjBQRFRudzRia1RLZkJmZ2djazVlb09Rc3pIL2R6WWN3bWV1NjcxODc3OXc9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MjA0OTk3MDA3MSxcImN1cnJlbnRJbmRleFwiOjQsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzMzODM2Nzc2ODc5XCJ9IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBQmJvLmpzb24iOiAie1wia2V5RGF0YVwiOlwiSUZidTZjMVB4cS9tNmtjNTlYLzFEZnh0UWJ4YUlWeCtlV0RwcE5WUlYrRT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoyMDQ5OTcwMDcxLFwiY3VycmVudEluZGV4XCI6NSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFCYnAuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJSTGtGa0hDYnAramM5SzMrOHYrMTZ2T0orSHJFTjdDOGRvbjQvR2lLZS93PVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjIwNDk5NzAwNzEsXCJjdXJyZW50SW5kZXhcIjo2LFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUJicS5qc29uIjogIntcImtleURhdGFcIjpcIkY0UFY1VzVBSThIUFV4Z1NzcVBRbzRZQTJPTXYwRmVlMFhWOWZra1k5eVE9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MjA0OTk3MDA3MSxcImN1cnJlbnRJbmRleFwiOjcsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIwXCJ9IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBQmJyLmpzb24iOiAie1wia2V5RGF0YVwiOlwiOURETWdBaWxtUnZDRit3MEdZcmxEV2RJY1RGdXRzRFZ1Q08xVjRCUTMzdz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoyMDQ5OTcwMDcxLFwiY3VycmVudEluZGV4XCI6OCxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFCYnMuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJHK2hpNWJZUGpqZHFpTDFRODZHNWJqV3NObzJ1eHA4WHo2elZpK3p2allZPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjIwNDk5NzAwNzEsXCJjdXJyZW50SW5kZXhcIjoxMCxcImRldmljZUluZGV4ZXNcIjpbMCwxLDEwXX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFCYnQuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJVc1FmNngySmVEUGgwVXVvNDRlNEVLMUhnT0YwNDZWVThhaUl5NlBmOW1BPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjIwNDk5NzAwNzEsXCJjdXJyZW50SW5kZXhcIjoxMCxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MzM5MzgwMTUwMzhcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "SAMMY",
  packname: process.env.PACK_NAME || "BOT",
  botname : process.env.BOT_NAME  || " ",
  ownername:process.env.OWNER_NAME|| "SAMMY",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "public",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
