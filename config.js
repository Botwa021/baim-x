/**Penjelasan: Untuk menggunakan script ini, kamu akan perlu mengganti nomor owner dan wm terlebih dahulu. Kamu juga harus memiliki api key dari kedua website ini https://api.botcahx.live dan https://api.betabotz.org. Setelah memiliki api key, kamu bisa menggantinya dengan menyalin key tersebut dari profilmu dan paste di variabel global.btc. Contohnya, global.btc = 'xzRhejka'. Setelah itu, kamu bisa melanjutkan dengan mengubah nomor owner dan wm.
**/


global.owner = ['6282139341212', '6285771662428']  
global.mods = ['6282139341212'] 
global.prems = ['6282139341212', '6285771662428']
global.nameowner = 'Baim'
global.numberowner = '6282139341212' 
global.mail = 'baimxyz@gmail.com' 
global.dana = '082139341212'
global.pulsa = '082139341212'
global.gopay = '082139341212'
global.namebot = '© imzz bot'
global.gc = 'https://chat.whatsapp.com/CWzqr6PIngk0G0ZvrriS0m'
global.instagram = 'https://instagram.com/prm2.0'
global.wm = '© imzz bot'
global.watermark = wm
global.wm2 = '⫹⫺ imzz bot'
global.wm3 = '© imzz bot'
global.wm4 = '© Bot WhatsApp'
global.wait = '_*Tunggu sedang di proses...*_'
global.eror = '_*Server Error*_'
global.benar = 'Benar\n'
global.salah = 'Salah\n'
global.stiker_wait = '*Stiker sedang dibuat...*'
global.packname = 'Made with'
global.author = 'Imzz Bot'


global.btc = 'YOUR_APIKEY_HERE' //Daftar terlebih dahulu https://api.botcahx.live
global.lann = 'YOUR_APIKEY_HERE' //Daftar terlebih dahulu https://api.betabotz.org 

global.APIs = { 
  tio: 'https://api.botcahx.live'
}
global.APIKeys = { 
  'https://api.botcahx.live': 'YOUR_APIKEY_HERE' //isi apikey mu https://api.botcahx.live
}

global.multiplier = 45
global.rpg = {
  emoticon(string) {
    string = string.toLowerCase()
    let emot = {
      exp: '✉️',
      money: '💵',
      potion: '🥤',
      diamond: '💎',
      common: '📦',
      uncommon: '🎁',
      mythic: '🗳️',
      legendary: '🗃️',
      pet: '🎁',
      sampah: '🗑',
      armor: '🥼',
      sword: '⚔️',
      kayu: '🪵',
      batu: '🪨',
      string: '🕸️',
      kuda: '🐎',
      kucing: '🐈' ,
      anjing: '🐕',
      petFood: '🍖',
      gold: '👑',
      emerald: '💚'
    }
    let results = Object.keys(emot).map(v => [v, new RegExp(v, 'gi')]).filter(v => v[1].test(string))
    if (!results.length) return ''
    else return emot[results[0][0]]
  }
}

let fs = require('fs')
let chalk = require('chalk')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  delete require.cache[file]
  require(file)
})
