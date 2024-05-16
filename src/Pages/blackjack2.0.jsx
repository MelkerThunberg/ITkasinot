import React, { useState, useEffect } from "react";
import "../Styles/blackjack.css";
import Navbar from "../components/navbar.jsx";

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
export default function Blackjack2() {
  const [fullDeck, setFullDeck] = useState([
    { card: "2♥︎", value: 2, image: card2Hearts },
    { card: "3♥︎", value: 3, image: card3Hearts },
    { card: "4♥︎", value: 4, image: card4Hearts },
    { card: "5♥︎", value: 5, image: card5Hearts },
    { card: "6♥︎", value: 6, image: card6Hearts },
    { card: "7♥︎", value: 7, image: card7Hearts },
    { card: "8♥︎", value: 8, image: card8Hearts },
    { card: "9♥︎", value: 9, image: card9Hearts },
    { card: "10♥︎", value: 10, image: card10Hearts },
    { card: "J♥︎", value: 10, image: cardJackHearts },
    { card: "Q♥︎", value: 10, image: cardQueenHearts },
    { card: "K♥︎", value: 10, image: cardKingHearts },
    { card: "A♥︎", value: 11, image: cardAceHearts },
    { card: "2♠︎", value: 2, image: card2Spades },
    { card: "3♠︎", value: 3, image: card3Spades },
    { card: "4♠︎", value: 4, image: card4Spades },
    { card: "5♠︎", value: 5, image: card5Spades },
    { card: "6♠︎", value: 6, image: card6Spades },
    { card: "7♠︎", value: 7, image: card7Spades },
    { card: "8♠︎", value: 8, image: card8Spades },
    { card: "9♠︎", value: 9, image: card9Spades },
    { card: "10♠︎", value: 10, image: card10Spades },
    { card: "J♠︎", value: 10, image: cardJackSpades },
    { card: "Q♠︎", value: 10, image: cardQueenSpades },
    { card: "K♠︎", value: 10, image: cardKingSpades },
    { card: "A♠︎", value: 11, image: cardAceSpades },
    { card: "2♣︎", value: 2, image: card2Clubs },
    { card: "3♣︎", value: 3, image: card3Clubs },
    { card: "4♣︎", value: 4, image: card4Clubs },
    { card: "5♣︎", value: 5, image: card5Clubs },
    { card: "6♣︎", value: 6, image: card6Clubs },
    { card: "7♣︎", value: 7, image: card7Clubs },
    { card: "8♣︎", value: 8, image: card8Clubs },
    { card: "9♣︎", value: 9, image: card9Clubs },
    { card: "10♣︎", value: 10, image: card10Clubs },
    { card: "J♣︎", value: 10, image: cardJackClubs },
    { card: "Q♣︎", value: 10, image: cardQueenClubs },
    { card: "K♣︎", value: 10, image: cardKingClubs },
    { card: "A♣︎", value: 11, image: cardAceClubs },
    { card: "2♦︎", value: 2, image: card2Diamonds },
    { card: "3♦︎", value: 3, image: card3Diamonds },
    { card: "4♦︎", value: 4, image: card4Diamonds },
    { card: "5♦︎", value: 5, image: card5Diamonds },
    { card: "6♦︎", value: 6, image: card6Diamonds },
    { card: "7♦︎", value: 7, image: card7Diamonds },
    { card: "8♦︎", value: 8, image: card8Diamonds },
    { card: "9♦︎", value: 9, image: card9Diamonds },
    { card: "10♦︎", value: 10, image: card10Diamonds },
    { card: "J♦︎", value: 10, image: cardJackDiamonds },
    { card: "Q♦︎", value: 10, image: cardQueenDiamonds },
    { card: "K♦︎", value: 10, image: cardKingDiamonds },
    { card: "A♦︎", value: 11, image: cardAceDiamonds },
  ]);
  
  const [deck, setDeck] = useState([]);
  const [playerHand, setPlayerHand] = useState([]);
  const [dealerHand, setDealerHand] = useState([]);

  const [playerScore, setPlayerScore] = useState(0);
  const [dealerScore, setDealerScore] = useState(0);

  const [playerAceCount, setPlayerAceCount] = useState(0);
  const [dealerAceCount, setDealerAceCount] = useState(0);

  const [hiddenCard, setHiddenCard] = useState();

  const [gameState, setGameState] = useState("initial");
  const [message, setMessage] = useState("");

  
  // Använd useEffect-hooken för att övervaka förändringar i spelarens och dealerns händer och automatiskt uppdatera ässräkningen
  useEffect(() => {
    reducePlayerAce();
  }, [playerHand]); // Kör funktionen reducePlayerAce varje gång playerHand uppdateras

  useEffect(() => {
    reduceDealerAce();
  }, [dealerHand]); // Kör funktionen reduceDealerAce varje gång dealerHand uppdateras



  const dealCardInitial = (array) => {
    let random = Math.floor(Math.random() * array.length);
    let pickedCard = array[random];
    array.splice(random, 1);
    console.log(pickedCard.card + "   Card left:   " + array.length); // Prints card value and card
    return {card: pickedCard, value: pickedCard.value, array: array};
  };

  const dealCard = () => {
    let array = [...deck];
    let random = Math.floor(Math.random() * deck.length);
    let card = deck[random];
    array.splice(random, 1);
    setDeck(array);
    console.log(card.card + "   Card left:   " + deck.length); // Prints card value and card
    return card;
  };
  

  const initialDeal = () => {
    setGameState("playing-initialDeal");

    let tempDeck = [...fullDeck];

    setPlayerAceCount(0);
    setDealerAceCount(0);

    const playerCard1 = dealCardInitial(tempDeck);
    tempDeck = playerCard1.array
    checkPlayerAce(playerCard1);

    const playerCard2 = dealCardInitial(tempDeck);
    tempDeck = playerCard2.array

    checkPlayerAce(playerCard2);

    setPlayerHand([playerCard1.card, playerCard2.card]);
    setPlayerScore(playerCard1.value + playerCard2.value);

    const dealerCard1 = dealCardInitial(tempDeck);
    tempDeck = dealerCard1.array

    checkDealerAce(dealerCard1);

    const dealerCard2 = dealCardInitial(tempDeck);
    tempDeck = dealerCard2.array


    setDeck(tempDeck);
    setHiddenCard(dealerCard2.card);
    setDealerHand([dealerCard1.card]);
    setDealerScore(dealerCard1.value);

    if (playerScore === 21) {
      setGameState("gameOver");
    }
  };

  const hit = () => {
    const newCard = dealCard();
    checkPlayerAce(newCard);
    setPlayerHand([...playerHand, newCard]);
    setPlayerScore(playerScore + newCard.value);
  };

  const stand = () => {
    const updatedDealerHand = [...dealerHand];

    let dealerHitScore = dealerScore;

    let dealerHitsAceCount = dealerAceCount;

// Går nog att göra enklare genom sätta där uppe
    if (hiddenCard.value === 11) {
      dealerHitsAceCount++;
    }
    updatedDealerHand.push(hiddenCard);
    dealerHitScore += hiddenCard.value;

    dealerHitScore = reduceDealerAce(dealerHitScore, dealerHitsAceCount).reducedScore;
    dealerHitsAceCount = reduceDealerAce(dealerHitScore, dealerHitsAceCount).reducedAceCount;
// -----------------

    
    while (dealerHitScore < 17) {
      const newCard = dealCard();

      if (newCard.value === 11) {
        dealerHitsAceCount++;
      }
      updatedDealerHand.push(newCard);
      dealerHitScore += newCard.value;

      dealerHitScore = reduceDealerAce(dealerHitScore, dealerHitsAceCount).reducedScore;
      dealerHitsAceCount = reduceDealerAce(dealerHitScore, dealerHitsAceCount).reducedAceCount;
      console.log("Dealer score: " + dealerHitScore);
    }
    setDealerHand(updatedDealerHand);
    setDealerScore(dealerHitScore);
    setDealerAceCount(dealerHitsAceCount);

    setGameState("gameOver");
  }

  const checkPlayerAce = (card) => {
      if (card.value === 11) {
        setPlayerAceCount(playerAceCount + 1);
      }
  }
  const reducePlayerAce = () => {
    let tempScore = playerScore;
    let tempAceCount = playerAceCount;

      while (tempScore  > 21 && tempAceCount  > 0) {
        tempScore -= 10; // Reduce the score by 10 for each ace
        tempAceCount--; // Reduce the count of aces
      }
      setPlayerScore(tempScore); // Update the player score
      setPlayerAceCount(tempAceCount); // Update the ace count
  }

  const checkDealerAce = (card) => {
    if (card.value === 11) {
      setDealerAceCount(dealerAceCount + 1);
    }
  }

  const reduceDealerAce = (dealerScore, dealerAceCount) => {

    while (dealerScore > 21 && dealerAceCount > 0) {
        dealerScore -= 10; // Reduce the score by 10 for each ace
        dealerAceCount--; // Reduce the count of aces
    }
    return {reducedScore: dealerScore, reducedAceCount: dealerAceCount};
  }


  return (
    <div>
      <Navbar />
      <h1 id ="unusedh1">BlackJack2.0</h1>
      <h2 id="soft17">Soft 17</h2>
      <div className="content-container-blackjack">
        <div>
          <h2 id="dealer-hand">Dealer Hand: {dealerScore} :: {dealerAceCount}</h2>
          <div className="card-container">
            {dealerHand.map((card, index) => (
              <div key={index} className="card">
                <img src={card.image} alt={`Dealer Card ${index}`} />
              </div>
            ))}
          </div>
        </div>
        <div>
          <h2 id="player-hand">Player Hand: {playerScore} :: {playerAceCount}</h2>
          <div className="card-container">
            {playerHand.map((card, index) => (
              <div key={index} className="card">
                <img src={card.image} alt={`Player Card ${index}`} />
              </div>
            ))}
          </div>
        </div>
        <div className="button-container">
          {gameState === "initial" && (
            <button onClick={initialDeal}>Deal Cards</button>
          )}
        {gameState === "playing-initialDeal" && (
          <>
            <button onClick={hit}>Hit</button>
            <button onClick={stand}>Stand</button>
          </>
        )}
        {gameState === "gameOver" && (
          <button onClick={initialDeal}>Play Again</button>
        )}
        </div>
        <div className="message-container">
          <p>{gameState}</p>
          <p>{message}</p>
        </div>
      </div>
    </div>
  );
}
// Fixa gamestate, message och vinnarvilkor!