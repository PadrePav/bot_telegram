const data = require('./dataBase.js')

class IndigoGame {
    #ranks;
    #suits;
    #scorePointsCards;

  constructor() {

    this.#ranks = ["K", "Q", "J", "10", "9", "8", "7", "6", "5", "4", "3", "2", "A"];
    this.#suits = ["♣", "♦", "♥", "♠"];
    this.#scorePointsCards = ["A", "1", "J", "Q", "K"];
  }

  createStartingPosition(user) {
    for (const suit of this.#suits) {
      for (const rank of this.#ranks) {
        user.cardDeck.push(rank + suit)
      }
    }
    const shuffleCards = array => {
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        const temp = array[i];
        array[i] = array[j];
        array[j] = temp;
      }
    }
    shuffleCards(user.cardDeck);
    this.#getCardsFromCardDeck(user.cardDeck, user.player.hand, 6);
    this.#getCardsFromCardDeck(user.cardDeck, user.computer.hand, 6);
    this.#getCardsFromCardDeck(user.cardDeck, user.gameTable, 4);

    return user.cardDeck;
  }
  
  #getCardsFromCardDeck(fromCardDeck, intoCardDeck, countOfCards) {
    for (let i = 0; i < countOfCards; i++) {
      intoCardDeck.push(fromCardDeck[i]);
    }
    fromCardDeck.splice(0, countOfCards);
  }

  initGame() {
    bot.sendMessage(chatId, )
  }


}

const user = data.users['user323']
console.log(new IndigoGame().createStartingPosition(user))
console.log(user)