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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_11_13_07_21_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTg0LFxuICAgICAgICA5NSxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxMzUsXG4gICAgICAgIDUyLFxuICAgICAgICAxMSxcbiAgICAgICAgMTEzLFxuICAgICAgICAyMTYsXG4gICAgICAgIDEzNCxcbiAgICAgICAgNixcbiAgICAgICAgMjE4LFxuICAgICAgICAxODEsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTExLFxuICAgICAgICA1MSxcbiAgICAgICAgMTU5LFxuICAgICAgICAxMTAsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTU5LFxuICAgICAgICA4MSxcbiAgICAgICAgMTEwLFxuICAgICAgICAxNjMsXG4gICAgICAgIDE5MyxcbiAgICAgICAgNjAsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTgsXG4gICAgICAgIDExLFxuICAgICAgICAyOSxcbiAgICAgICAgMjcsXG4gICAgICAgIDk2LFxuICAgICAgICAzMCxcbiAgICAgICAgNzNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNCxcbiAgICAgICAgMTU0LFxuICAgICAgICA5MixcbiAgICAgICAgMTkzLFxuICAgICAgICAxMDAsXG4gICAgICAgIDEyLFxuICAgICAgICA4MyxcbiAgICAgICAgMTkyLFxuICAgICAgICAyMjksXG4gICAgICAgIDc4LFxuICAgICAgICA2OCxcbiAgICAgICAgMTc2LFxuICAgICAgICA3MixcbiAgICAgICAgMjU0LFxuICAgICAgICAxMDcsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxMTgsXG4gICAgICAgIDE5LFxuICAgICAgICAxLFxuICAgICAgICA5LFxuICAgICAgICAxODcsXG4gICAgICAgIDk2LFxuICAgICAgICA5NixcbiAgICAgICAgMTY1LFxuICAgICAgICAxNzgsXG4gICAgICAgIDY2LFxuICAgICAgICA5LFxuICAgICAgICAyMTQsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTM1LFxuICAgICAgICA1N1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTg0LFxuICAgICAgICA1NixcbiAgICAgICAgMTI3LFxuICAgICAgICA1MSxcbiAgICAgICAgNzEsXG4gICAgICAgIDM0LFxuICAgICAgICAxNjAsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTMzLFxuICAgICAgICAyMDYsXG4gICAgICAgIDMsXG4gICAgICAgIDI5LFxuICAgICAgICAxNDQsXG4gICAgICAgIDMyLFxuICAgICAgICAxMTUsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMjAzLFxuICAgICAgICA3LFxuICAgICAgICA2NixcbiAgICAgICAgMjMsXG4gICAgICAgIDIyMixcbiAgICAgICAgNDMsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTM5LFxuICAgICAgICAxOTQsXG4gICAgICAgIDExMixcbiAgICAgICAgNzgsXG4gICAgICAgIDQ4LFxuICAgICAgICA5MCxcbiAgICAgICAgOTEsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTAwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTI5LFxuICAgICAgICAxMjgsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMjMyLFxuICAgICAgICA3OSxcbiAgICAgICAgMTUxLFxuICAgICAgICA3NyxcbiAgICAgICAgODIsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMzksXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTk5LFxuICAgICAgICA3NSxcbiAgICAgICAgMTQyLFxuICAgICAgICA1NSxcbiAgICAgICAgNDAsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTAzLFxuICAgICAgICAyMTIsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTcyLFxuICAgICAgICAxMjUsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTE1LFxuICAgICAgICAxODUsXG4gICAgICAgIDk5LFxuICAgICAgICAxNjYsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMjAwLFxuICAgICAgICAxMDEsXG4gICAgICAgIDI3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDgsXG4gICAgICAgIDM4LFxuICAgICAgICAxNDEsXG4gICAgICAgIDk4LFxuICAgICAgICAxNjYsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTk0LFxuICAgICAgICAyMzEsXG4gICAgICAgIDk0LFxuICAgICAgICAxNCxcbiAgICAgICAgNjYsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMzYsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMjcsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTg5LFxuICAgICAgICAxOTcsXG4gICAgICAgIDQ3LFxuICAgICAgICA1NCxcbiAgICAgICAgMCxcbiAgICAgICAgMTM5LFxuICAgICAgICAyMjksXG4gICAgICAgIDMwLFxuICAgICAgICAyMzksXG4gICAgICAgIDU0LFxuICAgICAgICAxNDYsXG4gICAgICAgIDQ2LFxuICAgICAgICA1NCxcbiAgICAgICAgNTksXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTA2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTg1LFxuICAgICAgICAxOTcsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTQzLFxuICAgICAgICAyMjUsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTU5LFxuICAgICAgICAxMTIsXG4gICAgICAgIDMzLFxuICAgICAgICAxNTMsXG4gICAgICAgIDE3OSxcbiAgICAgICAgNixcbiAgICAgICAgMTYsXG4gICAgICAgIDk5LFxuICAgICAgICAxODUsXG4gICAgICAgIDQwLFxuICAgICAgICAxNDUsXG4gICAgICAgIDQ2LFxuICAgICAgICAwLFxuICAgICAgICAyMjEsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTk2LFxuICAgICAgICA4OCxcbiAgICAgICAgNTMsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMjM1LFxuICAgICAgICAxMjgsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMjEzLFxuICAgICAgICAyLFxuICAgICAgICAxMTBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDIsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDkwXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDc5LFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDExMixcbiAgICAgICAgICAyMixcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgMzNcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4LFxuICAgICAgICA2NCxcbiAgICAgICAgMTg2LFxuICAgICAgICAxODAsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMzYsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTU0LFxuICAgICAgICAzNyxcbiAgICAgICAgMTcxLFxuICAgICAgICA3MyxcbiAgICAgICAgMjE5LFxuICAgICAgICAyNDIsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMCxcbiAgICAgICAgMjEzLFxuICAgICAgICA5LFxuICAgICAgICAxODMsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMjM3LFxuICAgICAgICAyNDEsXG4gICAgICAgIDI1NSxcbiAgICAgICAgNDUsXG4gICAgICAgIDY4LFxuICAgICAgICAxODEsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxNDIsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTU5LFxuICAgICAgICAzNixcbiAgICAgICAgNzcsXG4gICAgICAgIDIsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMjcsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTk0LFxuICAgICAgICA1OSxcbiAgICAgICAgNDAsXG4gICAgICAgIDEyLFxuICAgICAgICA1MCxcbiAgICAgICAgMjQsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMzYsXG4gICAgICAgIDM0LFxuICAgICAgICAxNzksXG4gICAgICAgIDI0OCxcbiAgICAgICAgMyxcbiAgICAgICAgMTk0LFxuICAgICAgICA1OCxcbiAgICAgICAgMTk0LFxuICAgICAgICAxNTMsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTY5LFxuICAgICAgICAxMjgsXG4gICAgICAgIDE2MSxcbiAgICAgICAgNzIsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTIyLFxuICAgICAgICAyMzUsXG4gICAgICAgIDQyLFxuICAgICAgICAyNTAsXG4gICAgICAgIDgwLFxuICAgICAgICAxMjhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDIxMyxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJFOHVicm5SeStibjdzT2VQeXNVck5nSVVwOVZwSnFXT0RrOFZTTFQ0MWVrPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjQ0Nzc3ODc2MDg4N0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiM0E0MERCRkM5QUM5QzdFNzcxNUJcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzIxNTYwMzg2XG4gICAgfSxcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiNDQ3Nzc4NzYwODg3QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCIzQTE4MkE5Q0MyRDhDODYzMDFGNlwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjE1NjAzOTBcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiMGtUUmktemhRdmlldTQ5Q0ZyNzFFQVwiLFxuICBcInBob25lSWRcIjogXCJhYjliMWI4NC1jOWM5LTQwODctYTMwNi03NzA0OTg0ZjVmMTRcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjAxLFxuICAgICAgMTMwLFxuICAgICAgMjYsXG4gICAgICAxNTEsXG4gICAgICAxNzMsXG4gICAgICAyMzUsXG4gICAgICAxNzYsXG4gICAgICAxNTUsXG4gICAgICA1NSxcbiAgICAgIDIwMixcbiAgICAgIDE1NSxcbiAgICAgIDQsXG4gICAgICA3MyxcbiAgICAgIDE2NCxcbiAgICAgIDIzNyxcbiAgICAgIDE3NyxcbiAgICAgIDc1LFxuICAgICAgMTc4LFxuICAgICAgMSxcbiAgICAgIDEyMFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IGZhbHNlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTYyLFxuICAgICAgMTkzLFxuICAgICAgNTYsXG4gICAgICAyMixcbiAgICAgIDY4LFxuICAgICAgOTksXG4gICAgICAzMCxcbiAgICAgIDE1NSxcbiAgICAgIDIyNixcbiAgICAgIDEwNSxcbiAgICAgIDE1NSxcbiAgICAgIDE4MixcbiAgICAgIDU1LFxuICAgICAgMjEzLFxuICAgICAgMjA2LFxuICAgICAgMjIzLFxuICAgICAgMTU4LFxuICAgICAgMTAsXG4gICAgICA4LFxuICAgICAgMjIyXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTnZQazUwQ0VMemE4N1FHR0FRZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJ4YlB5OWJmMXYwc1pIUG4xeDBrRUx5UkIyTG1OeURxQ29LNFdhVEx3ZVc0PVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIk4rT0d3SmFXOUxlNFlxemFBS1QwRFVIUUFoWktENThpNktyUVl6ZVdNSjE1TVh5WU4yNEJiTUVyd0FNcnNyeTl6VkdNTk0xWjNHcUFHMmtKbTFORWhRPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcInFNdWgyeElGanBBSUpxeWk0UE93MHJHV1ZOUlE0TGZOQzJnN3FHL1k2V2I1MGlvek1ieFpFNk1mdUIrVlE1UHUzZlNmbC9vWnVxYlNwK2FuRk5VM2dBPT1cIlxuICB9LFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiNDQ3Nzc4NzYwODg3OjRAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCJJIGhlXCIsXG4gICAgXCJsaWRcIjogXCIyMTk0OTA1Mjg4MDQ5NTc6NEBsaWRcIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjQ0Nzc3ODc2MDg4Nzo0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDQsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDExMFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iaVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIxNTYwMzg0LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBT3BkXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFPcFguanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJucVUwUXBSYU9yZ0FEK2R2RlFPK1ZqbVFRT0hmNzhqY2htSU04VFJiQVVJPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjU5ODAwOTgxOSxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzIxNDkxMzgwNjc4XCJ9IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBT3BaLmpzb24iOiAie1wia2V5RGF0YVwiOlwicVh0MmhlUnEvVDFEMEdjV1QxZGpMbDlMWkdKV2xlS3JmN3pCU2Flb0pUYz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo1OTgwMDk4MTksXCJjdXJyZW50SW5kZXhcIjoyLFwiZGV2aWNlSW5kZXhlc1wiOlswLDEsMl19LFwidGltZXN0YW1wXCI6XCIxNzIxNDkyNjg5Nzc5XCJ9IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBT3BhLmpzb24iOiAie1wia2V5RGF0YVwiOlwiaW1LdkxjdGJtMkFVdXQ0RVZNeVNDcEVXeGRvL2tGWG1IQ200MHVEZ1gwND1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo1OTgwMDk4MTksXCJjdXJyZW50SW5kZXhcIjoyLFwiZGV2aWNlSW5kZXhlc1wiOlsxLDBdfSxcInRpbWVzdGFtcFwiOlwiMTcyMTQ5MjY5MDc2M1wifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQU9wYy5qc29uIjogIntcImtleURhdGFcIjpcImdxQkNIMnJ4aGw0dW1JcUk5Q1lkN0EyWVhNamU1UjVOQWtGakRnNDBlaDA9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6NTk4MDA5ODE5LFwiY3VycmVudEluZGV4XCI6MyxcImRldmljZUluZGV4ZXNcIjpbMSwwLDNdfSxcInRpbWVzdGFtcFwiOlwiMTcyMTU2MDM1OTgyNlwifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQU9wZC5qc29uIjogIntcImtleURhdGFcIjpcIllkanovemRaRExqVTNCa0ZtblQxbWtSaUs2SmdWQWdiZTczUmI1Q0dyOFk9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6NTk4MDA5ODE5LFwiY3VycmVudEluZGV4XCI6MyxcImRldmljZUluZGV4ZXNcIjpbMSwwXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MjE1NjAzNjA4NjBcIn0iCn0="  // PUT your SESSION_ID 


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
