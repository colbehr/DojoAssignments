function Card(suit, rank) {
  this.suit = suit
  this.rank = rank
}

Card.prototype.print = function() {
  const suits = ["Hearts", "Spades", "Clubs", "Diamonds"]
  const ranks = {
    1: "Ace",
    11: "Jack",
    12: "Queen",
    13: "Kings"
  }

  return `${ranks[this.rank] ? ranks[this.rank] : this.rank} of ${suits[this.suit]}`
}

function Deck() {
  let deck_of_cards = []

  for (let suit = 0; suit < 4; suit++) {
    for (let rank = 1; rank <= 13; rank++) {
      deck_of_cards.push(new Card(suit, rank))
    }
  }


  this.deal1 = () => {
    return deck_of_cards.slice(0, deck_of_cards.length / 2)
  }
  this.deal2 = () => {
    return deck_of_cards.slice(deck_of_cards.length / 2, deck_of_cards.lengths)
  }

  this.shuffle = () => {
    for (let i = 0; i < deck_of_cards.length; i++) {
      let j = Math.floor(Math.random() * deck_of_cards.length)
      let temp = deck_of_cards[i]
      deck_of_cards[i] = deck_of_cards[j]
      deck_of_cards[j] = temp
    }
  }
  this.debug = () => deck_of_cards
}
console.log("Game of War");
let my_deck = new Deck()
my_deck.shuffle()
var player1Deck = my_deck.deal1()
var player2Deck = my_deck.deal2()
var player1pile = []
var player2pile = []
var winner = ""
var loops = 0
while(true){
    var player1hand = player1Deck.pop()
    var player2hand = player2Deck.pop()
    if(player2hand.rank > player1hand.rank){
        // console.log("player 2 wins " + player2hand.rank);
        player2pile.push(player1hand)
        player2pile.push(player2hand)
        player1hand = ""
        player2hand = ""
    } else if(player1hand.rank > player2hand.rank){
        // console.log("player 1 wins " + player1hand.rank);
        player1pile.push(player2hand)
        player1pile.push(player1hand)
        player2hand = ""
        player1hand = ""
    }
    loops++
    if(player1Deck.length < 1){
        player1Deck = player1pile
        player1pile = []
        if(player1Deck.length == 0){
          winner = "Player 1"
          break;
        }
    }
    if(player2Deck.length < 1){
        player2Deck = player2pile
        player2pile = []
        if(player2Deck.length == 0){
          winner = "Player 2"
          break;
        }
    }
}
console.log(winner + " won in " + loops + " turns");
