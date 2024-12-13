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
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,2348024536415";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_22_27_12_13_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQ4LFxuICAgICAgICAxMjIsXG4gICAgICAgIDUyLFxuICAgICAgICA0NyxcbiAgICAgICAgMTY3LFxuICAgICAgICAyNTUsXG4gICAgICAgIDMsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTc0LFxuICAgICAgICAxMTAsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTk0LFxuICAgICAgICAxMzUsXG4gICAgICAgIDEzLFxuICAgICAgICAyLFxuICAgICAgICAxNzcsXG4gICAgICAgIDEwNyxcbiAgICAgICAgNzQsXG4gICAgICAgIDQwLFxuICAgICAgICAxMDgsXG4gICAgICAgIDUzLFxuICAgICAgICAxMTMsXG4gICAgICAgIDE0MixcbiAgICAgICAgNDEsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTk2LFxuICAgICAgICA0MSxcbiAgICAgICAgMTkzLFxuICAgICAgICAxNjksXG4gICAgICAgIDg3LFxuICAgICAgICAxODMsXG4gICAgICAgIDExN1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNTAsXG4gICAgICAgIDUwLFxuICAgICAgICAxNixcbiAgICAgICAgODAsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMjE1LFxuICAgICAgICAxMTgsXG4gICAgICAgIDM1LFxuICAgICAgICA3NSxcbiAgICAgICAgNzQsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMjEsXG4gICAgICAgIDE3OSxcbiAgICAgICAgNDYsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTUyLFxuICAgICAgICA0OCxcbiAgICAgICAgMTYzLFxuICAgICAgICAxODIsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTkwLFxuICAgICAgICAyMyxcbiAgICAgICAgNTMsXG4gICAgICAgIDgzLFxuICAgICAgICAyMCxcbiAgICAgICAgMTk5LFxuICAgICAgICA2MCxcbiAgICAgICAgMjA2LFxuICAgICAgICAyLFxuICAgICAgICA4LFxuICAgICAgICAyNTAsXG4gICAgICAgIDkzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMzIsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTMyLFxuICAgICAgICA5NCxcbiAgICAgICAgMTI5LFxuICAgICAgICAxNDMsXG4gICAgICAgIDgzLFxuICAgICAgICAyMDIsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTAzLFxuICAgICAgICAyMDYsXG4gICAgICAgIDU2LFxuICAgICAgICAyNDMsXG4gICAgICAgIDE2NixcbiAgICAgICAgNDUsXG4gICAgICAgIDI0NyxcbiAgICAgICAgNzEsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMjM0LFxuICAgICAgICAyNixcbiAgICAgICAgMjQ2LFxuICAgICAgICAxMTksXG4gICAgICAgIDExOCxcbiAgICAgICAgMTc1LFxuICAgICAgICAyNTEsXG4gICAgICAgIDM0LFxuICAgICAgICAyMjMsXG4gICAgICAgIDg5LFxuICAgICAgICAzNCxcbiAgICAgICAgODcsXG4gICAgICAgIDI2LFxuICAgICAgICA5NFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNTAsXG4gICAgICAgIDMsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTA4LFxuICAgICAgICAxNDgsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMjMxLFxuICAgICAgICA2NSxcbiAgICAgICAgMjQsXG4gICAgICAgIDg5LFxuICAgICAgICAxOSxcbiAgICAgICAgMTczLFxuICAgICAgICAxNTcsXG4gICAgICAgIDI4LFxuICAgICAgICAyMDAsXG4gICAgICAgIDkyLFxuICAgICAgICAxMTUsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTA5LFxuICAgICAgICAyNDIsXG4gICAgICAgIDMsXG4gICAgICAgIDQwLFxuICAgICAgICAxNzAsXG4gICAgICAgIDE5MyxcbiAgICAgICAgOTYsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTU4LFxuICAgICAgICA1NCxcbiAgICAgICAgMzgsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTM3LFxuICAgICAgICAyNVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTM2LFxuICAgICAgICAyLFxuICAgICAgICAxODMsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMjIwLFxuICAgICAgICAxNjIsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTI0LFxuICAgICAgICA5OCxcbiAgICAgICAgMTE1LFxuICAgICAgICAxMDQsXG4gICAgICAgIDE3MCxcbiAgICAgICAgNzcsXG4gICAgICAgIDUwLFxuICAgICAgICAxMDQsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMjE4LFxuICAgICAgICAxNzMsXG4gICAgICAgIDQ4LFxuICAgICAgICAyMjUsXG4gICAgICAgIDgzLFxuICAgICAgICA3LFxuICAgICAgICAyMTcsXG4gICAgICAgIDYwLFxuICAgICAgICA1MixcbiAgICAgICAgMjI4LFxuICAgICAgICAyNDQsXG4gICAgICAgIDU3LFxuICAgICAgICA0NSxcbiAgICAgICAgMTYsXG4gICAgICAgIDY5LFxuICAgICAgICA5NlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4MyxcbiAgICAgICAgNCxcbiAgICAgICAgMTAyLFxuICAgICAgICAyMTUsXG4gICAgICAgIDI0MCxcbiAgICAgICAgOSxcbiAgICAgICAgNDcsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTM3LFxuICAgICAgICAzNyxcbiAgICAgICAgMTI5LFxuICAgICAgICAxODAsXG4gICAgICAgIDMwLFxuICAgICAgICAxMDgsXG4gICAgICAgIDEwOSxcbiAgICAgICAgNTcsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTU4LFxuICAgICAgICAzNyxcbiAgICAgICAgMTY1LFxuICAgICAgICAxNDcsXG4gICAgICAgIDEzLFxuICAgICAgICA4MSxcbiAgICAgICAgMTU2LFxuICAgICAgICA1OSxcbiAgICAgICAgMTEzLFxuICAgICAgICAxNjgsXG4gICAgICAgIDExNixcbiAgICAgICAgOTUsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTcwLFxuICAgICAgICAzNlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgNixcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICA4NixcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDMsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDEwMVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA5NCxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDc2XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMSxcbiAgICAgICAgMjksXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTUzLFxuICAgICAgICAyMjgsXG4gICAgICAgIDk3LFxuICAgICAgICA5MixcbiAgICAgICAgNixcbiAgICAgICAgNDksXG4gICAgICAgIDMzLFxuICAgICAgICAyMTksXG4gICAgICAgIDE0MSxcbiAgICAgICAgMzAsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTk3LFxuICAgICAgICA0NixcbiAgICAgICAgMTQsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTk4LFxuICAgICAgICA4MSxcbiAgICAgICAgMTMyLFxuICAgICAgICA1NyxcbiAgICAgICAgMTk1LFxuICAgICAgICAxNzgsXG4gICAgICAgIDM5LFxuICAgICAgICA4MixcbiAgICAgICAgMTg3LFxuICAgICAgICA4NixcbiAgICAgICAgMzcsXG4gICAgICAgIDcyLFxuICAgICAgICAxMzIsXG4gICAgICAgIDcwLFxuICAgICAgICA5MSxcbiAgICAgICAgMjAxLFxuICAgICAgICA4MyxcbiAgICAgICAgMjU0LFxuICAgICAgICAyNyxcbiAgICAgICAgNjcsXG4gICAgICAgIDIzLFxuICAgICAgICAxMDgsXG4gICAgICAgIDUzLFxuICAgICAgICAxNjAsXG4gICAgICAgIDIyMyxcbiAgICAgICAgNzUsXG4gICAgICAgIDI1LFxuICAgICAgICAyNTUsXG4gICAgICAgIDMsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTgxLFxuICAgICAgICA2MyxcbiAgICAgICAgMTc5LFxuICAgICAgICA5OCxcbiAgICAgICAgMTE5LFxuICAgICAgICAxMTgsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTI1LFxuICAgICAgICAyNTQsXG4gICAgICAgIDIyMixcbiAgICAgICAgNDcsXG4gICAgICAgIDczLFxuICAgICAgICAyMDUsXG4gICAgICAgIDY2LFxuICAgICAgICAxNjksXG4gICAgICAgIDEzMFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTM1LFxuICBcImFkdlNlY3JldEtleVwiOiBcIm5TNnQveEhLM080ZDdpUTRxaWVBNTNLRVBEam5ZU2lQSWxWQnFhZk0yaTg9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjM0ODE0MzMxOTIzMUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiMTM3MDdDOTM4QzE4QTg4NkZERkM0NzcxMjZBM0U5QTVcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzM0MTI4ODQ1XG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcInNQWGlITmtDUWNpUUhlbDJHVmoxS2dcIixcbiAgXCJwaG9uZUlkXCI6IFwiNzVmMmFkYWItYmNiMS00OGYyLTg4YTUtYmNkNDBiZGU4MjY3XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIyNCxcbiAgICAgIDEwMSxcbiAgICAgIDEyOCxcbiAgICAgIDgxLFxuICAgICAgNCxcbiAgICAgIDkyLFxuICAgICAgMTEwLFxuICAgICAgMTQ1LFxuICAgICAgNTksXG4gICAgICAxNCxcbiAgICAgIDk0LFxuICAgICAgMTM5LFxuICAgICAgOTAsXG4gICAgICAxNTcsXG4gICAgICA0NSxcbiAgICAgIDE3LFxuICAgICAgMTY0LFxuICAgICAgNjYsXG4gICAgICAzOCxcbiAgICAgIDE4NVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyNDcsXG4gICAgICA0LFxuICAgICAgMTk5LFxuICAgICAgNjYsXG4gICAgICAyMjMsXG4gICAgICAyNTIsXG4gICAgICAxMDksXG4gICAgICAxNDQsXG4gICAgICA0NCxcbiAgICAgIDEzNSxcbiAgICAgIDIyLFxuICAgICAgNTMsXG4gICAgICAxODQsXG4gICAgICAxNzIsXG4gICAgICA0MixcbiAgICAgIDMwLFxuICAgICAgMTI3LFxuICAgICAgMTAsXG4gICAgICA3MixcbiAgICAgIDEwN1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJDS0o1V1pONVwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0ODE0MzMxOTIzMTo4M0BzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIlNBTU1ZXCIsXG4gICAgXCJsaWRcIjogXCIyNzM3NDg0MTQ0ODQ2ODk6ODNAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSm1md05FSEVNVHA4cm9HR0FVZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJBZktvMWh0VHBmRkdJSlg5enZadWh3MXNrZ280QjJlWHp3dDVTdmVCUGpzPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIjkvRi9SNjJCU0piaHhHRlljWHE2dWQzRStGWmp4WGZ3Wm1IaEUrYlZlYW9mL1pZR1dDS2R0YUlkcUlHeUhIdFg2TmozOVF3bHNzeWZHT01iSVRuK0RBPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIlNXWHp0ejA0c0lqTXl3UEVVMHh1ZklWeURzVE1SK056c0FPekNVWWFWT2F0ZXQzVk84bGZIb2dFWkJjd3pBS1dsUGFrTVpBTUt2eUhQWDhmblFtWGpBPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDgxNDMzMTkyMzE6ODNAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAxMCxcbiAgICAgICAgICA1NixcbiAgICAgICAgICA3LFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDU5XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MzQxMjg4NDEsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFLckNcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUtyQy5qc29uIjoge30KfQ=="  // PUT your SESSION_ID 


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
