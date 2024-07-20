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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "7778760887";




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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_16_05_07_20_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODgsXG4gICAgICAgIDIyNixcbiAgICAgICAgNDAsXG4gICAgICAgIDM1LFxuICAgICAgICAyMzUsXG4gICAgICAgIDk2LFxuICAgICAgICAxMzcsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTM1LFxuICAgICAgICAxNDgsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTQyLFxuICAgICAgICAyNDMsXG4gICAgICAgIDc1LFxuICAgICAgICAxOTcsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTIxLFxuICAgICAgICAyNDQsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTg3LFxuICAgICAgICA4MixcbiAgICAgICAgMTQyLFxuICAgICAgICAxMjgsXG4gICAgICAgIDI0MixcbiAgICAgICAgMjUyLFxuICAgICAgICAxNzYsXG4gICAgICAgIDc3LFxuICAgICAgICAyMTgsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMSxcbiAgICAgICAgOTcsXG4gICAgICAgIDg5XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQ4LFxuICAgICAgICAxOTEsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTAyLFxuICAgICAgICAxNzYsXG4gICAgICAgIDE3LFxuICAgICAgICA5OCxcbiAgICAgICAgMTUzLFxuICAgICAgICAxNTgsXG4gICAgICAgIDMxLFxuICAgICAgICAxMSxcbiAgICAgICAgMjAxLFxuICAgICAgICAyMDYsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTY0LFxuICAgICAgICAxMDUsXG4gICAgICAgIDYzLFxuICAgICAgICAxNzYsXG4gICAgICAgIDMwLFxuICAgICAgICAyMjEsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTQ4LFxuICAgICAgICA4NCxcbiAgICAgICAgMjU0LFxuICAgICAgICA0LFxuICAgICAgICAxODksXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTU0LFxuICAgICAgICAxMjQsXG4gICAgICAgIDM3LFxuICAgICAgICAxNyxcbiAgICAgICAgNDFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDY0LFxuICAgICAgICAyMTksXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTUwLFxuICAgICAgICA0MyxcbiAgICAgICAgMTEyLFxuICAgICAgICAxNjksXG4gICAgICAgIDkwLFxuICAgICAgICAxMTAsXG4gICAgICAgIDIwNSxcbiAgICAgICAgOCxcbiAgICAgICAgMjM3LFxuICAgICAgICAxMzUsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTA2LFxuICAgICAgICA1MSxcbiAgICAgICAgMTIwLFxuICAgICAgICAxOTQsXG4gICAgICAgIDE1OSxcbiAgICAgICAgNTUsXG4gICAgICAgIDE4MixcbiAgICAgICAgMjIyLFxuICAgICAgICAxOTksXG4gICAgICAgIDIyOCxcbiAgICAgICAgMjM1LFxuICAgICAgICA3LFxuICAgICAgICA5NSxcbiAgICAgICAgMjIzLFxuICAgICAgICAxNTgsXG4gICAgICAgIDk5LFxuICAgICAgICAxMTEsXG4gICAgICAgIDcwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE5LFxuICAgICAgICA1MCxcbiAgICAgICAgNjUsXG4gICAgICAgIDUyLFxuICAgICAgICAzMSxcbiAgICAgICAgMTYzLFxuICAgICAgICAxMzMsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTYsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMzEsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTcyLFxuICAgICAgICAxMzMsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMjE1LFxuICAgICAgICAyNixcbiAgICAgICAgMjUyLFxuICAgICAgICAxNzQsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTExLFxuICAgICAgICAyNDcsXG4gICAgICAgIDE3LFxuICAgICAgICAyMzQsXG4gICAgICAgIDE0MCxcbiAgICAgICAgOTksXG4gICAgICAgIDE1MyxcbiAgICAgICAgNDEsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTQyLFxuICAgICAgICAzOCxcbiAgICAgICAgODlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDAsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMjEyLFxuICAgICAgICAyNDUsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTM1LFxuICAgICAgICAxNzgsXG4gICAgICAgIDQzLFxuICAgICAgICAyNCxcbiAgICAgICAgMTExLFxuICAgICAgICAyMTEsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMjQxLFxuICAgICAgICAyNyxcbiAgICAgICAgMjMyLFxuICAgICAgICAzMyxcbiAgICAgICAgMTM3LFxuICAgICAgICAxMzYsXG4gICAgICAgIDc4LFxuICAgICAgICA1MCxcbiAgICAgICAgMjEwLFxuICAgICAgICAyMzAsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMjEsXG4gICAgICAgIDYxLFxuICAgICAgICAyNTMsXG4gICAgICAgIDE0LFxuICAgICAgICA2MCxcbiAgICAgICAgNTIsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTkwLFxuICAgICAgICAxMTdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTQsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMjE4LFxuICAgICAgICAxMDMsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTc3LFxuICAgICAgICAyMyxcbiAgICAgICAgMTMwLFxuICAgICAgICA5NyxcbiAgICAgICAgMTc0LFxuICAgICAgICAyNTMsXG4gICAgICAgIDg5LFxuICAgICAgICAxNzAsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMzUsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMjQxLFxuICAgICAgICA4NixcbiAgICAgICAgMTUsXG4gICAgICAgIDIxMyxcbiAgICAgICAgNTEsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTQ0LFxuICAgICAgICAyMzMsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTEsXG4gICAgICAgIDMyLFxuICAgICAgICA3MCxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxNDksXG4gICAgICAgIDExLFxuICAgICAgICA1MFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNixcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMixcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICA1OSxcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgNCxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgMTI3XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEwOSxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMCxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDEsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgOTFcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNTUsXG4gICAgICAgIDc4LFxuICAgICAgICAxNjEsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMjE2LFxuICAgICAgICAzMCxcbiAgICAgICAgMTk5LFxuICAgICAgICAxMjUsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMjExLFxuICAgICAgICA5OSxcbiAgICAgICAgMjQ5LFxuICAgICAgICAyNDMsXG4gICAgICAgIDgxLFxuICAgICAgICA5MyxcbiAgICAgICAgMTA5LFxuICAgICAgICAyNyxcbiAgICAgICAgNDcsXG4gICAgICAgIDExNSxcbiAgICAgICAgMjcsXG4gICAgICAgIDIzNCxcbiAgICAgICAgOTMsXG4gICAgICAgIDgsXG4gICAgICAgIDIwNixcbiAgICAgICAgNyxcbiAgICAgICAgMTI5LFxuICAgICAgICA3OCxcbiAgICAgICAgMTcyLFxuICAgICAgICAyNDEsXG4gICAgICAgIDQ4LFxuICAgICAgICAxNDAsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMjE4LFxuICAgICAgICA1NCxcbiAgICAgICAgMTE2LFxuICAgICAgICAwLFxuICAgICAgICAyOCxcbiAgICAgICAgNDUsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMjI5LFxuICAgICAgICAxLFxuICAgICAgICAxMjgsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTM5LFxuICAgICAgICAxOTIsXG4gICAgICAgIDc5LFxuICAgICAgICA2LFxuICAgICAgICA1OSxcbiAgICAgICAgMTA2LFxuICAgICAgICAxNjcsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMjQxLFxuICAgICAgICAxMSxcbiAgICAgICAgMjQ4LFxuICAgICAgICA4MyxcbiAgICAgICAgMTYzLFxuICAgICAgICAxMCxcbiAgICAgICAgMjMwLFxuICAgICAgICAyMTYsXG4gICAgICAgIDkzLFxuICAgICAgICAyMTAsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMjAsXG4gICAgICAgIDhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDE2NixcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJETjA2eGFHTGtIdlBiTU00blUvdXY4aENZUXk4Z0ltV3FEbGZ2ZzFSbHhJPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjQ0Nzc3ODc2MDg4N0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiM0FGRTFEQzlFRjAxQUQ4NTA1NDVcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzIxNDkxNTM1XG4gICAgfSxcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiNDQ3Nzc4NzYwODg3QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCIzQTcwNTc0Qjg0NUIwMzc1RUU3M1wiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjE0OTE1MzlcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDYxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDYxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiUnZwNVlvY3lURnVNSUNFaW9fZEd0QVwiLFxuICBcInBob25lSWRcIjogXCJlYzQ3ZGYzMi04Y2VmLTQ5NTktOWU1Mi00MGQ1NjY0OGI0NWNcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjI4LFxuICAgICAgMTk3LFxuICAgICAgMjM5LFxuICAgICAgMjAxLFxuICAgICAgNjcsXG4gICAgICAxMzIsXG4gICAgICAyMTIsXG4gICAgICAxMjksXG4gICAgICA0NixcbiAgICAgIDc2LFxuICAgICAgOTgsXG4gICAgICAxODMsXG4gICAgICAzMCxcbiAgICAgIDI1NCxcbiAgICAgIDEzNCxcbiAgICAgIDIxNSxcbiAgICAgIDUsXG4gICAgICA5OSxcbiAgICAgIDcxLFxuICAgICAgOFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IGZhbHNlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjA0LFxuICAgICAgNzgsXG4gICAgICAxNDYsXG4gICAgICAxMjAsXG4gICAgICA3MyxcbiAgICAgIDMyLFxuICAgICAgMTYyLFxuICAgICAgNjksXG4gICAgICAxOTMsXG4gICAgICA4NyxcbiAgICAgIDE0MCxcbiAgICAgIDI0OCxcbiAgICAgIDcxLFxuICAgICAgNTksXG4gICAgICAxMDEsXG4gICAgICAxNjUsXG4gICAgICA5MCxcbiAgICAgIDIwOSxcbiAgICAgIDIxLFxuICAgICAgMTcwXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTnZQazUwQ0VNdkE3N1FHR0FJZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJ4YlB5OWJmMXYwc1pIUG4xeDBrRUx5UkIyTG1OeURxQ29LNFdhVEx3ZVc0PVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIndlMkM5ZDhyd3hXazZycjJCeTIyMldLM0ZuYmhuWTNadnJmb2g3dDdncEJuRXhVR2lZdVdjY2VUK0lLVElsSkxDbSs5Y0M3NmtGblNvLzBPUWdrbWp3PT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIjFwc1lXSXNlUkd3U01YSXZhRzlZN28rakNvUWlWMFRzSGFWVHV0c05JR3Q4Y3crKzB5bm9HVElnVzEvVHYvaVdlUW9uNU1ReGNwSDA1SjRJUTQ0b0F3PT1cIlxuICB9LFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiNDQ3Nzc4NzYwODg3OjJAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCJSZW1hIGp1bmlvclwiLFxuICAgIFwibGlkXCI6IFwiMjE5NDkwNTI4ODA0OTU3OjJAbGlkXCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI0NDc3Nzg3NjA4ODc6MkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICAyMixcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAxMTBcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmlcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMTQ5MTUzNCxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQU9wWFwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBT3BYLmpzb24iOiAie1wia2V5RGF0YVwiOlwibnFVMFFwUmFPcmdBRCtkdkZRTytWam1RUU9IZjc4amNobUlNOFRSYkFVST1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo1OTgwMDk4MTksXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTcyMTQ5MTM4MDY3OFwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "uche",
  ownername:process.env.OWNER_NAME|| "uche",


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
