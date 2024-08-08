const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "‪7909139076‬" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "‪7909139076";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_00_22_08_08_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMCxcbiAgICAgICAgMTA1LFxuICAgICAgICA2NSxcbiAgICAgICAgMjAzLFxuICAgICAgICAxNDQsXG4gICAgICAgIDcwLFxuICAgICAgICAxMyxcbiAgICAgICAgMjA4LFxuICAgICAgICA3NixcbiAgICAgICAgMTcsXG4gICAgICAgIDE2NixcbiAgICAgICAgMjUsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTIyLFxuICAgICAgICAxMTQsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMjQ5LFxuICAgICAgICA2NCxcbiAgICAgICAgMTMwLFxuICAgICAgICAxNTgsXG4gICAgICAgIDExNSxcbiAgICAgICAgMjAwLFxuICAgICAgICAzNCxcbiAgICAgICAgMTU3LFxuICAgICAgICA4NCxcbiAgICAgICAgNTEsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTIwLFxuICAgICAgICAxNjQsXG4gICAgICAgIDE5NSxcbiAgICAgICAgNjAsXG4gICAgICAgIDEyM1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNTAsXG4gICAgICAgIDQ1LFxuICAgICAgICAxNDMsXG4gICAgICAgIDExLFxuICAgICAgICA5NSxcbiAgICAgICAgNjcsXG4gICAgICAgIDg3LFxuICAgICAgICAxNzksXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTA0LFxuICAgICAgICAzMyxcbiAgICAgICAgMjU1LFxuICAgICAgICAxNDAsXG4gICAgICAgIDI1MCxcbiAgICAgICAgNDMsXG4gICAgICAgIDIzLFxuICAgICAgICAxMDcsXG4gICAgICAgIDIyNCxcbiAgICAgICAgNjAsXG4gICAgICAgIDM3LFxuICAgICAgICA4OCxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxLFxuICAgICAgICA2NSxcbiAgICAgICAgMjUwLFxuICAgICAgICAxNSxcbiAgICAgICAgMTc5LFxuICAgICAgICA1MyxcbiAgICAgICAgMTUsXG4gICAgICAgIDE5NyxcbiAgICAgICAgODEsXG4gICAgICAgIDkxXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxOTIsXG4gICAgICAgIDQ5LFxuICAgICAgICA0LFxuICAgICAgICA2MyxcbiAgICAgICAgMjEwLFxuICAgICAgICAxNDksXG4gICAgICAgIDczLFxuICAgICAgICAxMDQsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMjQzLFxuICAgICAgICAyMTYsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMSxcbiAgICAgICAgMzksXG4gICAgICAgIDE1LFxuICAgICAgICAxMjQsXG4gICAgICAgIDg2LFxuICAgICAgICAxOTYsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMjAyLFxuICAgICAgICAxNDEsXG4gICAgICAgIDkyLFxuICAgICAgICAxODMsXG4gICAgICAgIDE3NixcbiAgICAgICAgNTQsXG4gICAgICAgIDAsXG4gICAgICAgIDY4LFxuICAgICAgICA2MixcbiAgICAgICAgMjE0LFxuICAgICAgICAyMDYsXG4gICAgICAgIDMzLFxuICAgICAgICAxMTJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjM3LFxuICAgICAgICAxNDcsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMjExLFxuICAgICAgICAxOTQsXG4gICAgICAgIDE0MCxcbiAgICAgICAgODYsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTY3LFxuICAgICAgICA0LFxuICAgICAgICAxNTgsXG4gICAgICAgIDI0LFxuICAgICAgICA3OCxcbiAgICAgICAgMTk2LFxuICAgICAgICAxODIsXG4gICAgICAgIDE4MixcbiAgICAgICAgNzIsXG4gICAgICAgIDczLFxuICAgICAgICAxNDQsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTM0LFxuICAgICAgICA0LFxuICAgICAgICAxMjQsXG4gICAgICAgIDQ0LFxuICAgICAgICA2LFxuICAgICAgICA1MCxcbiAgICAgICAgNjEsXG4gICAgICAgIDM4LFxuICAgICAgICAxOTksXG4gICAgICAgIDMyLFxuICAgICAgICAxMjAsXG4gICAgICAgIDQ0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNixcbiAgICAgICAgMTA5LFxuICAgICAgICAyMTQsXG4gICAgICAgIDYwLFxuICAgICAgICAzNSxcbiAgICAgICAgMTM3LFxuICAgICAgICAyNDQsXG4gICAgICAgIDQzLFxuICAgICAgICAxNzMsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMjE5LFxuICAgICAgICAxNzIsXG4gICAgICAgIDEyMyxcbiAgICAgICAgNzIsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMjExLFxuICAgICAgICA1NyxcbiAgICAgICAgNTgsXG4gICAgICAgIDIyNixcbiAgICAgICAgMjE0LFxuICAgICAgICAyMzUsXG4gICAgICAgIDk0LFxuICAgICAgICAwLFxuICAgICAgICA5OSxcbiAgICAgICAgMjUwLFxuICAgICAgICAxOTQsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTE4LFxuICAgICAgICAxMTgsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTUxLFxuICAgICAgICAxMjNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOSxcbiAgICAgICAgNzIsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTg1LFxuICAgICAgICAxODAsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTE2LFxuICAgICAgICAxNyxcbiAgICAgICAgNzQsXG4gICAgICAgIDEwNixcbiAgICAgICAgMzQsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTYsXG4gICAgICAgIDI4LFxuICAgICAgICAyMTgsXG4gICAgICAgIDk3LFxuICAgICAgICAzNixcbiAgICAgICAgMTMyLFxuICAgICAgICAxNTYsXG4gICAgICAgIDIwLFxuICAgICAgICA0MSxcbiAgICAgICAgMjUyLFxuICAgICAgICAxMDAsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTM5LFxuICAgICAgICA1MSxcbiAgICAgICAgMTcwLFxuICAgICAgICAyMzIsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTA0LFxuICAgICAgICAyMjIsXG4gICAgICAgIDU0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDksXG4gICAgICAgICAgNjksXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICA5N1xuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMSxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAzNixcbiAgICAgICAgICAyMCxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICA3MlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDM3LFxuICAgICAgICA2MixcbiAgICAgICAgMTUxLFxuICAgICAgICAxNzMsXG4gICAgICAgIDk4LFxuICAgICAgICA0NixcbiAgICAgICAgMTQ0LFxuICAgICAgICAyMTMsXG4gICAgICAgIDIzOSxcbiAgICAgICAgNDcsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMjksXG4gICAgICAgIDEyNixcbiAgICAgICAgNjgsXG4gICAgICAgIDE1LFxuICAgICAgICAxNzcsXG4gICAgICAgIDQsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTMsXG4gICAgICAgIDI5LFxuICAgICAgICAxOTUsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTg1LFxuICAgICAgICAzMSxcbiAgICAgICAgMjQyLFxuICAgICAgICAyNTQsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTM3LFxuICAgICAgICA0LFxuICAgICAgICAzMyxcbiAgICAgICAgMTk2LFxuICAgICAgICAyNTUsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMjE1LFxuICAgICAgICA0OCxcbiAgICAgICAgODUsXG4gICAgICAgIDksXG4gICAgICAgIDEwNixcbiAgICAgICAgMjcsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMjA1LFxuICAgICAgICAxNjksXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTIsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMjksXG4gICAgICAgIDE4MixcbiAgICAgICAgMjgsXG4gICAgICAgIDE2MixcbiAgICAgICAgOTEsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTAyLFxuICAgICAgICA3OSxcbiAgICAgICAgMTc1LFxuICAgICAgICAxMzIsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTE0LFxuICAgICAgICA1NixcbiAgICAgICAgMzUsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTA0LFxuICAgICAgICA2OCxcbiAgICAgICAgMjQzLFxuICAgICAgICAxMVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTMyLFxuICBcImFkdlNlY3JldEtleVwiOiBcIkR3dkpuSmVJYTlwWWRZWXNsUEVGQUxwZTYrY0toMnBiVElUUm9iM1pLek09XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiNDQ3OTA5MTM5MDc2QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCIzQTBBM0JBRjI5QUI2Q0MyNjc1NlwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjMwNzY1MjNcbiAgICB9LFxuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI0NDc5MDkxMzkwNzZAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjNBQTMyMDYwNTMxRDAwMTI0RERBXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyMzA3NjUyN1xuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJoU1MzdEUyMlI3T3dNZTBLMGhYcENRXCIsXG4gIFwicGhvbmVJZFwiOiBcImVmMmQyNTMyLTRiYTQtNDk3Ny1iNmYzLWRiNDQwOTk2ZTlmYlwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA2NCxcbiAgICAgIDE0MixcbiAgICAgIDEzNyxcbiAgICAgIDI0NyxcbiAgICAgIDE2NixcbiAgICAgIDI2LFxuICAgICAgNzQsXG4gICAgICAxOSxcbiAgICAgIDE0NyxcbiAgICAgIDE3NCxcbiAgICAgIDYzLFxuICAgICAgMTkyLFxuICAgICAgNDUsXG4gICAgICAxMTQsXG4gICAgICAxMTYsXG4gICAgICAyMzUsXG4gICAgICA0MSxcbiAgICAgIDEzNSxcbiAgICAgIDI1LFxuICAgICAgMzBcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiBmYWxzZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDQxLFxuICAgICAgNjUsXG4gICAgICA5NSxcbiAgICAgIDE2NyxcbiAgICAgIDI1MyxcbiAgICAgIDE2NCxcbiAgICAgIDI1MixcbiAgICAgIDI1MCxcbiAgICAgIDEzOCxcbiAgICAgIDEzOCxcbiAgICAgIDE4MCxcbiAgICAgIDE4MyxcbiAgICAgIDEwLFxuICAgICAgMTY4LFxuICAgICAgMTAyLFxuICAgICAgMTY2LFxuICAgICAgNjIsXG4gICAgICA0NSxcbiAgICAgIDE2NixcbiAgICAgIDE2MFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ05Xa21aMEdFS2FmMExVR0dBSWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwibVQxeW8yZE94K1ZEQmVDdTI4WEFBOUVOYkpUYTl2QjdxN3dFY3QyTUVUOD1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJCWUY1anRoNEpHZHM5WDI2WGNDMnJzWm92N0gxL3ZsdGd6ZFpldnZVWjBCWHR1bE45MlA2Q3k5SFc1UldKckFRSEhrckhBK0hGM0hacGxBSHVNdGRDQT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJNK3RRN2lGOTJPVktTZTh3TEhDc1plOUpBbzFva1BTbjZzNUpQd0tBMGNESDdzTVkrVytmdHVxQmxmOUoxRXpaMzNNZm1pL3o5V2h2M0JLOVQxUXlBdz09XCJcbiAgfSxcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjQ0NzkwOTEzOTA3NjoyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxODg2Njk5MTA2NDI5MTQ6MkBsaWRcIixcbiAgICBcIm5hbWVcIjogXCJJIGhlXCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI0NDc5MDkxMzkwNzY6MkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDUsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAzLFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDQsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgNjNcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmlcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMzA3NjUyMSxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUt5V1wiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBS3lXLmpzb24iOiAie1wia2V5RGF0YVwiOlwibjlXZElRRnArRWFLRGtNbkdiRWpwYm9rS1pGL1ZNdVdsZ2VtZlVkSzN5bz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxNjcxODQ0NDM3LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMSwwXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MjMwNzY0NjU5MDVcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "rema",
  ownername:process.env.OWNER_NAME|| "rema",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
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
  //read_status: process.env.AUTO_READ_STATUS || "true",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
