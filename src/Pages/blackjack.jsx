import React, { useState } from "react";

export default function Blackjack() {


  const suits = ["♠", "♣", "♥", "♦"];
  const values = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];

  let deck = [];

  for (let suit of suits) {
    for (let value of values) {
        deck.push({ value, suit });
    }
  }


  function dealDeck(deck,) {
    let randomIndex = Math.floor(Math.random() * deck.length);
    let card = deck[randomIndex];
    deck.splice(randomIndex, 1); // Ta bort det genererade kortet från arrayen

    return deck, card;
  }

  const playerCard1 =  dealDeck(deck)
  const dealerCard1 =  dealDeck(deck)
  const playerCard2 =  dealDeck(deck)
  const dealerCard2 =  dealDeck(deck)

  console.log(playerCard1, playerCard2, dealerCard1, dealerCard2)
  console.log(deck)

  function cardValue(card) {
    if (card.value === "A" && playerScore < 11) {
      return 11;
    } else if (card.value === "A" && playerScore >= 11) {
      return 1;
    } else if (card.value === "K" || card.value === "Q" || card.value === "J") {
      return 10;
    } else {
      return parseInt(card.value);
    }
  }


  return (
    <div>
      <h1>Blackjack</h1>
    </div>
  );
}
