const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "SHABAN-MD~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVUQ5VUdQVi94bVROaHpXVGtBdnJjSCtraWptSGNHd0Q4WVprNENnTlBVRT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTTlxQkFUMjQ1S3JiaFNzOFAzdUVzTEp3UkpMM3RQbGxhTHpNTlBtWnhFaz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJtS0hFakRGMW1VK0MzdXlCb2dRODZlTitNVFMwc05HblRnMElFbEFZckVnPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIyekRJUWs5YnFDYWRoVXVyV0lBMTBYa0xUOWEraVMxSU1nVEpzeFd4dEhZPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjBHUE02UnN6dkc1ZjN0dkR1MVg4VUtza3E5a1c0aVdKcm5FM1hnZzlTM0U9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjhJODF1aUJUQ0tsSTF4Z3F5S0ZTOGpWWU1mSlYvMitzRkw5eHY0SlZyVTQ9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiT0NRNm5qT2hIMzA1S1VsZ253ZmwrSDlKS0wxQnMrNnRFdEx0bW1TbE0yUT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiclFvUHRMUmp1bUNMRTYxQVJmbmVQUW85dDNDMWh5b0xkQy9aK2E5V0V4Yz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ijd3bmREditKeDVObE9yTjF4TjcwU2ZuZERpVExGdVhURmE2a2lZODl3eHhmQW5hNVJ4MDNwWEJsNmxydmoxbDF4Wk9vM0JPRXZ2MkZwajdGdjZJdkJnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjQ1LCJhZHZTZWNyZXRLZXkiOiJSTW14V3ZiL2t0S3c4VUo3V25KcXFVMForVkw1TTk5dEJPNC9Oc3lEVmZrPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6Ijk0NzYzOTMyODcwQHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IkFDOUI0REU3OUNBQUQ2QkNERTQyNDMzOUE0QThBRTcyIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3NTg5ODE0Njd9XSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjEsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJyZWdpc3RlcmVkIjp0cnVlLCJwYWlyaW5nQ29kZSI6IjRBQ01KNUVFIiwibWUiOnsiaWQiOiI5NDc2MzkzMjg3MDo4MkBzLndoYXRzYXBwLm5ldCIsImxpZCI6IjE2Mjc1NDA0NDQyNDM5Mjo4MkBsaWQiLCJuYW1lIjoiVmlIQU5HQSB8IGNodVRUYSDwn6ea4oCN4pmC77iP8J+Si1wiIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNKWGVpQ0VRMDlyZnhnWVlBU0FBS0FBPSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJybm5MV2QwVTV2T2FlV2JMbThlZC9ocVJhalVWeEdMeHdqOGJldFJyZHlZPSIsImFjY291bnRTaWduYXR1cmUiOiI1YnE1VFREejB1VnAvaWdaS21tOWJUeGhHVjVNdHA3NTFIT2o2Wnl4RVJEYXBTcitlelFiM3lTcEt2bHJ0ZG5maVo0dmp2eWZBOGVOeG9YWS95YmJBUT09IiwiZGV2aWNlU2lnbmF0dXJlIjoiNDBzWEkzSVFvUXZhY256WWVabWxFOGhhK08vZWF4Ym1GdFl2T0hJelh4dlVRcjlMQVZhbUI3TWlrOEc5RjdJd3A1Z1lKN0lhT3BOZC9ES0s4YnovREE9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI5NDc2MzkzMjg3MDo4MkBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJhNTV5MW5kRk9iem1ubG15NXZIbmY0YWtXbzFGY1JpOGNJL0czclVhM2NtIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwicm91dGluZ0luZm8iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDQUlJQ0E9PSJ9LCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3NTg5ODE0NjMsImxhc3RQcm9wSGFzaCI6IjNSOVozOSIsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBSGIvIn0=",
// add your Session Id 
AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN || "true",
// make true or false status auto seen
AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "false",
// make true if you want auto reply on status 
AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "true",
// make true if you want auto reply on status 
AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || "*SᴇᴇN YᴏᴜʀE SᴛᴀᴛᴜS JᴜsT NᴏW Sʜᴀʙᴀɴ-Mᴅ 𓅓*",
// set the auto reply massage on status reply
WELCOME: process.env.WELCOME || "false",
// true if want welcome and goodbye msg in groups    
ADMIN_EVENTS: process.env.ADMIN_EVENTS || "false",
// make true to know who dismiss or promoted a member in group  
PREFIX: process.env.PREFIX || ".",
// add your prifix for bot
MENU_IMAGE_URL: process.env.MENU_IMAGE_URL || "https://ik.imagekit.io/mrshaban/Picsart_25-02-01_22-47-44-239.jpg",
// add custom menu and mention reply image url   
BOT_NAME: process.env.BOT_NAME || "SHABAN-MD V5",
// add bot namw here for menu
STICKER_NAME: process.env.STICKER_NAME || "Mʀ-Sʜᴀʙᴀɴ",
// type sticker pack name 
CUSTOM_REACT: process.env.CUSTOM_REACT || "false",
// make this true for custum emoji react    
CUSTOM_REACT_EMOJIS: process.env.CUSTOM_REACT_EMOJIS || "💝,💖,💗,❤️‍🩹,❤️,🧡,💛,💚,💙,💜,🤎,🖤,🤍",
// chose custom react emojis by yourself  
OWNER_NUMBER: process.env.OWNER_NUMBER || "923059395959",
// add your bot owner number
OWNER_NAME: process.env.OWNER_NAME || "MR-SHABAN",
// add bot owner name
DESCRIPTION: process.env.DESCRIPTION || "*© ᴘᴏᴡᴇʀᴇᴅ ʙʏ Mʀ Sʜᴀʙᴀɴ*",
// add bot owner name    
ALIVE_IMG: process.env.ALIVE_IMG || "https://ik.imagekit.io/mrshaban/Picsart_25-02-01_22-47-44-239.jpg",
// add img for alive msg 
READ_MESSAGE: process.env.READ_MESSAGE || "false",
// Turn true or false for automatic read msgs
AUTO_REACT: process.env.AUTO_REACT || "false",
// make this true or false for auto react on all msgs  
MODE: process.env.MODE || "public",
// make bot public-private-inbox-group 
ANTI_LINK: process.env.ANTI_LINK || "true",
// make anti link true,false for groups  
AUTO_REPLY: process.env.AUTO_REPLY || "false",
// make true or false automatic text reply 
ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "false",
// maks true for always online 
PUBLIC_MODE: process.env.PUBLIC_MODE || "true",
// make false if want private mod
AUTO_TYPING: process.env.AUTO_TYPING || "false",
// true for automatic show typing   
READ_CMD: process.env.READ_CMD || "false",
// true if want mark commands as read 
DEV: process.env.DEV || "923059395959",
//replace with your whatsapp number        
ANTI_CALL: process.env.ANTI_CALL || "false",
REJECT_MSG: process.env.REJECT_MSG || "*_SOORY MY BOSS IS BUSY PLEASE DONT CALL ME_*",
ANTI_DELETE: process.env.ANTI_DELETE || "false",
// set true false for anti delete
ANTI_DEL_PATH: process.env.ANTI_DEL_PATH || "inbox", 
// change it to 'same' if you want to resend deleted message in same chat
AUTO_RECORDING: process.env.AUTO_RECORDING || "false"
// make it true for auto recoding 
};
