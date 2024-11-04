const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/suhailmd-2.0";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "" || "" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© SuhailTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "";




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
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_06_46_11_04_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTIwLFxuICAgICAgICAxNzksXG4gICAgICAgIDY4LFxuICAgICAgICAyMjYsXG4gICAgICAgIDIzLFxuICAgICAgICAxMjUsXG4gICAgICAgIDE0MixcbiAgICAgICAgMjMzLFxuICAgICAgICA2OCxcbiAgICAgICAgNSxcbiAgICAgICAgMjEwLFxuICAgICAgICA1MSxcbiAgICAgICAgMzMsXG4gICAgICAgIDIyLFxuICAgICAgICA3OCxcbiAgICAgICAgMzUsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTU0LFxuICAgICAgICAxNzEsXG4gICAgICAgIDczLFxuICAgICAgICA2NixcbiAgICAgICAgMTgzLFxuICAgICAgICAxMjksXG4gICAgICAgIDM4LFxuICAgICAgICA2NixcbiAgICAgICAgMTMsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTI1LFxuICAgICAgICAxMTYsXG4gICAgICAgIDE3OCxcbiAgICAgICAgNTYsXG4gICAgICAgIDEwNVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA1OCxcbiAgICAgICAgNTUsXG4gICAgICAgIDIzNyxcbiAgICAgICAgOTEsXG4gICAgICAgIDIyNyxcbiAgICAgICAgOTEsXG4gICAgICAgIDUwLFxuICAgICAgICA1NCxcbiAgICAgICAgOTcsXG4gICAgICAgIDU5LFxuICAgICAgICA0OSxcbiAgICAgICAgMTg2LFxuICAgICAgICAxOTEsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTI4LFxuICAgICAgICA4NixcbiAgICAgICAgMTk1LFxuICAgICAgICAyMDIsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTQwLFxuICAgICAgICAxNTEsXG4gICAgICAgIDMxLFxuICAgICAgICAxMjIsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMzMsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMjQwLFxuICAgICAgICAxMTAsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMjI3LFxuICAgICAgICA4MixcbiAgICAgICAgMzRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyMCxcbiAgICAgICAgMzcsXG4gICAgICAgIDc2LFxuICAgICAgICA4NixcbiAgICAgICAgMTMxLFxuICAgICAgICA3MyxcbiAgICAgICAgMTkyLFxuICAgICAgICAxNzMsXG4gICAgICAgIDE5MyxcbiAgICAgICAgODQsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTY0LFxuICAgICAgICA3OSxcbiAgICAgICAgMTYyLFxuICAgICAgICAxMCxcbiAgICAgICAgMTkxLFxuICAgICAgICAxNzgsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMjQxLFxuICAgICAgICAxMTIsXG4gICAgICAgIDIyMixcbiAgICAgICAgMjQ2LFxuICAgICAgICAxMzAsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTMzLFxuICAgICAgICAxNDQsXG4gICAgICAgIDMyLFxuICAgICAgICA4OSxcbiAgICAgICAgMTY4LFxuICAgICAgICAyNCxcbiAgICAgICAgMTU2LFxuICAgICAgICAxMTJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjMxLFxuICAgICAgICAzMCxcbiAgICAgICAgMjIzLFxuICAgICAgICAxOTUsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTYxLFxuICAgICAgICA5OCxcbiAgICAgICAgMjEyLFxuICAgICAgICAxOTAsXG4gICAgICAgIDU3LFxuICAgICAgICAzNixcbiAgICAgICAgNTcsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMjIyLFxuICAgICAgICAxNzIsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMjEyLFxuICAgICAgICAxNTQsXG4gICAgICAgIDcyLFxuICAgICAgICAyNDMsXG4gICAgICAgIDExMSxcbiAgICAgICAgMjAwLFxuICAgICAgICAyMTIsXG4gICAgICAgIDIyMixcbiAgICAgICAgMzcsXG4gICAgICAgIDI2LFxuICAgICAgICA2MixcbiAgICAgICAgMjAxLFxuICAgICAgICAxNTgsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMjQ4LFxuICAgICAgICA3N1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjQsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMjE3LFxuICAgICAgICAxMzUsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMjAzLFxuICAgICAgICA5NyxcbiAgICAgICAgMjAsXG4gICAgICAgIDEzMSxcbiAgICAgICAgODMsXG4gICAgICAgIDQ4LFxuICAgICAgICA0NixcbiAgICAgICAgMTM2LFxuICAgICAgICAxNzMsXG4gICAgICAgIDE0NixcbiAgICAgICAgNTgsXG4gICAgICAgIDIwOCxcbiAgICAgICAgOTQsXG4gICAgICAgIDEwMyxcbiAgICAgICAgNjMsXG4gICAgICAgIDcyLFxuICAgICAgICA1NCxcbiAgICAgICAgOTIsXG4gICAgICAgIDIyMSxcbiAgICAgICAgNTAsXG4gICAgICAgIDU5LFxuICAgICAgICAyMjcsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTc0LFxuICAgICAgICA2MyxcbiAgICAgICAgNDEsXG4gICAgICAgIDg4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDExLFxuICAgICAgICA3MCxcbiAgICAgICAgMjAsXG4gICAgICAgIDEyNSxcbiAgICAgICAgNTEsXG4gICAgICAgIDQ3LFxuICAgICAgICAxNjUsXG4gICAgICAgIDIzMixcbiAgICAgICAgMjA1LFxuICAgICAgICA5LFxuICAgICAgICAxMzYsXG4gICAgICAgIDE5MyxcbiAgICAgICAgNDksXG4gICAgICAgIDg1LFxuICAgICAgICA5NyxcbiAgICAgICAgMTQ1LFxuICAgICAgICA1NyxcbiAgICAgICAgOTYsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMjMxLFxuICAgICAgICA1OSxcbiAgICAgICAgMTc3LFxuICAgICAgICAxNjQsXG4gICAgICAgIDIyNixcbiAgICAgICAgMjA4LFxuICAgICAgICA3NixcbiAgICAgICAgMjIyLFxuICAgICAgICAxMjQsXG4gICAgICAgIDUxLFxuICAgICAgICA3OSxcbiAgICAgICAgMjM4LFxuICAgICAgICA2NFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICA3NlxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICA4NixcbiAgICAgICAgICA5MCxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAyMixcbiAgICAgICAgICA4MixcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDYyXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTk0LFxuICAgICAgICAxODUsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMCxcbiAgICAgICAgMjIxLFxuICAgICAgICAyNDAsXG4gICAgICAgIDIyLFxuICAgICAgICAyNTIsXG4gICAgICAgIDM0LFxuICAgICAgICA3MixcbiAgICAgICAgMTY2LFxuICAgICAgICAyMDQsXG4gICAgICAgIDc5LFxuICAgICAgICAyMTcsXG4gICAgICAgIDksXG4gICAgICAgIDg2LFxuICAgICAgICA3NyxcbiAgICAgICAgMTMyLFxuICAgICAgICAyNTUsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTA2LFxuICAgICAgICAxMDAsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTk4LFxuICAgICAgICAxNzcsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTcyLFxuICAgICAgICAwLFxuICAgICAgICAxNzgsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTk3LFxuICAgICAgICA3LFxuICAgICAgICAxNzIsXG4gICAgICAgIDIwNixcbiAgICAgICAgOTMsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTAyLFxuICAgICAgICA5OSxcbiAgICAgICAgMTMyLFxuICAgICAgICAzOSxcbiAgICAgICAgMzYsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTEzLFxuICAgICAgICAyMTIsXG4gICAgICAgIDIwMixcbiAgICAgICAgMjEyLFxuICAgICAgICAxMTAsXG4gICAgICAgIDc1LFxuICAgICAgICAxNjMsXG4gICAgICAgIDc2LFxuICAgICAgICA4NyxcbiAgICAgICAgMjMzLFxuICAgICAgICAxMjgsXG4gICAgICAgIDIsXG4gICAgICAgIDQyLFxuICAgICAgICAxOTEsXG4gICAgICAgIDYxLFxuICAgICAgICAxOTQsXG4gICAgICAgIDQsXG4gICAgICAgIDU3LFxuICAgICAgICA4MSxcbiAgICAgICAgMjM3LFxuICAgICAgICAxNTMsXG4gICAgICAgIDBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDIyNSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJubmJybXVNZEtMbVR3N2EwU3hBdnlKcFBsbmVDcnRCUmsydkZPWWRQVXpNPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjI1NDExNTEyNjE5N0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiMDg3NDhGQjczODgxNzRENDQzMTlCM0M2OUEwRjZGRTdcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzMwNzAyODA3XG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIkRReE5peDNzU1ZTU0toclpwQ2tzOGdcIixcbiAgXCJwaG9uZUlkXCI6IFwiZWY0ZjlkZWMtMTI5My00MDE5LWI0ZDItYzJiNzFmNjVmMzcwXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE1NyxcbiAgICAgIDIyNixcbiAgICAgIDkyLFxuICAgICAgMTgxLFxuICAgICAgMTQxLFxuICAgICAgMzAsXG4gICAgICAxMjgsXG4gICAgICAxMDgsXG4gICAgICAyMDYsXG4gICAgICAyMjYsXG4gICAgICA1LFxuICAgICAgMjMzLFxuICAgICAgMjEzLFxuICAgICAgOTUsXG4gICAgICAxMzMsXG4gICAgICAyMDEsXG4gICAgICAxOCxcbiAgICAgIDMzLFxuICAgICAgNDQsXG4gICAgICAxNjZcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTksXG4gICAgICAxNzIsXG4gICAgICAxOTksXG4gICAgICAxOTcsXG4gICAgICAxOTUsXG4gICAgICAxMDgsXG4gICAgICAxNzksXG4gICAgICAyMjAsXG4gICAgICAxMjgsXG4gICAgICAxNzQsXG4gICAgICAxMDQsXG4gICAgICA1OSxcbiAgICAgIDEyNyxcbiAgICAgIDc0LFxuICAgICAgMjMxLFxuICAgICAgNjMsXG4gICAgICAxMDYsXG4gICAgICAxODEsXG4gICAgICAyMzQsXG4gICAgICAxNFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCI3VDRNOEoxRVwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjU0MTE1MTI2MTk3OjMyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIyMDgxODU5NTY3ODYyNTg6MzJAbGlkXCIsXG4gICAgXCJuYW1lXCI6IFwiUmV0aWnwn5ic8J+Yi1wiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ09ITm03MENFTS9ib2JrR0dCb2dBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiMXg0VzR6UXhqcjZYR016TGJXWkpBM1p5L1R3aEdtNHJXMCtQSDlHekQwZz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJEMkZodm1wVDlkOEdCM1pXb1NHb1BCbmwzL2lvNzdjdTVmZ3hFcFVCS0NoRE5MTTI0ZVhKMTc2M0ExcFI0Nk5lT2tiM0k1SGhTRUlqTEYwRGM2aVJBUT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJOY0Q4VXJvczdRMHoxa1pHRGRKdFMyUTA4TENhRlVqVmxCSlpVcWloVHJZWGwvTkdaK0hZVUxFRnkxcUxhclgvRWhCYVFtNUEvNXVWeC8rQVkxSVRCUT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyNTQxMTUxMjYxOTc6MzJAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICA0MyxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAxNSxcbiAgICAgICAgICA3MlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzMwNzAyODAyLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBRHNxXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFEc3EuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJ3eld4ejN2eUVodVY3VjlJT1JheTJYc3d1UklOY1RGSUZkN0ZCRER0ZTZvPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjY2NTI0OTUwNSxcImN1cnJlbnRJbmRleFwiOjI1LFwiZGV2aWNlSW5kZXhlc1wiOlswLDJdfSxcInRpbWVzdGFtcFwiOlwiMTczMDcwMjYzNzQ0MFwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Retii😌",
  ownername:process.env.OWNER_NAME|| "Retii",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "q"  ).toUpperCase(),



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
