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


global.devs = "‪7386 896269‬" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "‪7386 896269‬";




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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_20_31_07_24_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMCxcbiAgICAgICAgMjI0LFxuICAgICAgICAyMDQsXG4gICAgICAgIDExNSxcbiAgICAgICAgMjMyLFxuICAgICAgICAxNTAsXG4gICAgICAgIDEwNSxcbiAgICAgICAgODksXG4gICAgICAgIDc0LFxuICAgICAgICAxLFxuICAgICAgICAxMSxcbiAgICAgICAgMzQsXG4gICAgICAgIDExNSxcbiAgICAgICAgNzAsXG4gICAgICAgIDQwLFxuICAgICAgICAyMTAsXG4gICAgICAgIDI4LFxuICAgICAgICA0MCxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxMjMsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTM5LFxuICAgICAgICAyMjEsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTcxLFxuICAgICAgICA0MixcbiAgICAgICAgNzQsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTYzLFxuICAgICAgICAxNTIsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTI2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwMSxcbiAgICAgICAgNTMsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTMsXG4gICAgICAgIDIzMixcbiAgICAgICAgMjE1LFxuICAgICAgICA1NCxcbiAgICAgICAgMTU3LFxuICAgICAgICAyMjIsXG4gICAgICAgIDUzLFxuICAgICAgICAyMzcsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTk4LFxuICAgICAgICAxMjYsXG4gICAgICAgIDkzLFxuICAgICAgICAxNjcsXG4gICAgICAgIDQ4LFxuICAgICAgICAxMjMsXG4gICAgICAgIDM5LFxuICAgICAgICA0NixcbiAgICAgICAgMTY0LFxuICAgICAgICAxOTQsXG4gICAgICAgIDExNyxcbiAgICAgICAgNjIsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTkxLFxuICAgICAgICAxMTIsXG4gICAgICAgIDE2LFxuICAgICAgICAyMTYsXG4gICAgICAgIDIwMSxcbiAgICAgICAgODgsXG4gICAgICAgIDQyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAwLFxuICAgICAgICA0OCxcbiAgICAgICAgNzcsXG4gICAgICAgIDE1LFxuICAgICAgICAxMjQsXG4gICAgICAgIDcxLFxuICAgICAgICAyMjYsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMjI5LFxuICAgICAgICAxMjgsXG4gICAgICAgIDkyLFxuICAgICAgICAxMDIsXG4gICAgICAgIDU4LFxuICAgICAgICAxNzUsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMjMsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMjA0LFxuICAgICAgICA2NCxcbiAgICAgICAgNDYsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMSxcbiAgICAgICAgMjE4LFxuICAgICAgICA4NCxcbiAgICAgICAgMjMwLFxuICAgICAgICAyNDMsXG4gICAgICAgIDEzLFxuICAgICAgICAxMyxcbiAgICAgICAgMTk4LFxuICAgICAgICA2OCxcbiAgICAgICAgMjM1LFxuICAgICAgICAxMjNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTY2LFxuICAgICAgICAyMDAsXG4gICAgICAgIDIzOSxcbiAgICAgICAgNDQsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTQsXG4gICAgICAgIDI1NCxcbiAgICAgICAgNDYsXG4gICAgICAgIDIyMixcbiAgICAgICAgNTgsXG4gICAgICAgIDc2LFxuICAgICAgICAxNCxcbiAgICAgICAgNjYsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTc1LFxuICAgICAgICA3MixcbiAgICAgICAgMjQ0LFxuICAgICAgICAxMTksXG4gICAgICAgIDIwNixcbiAgICAgICAgMjI3LFxuICAgICAgICAyMDksXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTc3LFxuICAgICAgICAxMTksXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTY0LFxuICAgICAgICAxMzQsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTgsXG4gICAgICAgIDIsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTE0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4MCxcbiAgICAgICAgMTk3LFxuICAgICAgICAxMzIsXG4gICAgICAgIDIyNixcbiAgICAgICAgNDIsXG4gICAgICAgIDEwNixcbiAgICAgICAgODcsXG4gICAgICAgIDIzMSxcbiAgICAgICAgNTYsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTkzLFxuICAgICAgICA5MixcbiAgICAgICAgMTg4LFxuICAgICAgICAyNTMsXG4gICAgICAgIDEyMixcbiAgICAgICAgMixcbiAgICAgICAgMTUzLFxuICAgICAgICAxLFxuICAgICAgICA4NyxcbiAgICAgICAgMjA5LFxuICAgICAgICAyMDksXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTE5LFxuICAgICAgICA5NixcbiAgICAgICAgOSxcbiAgICAgICAgMjE4LFxuICAgICAgICA1NCxcbiAgICAgICAgMTQxLFxuICAgICAgICAxMzQsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMjI5LFxuICAgICAgICA2NlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA5MyxcbiAgICAgICAgMjAyLFxuICAgICAgICAyMzYsXG4gICAgICAgIDE3LFxuICAgICAgICAyMjEsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMjQwLFxuICAgICAgICA1OSxcbiAgICAgICAgOCxcbiAgICAgICAgMjM0LFxuICAgICAgICAxMTAsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMjAxLFxuICAgICAgICAxNTEsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTQwLFxuICAgICAgICA4NixcbiAgICAgICAgNTMsXG4gICAgICAgIDYwLFxuICAgICAgICAyNDYsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTIwLFxuICAgICAgICAxNzEsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMzIsXG4gICAgICAgIDM4LFxuICAgICAgICA2MyxcbiAgICAgICAgMTAxLFxuICAgICAgICAxNTEsXG4gICAgICAgIDM1LFxuICAgICAgICA2OSxcbiAgICAgICAgMTI3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDcyLFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAxMixcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDgsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgOTZcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDcsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgMyxcbiAgICAgICAgICA3NixcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgOSxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAyNlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDgwLFxuICAgICAgICAxMDEsXG4gICAgICAgIDEwMCxcbiAgICAgICAgODQsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTQyLFxuICAgICAgICAyMzAsXG4gICAgICAgIDExMCxcbiAgICAgICAgNjQsXG4gICAgICAgIDI1LFxuICAgICAgICAxODksXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTk1LFxuICAgICAgICAxNTMsXG4gICAgICAgIDYxLFxuICAgICAgICAxMDEsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMjQyLFxuICAgICAgICA4MSxcbiAgICAgICAgMTEyLFxuICAgICAgICA3MyxcbiAgICAgICAgMTc2LFxuICAgICAgICAxMDcsXG4gICAgICAgIDUyLFxuICAgICAgICAxNTIsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMjUyLFxuICAgICAgICA1LFxuICAgICAgICAxOTAsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTM0LFxuICAgICAgICAxNTUsXG4gICAgICAgIDM0LFxuICAgICAgICAxMzEsXG4gICAgICAgIDM4LFxuICAgICAgICAxMzUsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMjI0LFxuICAgICAgICA0OCxcbiAgICAgICAgMjEyLFxuICAgICAgICAzNixcbiAgICAgICAgMTAwLFxuICAgICAgICAxNTcsXG4gICAgICAgIDI0LFxuICAgICAgICAxODQsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMSxcbiAgICAgICAgOTQsXG4gICAgICAgIDcwLFxuICAgICAgICAxMjcsXG4gICAgICAgIDE2LFxuICAgICAgICA1NyxcbiAgICAgICAgMjI4LFxuICAgICAgICAxMjEsXG4gICAgICAgIDgzLFxuICAgICAgICAyMjEsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTM0LFxuICAgICAgICA5NSxcbiAgICAgICAgMTIwLFxuICAgICAgICAyNDQsXG4gICAgICAgIDQwLFxuICAgICAgICAxOTAsXG4gICAgICAgIDEyOFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMjcsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiUGJHRWo2R2hieXVHYUdFbURmNVI5Z3ZXZTg2NUpCQmtuTUpJUTk0dnI5UT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiRUlhcDVDYUdUdkcwS2tiWjgtV3RzZ1wiLFxuICBcInBob25lSWRcIjogXCJhZGYwZGVlMS0yZGJhLTQzNzUtODRhOC1kZDAzZmZmYzRhOWJcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjIsXG4gICAgICA3NCxcbiAgICAgIDQyLFxuICAgICAgMjM0LFxuICAgICAgNzgsXG4gICAgICAyMzksXG4gICAgICA0NixcbiAgICAgIDQ4LFxuICAgICAgNzIsXG4gICAgICAyMTAsXG4gICAgICAxMTksXG4gICAgICA5OSxcbiAgICAgIDM4LFxuICAgICAgMjgsXG4gICAgICA3NCxcbiAgICAgIDIzMSxcbiAgICAgIDgzLFxuICAgICAgMTQ4LFxuICAgICAgMTI0LFxuICAgICAgMjMyXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogZmFsc2UsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNzksXG4gICAgICAyNTQsXG4gICAgICAyLFxuICAgICAgMTI0LFxuICAgICAgOTQsXG4gICAgICAyMDgsXG4gICAgICAyNDYsXG4gICAgICAxOCxcbiAgICAgIDY1LFxuICAgICAgNzgsXG4gICAgICAxMyxcbiAgICAgIDMzLFxuICAgICAgMjI1LFxuICAgICAgMTI1LFxuICAgICAgNTQsXG4gICAgICAxODgsXG4gICAgICAxNTAsXG4gICAgICAxMTAsXG4gICAgICAyOSxcbiAgICAgIDIwXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDUFcyNWEwTEVLVEpoYlVHR0FNZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJvV0VqKzhvNXdhVnQyZ2RtdUgveGpUVFhFRGZjYno4UWZ5eVRxcVp2VkdRPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIjk0Qk04QUx3bmYvRmVHMEVsazlEdFB0R2IvdXdEd1dlbEtQb3hYY0MvbFJvRUpvQUVZczdrN2syNUNPQ2tObVBJUWdOMW5EMk16S24zYkN1TXhGbml3PT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIkR0M2UxQVRCdTN2M3NiR1hTSFFERHNPZEQ0T2tzaDA4TFl3Q1B1TTg5ZWdYNWFEQU1rZ2J4NlJ0ZlptT21Rekg4VTlTQk5tNldSK3lxWDhVZHZtZmhnPT1cIlxuICB9LFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiNDQ3Mzg2ODk2MjY5OjEwQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIzODIzNDI4NTQzNjk2NjoxMEBsaWRcIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjQ0NzM4Njg5NjI2OToxMEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICAzNSxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICAxMDBcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImlwaG9uZVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIxODUzMDk2LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBT3JhXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFPcmEuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJzKzFRcWd4V2c3VW9ZalRHQ0pTVHFBbktnazIxVDEzT0cvV2lReGlMcnBzPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjMwNDg4MjM2NjksXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlsxLDBdfSxcInRpbWVzdGFtcFwiOlwiMTcyMTQ3Nzc1ODQ2N1wifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQU9yYy5qc29uIjogIntcImtleURhdGFcIjpcImFXNnhobG5EeEZ5WHpTS3Uzb2p2bXphTHNyajhhSmJybUNibDRhYURNU3M9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MzA0ODgyMzY2OSxcImN1cnJlbnRJbmRleFwiOjIsXCJkZXZpY2VJbmRleGVzXCI6WzAsMSwyXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MjE0OTA5MzAzMjRcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFPcmQuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJGcGdwUnE1eGFFc1FPSU9XbHJMa3dXZzIvYUU3TkJ6NWFFWUZsK1dFOVJVPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjMwNDg4MjM2NjksXCJjdXJyZW50SW5kZXhcIjoyLFwiZGV2aWNlSW5kZXhlc1wiOlswLDJdfSxcInRpbWVzdGFtcFwiOlwiMTcyMTQ5MDkzMTkyM1wifSIKfQ=="  // PUT your SESSION_ID 


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
