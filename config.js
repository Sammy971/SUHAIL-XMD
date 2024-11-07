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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_22_10_11_07_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTY4LFxuICAgICAgICAxMzMsXG4gICAgICAgIDIyNSxcbiAgICAgICAgODcsXG4gICAgICAgIDIsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxNzcsXG4gICAgICAgIDkxLFxuICAgICAgICAxNTgsXG4gICAgICAgIDQwLFxuICAgICAgICAxNzksXG4gICAgICAgIDU4LFxuICAgICAgICAyNDksXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTIyLFxuICAgICAgICAxNTYsXG4gICAgICAgIDIwMyxcbiAgICAgICAgOTMsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTA1LFxuICAgICAgICAxMyxcbiAgICAgICAgMjMwLFxuICAgICAgICA5MyxcbiAgICAgICAgMjUxLFxuICAgICAgICAxLFxuICAgICAgICAyNDgsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTEzLFxuICAgICAgICA5NCxcbiAgICAgICAgMTUyLFxuICAgICAgICA5MVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMTgsXG4gICAgICAgIDk4LFxuICAgICAgICAxMjUsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTcxLFxuICAgICAgICAxNzAsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTIxLFxuICAgICAgICAxMjQsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTE5LFxuICAgICAgICAxOTYsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTc5LFxuICAgICAgICAxNDEsXG4gICAgICAgIDMzLFxuICAgICAgICAxMTMsXG4gICAgICAgIDE2LFxuICAgICAgICA1MCxcbiAgICAgICAgNzMsXG4gICAgICAgIDE5MyxcbiAgICAgICAgNzYsXG4gICAgICAgIDExNSxcbiAgICAgICAgNTAsXG4gICAgICAgIDc4LFxuICAgICAgICAyNTUsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTEwLFxuICAgICAgICA3MCxcbiAgICAgICAgMTY4LFxuICAgICAgICAxNzQsXG4gICAgICAgIDIzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0OCxcbiAgICAgICAgMjU0LFxuICAgICAgICAwLFxuICAgICAgICAxNTAsXG4gICAgICAgIDcxLFxuICAgICAgICAyNDcsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTMxLFxuICAgICAgICA3MyxcbiAgICAgICAgMjIyLFxuICAgICAgICA2NSxcbiAgICAgICAgMTI0LFxuICAgICAgICAxMzksXG4gICAgICAgIDExMCxcbiAgICAgICAgNTYsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMjAwLFxuICAgICAgICAyMjYsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTgxLFxuICAgICAgICAxNDgsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTA2LFxuICAgICAgICAxMCxcbiAgICAgICAgMjM4LFxuICAgICAgICA3OSxcbiAgICAgICAgMjEyLFxuICAgICAgICAyMTgsXG4gICAgICAgIDIwMyxcbiAgICAgICAgOCxcbiAgICAgICAgMTM3LFxuICAgICAgICA4NVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMDQsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMjEwLFxuICAgICAgICAxNDUsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTI2LFxuICAgICAgICA4NyxcbiAgICAgICAgNDUsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTQyLFxuICAgICAgICAxMCxcbiAgICAgICAgMTUwLFxuICAgICAgICAxMjUsXG4gICAgICAgIDY0LFxuICAgICAgICAzMCxcbiAgICAgICAgMTYzLFxuICAgICAgICAxOTMsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTE5LFxuICAgICAgICA5MyxcbiAgICAgICAgODIsXG4gICAgICAgIDE5LFxuICAgICAgICAxMDQsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMjM0LFxuICAgICAgICA5NyxcbiAgICAgICAgMTk2LFxuICAgICAgICAxMDcsXG4gICAgICAgIDEyMCxcbiAgICAgICAgOSxcbiAgICAgICAgMTksXG4gICAgICAgIDc2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4MCxcbiAgICAgICAgMTYzLFxuICAgICAgICAxMzksXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTQsXG4gICAgICAgIDQ2LFxuICAgICAgICAxNzUsXG4gICAgICAgIDE4NyxcbiAgICAgICAgNTksXG4gICAgICAgIDQ2LFxuICAgICAgICA1LFxuICAgICAgICA1MCxcbiAgICAgICAgMjMwLFxuICAgICAgICAyMzMsXG4gICAgICAgIDksXG4gICAgICAgIDEwMyxcbiAgICAgICAgMjAzLFxuICAgICAgICAzNCxcbiAgICAgICAgMjMyLFxuICAgICAgICA1MyxcbiAgICAgICAgMTAsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMjM2LFxuICAgICAgICAxMTMsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTk0LFxuICAgICAgICAxOTgsXG4gICAgICAgIDExLFxuICAgICAgICAxNDksXG4gICAgICAgIDIzMyxcbiAgICAgICAgMjU1LFxuICAgICAgICAxMDJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTc4LFxuICAgICAgICAyMTMsXG4gICAgICAgIDY5LFxuICAgICAgICAxNTgsXG4gICAgICAgIDczLFxuICAgICAgICAxNjgsXG4gICAgICAgIDU5LFxuICAgICAgICA2NCxcbiAgICAgICAgMTY0LFxuICAgICAgICAxNzQsXG4gICAgICAgIDIxOCxcbiAgICAgICAgOTUsXG4gICAgICAgIDE5NixcbiAgICAgICAgNzksXG4gICAgICAgIDE2MixcbiAgICAgICAgNzgsXG4gICAgICAgIDczLFxuICAgICAgICA2OCxcbiAgICAgICAgMjAxLFxuICAgICAgICAxNTksXG4gICAgICAgIDE0OSxcbiAgICAgICAgNDMsXG4gICAgICAgIDkxLFxuICAgICAgICA5MixcbiAgICAgICAgNixcbiAgICAgICAgMjQsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMjEyLFxuICAgICAgICA0MixcbiAgICAgICAgMjM2LFxuICAgICAgICAxNDYsXG4gICAgICAgIDE5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgNzksXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAxNixcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICAyMCxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDUsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgMTA2XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDczLFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDEsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICA2NixcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMSxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMTE2XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTk2LFxuICAgICAgICAyMzQsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMjAyLFxuICAgICAgICA0MixcbiAgICAgICAgMzUsXG4gICAgICAgIDQxLFxuICAgICAgICA0MixcbiAgICAgICAgMjA3LFxuICAgICAgICA2NixcbiAgICAgICAgMTQ4LFxuICAgICAgICAxOSxcbiAgICAgICAgMjAwLFxuICAgICAgICAxMTMsXG4gICAgICAgIDExNyxcbiAgICAgICAgMjQ3LFxuICAgICAgICAzNixcbiAgICAgICAgMTcyLFxuICAgICAgICAxNjMsXG4gICAgICAgIDE0NixcbiAgICAgICAgNjUsXG4gICAgICAgIDM1LFxuICAgICAgICAxNSxcbiAgICAgICAgMTk1LFxuICAgICAgICAxMTAsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTQzLFxuICAgICAgICAxODIsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTYzLFxuICAgICAgICAxNzMsXG4gICAgICAgIDQsXG4gICAgICAgIDE5NixcbiAgICAgICAgMjQ1LFxuICAgICAgICA4MixcbiAgICAgICAgMjAxLFxuICAgICAgICAxMzAsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTU2LFxuICAgICAgICAxNTQsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMjM0LFxuICAgICAgICA4MCxcbiAgICAgICAgNDksXG4gICAgICAgIDE1MSxcbiAgICAgICAgMjA5LFxuICAgICAgICAxNDIsXG4gICAgICAgIDE3LFxuICAgICAgICAyMjQsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMjQ3LFxuICAgICAgICAyMzYsXG4gICAgICAgIDE2NixcbiAgICAgICAgMjEwLFxuICAgICAgICAxMDcsXG4gICAgICAgIDI0NyxcbiAgICAgICAgNTcsXG4gICAgICAgIDEwMCxcbiAgICAgICAgNjEsXG4gICAgICAgIDg5LFxuICAgICAgICA0MSxcbiAgICAgICAgMTIyLFxuICAgICAgICAzMyxcbiAgICAgICAgMTM2XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyMTMsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwidDNtR0ZpUnl0OHo5SWZnZnk2VUxDQlhCb2M3eFVkQitpWjlsS1BWNEFBST1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyMzQ4MTQzMzE5MjMxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCJBRTYxM0UyQTM5NjQ1QTVCNEYwODZBM0UwNDI4OEJFNVwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MzEwMTczOThcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiVl9nQXNXLUNUVHVvbktlZGZ0MUtOZ1wiLFxuICBcInBob25lSWRcIjogXCJkYzY1Mjg4NS1jMDVjLTQ4YjMtOGY4YS1mNmVmYjQ2ZGI5NjRcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTcyLFxuICAgICAgMTE3LFxuICAgICAgMSxcbiAgICAgIDQ2LFxuICAgICAgNDYsXG4gICAgICA5OSxcbiAgICAgIDEyOSxcbiAgICAgIDEwMixcbiAgICAgIDEsXG4gICAgICAzNCxcbiAgICAgIDYyLFxuICAgICAgMTI1LFxuICAgICAgMTU1LFxuICAgICAgMzMsXG4gICAgICAyMDYsXG4gICAgICAxODQsXG4gICAgICAxNTMsXG4gICAgICA5OCxcbiAgICAgIDMzLFxuICAgICAgMTExXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE1MyxcbiAgICAgIDE4OSxcbiAgICAgIDE5NSxcbiAgICAgIDI1MCxcbiAgICAgIDEzLFxuICAgICAgMTYxLFxuICAgICAgMjEwLFxuICAgICAgMTQ1LFxuICAgICAgMTA1LFxuICAgICAgOTUsXG4gICAgICAxMzEsXG4gICAgICAxNzUsXG4gICAgICA4NSxcbiAgICAgIDEyNixcbiAgICAgIDc5LFxuICAgICAgMzAsXG4gICAgICAxOTUsXG4gICAgICAxMDksXG4gICAgICAxMTAsXG4gICAgICAyMTZcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiODE2MVdNTFNcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDgxNDMzMTkyMzE6NDdAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjI3Mzc0ODQxNDQ4NDY4OTo0N0BsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNOWDdoY0FGRUsvMXRMa0dHQW9nQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIkJEbmF0WUxjOXp3TzFNSTVtQVFPMkQ5U0ZkT0pjbkp1Zm4yRklFQ1diSG89XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiQ1ZsUlZEbDlLM2ZRZjVheVdnY2hsQmNqMzQ1YWtqY2pMVnlyM1BhYmFzYTc5OUpMM2tvbGh5aGl3eHlCWitIRHpZVmdHOGlZeXBHYnRKT0tqREhzRHc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiWGFnZUdMWHREaWNCNFNSTE9jUHo2b3IzV0dLcGJaRDl5NDU3UGlyNkZvdG51NWJ5cXRzNFBQMTlPdExROWFCUGhqLzE2b1MxZnE3eU95djVjUHBJaUE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0ODE0MzMxOTIzMTo0N0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDQsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICA0LFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICA2MyxcbiAgICAgICAgICA4MixcbiAgICAgICAgICAyMSxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgMTIyXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MzEwMTczOTUsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFNQVlcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQU1BWS5qc29uIjogIntcImtleURhdGFcIjpcInEvbzk5N0xBYUs1YnNvYkNGQm5yL2Jmd1BFWHZKUXVueXFMV0d1NWQ5bVU9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTQ3NjQ5Mjc1NyxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIwXCJ9Igp9"  // PUT your SESSION_ID 


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
