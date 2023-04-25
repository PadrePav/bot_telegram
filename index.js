const TelegramApi = require('node-telegram-bot-api');

const token = '6290423711:AAFWK6qAiXMXCEUdv_9pVnLOJ0mN1bttEjw';

const bot = new TelegramApi(token, { polling: true });

const chatInfo = {}

bot.setMyCommands([
    { command: '/info', description: 'Indigo card game with your bot'},
    { command: '/rules', description: 'you must will win' },
    { command: '/play', description: 'Start play in game' },
    { command: '/restart', description: 'Play again' }
])

bot.on('message', async (msg) => {
    console.log(msg)
    const userName = msg.chat.username;
    const chatId = msg.chat.id;
    await bot.sendSticker(chatId, 'https://tlgrm.eu/_/stickers/4cf/186/4cf186d3-1de5-4917-ac0f-3ec72231266d/192/6.webp')
    await bot.sendMessage(chatId, `Hi ${userName}`)
    console.log(userName)
})