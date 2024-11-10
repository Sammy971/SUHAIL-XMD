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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_19_48_11_10_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTc2LFxuICAgICAgICA5MyxcbiAgICAgICAgMjA0LFxuICAgICAgICAxMTQsXG4gICAgICAgIDY5LFxuICAgICAgICA2NSxcbiAgICAgICAgMTQ5LFxuICAgICAgICA4NCxcbiAgICAgICAgMTI3LFxuICAgICAgICAxMTEsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMjksXG4gICAgICAgIDE4MixcbiAgICAgICAgNjMsXG4gICAgICAgIDc2LFxuICAgICAgICA2NixcbiAgICAgICAgMTIwLFxuICAgICAgICAxNjEsXG4gICAgICAgIDc0LFxuICAgICAgICAyMyxcbiAgICAgICAgMzMsXG4gICAgICAgIDE3MixcbiAgICAgICAgMzQsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTYyLFxuICAgICAgICAxOTQsXG4gICAgICAgIDMwLFxuICAgICAgICAxMTgsXG4gICAgICAgIDIsXG4gICAgICAgIDk5LFxuICAgICAgICAxNDQsXG4gICAgICAgIDEyMVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMzQsXG4gICAgICAgIDU0LFxuICAgICAgICA3NixcbiAgICAgICAgMTEzLFxuICAgICAgICAxNTksXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTI1LFxuICAgICAgICAxNTAsXG4gICAgICAgIDIwNCxcbiAgICAgICAgOTUsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTE2LFxuICAgICAgICA1MSxcbiAgICAgICAgMjE5LFxuICAgICAgICA1OSxcbiAgICAgICAgMTQyLFxuICAgICAgICAxMDEsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMjMzLFxuICAgICAgICAyNDgsXG4gICAgICAgIDEzNixcbiAgICAgICAgNDksXG4gICAgICAgIDMxLFxuICAgICAgICA3NCxcbiAgICAgICAgMTM0LFxuICAgICAgICAxOTIsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTQsXG4gICAgICAgIDEyNixcbiAgICAgICAgOTAsXG4gICAgICAgIDIyNCxcbiAgICAgICAgOThcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDExMixcbiAgICAgICAgMTYxLFxuICAgICAgICAyNDIsXG4gICAgICAgIDExMCxcbiAgICAgICAgMzcsXG4gICAgICAgIDU3LFxuICAgICAgICAxODEsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMjQsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTc2LFxuICAgICAgICAyMzAsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMjA0LFxuICAgICAgICAyOCxcbiAgICAgICAgNTQsXG4gICAgICAgIDY0LFxuICAgICAgICA5MixcbiAgICAgICAgNTksXG4gICAgICAgIDE5MixcbiAgICAgICAgMTQ3LFxuICAgICAgICA5LFxuICAgICAgICAyMTksXG4gICAgICAgIDU4LFxuICAgICAgICAzNSxcbiAgICAgICAgMzAsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMCxcbiAgICAgICAgNzQsXG4gICAgICAgIDYzLFxuICAgICAgICAxMzUsXG4gICAgICAgIDc2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTAzLFxuICAgICAgICAyMDcsXG4gICAgICAgIDExNixcbiAgICAgICAgMjAzLFxuICAgICAgICA4MSxcbiAgICAgICAgNzcsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTA4LFxuICAgICAgICAyNCxcbiAgICAgICAgNzcsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMjAwLFxuICAgICAgICAxOCxcbiAgICAgICAgMTk5LFxuICAgICAgICAxNjIsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxMDUsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTkzLFxuICAgICAgICAxNzMsXG4gICAgICAgIDYzLFxuICAgICAgICAxODEsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTEsXG4gICAgICAgIDgwLFxuICAgICAgICAxNDYsXG4gICAgICAgIDYwLFxuICAgICAgICA5OSxcbiAgICAgICAgMjUwLFxuICAgICAgICA5NVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYwLFxuICAgICAgICAxNyxcbiAgICAgICAgNzQsXG4gICAgICAgIDIyMCxcbiAgICAgICAgNjQsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMjYsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMjIsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMjMwLFxuICAgICAgICA0LFxuICAgICAgICAyMDgsXG4gICAgICAgIDEwNCxcbiAgICAgICAgODQsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMjQwLFxuICAgICAgICAxMjAsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTc2LFxuICAgICAgICAxNDEsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTI3LFxuICAgICAgICAyNCxcbiAgICAgICAgMTkwLFxuICAgICAgICAxNzIsXG4gICAgICAgIDY1LFxuICAgICAgICAyNTMsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMzksXG4gICAgICAgIDUyLFxuICAgICAgICA3M1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMTYsXG4gICAgICAgIDc5LFxuICAgICAgICA2NCxcbiAgICAgICAgMTA2LFxuICAgICAgICA3MCxcbiAgICAgICAgOSxcbiAgICAgICAgNzksXG4gICAgICAgIDU2LFxuICAgICAgICA5MixcbiAgICAgICAgMTYwLFxuICAgICAgICAxODMsXG4gICAgICAgIDIxNixcbiAgICAgICAgMjM1LFxuICAgICAgICA2MyxcbiAgICAgICAgMTAxLFxuICAgICAgICA2MixcbiAgICAgICAgMTIyLFxuICAgICAgICAxMTUsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTkwLFxuICAgICAgICAzMixcbiAgICAgICAgNjYsXG4gICAgICAgIDIxMCxcbiAgICAgICAgODIsXG4gICAgICAgIDIwMyxcbiAgICAgICAgOSxcbiAgICAgICAgMTkwLFxuICAgICAgICA5OSxcbiAgICAgICAgMjM5LFxuICAgICAgICAyMjcsXG4gICAgICAgIDQ5LFxuICAgICAgICAxMDhcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICA2MixcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICA3MixcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDExMVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICAzMixcbiAgICAgICAgICA2OSxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICA0NixcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgNTRcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxOTgsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTMxLFxuICAgICAgICAyMixcbiAgICAgICAgMTkxLFxuICAgICAgICAxNyxcbiAgICAgICAgMTE0LFxuICAgICAgICAyNTUsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMjU0LFxuICAgICAgICAyMjcsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTQ0LFxuICAgICAgICAyMDcsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTE4LFxuICAgICAgICA4OCxcbiAgICAgICAgMTAsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTcwLFxuICAgICAgICAzMixcbiAgICAgICAgMTAxLFxuICAgICAgICAxNjEsXG4gICAgICAgIDk5LFxuICAgICAgICAyNTIsXG4gICAgICAgIDEzMixcbiAgICAgICAgMjAxLFxuICAgICAgICA3NCxcbiAgICAgICAgMjExLFxuICAgICAgICAxMjYsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTg3LFxuICAgICAgICA1NSxcbiAgICAgICAgOSxcbiAgICAgICAgMTUyLFxuICAgICAgICA0MSxcbiAgICAgICAgMTIyLFxuICAgICAgICAxMjksXG4gICAgICAgIDMwLFxuICAgICAgICAzOSxcbiAgICAgICAgMjEwLFxuICAgICAgICA0NyxcbiAgICAgICAgMjIyLFxuICAgICAgICAyNDIsXG4gICAgICAgIDUzLFxuICAgICAgICAxNDEsXG4gICAgICAgIDEyNixcbiAgICAgICAgMjA3LFxuICAgICAgICAxMjcsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTQzLFxuICAgICAgICAzMSxcbiAgICAgICAgMixcbiAgICAgICAgMjQ4LFxuICAgICAgICA2NSxcbiAgICAgICAgMjE5LFxuICAgICAgICA3OCxcbiAgICAgICAgMTc3LFxuICAgICAgICAxMzUsXG4gICAgICAgIDMxLFxuICAgICAgICAyNDEsXG4gICAgICAgIDQzLFxuICAgICAgICAyMzAsXG4gICAgICAgIDEyOFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTg0LFxuICBcImFkdlNlY3JldEtleVwiOiBcIlF2Q0RkM2dnUTFRYkNsVFp3KzhLanBienI0VVphMzdtNVk3MlJTdzUvKzg9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIjQ3QnJqOEo1VGp5djRMelJIYzdpelFcIixcbiAgXCJwaG9uZUlkXCI6IFwiZjdmMzc1MzUtNTY1Mi00N2I0LThmMDYtYzMyZGVlZTY4MTczXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIwMCxcbiAgICAgIDM5LFxuICAgICAgMjQ0LFxuICAgICAgMTA1LFxuICAgICAgMTI0LFxuICAgICAgMTU2LFxuICAgICAgMjMsXG4gICAgICA5NSxcbiAgICAgIDE5LFxuICAgICAgMTU0LFxuICAgICAgMTcsXG4gICAgICAyNyxcbiAgICAgIDExMSxcbiAgICAgIDIyMSxcbiAgICAgIDEwLFxuICAgICAgMTc0LFxuICAgICAgMjM4LFxuICAgICAgNTEsXG4gICAgICA4MSxcbiAgICAgIDEyMlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMTUsXG4gICAgICAzLFxuICAgICAgMjA5LFxuICAgICAgMjM2LFxuICAgICAgNixcbiAgICAgIDE3NCxcbiAgICAgIDIzMixcbiAgICAgIDIzNSxcbiAgICAgIDE2OCxcbiAgICAgIDIxOSxcbiAgICAgIDExNixcbiAgICAgIDUwLFxuICAgICAgNDQsXG4gICAgICAxNDYsXG4gICAgICAxMjAsXG4gICAgICAyMTQsXG4gICAgICA0OCxcbiAgICAgIDEwNyxcbiAgICAgIDI5LFxuICAgICAgMTE4XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIjdCOVlEV1dOXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ4MTQzMzE5MjMxOjU2QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIyNzM3NDg0MTQ0ODQ2ODk6NTZAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTlg3aGNBRkVKMmN4TGtHR0JNZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJCRG5hdFlMYzl6d08xTUk1bUFRTzJEOVNGZE9KY25KdWZuMkZJRUNXYkhvPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcInl4MkVoQWM3VzROZFAxandta25qTEswRjM3TlB3SnR3cHdJOTVGSnp1WVh3d3AxZlFpYTl1MmRmaDU1L0NqYjEyeGtnRjJ0cWJRYzZDM2trc3YyYUJ3PT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcInRQb0dnU29DK0ptTjh3VmZ1TEt5NlFmT2VsNDhrOTRXSmFra3dnTllwYVBZOG9sbFdOWHc2bkNTZVFURDNLRVpBSnFXb1MyV0V1aU1GYmZmRndDb2lBPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDgxNDMzMTkyMzE6NTZAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgNCxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAzMixcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDEyMlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzMxMjY4MTI5LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBTUFZXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFNQVkuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJxL285OTdMQWFLNWJzb2JDRkJuci9iZndQRVh2SlF1bnlxTFdHdTVkOW1VPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE0NzY0OTI3NTcsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIKfQ=="  // PUT your SESSION_ID 


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
