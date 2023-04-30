const path = require('path');
const fs = require('fs')
let users = {};

const getUsers = () => {
  try {
    const data = fs.readFileSync(path.resolve(__dirname, 'users.json'), 'utf-8');
    return JSON.parse(data)
  } catch (err) {
    console.log('Error in read File ', err.message)
    return {}
  }

};
users = getUsers()
const setUser = (users) => {
  fs.writeFileSync(path.resolve(__dirname, 'users.json'), JSON.stringify(users, null, 2), (err) => {
    if (err) {
      console.log(err.message)
    }
  })
};


  function userIsExist(chatId) {
    users = getUsers()
    if (!users.hasOwnProperty(chatId.toString())) {
      const newUser = newPlayer(chatId.toString());
      Object.assign(users, newUser);
      setUser(users)
      return false;
    } else {
      return true;
    }
  }

  function newPlayer(chatId) {
    return {
      [chatId]: {
        player: {
          hand: [],
          score: 0,
          numberOfCardsWon: 0
        },
        computer: {
          hand: [],
          score: 0,
          numberOfCardsWon: 0
        },
        isMovePlayer: true,
        lastPlayerWinner: false,
        cardDeck: [],
        gameTable: [],
        gameStatus: false
      }
    }
  }

module.exports =  {userIsExist, users, setUser, getUsers};
