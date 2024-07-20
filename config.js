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


global.devs = "7778760887" // Developer Contact
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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_16_25_07_20_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTM2LFxuICAgICAgICA0LFxuICAgICAgICAxNTMsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTUyLFxuICAgICAgICA4NSxcbiAgICAgICAgMjI5LFxuICAgICAgICAxNDksXG4gICAgICAgIDk5LFxuICAgICAgICAxNDYsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTczLFxuICAgICAgICAxNzgsXG4gICAgICAgIDEzLFxuICAgICAgICAzMCxcbiAgICAgICAgODAsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTAzLFxuICAgICAgICAxNTEsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTI5LFxuICAgICAgICAxMTksXG4gICAgICAgIDIzLFxuICAgICAgICA4NixcbiAgICAgICAgMTk0LFxuICAgICAgICAxMjYsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTU4LFxuICAgICAgICAyNyxcbiAgICAgICAgMjI2LFxuICAgICAgICAxMDEsXG4gICAgICAgIDY4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTA1LFxuICAgICAgICAxNTMsXG4gICAgICAgIDYwLFxuICAgICAgICAxMyxcbiAgICAgICAgMTExLFxuICAgICAgICA3NCxcbiAgICAgICAgMjMyLFxuICAgICAgICAxMzUsXG4gICAgICAgIDQ3LFxuICAgICAgICAyMDgsXG4gICAgICAgIDU0LFxuICAgICAgICA2MyxcbiAgICAgICAgMTM5LFxuICAgICAgICAxMjMsXG4gICAgICAgIDIwNCxcbiAgICAgICAgNTcsXG4gICAgICAgIDEzNyxcbiAgICAgICAgNzgsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTIwLFxuICAgICAgICAxMTcsXG4gICAgICAgIDcyLFxuICAgICAgICAxNTEsXG4gICAgICAgIDE0LFxuICAgICAgICAzMixcbiAgICAgICAgMTMyLFxuICAgICAgICAxMzAsXG4gICAgICAgIDEzNixcbiAgICAgICAgNTIsXG4gICAgICAgIDgwLFxuICAgICAgICAyOVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQsXG4gICAgICAgIDQ0LFxuICAgICAgICA1MyxcbiAgICAgICAgMTgyLFxuICAgICAgICAxNDYsXG4gICAgICAgIDQyLFxuICAgICAgICAxNTksXG4gICAgICAgIDE0NCxcbiAgICAgICAgMjksXG4gICAgICAgIDM5LFxuICAgICAgICA4NCxcbiAgICAgICAgMjQxLFxuICAgICAgICAyMDAsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMjEyLFxuICAgICAgICA5OCxcbiAgICAgICAgMyxcbiAgICAgICAgMjI5LFxuICAgICAgICAxNTAsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTc4LFxuICAgICAgICAxOTAsXG4gICAgICAgIDI2LFxuICAgICAgICAxMTgsXG4gICAgICAgIDQzLFxuICAgICAgICAxOCxcbiAgICAgICAgMjAxLFxuICAgICAgICAxNTcsXG4gICAgICAgIDExLFxuICAgICAgICAxMDIsXG4gICAgICAgIDMyLFxuICAgICAgICA4MVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA3NixcbiAgICAgICAgMTMwLFxuICAgICAgICAxNjIsXG4gICAgICAgIDE2LFxuICAgICAgICAyLFxuICAgICAgICAxMjksXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTE3LFxuICAgICAgICAyNTQsXG4gICAgICAgIDgzLFxuICAgICAgICAxNDksXG4gICAgICAgIDIwNSxcbiAgICAgICAgMjQyLFxuICAgICAgICA5MCxcbiAgICAgICAgNixcbiAgICAgICAgNTAsXG4gICAgICAgIDYsXG4gICAgICAgIDIwNyxcbiAgICAgICAgNjcsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMjUzLFxuICAgICAgICAxMDQsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTkyLFxuICAgICAgICA5NyxcbiAgICAgICAgMTcwLFxuICAgICAgICA1NCxcbiAgICAgICAgMTQ2LFxuICAgICAgICA3OCxcbiAgICAgICAgMzAsXG4gICAgICAgIDg0LFxuICAgICAgICAxMjRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIxNixcbiAgICAgICAgMTU4LFxuICAgICAgICAyNDUsXG4gICAgICAgIDE5MyxcbiAgICAgICAgODMsXG4gICAgICAgIDE4MixcbiAgICAgICAgNjIsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMjM4LFxuICAgICAgICAxNjMsXG4gICAgICAgIDQ3LFxuICAgICAgICAzMCxcbiAgICAgICAgMTYsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMjgsXG4gICAgICAgIDk2LFxuICAgICAgICAxNSxcbiAgICAgICAgMTQ0LFxuICAgICAgICAyMSxcbiAgICAgICAgMjUxLFxuICAgICAgICAwLFxuICAgICAgICAxNjEsXG4gICAgICAgIDE1NixcbiAgICAgICAgNDIsXG4gICAgICAgIDk1LFxuICAgICAgICAxNTMsXG4gICAgICAgIDQxLFxuICAgICAgICA0NyxcbiAgICAgICAgNDcsXG4gICAgICAgIDEwLFxuICAgICAgICA5NyxcbiAgICAgICAgMTA0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDU2LFxuICAgICAgICA1MCxcbiAgICAgICAgOTcsXG4gICAgICAgIDMyLFxuICAgICAgICAxMDYsXG4gICAgICAgIDQyLFxuICAgICAgICAxNDUsXG4gICAgICAgIDY5LFxuICAgICAgICA5MixcbiAgICAgICAgNzQsXG4gICAgICAgIDksXG4gICAgICAgIDQ1LFxuICAgICAgICAyMjUsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMCxcbiAgICAgICAgMTgwLFxuICAgICAgICAyMTgsXG4gICAgICAgIDYsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTQ4LFxuICAgICAgICAyMDQsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTQsXG4gICAgICAgIDYxLFxuICAgICAgICAxMzksXG4gICAgICAgIDkxLFxuICAgICAgICAxNjUsXG4gICAgICAgIDE5LFxuICAgICAgICAzOCxcbiAgICAgICAgNTcsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDIsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICA3NFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICA0NixcbiAgICAgICAgICA0NCxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgOCxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgMjJcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA3MSxcbiAgICAgICAgMTkzLFxuICAgICAgICAxNDYsXG4gICAgICAgIDE0MyxcbiAgICAgICAgOTIsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTAsXG4gICAgICAgIDEwNyxcbiAgICAgICAgODcsXG4gICAgICAgIDMyLFxuICAgICAgICA3MyxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxODQsXG4gICAgICAgIDgzLFxuICAgICAgICA2NixcbiAgICAgICAgMTMwLFxuICAgICAgICA2MixcbiAgICAgICAgMjIyLFxuICAgICAgICAxMjAsXG4gICAgICAgIDEzOCxcbiAgICAgICAgNTMsXG4gICAgICAgIDMyLFxuICAgICAgICA1MSxcbiAgICAgICAgMjM4LFxuICAgICAgICAyMDcsXG4gICAgICAgIDIzMixcbiAgICAgICAgNTQsXG4gICAgICAgIDEwMyxcbiAgICAgICAgOSxcbiAgICAgICAgNzksXG4gICAgICAgIDg1LFxuICAgICAgICAzOCxcbiAgICAgICAgOTIsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTYzLFxuICAgICAgICA5MyxcbiAgICAgICAgNDQsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTY2LFxuICAgICAgICAxNzgsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjU1LFxuICAgICAgICA5MSxcbiAgICAgICAgMTIzLFxuICAgICAgICA1NCxcbiAgICAgICAgMTY5LFxuICAgICAgICAxMjEsXG4gICAgICAgIDI3LFxuICAgICAgICAxOTcsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTU4LFxuICAgICAgICAyMzYsXG4gICAgICAgIDMzLFxuICAgICAgICAxMDYsXG4gICAgICAgIDI1MyxcbiAgICAgICAgODQsXG4gICAgICAgIDU0LFxuICAgICAgICA1MyxcbiAgICAgICAgNjMsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTI3LFxuICAgICAgICAxMDgsXG4gICAgICAgIDIzNixcbiAgICAgICAgNFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTU1LFxuICBcImFkdlNlY3JldEtleVwiOiBcInZDdWFiejVJRVJvM2pST2FhWlNsK0hhMnp6cUJjKzNQK3MyaTJBNzlYVzQ9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiNDQ3Nzc4NzYwODg3QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCIzQTk0QkZENDA5MDIyMDRFNDNEQ1wiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjE0OTI3MTdcbiAgICB9LFxuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI0NDc3Nzg3NjA4ODdAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjNBNURENzJBNzM2MkI2MjRDMDFGXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyMTQ5MjcyMlxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogNjEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogNjEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJ1cEdGZGIxVFNqS3E2bDlIZEQzZ25BXCIsXG4gIFwicGhvbmVJZFwiOiBcIjdmNTk2N2QyLWU4NmItNGUwOS1iZmYzLWIyYjEyMjkyODgwMFwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA1OCxcbiAgICAgIDIzOCxcbiAgICAgIDU0LFxuICAgICAgMjM1LFxuICAgICAgMTc4LFxuICAgICAgMjQzLFxuICAgICAgMjA1LFxuICAgICAgODQsXG4gICAgICA4MixcbiAgICAgIDIxNyxcbiAgICAgIDE2NSxcbiAgICAgIDAsXG4gICAgICAxMDksXG4gICAgICA5MCxcbiAgICAgIDEyNSxcbiAgICAgIDIwOCxcbiAgICAgIDI0OCxcbiAgICAgIDgxLFxuICAgICAgMTYwLFxuICAgICAgMTI4XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogZmFsc2UsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNTIsXG4gICAgICAxNTEsXG4gICAgICAxMDAsXG4gICAgICA1MyxcbiAgICAgIDIzLFxuICAgICAgMTE3LFxuICAgICAgNzksXG4gICAgICA5OCxcbiAgICAgIDEyLFxuICAgICAgMjM2LFxuICAgICAgMTE2LFxuICAgICAgMTI4LFxuICAgICAgNzYsXG4gICAgICAxNDIsXG4gICAgICA1NixcbiAgICAgIDIzNixcbiAgICAgIDMyLFxuICAgICAgMTk0LFxuICAgICAgMjUyLFxuICAgICAgMjAyXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTnZQazUwQ0VPcko3N1FHR0FNZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJ4YlB5OWJmMXYwc1pIUG4xeDBrRUx5UkIyTG1OeURxQ29LNFdhVEx3ZVc0PVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcInlHcVMzYkVVNE5wVmZHZXNYS1RQQ01NWGtzeFJSK0JlbjNNM29LMnZVcmlaOFNxaldOSHZNSmd4RldJZk1ZZUZRbFphaXFFb3pKZnVTd040SVJYQ2pRPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIlJjbkl5VWJQbnpRR3JWK0tOenVEOUlMaytIWDh1dWt2eS9qWVUxSnZNblpjUFltblV4MktOc1pQbU53NERoUDBTY0FHYVhlckRMVTc2eVV3anJhQUFBPT1cIlxuICB9LFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiNDQ3Nzc4NzYwODg3OjNAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCJJIGhlXCIsXG4gICAgXCJsaWRcIjogXCIyMTk0OTA1Mjg4MDQ5NTc6M0BsaWRcIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjQ0Nzc3ODc2MDg4NzozQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDQsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDExMFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iaVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIxNDkyNzE2LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBT3BaXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFPcFguanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJucVUwUXBSYU9yZ0FEK2R2RlFPK1ZqbVFRT0hmNzhqY2htSU04VFJiQVVJPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjU5ODAwOTgxOSxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzIxNDkxMzgwNjc4XCJ9IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBT3BaLmpzb24iOiAie1wia2V5RGF0YVwiOlwicVh0MmhlUnEvVDFEMEdjV1QxZGpMbDlMWkdKV2xlS3JmN3pCU2Flb0pUYz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo1OTgwMDk4MTksXCJjdXJyZW50SW5kZXhcIjoyLFwiZGV2aWNlSW5kZXhlc1wiOlsxLDIsMF19LFwidGltZXN0YW1wXCI6XCIxNzIxNDkyNjg5Nzc5XCJ9IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBT3BhLmpzb24iOiAie1wia2V5RGF0YVwiOlwiaW1LdkxjdGJtMkFVdXQ0RVZNeVNDcEVXeGRvL2tGWG1IQ200MHVEZ1gwND1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo1OTgwMDk4MTksXCJjdXJyZW50SW5kZXhcIjoyLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTcyMTQ5MjY5MDc2M1wifSIKfQ=="  // PUT your SESSION_ID 


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
