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


global.devs = "‪7778760887‬" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "‪7778760887";




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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_23_09_08_07_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzIsXG4gICAgICAgIDcxLFxuICAgICAgICAyNDUsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTI1LFxuICAgICAgICAxMDgsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTksXG4gICAgICAgIDI0NixcbiAgICAgICAgMjAxLFxuICAgICAgICAxODIsXG4gICAgICAgIDI0LFxuICAgICAgICAxNzMsXG4gICAgICAgIDk5LFxuICAgICAgICAxODYsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMjQ2LFxuICAgICAgICAzOSxcbiAgICAgICAgMTAzLFxuICAgICAgICAxMzQsXG4gICAgICAgIDk3LFxuICAgICAgICAxNjgsXG4gICAgICAgIDE1LFxuICAgICAgICAxNzMsXG4gICAgICAgIDcxLFxuICAgICAgICA2MSxcbiAgICAgICAgMTMyLFxuICAgICAgICAxNTYsXG4gICAgICAgIDkzLFxuICAgICAgICA2MixcbiAgICAgICAgNjIsXG4gICAgICAgIDg2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTg4LFxuICAgICAgICA3NSxcbiAgICAgICAgMjI2LFxuICAgICAgICAyMjUsXG4gICAgICAgIDc0LFxuICAgICAgICAxNTUsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMjIzLFxuICAgICAgICAzLFxuICAgICAgICA4LFxuICAgICAgICA1LFxuICAgICAgICA4LFxuICAgICAgICAxMixcbiAgICAgICAgMjIzLFxuICAgICAgICA3MSxcbiAgICAgICAgMjIyLFxuICAgICAgICAyMTUsXG4gICAgICAgIDI0OCxcbiAgICAgICAgNjMsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTI2LFxuICAgICAgICAyMTAsXG4gICAgICAgIDMzLFxuICAgICAgICAxNDAsXG4gICAgICAgIDk4LFxuICAgICAgICAyNTUsXG4gICAgICAgIDIxLFxuICAgICAgICAxNjMsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTc3LFxuICAgICAgICA0NFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjMyLFxuICAgICAgICAxMzMsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjA5LFxuICAgICAgICAyNTAsXG4gICAgICAgIDUwLFxuICAgICAgICAzOCxcbiAgICAgICAgMTkxLFxuICAgICAgICAxMjMsXG4gICAgICAgIDExLFxuICAgICAgICAxNDgsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMjAyLFxuICAgICAgICA2MCxcbiAgICAgICAgMTAxLFxuICAgICAgICAxODEsXG4gICAgICAgIDEyNyxcbiAgICAgICAgOTEsXG4gICAgICAgIDIyNSxcbiAgICAgICAgNzYsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMjE4LFxuICAgICAgICAxNixcbiAgICAgICAgMTYxLFxuICAgICAgICAyMTgsXG4gICAgICAgIDE3LFxuICAgICAgICAxNzUsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTQ2LFxuICAgICAgICA5MixcbiAgICAgICAgMjM1LFxuICAgICAgICAxMTNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTM0LFxuICAgICAgICAxOTQsXG4gICAgICAgIDEzLFxuICAgICAgICAxMTIsXG4gICAgICAgIDQ4LFxuICAgICAgICA2NyxcbiAgICAgICAgNjUsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTAsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTIwLFxuICAgICAgICA0MyxcbiAgICAgICAgNDcsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTgyLFxuICAgICAgICAxODAsXG4gICAgICAgIDU4LFxuICAgICAgICA4LFxuICAgICAgICAxMjgsXG4gICAgICAgIDYyLFxuICAgICAgICAyMyxcbiAgICAgICAgOSxcbiAgICAgICAgMTE3LFxuICAgICAgICA0NixcbiAgICAgICAgMjMxLFxuICAgICAgICAyMTUsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMjA1LFxuICAgICAgICA5OSxcbiAgICAgICAgMTk1LFxuICAgICAgICA2MSxcbiAgICAgICAgMTI1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMjQsXG4gICAgICAgIDQzLFxuICAgICAgICAxNDAsXG4gICAgICAgIDEwMyxcbiAgICAgICAgNCxcbiAgICAgICAgNDYsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMjYsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMjEsXG4gICAgICAgIDM4LFxuICAgICAgICA4NSxcbiAgICAgICAgMTk3LFxuICAgICAgICAxNjUsXG4gICAgICAgIDE2OSxcbiAgICAgICAgODMsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTE2LFxuICAgICAgICA3OSxcbiAgICAgICAgMjIxLFxuICAgICAgICAxOTEsXG4gICAgICAgIDE3NyxcbiAgICAgICAgNjQsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMjQzLFxuICAgICAgICAyMjIsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTIyLFxuICAgICAgICAyNDYsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMjcsXG4gICAgICAgIDcwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE1OCxcbiAgICAgICAgOCxcbiAgICAgICAgMjQwLFxuICAgICAgICA4LFxuICAgICAgICAyMDcsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMzksXG4gICAgICAgIDE1MyxcbiAgICAgICAgOTgsXG4gICAgICAgIDUyLFxuICAgICAgICAyOCxcbiAgICAgICAgODMsXG4gICAgICAgIDksXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTEyLFxuICAgICAgICAxOTYsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTcwLFxuICAgICAgICAxMzAsXG4gICAgICAgIDM2LFxuICAgICAgICAxOCxcbiAgICAgICAgMjM0LFxuICAgICAgICAxMDMsXG4gICAgICAgIDk5LFxuICAgICAgICAxNDYsXG4gICAgICAgIDIyNSxcbiAgICAgICAgNjUsXG4gICAgICAgIDE1MixcbiAgICAgICAgNjYsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMjQyLFxuICAgICAgICA5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDI0OCxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDEyNVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICA0MixcbiAgICAgICAgICA0NyxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgMixcbiAgICAgICAgICAxMyxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICA2MixcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgNjBcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxOTEsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMjEsXG4gICAgICAgIDIzOCxcbiAgICAgICAgODYsXG4gICAgICAgIDM2LFxuICAgICAgICAyNSxcbiAgICAgICAgMjA0LFxuICAgICAgICAyMzgsXG4gICAgICAgIDM0LFxuICAgICAgICAxODAsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMjEwLFxuICAgICAgICAyMzksXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTE3LFxuICAgICAgICA2NCxcbiAgICAgICAgMjM5LFxuICAgICAgICA1MCxcbiAgICAgICAgNzMsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTIzLFxuICAgICAgICAyLFxuICAgICAgICAxMDUsXG4gICAgICAgIDIyLFxuICAgICAgICAxODYsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTIxLFxuICAgICAgICAxNTcsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMzUsXG4gICAgICAgIDIwNCxcbiAgICAgICAgOTgsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMjAyLFxuICAgICAgICAxODEsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMzEsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMjM2LFxuICAgICAgICAxMzMsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxMzEsXG4gICAgICAgIDYyLFxuICAgICAgICAzNCxcbiAgICAgICAgMTQ4LFxuICAgICAgICAyMjcsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTczLFxuICAgICAgICA4NyxcbiAgICAgICAgMTYyLFxuICAgICAgICA0NCxcbiAgICAgICAgMTU1LFxuICAgICAgICAxMzgsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMjIxLFxuICAgICAgICAxMTQsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMzcsXG4gICAgICAgIDYsXG4gICAgICAgIDY4LFxuICAgICAgICA3MyxcbiAgICAgICAgMTQxXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiA4NyxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJERWtYeG5tSEhqcTMrTnZOQ1ZRYXNvUlJQNDhCWHBtd0gwb0pjYmdxY1NRPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjQ0Nzc3ODc2MDg4N0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiM0E4MTc0MTg1NDFGM0VGQzU0NUNcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzIzMDcyMTQ1XG4gICAgfSxcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiNDQ3Nzc4NzYwODg3QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCIzQUQxMjlGNEFEN0Q1NTBDODI4RlwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjMwNzIxNDdcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiTTFkYUVNYmtTaXlIQjdQN0tWcUVvd1wiLFxuICBcInBob25lSWRcIjogXCJjOWIxMWQ0Mi0yNjFlLTRjZTgtOTU4Ni1iMzAwZTU1NDJmMmNcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTk3LFxuICAgICAgMjQ1LFxuICAgICAgMjQ4LFxuICAgICAgMjQzLFxuICAgICAgNzQsXG4gICAgICA0NixcbiAgICAgIDI0NyxcbiAgICAgIDEyMCxcbiAgICAgIDExNixcbiAgICAgIDE5OCxcbiAgICAgIDUsXG4gICAgICAxOTcsXG4gICAgICAxNSxcbiAgICAgIDEwMixcbiAgICAgIDIyOCxcbiAgICAgIDM3LFxuICAgICAgMTc4LFxuICAgICAgMTExLFxuICAgICAgMTQ1LFxuICAgICAgMjUxXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogZmFsc2UsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMyxcbiAgICAgIDc2LFxuICAgICAgNzEsXG4gICAgICA0NixcbiAgICAgIDEwMCxcbiAgICAgIDE0NyxcbiAgICAgIDEwNixcbiAgICAgIDQsXG4gICAgICAzMyxcbiAgICAgIDIxLFxuICAgICAgMTc0LFxuICAgICAgMjEyLFxuICAgICAgMTg3LFxuICAgICAgMixcbiAgICAgIDE5OSxcbiAgICAgIDE5MyxcbiAgICAgIDE5MyxcbiAgICAgIDY4LFxuICAgICAgMTc0LFxuICAgICAgMTMxXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTVhhaGRjSkVJdjl6N1VHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJ4YlB5OWJmMXYwc1pIUG4xeDBrRUx5UkIyTG1OeURxQ29LNFdhVEx3ZVc0PVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIkIzN04xaTZSR0tScWZpbTZHY3d5bDI3UzBxTURjRTd0MDJtcEFOM0lEaklvZTRGakk2Qkt2WU9PcnQvc1B2Z2RkeTRhTEdNdEgwOC9rN0tJWmd5Nml3PT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcImcxTVIzNnc5NFBsYXVLYzB0RGN5VDYvSkM5VjlxYkdSanQrNzJ6NXNoY2lOWHNBRDBEbk1JNUNtVWpiemlPTkFBUncxaWs1S2ZnVFVzVnNFbmVCdWpnPT1cIlxuICB9LFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiNDQ3Nzc4NzYwODg3OjVAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCJJIGhlXCIsXG4gICAgXCJsaWRcIjogXCIyMTk0OTA1Mjg4MDQ5NTc6NUBsaWRcIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjQ0Nzc3ODc2MDg4Nzo1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDQsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDExMFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iaVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIzMDcyMTQzLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBRUhXXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFFSFcuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJnZml3WnBYK1puYXhpRkltcWZzcGFMbm1mUUdzYzlRRU8za2VBNkpGYXBjPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjI1OTg0NjQ4MzcsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTcyMzA3MjE0MzE5MlwifSIKfQ=="  // PUT your SESSION_ID 


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
