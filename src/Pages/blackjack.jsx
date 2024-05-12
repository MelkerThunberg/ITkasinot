import React, { useState, useEffect } from "react";

import card2Clubs from "../../resources/English_pattern_2_of_clubs.svg.png";
import card2Diamonds from "../../resources/English_pattern_2_of_diamonds.svg.png";
import card2Hearts from "../../resources/English_pattern_2_of_hearts.svg.png";
import card2Spades from "../../resources/English_pattern_2_of_spades.svg.png";
import card3Clubs from "../../resources/English_pattern_3_of_clubs.svg.png";
import card3Diamonds from "../../resources/English_pattern_3_of_diamonds.svg.png";
import card3Hearts from "../../resources/English_pattern_3_of_hearts.svg.png";
import card3Spades from "../../resources/English_pattern_3_of_spades.svg.png";
import card4Clubs from "../../resources/English_pattern_4_of_clubs.svg.png";
import card4Diamonds from "../../resources/English_pattern_4_of_diamonds.svg.png";
import card4Hearts from "../../resources/English_pattern_4_of_hearts.svg.png";
import card4Spades from "../../resources/English_pattern_4_of_spades.svg.png";
import card5Clubs from "../../resources/English_pattern_5_of_clubs.svg.png";
import card5Diamonds from "../../resources/English_pattern_5_of_diamonds.svg.png";
import card5Hearts from "../../resources/English_pattern_5_of_hearts.svg.png";
import card5Spades from "../../resources/English_pattern_5_of_spades.svg.png";
import card6Clubs from "../../resources/English_pattern_6_of_clubs.svg.png";
import card6Diamonds from "../../resources/English_pattern_6_of_diamonds.svg.png";
import card6Hearts from "../../resources/English_pattern_6_of_hearts.svg.png";
import card6Spades from "../../resources/English_pattern_6_of_spades.svg.png";
import card7Clubs from "../../resources/English_pattern_7_of_clubs.svg.png";
import card7Diamonds from "../../resources/English_pattern_7_of_diamonds.svg.png";
import card7Hearts from "../../resources/English_pattern_7_of_hearts.svg.png";
import card7Spades from "../../resources/English_pattern_7_of_spades.svg.png";
import card8Clubs from "../../resources/English_pattern_8_of_clubs.svg.png";
import card8Diamonds from "../../resources/English_pattern_8_of_diamonds.svg.png";
import card8Hearts from "../../resources/English_pattern_8_of_hearts.svg.png";
import card8Spades from "../../resources/English_pattern_8_of_spades.svg.png";
import card9Clubs from "../../resources/English_pattern_9_of_clubs.svg.png";
import card9Diamonds from "../../resources/English_pattern_9_of_diamonds.svg.png";
import card9Hearts from "../../resources/English_pattern_9_of_hearts.svg.png";
import card9Spades from "../../resources/English_pattern_9_of_spades.svg.png";
import card10Clubs from "../../resources/English_pattern_10_of_clubs.svg.png";
import card10Diamonds from "../../resources/English_pattern_10_of_diamonds.svg.png";
import card10Hearts from "../../resources/English_pattern_10_of_hearts.svg.png";
import card10Spades from "../../resources/English_pattern_10_of_spades.svg.png";
import cardJackClubs from "../../resources/English_pattern_jack_of_clubs.svg.png";
import cardJackDiamonds from "../../resources/English_pattern_jack_of_diamonds.svg.png";
import cardJackHearts from "../../resources/English_pattern_jack_of_hearts.svg.png";
import cardJackSpades from "../../resources/English_pattern_jack_of_spades.svg.png";
import cardQueenClubs from "../../resources/English_pattern_queen_of_clubs.svg.png";
import cardQueenDiamonds from "../../resources/English_pattern_queen_of_diamonds.svg.png";
import cardQueenHearts from "../../resources/English_pattern_queen_of_hearts.svg.png";
import cardQueenSpades from "../../resources/English_pattern_queen_of_spades.svg.png";
import cardKingClubs from "../../resources/English_pattern_king_of_clubs.svg.png";
import cardKingDiamonds from "../../resources/English_pattern_king_of_diamonds.svg.png";
import cardKingHearts from "../../resources/English_pattern_king_of_hearts.svg.png";
import cardKingSpades from "../../resources/English_pattern_king_of_spades.svg.png";
import cardAceClubs from "../../resources/English_pattern_ace_of_clubs.svg.png";
import cardAceDiamonds from "../../resources/English_pattern_ace_of_diamonds.svg.png";
import cardAceHearts from "../../resources/English_pattern_ace_of_hearts.svg.png";
import cardAceSpades from "../../resources/English_pattern_ace_of_spades.svg.png";

export default function Blackjack() {
  const [playerHand, setPlayerHand] = useState([]);
  const [dealerHand, setDealerHand] = useState([]);
  const [hiddenDealerCard, setHiddenDealerCard] = useState([]);
  const [playerScore, setPlayerScore] = useState(0);
  const [dealerScore, setDealerScore] = useState(0);
  const [hiddenDealerCardValue, setHiddenDealerCardValue] = useState(0);
  const [message, setMessage] = useState("");
  const [deck, setDeck] = useState([
    { value: "2♥︎", image: card2Hearts },
    { value: "3♥︎", image: card3Hearts },
    { value: "4♥︎", image: card4Hearts },
    { value: "5♥︎", image: card5Hearts },
    { value: "6♥︎", image: card6Hearts },
    { value: "7♥︎", image: card7Hearts },
    { value: "8♥︎", image: card8Hearts },
    { value: "9♥︎", image: card9Hearts },
    { value: "10♥︎", image: card10Hearts },
    { value: "J♥︎", image: cardJackHearts },
    { value: "Q♥︎", image: cardQueenHearts },
    { value: "K♥︎", image: cardKingHearts },
    { value: "A♥︎", image: cardAceHearts },
    { value: "2♠︎", image: card2Spades },
    { value: "3♠︎", image: card3Spades },
    { value: "4♠︎", image: card4Spades },
    { value: "5♠︎", image: card5Spades },
    { value: "6♠︎", image: card6Spades },
    { value: "7♠︎", image: card7Spades },
    { value: "8♠︎", image: card8Spades },
    { value: "9♠︎", image: card9Spades },
    { value: "10♠︎", image: card10Spades },
    { value: "J♠︎", image: cardJackSpades },
    { value: "Q♠︎", image: cardQueenSpades },
    { value: "K♠︎", image: cardKingSpades },
    { value: "A♠︎", image: cardAceSpades },
    { value: "2♣︎", image: card2Clubs },
    { value: "3♣︎", image: card3Clubs },
    { value: "4♣︎", image: card4Clubs },
    { value: "5♣︎", image: card5Clubs },
    { value: "6♣︎", image: card6Clubs },
    { value: "7♣︎", image: card7Clubs },
    { value: "8♣︎", image: card8Clubs },
    { value: "9♣︎", image: card9Clubs },
    { value: "10♣︎", image: card10Clubs },
    { value: "J♣︎", image: cardJackClubs },
    { value: "Q♣︎", image: cardQueenClubs },
    { value: "K♣︎", image: cardKingClubs },
    { value: "A♣︎", image: cardAceClubs },
    { value: "2♦︎", image: card2Diamonds },
    { value: "3♦︎", image: card3Diamonds },
    { value: "4♦︎", image: card4Diamonds },
    { value: "5♦︎", image: card5Diamonds },
    { value: "6♦︎", image: card6Diamonds },
    { value: "7♦︎", image: card7Diamonds },
    { value: "8♦︎", image: card8Diamonds },
    { value: "9♦︎", image: card9Diamonds },
    { value: "10♦︎", image: card10Diamonds },
    { value: "J♦︎", image: cardJackDiamonds },
    { value: "Q♦︎", image: cardQueenDiamonds },
    { value: "K♦︎", image: cardKingDiamonds },
    { value: "A♦︎", image: cardAceDiamonds },
  ]);
  /*
    "2♥︎", "3♥︎", "4♥︎", "5♥︎", "6♥︎", "7♥︎", "8♥︎", "9♥︎", "10♥︎", "J♥︎", "Q♥︎", "K♥︎", "A♥︎",
    "2♠︎", "3♠︎", "4♠︎", "5♠︎", "6♠︎", "7♠︎", "8♠︎", "9♠︎", "10♠︎", "J♠︎", "Q♠︎", "K♠︎", "A♠︎",
    "2♣︎", "3♣︎", "4♣︎", "5♣︎", "6♣︎", "7♣︎", "8♣︎", "9♣︎", "10♣︎", "J♣︎", "Q♣︎", "K♣︎", "A♣︎",
    "2♦︎", "3♦︎", "4♦︎", "5♦︎", "6♦︎", "7♦︎", "8♦︎", "9♦︎", "10♦︎", "J♦︎", "Q♦︎", "K♦︎", "A♦︎"
  ]);
  */
  /*
  useEffect(() => {
    // This effect will run whenever dealerHand or dealerScore changes
    console.log("Dealer Hand:", dealerHand);
    console.log("Dealer Score:", dealerScore);
  }, [dealerHand, dealerScore]);
*/
  const countCardValue = (card /*, currentScore*/) => {
    const value = card.value;

    /*
    if ((value === "A♥︎" || value === "A♠︎" || value === "A♣︎" || value === "A♦︎") && currentScore + 11 <= 21) {
      return 11;
    }
    if ((value === "A♥︎" || value === "A♠︎" || value === "A♣︎" || value === "A♦︎") && currentScore + 11 > 21) {
      return 1;
    }
    */
    if (
      value === "J♥︎" ||
      value === "J♠︎" ||
      value === "J♣︎" ||
      value === "J♦︎"
    ) {
      return 10;
    }
    if (
      value === "Q♥︎" ||
      value === "Q♠︎" ||
      value === "Q♣︎" ||
      value === "Q♦︎"
    ) {
      return 10;
    }
    if (
      value === "K♥︎" ||
      value === "K♠︎" ||
      value === "K♣︎" ||
      value === "K♦︎"
    ) {
      return 10;
    }
    if (
      value === "10♥︎" ||
      value === "10♠︎" ||
      value === "10♣︎" ||
      value === "10♦︎"
    ) {
      return 10;
    }
    if (
      value === "9♥︎" ||
      value === "9♠︎" ||
      value === "9♣︎" ||
      value === "9♦︎"
    ) {
      return 9;
    }
    if (
      value === "8♥︎" ||
      value === "8♠︎" ||
      value === "8♣︎" ||
      value === "8♦︎"
    ) {
      return 8;
    }
    if (
      value === "7♥︎" ||
      value === "7♠︎" ||
      value === "7♣︎" ||
      value === "7♦︎"
    ) {
      return 7;
    }
    if (
      value === "6♥︎" ||
      value === "6♠︎" ||
      value === "6♣︎" ||
      value === "6♦︎"
    ) {
      return 6;
    }
    if (
      value === "5♥︎" ||
      value === "5♠︎" ||
      value === "5♣︎" ||
      value === "5♦︎"
    ) {
      return 5;
    }
    if (
      value === "4♥︎" ||
      value === "4♠︎" ||
      value === "4♣︎" ||
      value === "4♦︎"
    ) {
      return 4;
    }
    if (
      value === "3♥︎" ||
      value === "3♠︎" ||
      value === "3♣︎" ||
      value === "3♦︎"
    ) {
      return 3;
    }
    if (
      value === "2♥︎" ||
      value === "2♠︎" ||
      value === "2♣︎" ||
      value === "2♦︎"
    ) {
      return 2;
    }
  };

  const dealDeck = (array) => {
    let random = Math.floor(Math.random() * array.length);
    let card = array[random];
    array.splice(random, 1);
    console.log(card);
    let cardValue = countCardValue(card);
    console.log(cardValue);
    return { card: card.value, cardValue: cardValue, image: card.image };
  };

  const showhiddenDealerCard = () => {
    setDealerHand([...dealerHand, hiddenDealerCard]);
    setDealerScore(dealerScore + hiddenDealerCardValue);
  };

  const dealCards = () => {
    const playerCard1 = dealDeck([...deck]);
    const dealerCard1 = dealDeck([...deck]);
    const playerCard2 = dealDeck([...deck]);
    const dealerCard2 = dealDeck([...deck]);

    const playerScore = playerCard1.cardValue + playerCard2.cardValue;
    const dealerScore = dealerCard1.cardValue + dealerCard2.cardValue;

    setPlayerHand([playerCard1.card, playerCard2.card]);
    setPlayerScore(playerScore);

    setDealerHand([dealerCard1.card]);
    setDealerScore(dealerCard1.cardValue);

    setHiddenDealerCard(dealerCard2.card);
    setHiddenDealerCardValue(dealerCard2.cardValue);
    setMessage("");

    if (playerScore === 21) {
      showhiddenDealerCard();

      if (dealerScore === 21) {
        setMessage("Push!");
      } else {
        setMessage("Blackjack! Player wins!");
      }
    }
  };

  const hit = () => {
    const newCard = dealDeck(deck);
    setPlayerHand([...playerHand, newCard.card]);
    const newScore = playerScore + newCard.cardValue;
    setPlayerScore(newScore);
    console.log(newScore);

    if (newScore > 21) {
      setMessage("Player busts! Dealer wins!");
      // Ta bort insatsen
    }
    if (newScore === 21) {
      stand();
    }
  };

  const stand = () => {
    showhiddenDealerCard();

    let newScore = dealerScore;

    const updatedDealerHand = [...dealerHand];

    while (newScore < 17 || (newScore < playerScore && newScore <= 21)) {
      const newCard = dealDeck(deck);
      updatedDealerHand.push(newCard.card); // Update the copy of dealerHand
      setDealerHand(updatedDealerHand); // Uppdatera dealerns hand

      newScore += newCard.cardValue; // Update newScore correctly
    }
    setDealerHand(updatedDealerHand); // Update dealerHand with the new cards
    setDealerScore(newScore); // Update dealerScore

    if (newScore > 21) {
      setMessage("Dealer busts! Player wins!");
    } else if (newScore > playerScore && newScore <= 21) {
      setMessage("Dealer wins!");
    } else if (newScore < playerScore && newScore <= 21) {
      setMessage("Player wins!");
    } else if (newScore === playerScore) {
      setMessage("Push!");
    }
  };

  return (
    <div>
      <button onClick={dealCards}>Deal Cards</button>
      <button onClick={hit}>Hit</button>
      <button onClick={stand}>Stand</button>

      <div>
        <h2>Player Hand: {playerScore}</h2>
        {playerHand.map((card, index) => (
          <div key={index}>
            <span style={{ marginRight: "10px" }}>{card}</span>
            <img src={card} alt={card} style={{ marginRight: "10px" }} />
          </div>
        ))}
      </div>
      <div>
        <h2>Dealer Hand: {dealerScore}</h2>
        {dealerHand.map((card, index) => (
          <div key={index}>
            <span style={{ marginRight: "10px" }}>{card}</span>
            <img
              src={card.image}
              alt={card.value}
              style={{ marginRight: "10px" }}
            />
          </div>
        ))}
      </div>
      <div>
        <p>{message}</p>
        {message && <button onClick={dealCards}>Deal Again</button>}
      </div>
      <img src={cardAceDiamonds} alt="A♦︎" style={{ width: "100px" }} />
    </div>
  );
}
