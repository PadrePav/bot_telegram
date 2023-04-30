const TelegramApi = require('node-telegram-bot-api');
const Enum = require('./enum.js');
let {userIsExist, users, setUser, getUsers} = require('./dataBase.js');
const IndigoGame = require('./indigoGame');

users = getUsers()
const game = new IndigoGame();
const token = '6290423711:AAFWK6qAiXMXCEUdv_9pVnLOJ0mN1bttEjw';
const bot = new TelegramApi(token, { polling: true });

const buttonPlayFirst = {
    reply_markup: JSON.stringify({
        inline_keyboard: [
          [{text: 'Yes', callback_data: 'true'}, {text: 'No', callback_data: 'false'}]
        ]
    })
}

bot.setMyCommands([
    { command: '/info', description: 'Indigo card game with your bot'},
    { command: '/rules', description: 'you must will win' },
    { command: '/play', description: 'Start play in game' },
    { command: '/restart', description: 'Play again' }
])

bot.on('message', async (msg) => {
    const chatId = msg.chat.id;
    console.log(userIsExist(chatId));
    const text = msg.text
    try {
        await clickListener(text, chatId)
    } catch (e) {
        console.log(e.message)
    }
})

const clickListener = async (msg, chatId) => {
    if (msg === '/start') {
        await bot.sendMessage(chatId, Enum.start);
    } else if (msg === '/info') {
        await bot.sendMessage(chatId, Enum.info);
    } else if (msg === '/rules') {
        await bot.sendMessage(chatId, Enum.rules);
    } else if (msg === '/play') {
        //добавить логику если игра уже идёт , тогда сказать об этом и спросить не хотят ли закончить игру
        await bot.sendMessage(chatId, Enum.playFirst, buttonPlayFirst);
    } else if (msg === '/restart') {
        await bot.sendMessage(chatId, Enum.restart);
    } else {
        await bot.sendMessage(chatId, '...');
    }
}

bot.on('callback_query', async msg => {
    console.log(msg)
    const chatId = msg.from.id;
    const data = msg.data
    if (users[chatId].gameStatus) {
        await bot.sendMessage(chatId, Enum.inGame)
        return
    }
    if (data === 'false') {
        console.log(users)
        users[chatId].isMovePlayer = false;
        users[chatId].gameStatus = true;
        game.createStartingPosition(users[chatId])
        setUser(users)
        await bot.sendMessage(chatId, Enum.computerFirst);
        return
    }
    users[chatId].gameStatus = true;
    game.createStartingPosition(users[chatId])
    setUser(users)
    console.log(users[chatId]);
    await bot.sendMessage(chatId, Enum.playerFirst)
})

function move(user) {

}
