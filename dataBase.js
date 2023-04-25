
const dataBase = {
  users: {},

  isExist(chatId) {
    if (!this.users.hasOwnProperty(chatId.toString())) {
      this.newPlayer(chatId.toString());
      return this.users[chatId]
    } else {
      return true
    }
  },

  newPlayer(chatId) {
    this.users[chatId] = {}
    this.users[chatId].player = {
      hand: [],
      score: 0,
      numberOfCardsWon: 0
    };
    this.users[chatId].computer = {
      hand: [],
      score: 0,
      numberOfCardsWon: 0
    };
    this.users[chatId].isMovePlayer = true;
    this.users[chatId].lastPlayerWinner = false;
    this.users[chatId].cardDeck = [];
    this.users[chatId].gameTable = [];
    this.users[chatId].gameSatus = false;
  }
};

console.log(dataBase.isExist('user323'))
console.log(dataBase.isExist(345352))
console.log(dataBase)

module.exports = dataBase;
