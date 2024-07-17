const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="jastinmtewa@yahoo.com"
global.location="Morogoro,Tanzania."
global.mongodb= process.env.MONGODB_URI || "mongodb+srv://wasitech10:WASImd##12@cluster0.eclhxiz.mongodb.net/?retryWrites=true&w=majority"

global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "120363023983262391@g.us"


global.DATABASE_URI = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Pakistan";
global.github=process.env.GITHUB|| "https://github.com/wasixd/WASI-MD";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VaDK8ZUDjiOhwFS1cP2j";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VaDK8ZUDjiOhwFS1cP2j" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/wasixd/WASI-MD/blob/main/lib/assets/suhail.jpg" ; // SET LOGO FOR IMAGE 



global.devs = "923192173398" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923192173398";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5',  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "true"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "true"; 
global.wlcm  = process.env.WELCOME || "true";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 5,
global.disablepm = process.env.DISABLE_PM || "true",
global.MsgsInLog = process.env.MSGS_IN_LOG|| "true", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES|| "text",
global.waPresence= process.env.WAPRESENCE ||  "composing" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "true"
global.readmessage = process.env.READ_MESSAGE || "true"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "24104552653,24106132283";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "true"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "24104552653,24106132283";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "24104552653,24106132283";

global.api_smd = "https://api-smd-1.vercel.app"
global.scan = "https://myqr-43bb863fa5eb.herokuapp.com/";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_20_02_07_17_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDgsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMzAsXG4gICAgICAgIDM4LFxuICAgICAgICA0LFxuICAgICAgICAxNTgsXG4gICAgICAgIDExNSxcbiAgICAgICAgOTAsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTYxLFxuICAgICAgICAxNDcsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTc4LFxuICAgICAgICAyMTAsXG4gICAgICAgIDY4LFxuICAgICAgICAyMDYsXG4gICAgICAgIDM2LFxuICAgICAgICAxNTIsXG4gICAgICAgIDI1MCxcbiAgICAgICAgNjksXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTAzLFxuICAgICAgICAxNzYsXG4gICAgICAgIDQ2LFxuICAgICAgICA3NixcbiAgICAgICAgMjMzLFxuICAgICAgICAxOTIsXG4gICAgICAgIDIxLFxuICAgICAgICA0MixcbiAgICAgICAgMjEzLFxuICAgICAgICA5LFxuICAgICAgICAxMTlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjM2LFxuICAgICAgICAxNDUsXG4gICAgICAgIDE2MyxcbiAgICAgICAgOTYsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMjA5LFxuICAgICAgICA0MSxcbiAgICAgICAgOTgsXG4gICAgICAgIDI0LFxuICAgICAgICAxMDAsXG4gICAgICAgIDExNixcbiAgICAgICAgMjAxLFxuICAgICAgICAyMjIsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMjEsXG4gICAgICAgIDExOSxcbiAgICAgICAgMjMwLFxuICAgICAgICAxMDAsXG4gICAgICAgIDE4NixcbiAgICAgICAgMjM5LFxuICAgICAgICAxMixcbiAgICAgICAgMjI5LFxuICAgICAgICAxMjIsXG4gICAgICAgIDIxNSxcbiAgICAgICAgNDIsXG4gICAgICAgIDIyLFxuICAgICAgICAyNTAsXG4gICAgICAgIDg2LFxuICAgICAgICAxNDMsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMjIyLFxuICAgICAgICAxMjdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE0NCxcbiAgICAgICAgOTMsXG4gICAgICAgIDEyMixcbiAgICAgICAgMjM5LFxuICAgICAgICAxNDgsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTgxLFxuICAgICAgICAyMzksXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTI2LFxuICAgICAgICA2OSxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxMyxcbiAgICAgICAgMTgsXG4gICAgICAgIDEwMixcbiAgICAgICAgMzEsXG4gICAgICAgIDQ4LFxuICAgICAgICAyMDQsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMjQ0LFxuICAgICAgICA2NSxcbiAgICAgICAgOTQsXG4gICAgICAgIDE3LFxuICAgICAgICAxMCxcbiAgICAgICAgNDUsXG4gICAgICAgIDE5MCxcbiAgICAgICAgNDgsXG4gICAgICAgIDg1LFxuICAgICAgICAxNjYsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTI2LFxuICAgICAgICAxMDhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjAwLFxuICAgICAgICA4NyxcbiAgICAgICAgNjcsXG4gICAgICAgIDc5LFxuICAgICAgICAxMCxcbiAgICAgICAgMjA5LFxuICAgICAgICAxMjAsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTQzLFxuICAgICAgICAyMTYsXG4gICAgICAgIDYsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTgsXG4gICAgICAgIDEwMixcbiAgICAgICAgNzcsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMjU1LFxuICAgICAgICA4NyxcbiAgICAgICAgMjIzLFxuICAgICAgICAxMTgsXG4gICAgICAgIDExOSxcbiAgICAgICAgNjgsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTg0LFxuICAgICAgICAxMDAsXG4gICAgICAgIDY3LFxuICAgICAgICAxMjMsXG4gICAgICAgIDE0LFxuICAgICAgICAxMjgsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTI1LFxuICAgICAgICAzM1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTM2LFxuICAgICAgICA1NixcbiAgICAgICAgNSxcbiAgICAgICAgMjIxLFxuICAgICAgICA0OCxcbiAgICAgICAgNzAsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMzQsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTEwLFxuICAgICAgICAyNCxcbiAgICAgICAgMTM4LFxuICAgICAgICA1OCxcbiAgICAgICAgMjI3LFxuICAgICAgICA2MixcbiAgICAgICAgMTI3LFxuICAgICAgICAxNixcbiAgICAgICAgMTg1LFxuICAgICAgICAyNTUsXG4gICAgICAgIDEzNyxcbiAgICAgICAgODgsXG4gICAgICAgIDEsXG4gICAgICAgIDE5LFxuICAgICAgICAxODYsXG4gICAgICAgIDc2LFxuICAgICAgICA3NixcbiAgICAgICAgMTgwLFxuICAgICAgICAxNjgsXG4gICAgICAgIDQ0LFxuICAgICAgICAxNSxcbiAgICAgICAgMjEsXG4gICAgICAgIDc2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE3OCxcbiAgICAgICAgOSxcbiAgICAgICAgMTkzLFxuICAgICAgICAyMjksXG4gICAgICAgIDc0LFxuICAgICAgICAxMDksXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTkzLFxuICAgICAgICAyNTIsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTM1LFxuICAgICAgICAxODQsXG4gICAgICAgIDY3LFxuICAgICAgICAyNCxcbiAgICAgICAgMjQyLFxuICAgICAgICA3LFxuICAgICAgICAyMTEsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMzIsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMjIyLFxuICAgICAgICA5NSxcbiAgICAgICAgODAsXG4gICAgICAgIDIyOSxcbiAgICAgICAgNixcbiAgICAgICAgMTcsXG4gICAgICAgIDQ5LFxuICAgICAgICAyNDcsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTk0LFxuICAgICAgICAyMDgsXG4gICAgICAgIDYyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDgsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDQsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICA0NixcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICA2N1xuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICA4MixcbiAgICAgICAgICA0LFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICA2MixcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgOCxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgMyxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgMTI1XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjI1LFxuICAgICAgICAxMTIsXG4gICAgICAgIDY0LFxuICAgICAgICAzMSxcbiAgICAgICAgNzMsXG4gICAgICAgIDE4OSxcbiAgICAgICAgOTcsXG4gICAgICAgIDI0LFxuICAgICAgICAxODksXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTc5LFxuICAgICAgICAxNDcsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTQ4LFxuICAgICAgICAyMDgsXG4gICAgICAgIDUyLFxuICAgICAgICA1MSxcbiAgICAgICAgODksXG4gICAgICAgIDIxNSxcbiAgICAgICAgNTYsXG4gICAgICAgIDExMyxcbiAgICAgICAgMjMsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTYwLFxuICAgICAgICAxNjMsXG4gICAgICAgIDYyLFxuICAgICAgICA3MSxcbiAgICAgICAgMTMzLFxuICAgICAgICAyMjEsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTYxLFxuICAgICAgICAxMzIsXG4gICAgICAgIDIxNCxcbiAgICAgICAgNDEsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTg2LFxuICAgICAgICAxMTAsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTQzLFxuICAgICAgICA3NixcbiAgICAgICAgNixcbiAgICAgICAgMjIsXG4gICAgICAgIDExMixcbiAgICAgICAgMTc3LFxuICAgICAgICAxMzEsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTY4LFxuICAgICAgICAxNTEsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMjEzLFxuICAgICAgICAxNzgsXG4gICAgICAgIDIyNCxcbiAgICAgICAgODksXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTEwLFxuICAgICAgICAxMzYsXG4gICAgICAgIDIyNyxcbiAgICAgICAgNDIsXG4gICAgICAgIDUzLFxuICAgICAgICAyMjgsXG4gICAgICAgIDEyMixcbiAgICAgICAgMjIxLFxuICAgICAgICAxOTYsXG4gICAgICAgIDEzXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxOTQsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiSzI0WlhaL1ZRQmpXeGd6RUQxZGpVY2xKaUVKZU9nTnN5a0Q2TmEreldyQT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiZ2pDeGlfcjJUUTJyTWcyN0RJdVBHd1wiLFxuICBcInBob25lSWRcIjogXCIyZTVlMWNhYi04Yzg0LTQ4YmEtOWY1Ny0wNjIwMTE1OTU2ZTZcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTkyLFxuICAgICAgMjUyLFxuICAgICAgMTMzLFxuICAgICAgNDAsXG4gICAgICAxODgsXG4gICAgICAyMTEsXG4gICAgICAyMjcsXG4gICAgICAyOCxcbiAgICAgIDIyNSxcbiAgICAgIDQ3LFxuICAgICAgNzIsXG4gICAgICAyMDUsXG4gICAgICAxMTEsXG4gICAgICAxMzcsXG4gICAgICAxNDMsXG4gICAgICAzOSxcbiAgICAgIDY5LFxuICAgICAgMjA5LFxuICAgICAgNjAsXG4gICAgICAxODdcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTU0LFxuICAgICAgMTQsXG4gICAgICAyNTQsXG4gICAgICA4NCxcbiAgICAgIDExNyxcbiAgICAgIDc3LFxuICAgICAgMTk3LFxuICAgICAgMTUzLFxuICAgICAgNzMsXG4gICAgICAxNjUsXG4gICAgICAzMSxcbiAgICAgIDE3NixcbiAgICAgIDQyLFxuICAgICAgMTIyLFxuICAgICAgMTY1LFxuICAgICAgNjAsXG4gICAgICA5LFxuICAgICAgMTIxLFxuICAgICAgMTExLFxuICAgICAgMjQ1XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkU2TlRLMjVYXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyNDEwNDU1MjY1Mzo1OUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcImtpbmdzbGV5XCIsXG4gICAgXCJsaWRcIjogXCIxMTIzOTk4MTQyOTE3MDM6NTlAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSnl3a1Y4UTVNYmd0QVlZRVNBQUtBQT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJnT2Nta2dQUlFwbzNlNmlUdmxZSjFpQVpEZk5CbGxLVngrNGg0UkVsdm4wPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIlNiN1VvVDl4Q2IrVVBSczBta0g4WUNiK1phMmFwbWhUZjNiTkhZSWlieWd6S2FyQXUzN2Rib0NyNnRGemg2ZTFDU29CT3UwbHhpRDhBdXd4cHVDZkJnPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcInpMQnJhSDEwRHVKT01OSHJPalJxMklRcTNCRUpzSHRDRTdqWENnWXlBNDdsUk5ZZU1YakpQMzM2UWh2cDVvNU1XL2k0QUEzOEtISWRLOFBiQXR5ekNnPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjI0MTA0NTUyNjUzOjU5QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgMyxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICA4NixcbiAgICAgICAgICA5LFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAzMixcbiAgICAgICAgICAyNSxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgMTI1XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjEyNDY1NjcsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFDQndcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUNCdy5qc29uIjogIntcImtleURhdGFcIjpcImtvYndCOXc2YzVYUHpFMDJCcmg3RVlDa2ZDQmJsTGEvVzVYY2NTb1ZQV2M9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTk5NTE0MTQwLFwiY3VycmVudEluZGV4XCI6MTMsXCJkZXZpY2VJbmRleGVzXCI6WzAsNywxMF19LFwidGltZXN0YW1wXCI6XCIwXCJ9Igp9===" ;


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Venocyber-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "V.1.0.0",
  caption : process.env.CAPTION || "𝙵𝙸𝙻𝙴 𝙶𝙴𝙽𝙴𝚁𝙰𝚃𝙴𝙳 𝙱𝚈 ＷＡＳＩ ＭＤ🚩" , // ```『 ²⁴ ᴠᴇɴᴏᴄʏʙᴇʀ-ᴍᴅ 』```", //*『ᴠᴇɴᴏᴄʏʙᴇʀ ᴍᴅ』*\n youtube.com/@JASTINMTEWA-vn9pl"),
 
  author : process.env.PACK_AUTHER|| "𝗪𝗔𝗦𝗜 ",
  packname: process.env.PACK_NAME || "♥️",
  botname : process.env.BOT_NAME  || "𝗪𝗔𝗦𝗜 𝗠𝗗",
  ownername:process.env.OWNER_NAME|| "It's 𝗜𝗧𝗫𝗫𝗪𝗔𝗦𝗜",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "neLbXXrp8bSDcohnp1CW5UEa",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "chat.whatsapp.com",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,

  aitts_Voice_Id : process.env.AITTS_ID || "01",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE||process.env.MODE || "public",
  LANG: process.env.THEME ? process.env.THEME.toUpperCase() : "WASI",



};

























global.rank = "updated"
global.isMongodb = true ; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.0.0 ] ===============================\\  
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
 
