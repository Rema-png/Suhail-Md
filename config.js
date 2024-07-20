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


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "7386896269";




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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_08_24_07_20_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTA0LFxuICAgICAgICAxMSxcbiAgICAgICAgMjE4LFxuICAgICAgICAxMDEsXG4gICAgICAgIDE2MyxcbiAgICAgICAgNzgsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTgxLFxuICAgICAgICAyMDUsXG4gICAgICAgIDE0MyxcbiAgICAgICAgNDUsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTA5LFxuICAgICAgICAxNSxcbiAgICAgICAgMzksXG4gICAgICAgIDEyMixcbiAgICAgICAgMjIwLFxuICAgICAgICAxMDEsXG4gICAgICAgIDM5LFxuICAgICAgICA5NyxcbiAgICAgICAgMTkzLFxuICAgICAgICAxNzUsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTA2LFxuICAgICAgICAzNSxcbiAgICAgICAgMTUsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTAxLFxuICAgICAgICAyNCxcbiAgICAgICAgNTMsXG4gICAgICAgIDE3MyxcbiAgICAgICAgNzRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTkwLFxuICAgICAgICAyMzAsXG4gICAgICAgIDQ1LFxuICAgICAgICAyMzUsXG4gICAgICAgIDUyLFxuICAgICAgICA0OSxcbiAgICAgICAgMjAzLFxuICAgICAgICAxMixcbiAgICAgICAgNTAsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTExLFxuICAgICAgICAxMzQsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTY1LFxuICAgICAgICAxMixcbiAgICAgICAgMTksXG4gICAgICAgIDI0MCxcbiAgICAgICAgNjcsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTk3LFxuICAgICAgICA4NixcbiAgICAgICAgMTksXG4gICAgICAgIDM0LFxuICAgICAgICAyMzcsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMjE4LFxuICAgICAgICA4MyxcbiAgICAgICAgMTI4LFxuICAgICAgICAxNzYsXG4gICAgICAgIDkyLFxuICAgICAgICAxODAsXG4gICAgICAgIDczXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNCxcbiAgICAgICAgMTkwLFxuICAgICAgICAxMjksXG4gICAgICAgIDI0MSxcbiAgICAgICAgNTUsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTg1LFxuICAgICAgICAxMjksXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTg3LFxuICAgICAgICAxNTEsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTA3LFxuICAgICAgICAyMzgsXG4gICAgICAgIDE1MSxcbiAgICAgICAgOTgsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTQxLFxuICAgICAgICA4NSxcbiAgICAgICAgMSxcbiAgICAgICAgMjUyLFxuICAgICAgICAyMjgsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTIzLFxuICAgICAgICA0NSxcbiAgICAgICAgMTk1LFxuICAgICAgICAyMzIsXG4gICAgICAgIDUyLFxuICAgICAgICA3LFxuICAgICAgICAxOTQsXG4gICAgICAgIDQsXG4gICAgICAgIDkzXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwNixcbiAgICAgICAgMTIsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMjA1LFxuICAgICAgICA4LFxuICAgICAgICAyMDQsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMjI1LFxuICAgICAgICAxMjksXG4gICAgICAgIDE3NCxcbiAgICAgICAgNjgsXG4gICAgICAgIDEzOCxcbiAgICAgICAgOTQsXG4gICAgICAgIDE2MyxcbiAgICAgICAgNCxcbiAgICAgICAgMTgyLFxuICAgICAgICAyMDgsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMjQsXG4gICAgICAgIDEyOSxcbiAgICAgICAgODEsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTU3LFxuICAgICAgICAxNTUsXG4gICAgICAgIDEzMCxcbiAgICAgICAgODUsXG4gICAgICAgIDU5LFxuICAgICAgICA3NCxcbiAgICAgICAgMTU5LFxuICAgICAgICAyMDcsXG4gICAgICAgIDQ1LFxuICAgICAgICAxMDlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE3NixcbiAgICAgICAgMjE1LFxuICAgICAgICAxNjksXG4gICAgICAgIDc2LFxuICAgICAgICAxMDYsXG4gICAgICAgIDE1MSxcbiAgICAgICAgNDIsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTI4LFxuICAgICAgICAxNDEsXG4gICAgICAgIDMzLFxuICAgICAgICA2NCxcbiAgICAgICAgMzcsXG4gICAgICAgIDI4LFxuICAgICAgICA5MCxcbiAgICAgICAgMjMzLFxuICAgICAgICAxMjQsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTI3LFxuICAgICAgICAxODksXG4gICAgICAgIDUyLFxuICAgICAgICAxODYsXG4gICAgICAgIDMyLFxuICAgICAgICAyMTgsXG4gICAgICAgIDc5LFxuICAgICAgICAxMzMsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTczLFxuICAgICAgICAxMyxcbiAgICAgICAgNCxcbiAgICAgICAgODEsXG4gICAgICAgIDEyNlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxODAsXG4gICAgICAgIDM3LFxuICAgICAgICA5MyxcbiAgICAgICAgNDMsXG4gICAgICAgIDEyNSxcbiAgICAgICAgOTEsXG4gICAgICAgIDE4OCxcbiAgICAgICAgNjIsXG4gICAgICAgIDExNixcbiAgICAgICAgNTksXG4gICAgICAgIDEyOCxcbiAgICAgICAgODgsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMjMwLFxuICAgICAgICAyMTIsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTc5LFxuICAgICAgICAxNzYsXG4gICAgICAgIDcsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMzksXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTc4LFxuICAgICAgICA4LFxuICAgICAgICAyNTMsXG4gICAgICAgIDE4NCxcbiAgICAgICAgOTEsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTI5LFxuICAgICAgICAxMzAsXG4gICAgICAgIDczLFxuICAgICAgICA4NVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgNCxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICA5MixcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICA4MixcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgOCxcbiAgICAgICAgICAxMjRcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICA5MixcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgODQsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMSxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMzBcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNTUsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTIwLFxuICAgICAgICAyNTUsXG4gICAgICAgIDgyLFxuICAgICAgICA5MixcbiAgICAgICAgMjM3LFxuICAgICAgICA3OSxcbiAgICAgICAgMixcbiAgICAgICAgMTE0LFxuICAgICAgICAxNCxcbiAgICAgICAgMjQsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTY5LFxuICAgICAgICAxNTUsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTc1LFxuICAgICAgICA5NCxcbiAgICAgICAgMjEwLFxuICAgICAgICAxMTcsXG4gICAgICAgIDExNixcbiAgICAgICAgMTI5LFxuICAgICAgICAxMjQsXG4gICAgICAgIDMyLFxuICAgICAgICAyMDQsXG4gICAgICAgIDM3LFxuICAgICAgICAxMjEsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTYsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTczLFxuICAgICAgICAyMzcsXG4gICAgICAgIDkwLFxuICAgICAgICAyMzYsXG4gICAgICAgIDIwLFxuICAgICAgICAyMzIsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTg5LFxuICAgICAgICAyMTAsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTg1LFxuICAgICAgICAzMCxcbiAgICAgICAgMjI5LFxuICAgICAgICAxNDksXG4gICAgICAgIDMxLFxuICAgICAgICA5OSxcbiAgICAgICAgMTg5LFxuICAgICAgICAxOTIsXG4gICAgICAgIDMwLFxuICAgICAgICAyMzIsXG4gICAgICAgIDc1LFxuICAgICAgICAyNTMsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTE2LFxuICAgICAgICAxMDgsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTgwLFxuICAgICAgICA1MyxcbiAgICAgICAgNjYsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTcwLFxuICAgICAgICAxNjUsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTM3XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxNixcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCI2WHpjb21FTHZRTEd6am9WL0ZjRGViVjc2SHc4cjlVdy9YNFF4ek5WT0k0PVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJpXzVfaWlpZlRZZWtMWDgtYl9VX3JRXCIsXG4gIFwicGhvbmVJZFwiOiBcIjZlOTYyMDFlLTRmNTUtNGNkZi04YWVkLTllMmQ4ZTJjMzlmMlwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxODcsXG4gICAgICA5MCxcbiAgICAgIDE0MSxcbiAgICAgIDE2LFxuICAgICAgMzQsXG4gICAgICA4NSxcbiAgICAgIDI0OCxcbiAgICAgIDEzNCxcbiAgICAgIDIwMCxcbiAgICAgIDE1MyxcbiAgICAgIDEwNyxcbiAgICAgIDQzLFxuICAgICAgNjcsXG4gICAgICAxMjAsXG4gICAgICAyMDgsXG4gICAgICAxMyxcbiAgICAgIDE3NyxcbiAgICAgIDcwLFxuICAgICAgMTYsXG4gICAgICAyMDBcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiBmYWxzZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIyMixcbiAgICAgIDIwOCxcbiAgICAgIDI0NixcbiAgICAgIDE1NixcbiAgICAgIDEzLFxuICAgICAgMTQ5LFxuICAgICAgMjAsXG4gICAgICAyOCxcbiAgICAgIDEyMixcbiAgICAgIDc1LFxuICAgICAgMjM2LFxuICAgICAgMTM5LFxuICAgICAgMTM0LFxuICAgICAgODIsXG4gICAgICA1NSxcbiAgICAgIDQ0LFxuICAgICAgMjMzLFxuICAgICAgMCxcbiAgICAgIDIxOSxcbiAgICAgIDI0OFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ09xWnhZTUtFTGJvN2JRR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiRXEyTmM1VVJSOEhNbDA2NEJmSnBBVFNtRzhGTS90dm5qUHFidTdlK3dVST1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJEazdjaXR4RXZDRWFQTmVlZWtETkExZFlodlJ5bDZHelRZS2RNcFRkTWZKYUdxNU13UnlxbXhucitzc3RNNXdZcjhZS003UE5mZkR3eGVOZ1FJK2tqdz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJtY3hsRjA2OEtPcmpzZEFoQmgzNnFodlA4TmcyS2pyUWdiRTJYcXBGNnJRb1BHRytKdXBIRHpxS3hKcTkrSGMrSndFZEV5YzBxSnVyNGJ6V0xzRHpndz09XCJcbiAgfSxcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjQ0NzM4Njg5NjI2OTo2QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIzODIzNDI4NTQzNjk2Njo2QGxpZFwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiNDQ3Mzg2ODk2MjY5OjZAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDUsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICAyNyxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDY2XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJpcGhvbmVcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMTQ2Mzg3MlxufSIKfQ=="  // PUT your SESSION_ID 


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
