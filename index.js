const TelegramApi = require('node-telegram-bot-api');

const token = '6290423711:AAFWK6qAiXMXCEUdv_9pVnLOJ0mN1bttEjw';

const bot = new TelegramApi(token, { polling: true });

bot.on('message', (msg) => {
    console.log(msg)
    const userName = msg.chat.username;
    const chatId = msg.chat.id;
    bot.sendMessage(chatId, `Hi ${userName}`)
    console.log(userName)
})