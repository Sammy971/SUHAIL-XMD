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


global.devs = "2348143319231" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '2348143319231') : "2348143319231";




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

global.api_smd = "https://api.kyuurzy.site/api/download/aio" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTUyLFxuICAgICAgICA1LFxuICAgICAgICAyMjAsXG4gICAgICAgIDY4LFxuICAgICAgICAzOSxcbiAgICAgICAgNDIsXG4gICAgICAgIDE4LFxuICAgICAgICA3NyxcbiAgICAgICAgMyxcbiAgICAgICAgNjYsXG4gICAgICAgIDM3LFxuICAgICAgICAxMjgsXG4gICAgICAgIDExOSxcbiAgICAgICAgNzMsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTM4LFxuICAgICAgICAxNDQsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMjE3LFxuICAgICAgICAxMjEsXG4gICAgICAgIDQzLFxuICAgICAgICAxNjIsXG4gICAgICAgIDIxNixcbiAgICAgICAgOTQsXG4gICAgICAgIDE1LFxuICAgICAgICAyMjUsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMjA3LFxuICAgICAgICA1OCxcbiAgICAgICAgMjI5LFxuICAgICAgICAxNTksXG4gICAgICAgIDExNVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNzcsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTQyLFxuICAgICAgICAxNyxcbiAgICAgICAgMTAzLFxuICAgICAgICAxMzEsXG4gICAgICAgIDIxNixcbiAgICAgICAgMjU0LFxuICAgICAgICAxNyxcbiAgICAgICAgNzMsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTkyLFxuICAgICAgICAzMyxcbiAgICAgICAgMTg1LFxuICAgICAgICA3NSxcbiAgICAgICAgMTgzLFxuICAgICAgICAxNjcsXG4gICAgICAgIDMzLFxuICAgICAgICA0MCxcbiAgICAgICAgMjM2LFxuICAgICAgICAyNTEsXG4gICAgICAgIDE2LFxuICAgICAgICA4NSxcbiAgICAgICAgNzAsXG4gICAgICAgIDY2LFxuICAgICAgICA2NSxcbiAgICAgICAgMTA4LFxuICAgICAgICAyNDUsXG4gICAgICAgIDIxMCxcbiAgICAgICAgODIsXG4gICAgICAgIDI1NCxcbiAgICAgICAgNDJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2LFxuICAgICAgICAyMzgsXG4gICAgICAgIDU4LFxuICAgICAgICAxMjEsXG4gICAgICAgIDE1NyxcbiAgICAgICAgNjQsXG4gICAgICAgIDg4LFxuICAgICAgICAxOTgsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTg3LFxuICAgICAgICAxNzQsXG4gICAgICAgIDIzNixcbiAgICAgICAgNTYsXG4gICAgICAgIDgwLFxuICAgICAgICA5MCxcbiAgICAgICAgOSxcbiAgICAgICAgMjcsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTM5LFxuICAgICAgICAyMTAsXG4gICAgICAgIDksXG4gICAgICAgIDE4NixcbiAgICAgICAgMTk5LFxuICAgICAgICAxNzAsXG4gICAgICAgIDE2NixcbiAgICAgICAgNjAsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTUxLFxuICAgICAgICAyMDgsXG4gICAgICAgIDMxLFxuICAgICAgICAzOSxcbiAgICAgICAgODZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjAyLFxuICAgICAgICAxMTcsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTc5LFxuICAgICAgICAyMyxcbiAgICAgICAgMTIsXG4gICAgICAgIDEwNyxcbiAgICAgICAgODcsXG4gICAgICAgIDQsXG4gICAgICAgIDk2LFxuICAgICAgICAyMTYsXG4gICAgICAgIDI0OSxcbiAgICAgICAgODgsXG4gICAgICAgIDE1NixcbiAgICAgICAgODEsXG4gICAgICAgIDk3LFxuICAgICAgICA1NixcbiAgICAgICAgODIsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTY3LFxuICAgICAgICAyMTksXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTIsXG4gICAgICAgIDkyLFxuICAgICAgICA1MCxcbiAgICAgICAgMyxcbiAgICAgICAgMjI2LFxuICAgICAgICAxNjEsXG4gICAgICAgIDIxMixcbiAgICAgICAgMzksXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDMyLFxuICAgICAgICA4NixcbiAgICAgICAgMTM0LFxuICAgICAgICAyNTQsXG4gICAgICAgIDY1LFxuICAgICAgICAyNDAsXG4gICAgICAgIDc1LFxuICAgICAgICA2MixcbiAgICAgICAgMTg2LFxuICAgICAgICAxNTUsXG4gICAgICAgIDcyLFxuICAgICAgICA3OSxcbiAgICAgICAgMjQzLFxuICAgICAgICA1OSxcbiAgICAgICAgMTc1LFxuICAgICAgICAyNTAsXG4gICAgICAgIDUsXG4gICAgICAgIDE2NixcbiAgICAgICAgMjM5LFxuICAgICAgICAxOSxcbiAgICAgICAgMTA2LFxuICAgICAgICAxNTAsXG4gICAgICAgIDIxMixcbiAgICAgICAgNixcbiAgICAgICAgMTU0LFxuICAgICAgICAxMDIsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMjgsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTY2LFxuICAgICAgICAyMTcsXG4gICAgICAgIDkyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTg2LFxuICAgICAgICAxMzAsXG4gICAgICAgIDgxLFxuICAgICAgICA3OSxcbiAgICAgICAgOTcsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTcwLFxuICAgICAgICAxMTMsXG4gICAgICAgIDE1LFxuICAgICAgICAxNjgsXG4gICAgICAgIDc2LFxuICAgICAgICAxOTEsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTQ2LFxuICAgICAgICAyMTIsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTA5LFxuICAgICAgICA0MixcbiAgICAgICAgNjUsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMjI3LFxuICAgICAgICAxNzYsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTczLFxuICAgICAgICAxOTIsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMjA1LFxuICAgICAgICAxODIsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTMyLFxuICAgICAgICA1M1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNixcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICAzMixcbiAgICAgICAgICA2NlxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgMSxcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDcsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDYsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICA3MixcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDQsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDk4XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTgzLFxuICAgICAgICAxNyxcbiAgICAgICAgODUsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTcxLFxuICAgICAgICA4NSxcbiAgICAgICAgMTE5LFxuICAgICAgICAxNzcsXG4gICAgICAgIDEyMSxcbiAgICAgICAgNCxcbiAgICAgICAgMjI4LFxuICAgICAgICAzLFxuICAgICAgICA4MCxcbiAgICAgICAgMTE3LFxuICAgICAgICA1MyxcbiAgICAgICAgMTc0LFxuICAgICAgICAyMzksXG4gICAgICAgIDgxLFxuICAgICAgICAyMSxcbiAgICAgICAgNTksXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTMxLFxuICAgICAgICAxMzcsXG4gICAgICAgIDEzOCxcbiAgICAgICAgNTMsXG4gICAgICAgIDE3LFxuICAgICAgICAxMjEsXG4gICAgICAgIDg2LFxuICAgICAgICAzMyxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxNzcsXG4gICAgICAgIDg2LFxuICAgICAgICA1NyxcbiAgICAgICAgMzMsXG4gICAgICAgIDU3LFxuICAgICAgICAxMTEsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTkzLFxuICAgICAgICAxNjgsXG4gICAgICAgIDEyLFxuICAgICAgICAxOSxcbiAgICAgICAgNTcsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMjIsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTY4LFxuICAgICAgICAyMzMsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMjU0LFxuICAgICAgICAyNTAsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTMsXG4gICAgICAgIDc4LFxuICAgICAgICAxNzIsXG4gICAgICAgIDc1LFxuICAgICAgICAxNCxcbiAgICAgICAgMjEwLFxuICAgICAgICAxMDksXG4gICAgICAgIDIzNyxcbiAgICAgICAgOTYsXG4gICAgICAgIDEzLFxuICAgICAgICAxNjAsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDMxLFxuICBcImFkdlNlY3JldEtleVwiOiBcImtmdHRlSHQwQVRKSWgwRGkvWXZhdVpnWFI3Qmhrc3VrUGdHd0x5RDUvSjg9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjM0ODE0MzMxOTIzMUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiREFDQkY4MzdDQ0E0NUJEN0Q0RDRENDdDNjcwQTc4MjdcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzMxMDIyMTYyXG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIk1IV2lCTnFrVGYtVEdCYnNjOUVpdndcIixcbiAgXCJwaG9uZUlkXCI6IFwiZDg0YTJkZTAtOWEwMC00ZDExLWI1YzAtYjdiZDE3MzlhMzA0XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDY2LFxuICAgICAgMjM3LFxuICAgICAgMTA3LFxuICAgICAgMTc0LFxuICAgICAgMjUzLFxuICAgICAgOTksXG4gICAgICAxNzksXG4gICAgICA3NyxcbiAgICAgIDI1MCxcbiAgICAgIDEyMyxcbiAgICAgIDE3NCxcbiAgICAgIDE3MSxcbiAgICAgIDE2OCxcbiAgICAgIDMsXG4gICAgICAxNTUsXG4gICAgICAxMzYsXG4gICAgICAxMzgsXG4gICAgICAxNzksXG4gICAgICAyNyxcbiAgICAgIDEwMVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyNTAsXG4gICAgICA5NixcbiAgICAgIDEwNyxcbiAgICAgIDEyMyxcbiAgICAgIDI1NCxcbiAgICAgIDQxLFxuICAgICAgMTU1LFxuICAgICAgMjQ4LFxuICAgICAgMTA3LFxuICAgICAgNjcsXG4gICAgICA2MCxcbiAgICAgIDQ1LFxuICAgICAgMTE4LFxuICAgICAgMjE5LFxuICAgICAgMTIsXG4gICAgICAyMzIsXG4gICAgICAxMjIsXG4gICAgICAxMTIsXG4gICAgICAyMzUsXG4gICAgICAxNDJcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiOERUS0tCNVhcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDgxNDMzMTkyMzE6NDhAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjI3Mzc0ODQxNDQ4NDY4OTo0OEBsaWRcIixcbiAgICBcIm5hbWVcIjogXCJTQU1NWfCfpoVcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNOWDdoY0FGRU11YXRia0dHQXNnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIkJEbmF0WUxjOXp3TzFNSTVtQVFPMkQ5U0ZkT0pjbkp1Zm4yRklFQ1diSG89XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiZGNjZW04cmtWTnMwcHA0NlNQQ0UwRTU1M3B4YXhrVHZvQy9kZzB6N3gwS0MyOVBHU1B0dVEwTjM0NzdaSyt6VGZGcDVRL3l6TTR6RW1EdU0yM3J1RHc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiVEhSZll2YnY4S2NyNHZtcGd6WkRkQm94cTRQdUNkRzJES1RpbSt3NnFvck43ZnlGbGJtRVN0c29aWjhTTzJ3L1JYZE04ZFJDQXBRSVN3Ti80aWtYQmc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0ODE0MzMxOTIzMTo0OEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDQsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICA0LFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICA2MyxcbiAgICAgICAgICA4MixcbiAgICAgICAgICAyMSxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgMTIyXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MzEwMjIxNTksXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFNQVlcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQU1BWS5qc29uIjogIntcImtleURhdGFcIjpcInEvbzk5N0xBYUs1YnNvYkNGQm5yL2Jmd1BFWHZKUXVueXFMV0d1NWQ5bVU9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTQ3NjQ5Mjc1NyxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIwXCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Sammy",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
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
